import type { ComponentProps } from 'react';

import type { ButtonVariants } from './Button.variants';

export interface ButtonProps extends ComponentProps<'button'>, ButtonVariants {
  asChild?: boolean;
}
