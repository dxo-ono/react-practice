declare module '@splidejs/react-splide' {
  import * as React from 'react';
  import { SplideProps } from '@splidejs/splide';

  export const Splide: React.FC<SplideProps & { ref?: React.Ref<any> }>;
  export const SplideSlide: React.FC<{ children?: React.ReactNode }>;
  export type SplideRef = any;
}