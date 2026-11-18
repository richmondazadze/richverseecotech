import { useEffect, useRef, useState } from 'react';

export default function BlogImage({ src, alt, loading = 'lazy' }: {
  src: string; alt: string; loading?: 'eager' | 'lazy';
}) {
  const [failed, setFailed] = useState<{src:string;step:number}>();
  const step = failed?.src === src ? failed.step : 0;
  const image = useRef<HTMLImageElement>(null);
  // A prerendered image can fail before React has attached its error listener.
  useEffect(() => {
    if (image.current?.complete && !image.current.naturalWidth && step < 2) setFailed({src,step:step+1});
  }, [src,step]);
  if(step >= 2) return <span className="image-placeholder" role="img" aria-label={alt ? alt+' — image unavailable' : 'Editorial image unavailable'}>Richverse / Insights</span>;
  return <picture key={step}>
    {step === 0 && <source srcSet={src.replace(/\.jpe?g$/i,'.webp')} type="image/webp"/>}
    <img data-depth={src === '/blog/exploring-ocean-energy.jpg' || src === '/blog/digital-marketing-power.jpg' ? 'photo' : undefined} ref={image} src={src} alt={alt} loading={loading} decoding="async" width="1200" height="750" onError={()=>setFailed({src,step:step+1})}/>
  </picture>;
}
