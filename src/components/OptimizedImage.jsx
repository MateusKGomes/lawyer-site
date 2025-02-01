// Image component otimizado
import Image from 'next/image';

const OptimizedImage = ({ src, alt, ...props }) => (
  <Image
    src={src}
    alt={alt}
    {...props}
    placeholder="blur"
    blurDataURL="data:image/png;base64,..."
    className="transition-opacity opacity-0 duration-300"
    onLoadingComplete={(img) => img.classList.remove('opacity-0')}
  />
);

export default OptimizedImage;