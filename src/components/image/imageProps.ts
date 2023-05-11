export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  aspectRatio?: string;
  color?: 'inherit' | 'primary' | 'secondary';
  component?: React.ElementType;
  crossOrigin?: 'anonymous' | 'use-credentials' | '';
  decoding?: 'async' | 'auto' | 'sync';
  height?: number | string;
  sizes?: string;
  src?: string;
  srcSet?: string;
  width?: number | string;
  inLineStyles?: object;
  className?: string;
  imageStyle?:object;
}
