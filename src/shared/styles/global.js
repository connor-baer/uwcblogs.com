const fonts = `
  /* cyrillic-ext */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    src: local('Lora Regular'), local('Lora-Regular'),
      url(https://fonts.gstatic.com/s/lora/v11/bAULWXoql4X5j5Aw1uK9-xTbgVql8nDJpwnrE27mub0.woff2)
        format('woff2');
    unicode-range: U + 0460-052f, U + 20b4, U + 2de0-2dff, U + A640-A69F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    src: local('Lora Regular'), local('Lora-Regular'),
      url(https://fonts.gstatic.com/s/lora/v11/XXbc_aQtUtjJrkp7pYGEKhTbgVql8nDJpwnrE27mub0.woff2)
        format('woff2');
    unicode-range: U + 0400-045f, U + 0490-0491, U + 04b0-04b1, U + 2116;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    src: local('Lora Regular'), local('Lora-Regular'),
      url(https://fonts.gstatic.com/s/lora/v11/K-CiJV7XKFwuib_fzIdFDRTbgVql8nDJpwnrE27mub0.woff2)
        format('woff2');
    unicode-range: U + 0102-0103, U + 1ea0-1ef9, U + 20ab;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    src: local('Lora Regular'), local('Lora-Regular'),
      url(https://fonts.gstatic.com/s/lora/v11/tHQOv8O1rd82EIrTHlzvmhTbgVql8nDJpwnrE27mub0.woff2)
        format('woff2');
    unicode-range: U + 0100-024f, U + 1-1eff, U + 20a0-20ab, U + 20ad-20cf,
      U + 2c60-2c7f, U + A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    src: local('Lora Regular'), local('Lora-Regular'),
      url(https://fonts.gstatic.com/s/lora/v11/rAXKWvABQNHjPUk26ixVvvesZW2xOQ-xsNqO47m55DA.woff2)
        format('woff2');
    unicode-range: U + 0000-00ff, U + 0131, U + 0152-0153, U + 02c6,
      U + 02da, U + 02dc, U + 2000-206f, U + 2074, U + 20ac, U + 2212,
      U + 2215;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    src: local('Lora Bold'), local('Lora-Bold'),
      url(https://fonts.gstatic.com/s/lora/v11/nQ2TIY3t592bpMtzJHE8_lKPGs1ZzpMvnHX-7fPOuAc.woff2)
        format('woff2');
    unicode-range: U + 0460-052f, U + 20b4, U + 2de0-2dff, U + A640-A69F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    src: local('Lora Bold'), local('Lora-Bold'),
      url(https://fonts.gstatic.com/s/lora/v11/yNp9UcngimMxgyQxKMt1QVKPGs1ZzpMvnHX-7fPOuAc.woff2)
        format('woff2');
    unicode-range: U + 0400-045f, U + 0490-0491, U + 04b0-04b1, U + 2116;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    src: local('Lora Bold'), local('Lora-Bold'),
      url(https://fonts.gstatic.com/s/lora/v11/xXeCmFUBy-GfRKXpnqEJUVKPGs1ZzpMvnHX-7fPOuAc.woff2)
        format('woff2');
    unicode-range: U + 0102-0103, U + 1ea0-1ef9, U + 20ab;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    src: local('Lora Bold'), local('Lora-Bold'),
      url(https://fonts.gstatic.com/s/lora/v11/sNDli5YcfijR40K0xz3mZVKPGs1ZzpMvnHX-7fPOuAc.woff2)
        format('woff2');
    unicode-range: U + 0100-024f, U + 1-1eff, U + 20a0-20ab, U + 20ad-20cf,
      U + 2c60-2c7f, U + A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    src: local('Lora Bold'), local('Lora-Bold'),
      url(https://fonts.gstatic.com/s/lora/v11/mlTYdpdDwCepOR2s5kS2CwLUuEpTyoUstqEm5AMlJo4.woff2)
        format('woff2');
    unicode-range: U + 0000-00ff, U + 0131, U + 0152-0153, U + 02c6,
      U + 02da, U + 02dc, U + 2000-206f, U + 2074, U + 20ac, U + 2212,
      U + 2215;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 400;
    src: local('Overpass Regular'), local('Overpass-Regular'),
      url(https://fonts.gstatic.com/s/overpass/v2/xf9_Q4u6c0bcCd8geHaSgxkAz4rYn47Zy2rvigWQf6w.woff2)
        format('woff2');
    unicode-range: U + 0100-024f, U + 1-1eff, U + 20a0-20ab, U + 20ad-20cf,
      U + 2c60-2c7f, U + A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 400;
    src: local('Overpass Regular'), local('Overpass-Regular'),
      url(https://fonts.gstatic.com/s/overpass/v2/o3S9a2vetxRRO8sKA6PL03YhjbSpvc47ee6xR_80Hnw.woff2)
        format('woff2');
    unicode-range: U + 0000-00ff, U + 0131, U + 0152-0153, U + 02c6,
      U + 02da, U + 02dc, U + 2000-206f, U + 2074, U + 20ac, U + 2212,
      U + 2215;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 600;
    src: local('Overpass SemiBold'), local('Overpass-SemiBold'),
      url(https://fonts.gstatic.com/s/overpass/v2/w4FT_68VVErTcMDJuNJOOaE8kM4xWR1_1bYURRojRGc.woff2)
        format('woff2');
    unicode-range: U + 0100-024f, U + 1-1eff, U + 20a0-20ab, U + 20ad-20cf,
      U + 2c60-2c7f, U + A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 600;
    src: local('Overpass SemiBold'), local('Overpass-SemiBold'),
      url(https://fonts.gstatic.com/s/overpass/v2/w4FT_68VVErTcMDJuNJOOYgp9Q8gbYrhqGlRav_IXfk.woff2)
        format('woff2');
    unicode-range: U + 0000-00ff, U + 0131, U + 0152-0153, U + 02c6,
      U + 02da, U + 02dc, U + 2000-206f, U + 2074, U + 20ac, U + 2212,
      U + 2215;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 800;
    src: local('Overpass ExtraBold'), local('Overpass-ExtraBold'),
      url(https://fonts.gstatic.com/s/overpass/v2/goNCKHOqyloXE_JB8agupaE8kM4xWR1_1bYURRojRGc.woff2)
        format('woff2');
    unicode-range: U + 0100-024f, U + 1-1eff, U + 20a0-20ab, U + 20ad-20cf,
      U + 2c60-2c7f, U + A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 800;
    src: local('Overpass ExtraBold'), local('Overpass-ExtraBold'),
      url(https://fonts.gstatic.com/s/overpass/v2/goNCKHOqyloXE_JB8agupYgp9Q8gbYrhqGlRav_IXfk.woff2)
        format('woff2');
    unicode-range: U + 0000-00ff, U + 0131, U + 0152-0153, U + 02c6,
      U + 02da, U + 02dc, U + 2000-206f, U + 2074, U + 20ac, U + 2212,
      U + 2215;
  }
`;

export const resets = `
  /* http://meyerweb.com/eric/tools/css/reset/
   * v2.0 | 20110126
   * License: none (public domain)
   */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const createGlobalStyles = ({ theme, custom = '' }) => `
  /* Use fonts */
  ${fonts}

  /* Use resets */
  ${resets}

  /* Our globals */

  /**
   * Best practice from http://callmenick.com/post/the-new-box-sizing-reset
   * TLDR: It’s easier to override and a slight performance boost.
   */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;

    [type='button'] {
      appearance: none;
    }
  }

  body {
    background-color: ${theme.colors.bodyBg};
    color: ${theme.colors.bodyColor};
  }

  /**
   * Form elements don't inherit font settings.
   * https://stackoverflow.com/questions/26140050/why-is-font-family-not-inherited-in-button-tags-automatically
   */
  html, body, input, select, optgroup, textarea, button {
    font-weight: ${theme.fontWeight.regular};
    font-family: ${theme.fontStack.default};
    font-feature-settings: 'kern';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }

  pre, code {
    font-family: ${theme.fontStack.mono};
  }

  /**
   * Allow custom styles to override the default styles
   */
  ${custom}
`;

export default ({ theme, custom }) => createGlobalStyles({ theme, custom });
