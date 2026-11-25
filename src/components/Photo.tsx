type Props = { name: string; widths: number[]; alt: string; className?: string; width: number; height: number; priority?: boolean; sizes?: string }

/** Licensed stock photo (Pexels). Not the clinic's own photography. */
export function Photo({ name, widths, alt, className = '', width, height, priority = false, sizes = '(min-width: 768px) 480px, 100vw' }: Props) {
  const srcSet = widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ')
  return (
    <img src={`/images/${name}-${widths[widths.length - 1]}.webp`} srcSet={srcSet} sizes={sizes} alt={alt} width={width} height={height}
      loading={priority ? 'eager' : 'lazy'} decoding="async" {...(priority ? { fetchPriority: 'high' as const } : {})} className={`object-cover ${className}`} />
  )
}
