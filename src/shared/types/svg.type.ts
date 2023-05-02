import { FunctionComponent, SVGProps } from 'react';

export type SvgType = FunctionComponent<
  SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;
