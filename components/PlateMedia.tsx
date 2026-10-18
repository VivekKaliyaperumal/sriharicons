import Image from 'next/image';

export type Tone = 'earth' | 'clay' | 'timber' | 'navy' | 'stone' | 'green' | 'ivory';

/** One photograph as the original "plate": tone background, cover-cropped image, label tag. */
export interface PlatePhoto {
  /** Pexels photo id; the image URL is built from it. */
  photo: string;
  alt: string;
  tone: Tone;
  tag?: string;
}

export const pexelsUrl = (id: string): string =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`;

export default function PlateMedia({
  photo,
  alt,
  tag,
  sizes = '(max-width: 900px) 100vw, 50vw',
  priority,
}: PlatePhoto & { sizes?: string; priority?: boolean }) {
  return (
    <>
      <div className="plate-media">
        <Image src={pexelsUrl(photo)} alt={alt} fill sizes={sizes} priority={priority} />
      </div>
      {tag ? <span className="tag">{tag}</span> : null}
    </>
  );
}
