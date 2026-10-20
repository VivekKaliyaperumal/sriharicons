import Image from 'next/image';

export type Tone = 'earth' | 'clay' | 'timber' | 'navy' | 'stone' | 'green' | 'ivory';

/** One photograph as the original "plate": tone background, cover-cropped image, label tag.
 *  Give either a Pexels `photo` id or a `src` path for an image served from /public. */
export interface PlatePhoto {
  /** Pexels photo id; the image URL is built from it. */
  photo?: string;
  /** Local image path (e.g. "/images/hero-earth-home.webp") for the site's own photos. */
  src?: string;
  alt: string;
  tone: Tone;
  tag?: string;
}

export const pexelsUrl = (id: string): string =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`;

export function plateSrc({ photo, src }: Pick<PlatePhoto, 'photo' | 'src'>): string {
  if (photo) return pexelsUrl(photo);
  if (src) return src;
  throw new Error('PlateMedia needs a Pexels photo id or a src path');
}

export default function PlateMedia({
  photo,
  src,
  alt,
  tag,
  sizes = '(max-width: 900px) 100vw, 50vw',
  priority,
}: PlatePhoto & { sizes?: string; priority?: boolean }) {
  return (
    <>
      <div className="plate-media">
        <Image src={plateSrc({ photo, src })} alt={alt} fill sizes={sizes} priority={priority} />
      </div>
      {tag ? <span className="tag">{tag}</span> : null}
    </>
  );
}
