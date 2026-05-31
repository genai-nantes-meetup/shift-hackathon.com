import type { FC } from 'react';
import Layout from '../layouts/Layout';
import {
  extractCanonical,
  extractBreakpointCss,
  extractSsrCss,
} from '../lib/framer';

interface Props {
  mainHtml: string;
  headStylesHtml: string;
}

const FramerPage: FC<Props> = ({ mainHtml, headStylesHtml }) => {
  const canonical = extractCanonical(headStylesHtml);
  const breakpointCss = extractBreakpointCss(headStylesHtml);
  const { css: ssrCss, components: ssrCssComponents } =
    extractSsrCss(headStylesHtml);

  return (
    <Layout
      canonical={canonical}
      breakpointCss={breakpointCss}
      ssrCss={ssrCss}
      ssrCssComponents={ssrCssComponents}
      rawBody={mainHtml}
    />
  );
};

export default FramerPage;
