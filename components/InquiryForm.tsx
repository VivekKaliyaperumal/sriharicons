'use client';

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { EMAIL, FORM_ENDPOINT, PHONE_1 } from '@/lib/site';

interface FieldBase {
  name: string;
  label: string;
  /** "(optional)" style note shown after the label. */
  opt?: string;
  required: boolean;
  hint?: string;
  full?: boolean;
}
export type FormField =
  | (FieldBase & { kind: 'input'; type: 'text' | 'tel' | 'email'; autoComplete?: string; inputMode?: 'tel'; placeholder?: string })
  | (FieldBase & { kind: 'select'; options: { value: string; label: string }[] })
  | (FieldBase & { kind: 'textarea'; rows: number; placeholder?: string })
  | (FieldBase & { kind: 'radios'; options: string[] });

interface InquiryFormProps {
  kind: 'general' | 'mud';
  ariaLabel: string;
  fields: FormField[];
  consent: ReactNode;
  submitLabel: string;
  alt: ReactNode;
}

type Status = { cls: '' | 'is-error' | 'is-success'; title: string; body: ReactNode; focus: boolean } | null;

const MSG: Record<string, string> = {
  name: 'Enter your name.',
  phone: 'Enter a 10-digit Indian mobile number, for example 96777 03977.',
  email: 'Enter an email address like name@example.com.',
  location: 'Enter the town, village or district of your project.',
  plot: 'Choose your plot status.',
  area: 'Choose an approximate area, or “Not sure yet”.',
  houseType: 'Choose a type, or “Not sure yet”.',
  service: 'Choose the service you need.',
  message: 'Tell us a little about your project.',
  method: 'Choose how you would like us to contact you.',
  consent: 'Tick the box so we can contact you about this inquiry.',
};
const phoneOk = (v: string) => /^(?:\+?91[\s-]?|0)?[6-9]\d{4}[\s-]?\d{5}$/.test(v.trim());
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

function fieldValid(f: FormField, value: string): boolean {
  const v = value.trim();
  if (f.required && !v) return false;
  if (v && f.name === 'phone') return phoneOk(v);
  if (v && f.name === 'email') return emailOk(v);
  if (v && f.name === 'message' && f.required) return v.length >= 10;
  return true;
}

export default function InquiryForm({ kind, ariaLabel, fields, consent, submitLabel, alt }: InquiryFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<Record<string, string>>(() => Object.fromEntries(fields.map((f) => [f.name, ''])));
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>(null);
  const [busy, setBusy] = useState(false);

  // Contact page: preselect the service from ?service=<slug>.
  useEffect(() => {
    const qs = new URLSearchParams(window.location.search).get('service');
    const sel = fields.find((f) => f.name === 'service');
    if (qs && sel?.kind === 'select' && sel.options.some((o) => o.value === qs)) setValues((v) => ({ ...v, service: qs }));
  }, [fields]);

  useEffect(() => {
    if (status?.focus) statusRef.current?.focus();
  }, [status]);

  const check = (name: string, nextValues = values, nextAgreed = agreed): boolean => {
    const ok = name === 'consent' ? nextAgreed : fieldValid(fields.find((f) => f.name === name)!, nextValues[name] ?? '');
    setErrors((e) => ({ ...e, [name]: !ok }));
    return ok;
  };

  const set = (name: string, value: string, validateNow: boolean) => {
    const next = { ...values, [name]: value };
    setValues(next);
    if (validateNow && (errors[name] || value)) check(name, next);
  };

  const summary = () =>
    fields
      .map((f) => {
        const raw = values[f.name] ?? '';
        const v = f.kind === 'select' ? (raw ? f.options.find((o) => o.value === raw)?.label ?? '' : '') : raw.trim();
        return v ? `${f.label}: ${v}` : '';
      })
      .filter(Boolean)
      .join('\n');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const names = [...fields.map((f) => f.name), 'consent'];
    const bad = names.filter((n) => !check(n));
    if (bad.length) {
      const one = bad.length === 1;
      setStatus({ cls: 'is-error', title: `Check ${one ? 'one field' : `${bad.length} fields`}`, body: <p>Fix the highlighted {one ? 'field' : 'fields'} and submit again.</p>, focus: false });
      formRef.current?.querySelector<HTMLElement>(`[name="${bad[0]}"]`)?.focus();
      return;
    }
    const label = kind === 'mud' ? 'Mud house inquiry' : 'Website inquiry';
    const text = `${label} — Shri Hari Builders website\n\n${summary()}`;

    if (!FORM_ENDPOINT) {
      // Honest hand-off: nothing has been sent yet.
      const wa = `https://wa.me/${PHONE_1.wa}?text=${encodeURIComponent(text)}`;
      const mail = `mailto:${EMAIL}?subject=${encodeURIComponent(label)}&body=${encodeURIComponent(text)}`;
      setStatus({
        cls: '',
        title: 'Your inquiry is ready to send',
        body: (
          <>
            <p>Online submission is not connected yet, so your details have <strong>not</strong> been sent. Send them in one tap with WhatsApp or email — the message is already filled in.</p>
            <div className="actions">
              <a className="btn btn-navy" href={wa} target="_blank" rel="noopener">Send by WhatsApp</a>
              <a className="btn btn-line" href={mail}>Send by email</a>
            </div>
          </>
        ),
        focus: true,
      });
      return;
    }

    setBusy(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, consent: agreed ? 'on' : '', _kind: label }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setValues(Object.fromEntries(fields.map((f) => [f.name, ''])));
      setAgreed(false);
      setStatus({ cls: 'is-success', title: 'Inquiry sent', body: <p>Thank you. Shri Hari Builders has received your details and will contact you by your preferred method.</p>, focus: true });
    } catch {
      setStatus({ cls: 'is-error', title: 'Your inquiry was not sent', body: <p>The connection failed. Try again, or call <a href={`tel:${PHONE_1.tel}`}>{PHONE_1.display}</a>.</p>, focus: true });
    } finally {
      setBusy(false);
    }
  };

  const err = (name: string) => (
    <p className="err" id={`f-${name}-err`} aria-live="polite">{errors[name] ? MSG[name] ?? 'Check this field.' : ''}</p>
  );
  const describedBy = (f: FormField) => [f.hint ? `f-${f.name}-hint` : '', `f-${f.name}-err`].filter(Boolean).join(' ');
  const labelText = (f: FormField) => (
    <>{f.label}{f.opt ? <> <span className="opt">{f.opt}</span></> : null}</>
  );
  const hint = (f: FormField) => (f.hint ? <p className="hint" id={`f-${f.name}-hint`}>{f.hint}</p> : null);

  return (
    <form ref={formRef} className="inquiry" data-form={kind} noValidate aria-label={ariaLabel} onSubmit={onSubmit}>
      <div className="form-grid">
        {fields.map((f) => {
          const cls = `field${f.full ? ' field-full' : ''}`;
          const common = {
            id: `f-${f.name}`,
            name: f.name,
            required: f.required,
            'aria-required': f.required || undefined,
            'aria-describedby': describedBy(f),
            'aria-invalid': f.name in errors ? errors[f.name] : undefined,
            value: values[f.name],
          };
          if (f.kind === 'radios') {
            return (
              <fieldset key={f.name} className={`${cls} radios${errors[f.name] ? ' invalid' : ''}`} data-field={f.name}>
                <legend>{f.label}</legend>
                <div className="radio-row">
                  {f.options.map((o, i) => (
                    <label key={o} className="radio">
                      <input type="radio" name={f.name} value={o} required={i === 0 && f.required} checked={values[f.name] === o} onChange={() => set(f.name, o, true)} />{' '}
                      <span>{o}</span>
                    </label>
                  ))}
                </div>
                {err(f.name)}
              </fieldset>
            );
          }
          return (
            <div key={f.name} className={cls}>
              <label htmlFor={`f-${f.name}`}>{labelText(f)}</label>
              {f.kind === 'input' ? (
                <input {...common} type={f.type} autoComplete={f.autoComplete} inputMode={f.inputMode} placeholder={f.placeholder}
                  onChange={(e) => set(f.name, e.target.value, false)} onBlur={() => { if (errors[f.name] || values[f.name]) check(f.name); }} />
              ) : f.kind === 'select' ? (
                <select {...common} onChange={(e) => set(f.name, e.target.value, true)}>
                  {f.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              ) : (
                <textarea {...common} rows={f.rows} placeholder={f.placeholder}
                  onChange={(e) => set(f.name, e.target.value, false)} onBlur={() => { if (errors[f.name] || values[f.name]) check(f.name); }} />
              )}
              {hint(f)}
              {err(f.name)}
            </div>
          );
        })}
      </div>
      <div className="consent">
        <label className="check">
          <input type="checkbox" name="consent" required checked={agreed} aria-invalid={'consent' in errors ? errors.consent : undefined}
            onChange={(e) => { setAgreed(e.target.checked); check('consent', values, e.target.checked); }} />{' '}
          <span>{consent}</span>
        </label>
        {err('consent')}
      </div>
      <div className="form-foot">
        <button type="submit" className="btn btn-gold" aria-busy={busy || undefined}>{busy ? 'Sending…' : submitLabel}</button>
        <p className="form-alt">{alt}</p>
      </div>
      <div ref={statusRef} className={`form-status ${status?.cls ?? ''}`.trim()} role="status" aria-live="polite" tabIndex={-1} hidden={!status}>
        {status ? (<><h3>{status.title}</h3>{status.body}</>) : null}
      </div>
    </form>
  );
}
