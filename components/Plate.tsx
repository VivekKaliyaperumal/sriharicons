import LightboxTrigger from './LightboxTrigger';
import PlateMedia, { type PlatePhoto } from './PlateMedia';
import RevealFigure from './RevealFigure';

interface PlateProps extends PlatePhoto {
  /** Extra classes from the original markup: cut, tall, reveal, chev-photo, cta-bg. */
  className?: string;
  sizes?: string;
  /** Above-the-fold hero image (was fetchpriority="high"). */
  priority?: boolean;
  caption?: string;
  /** Makes the photo a button that opens the lightbox (index within its LightboxScope). */
  lightboxIndex?: number;
  lightboxCaption?: string;
}

export default function Plate({ className, caption, lightboxIndex, lightboxCaption, ...photo }: PlateProps) {
  const cls = ['plate', `tone-${photo.tone}`, className].filter(Boolean).join(' ');
  const media = <PlateMedia {...photo} />;
  const body = (
    <>
      {lightboxIndex === undefined ? (
        media
      ) : (
        <LightboxTrigger index={lightboxIndex} caption={lightboxCaption ?? photo.alt}>
          {media}
        </LightboxTrigger>
      )}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </>
  );
  if (className?.split(' ').includes('reveal')) return <RevealFigure className={cls}>{body}</RevealFigure>;
  return <figure className={cls}>{body}</figure>;
}
