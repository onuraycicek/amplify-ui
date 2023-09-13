import * as React from 'react';
import classNames from 'classnames';

import { ComponentClassName } from '@aws-amplify/ui';
import {
  BaseImageProps,
  ImageProps,
  ForwardRefPrimitive,
  Primitive,
} from '../types';
import { View } from '../View';

const ImagePrimitive: Primitive<ImageProps, 'img'> = (
  { className, ...rest },
  ref
) => (
  <View
    as="img"
    ref={ref}
    className={classNames(ComponentClassName.Image, className)}
    {...rest}
  />
);

/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/image)
 */
export const Image: ForwardRefPrimitive<BaseImageProps, 'img'> =
  React.forwardRef(ImagePrimitive);

Image.displayName = 'Image';
