import { ImageLoaderProps } from 'next/image'

// const normalizeSrc = (src: string): string => {
//   if (src[0] === '/') return src
//   return src.slice(1)
// }

const imgixLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps): string => {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  if (!process.env.NEXT_PUBLIC_IMGIX_URL) {
    throw new Error('Failed to load the IMGIX source. Please make sure it is defined in your .env.local file')
  }
  const url = new URL(`${process.env.NEXT_PUBLIC_IMGIX_URL}/${src}`)
  const params = url.searchParams

  params.set('auto', params.get('auto') || 'format')
  params.set('fit', params.get('fit') || 'max')
  params.set('w', params.get('w') || width.toString())

  if (quality) {
    params.set('q', quality.toString())
  }

  return url.href
}

export default imgixLoader
