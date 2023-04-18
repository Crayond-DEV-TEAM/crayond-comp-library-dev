export interface ImageProps {
  imageWidth: 'string' | number | undefined;
  imageHeight: 'string' | number | undefined;
  inLineStyles?: object;
  className?: string;
  altText?: string;
  imageSrc: string;
  imageStyle: object;
}
