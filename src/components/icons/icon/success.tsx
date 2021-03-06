import React from 'react';
import { SVGContainer, IconProps } from './../SVGContainer';

export const IconSuccess = ({ color = '#00BC70', ...rest }: IconProps) => (
  <SVGContainer color={color} {...rest}>
    <path d="m512 0c-282.624 0-512 229.376-512 512s229.376 512 512 512 512-229.376 512-512-229.376-512-512-512zm311.296 389.12-327.68 339.968c-12.288 12.288-28.672 20.48-45.056 20.48s-32.768-4.096-45.056-16.384l-200.704-184.32c-24.576-24.576-28.672-65.536-4.096-94.208 24.576-24.576 65.536-28.672 94.208-4.096l151.552 139.264 282.624-290.816c24.576-24.576 65.536-24.576 94.208 0 12.288 12.288 20.48 28.672 20.48 45.056-4.096 16.384-8.192 32.768-20.48 45.056z" />
  </SVGContainer>
);

export default IconSuccess;
