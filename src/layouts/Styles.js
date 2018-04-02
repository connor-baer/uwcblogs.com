import { withStyles } from 'change';

const Styles = ({ styles: { animations, breakpoints, colors, fonts } }) => (
  <div>
    <style jsx global>{`
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

      /* Base resets */
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline;
      }

      /* HTML5 display-role reset for older browsers. */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      html {
        @media (max-width: ${breakpoints.small}) {
          font-size: 90%;
        }

        @media (min-width: ${breakpoints.large}) {
          font-size: 110%;
        }

        @media (min-width: ${breakpoints.wide}) {
          font-size: 120%;
        }

        transition: background-color ${animations.short},
          color ${animations.short};
        background-color: ${colors.gray[8]};
        color: ${colors.gray[9]};
        font-family: ${fonts.family.sans};
        word-wrap: break-word;
        box-sizing: border-box;
      }

      *,
      *::before,
      *::after {
        /* Inherit box-sizing to make it easier to change the property for components that leverage other behavior; see http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/. */
        box-sizing: inherit;
      }

      body {
        position: relative;
        max-width: 100vw;
        min-height: 100vh;
        transition: background-color ${animations.short};
        background-color: ${colors.white};
        overflow-x: hidden;
      }

      a {
        border: 0;
        color: inherit;
        text-decoration: none;
      }

      ol,
      ul {
        list-style: none;
      }

      blockquote,
      q {
        quotes: none;
      }

      blockquote::before,
      blockquote::after,
      q::before,
      q::after {
        content: '';
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      hr {
        margin-top: 1rem;
        margin-bottom: 1.25rem;
        border: 0;

        &::before {
          display: block;
          height: 2px;
          background-color: ${colors.gray[3]};
          content: '';
        }
      }

      textarea {
        resize: vertical;
      }

      dfn,
      i,
      em,
      .em {
        font-style: italic;
      }

      code,
      kbd,
      tt,
      var,
      samp,
      pre {
        font-family: ${fonts.family.mono};
      }

      .l-ctnr {
        display: block;
        width: 100%;
        max-width: 60rem;
        margin-right: auto;
        margin-left: auto;
        padding-right: 0.5rem;
        padding-left: 0.5rem;

        @media (min-width: ${breakpoints.medium}) {
          padding-right: 4rem;
          padding-left: 4rem;
        }

        @media (min-width: ${breakpoints.large}) {
          padding-right: 1rem;
          padding-left: 1rem;
        }

        @media (min-width: ${breakpoints.wide}) {
          padding-right: 3rem;
          padding-left: 3rem;
        }
      }

      .l-flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .l-flex--center {
        justify-content: space-around;
      }

      [class*='l-w'] {
        display: block;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        padding-right: 1rem;
        padding-left: 1rem;
      }

      .l-columns {
        column-gap: 2rem;
        column-count: 1;
        column-break-inside: avoid;
        /* HACK: Fix webkit (i.e. Safari and Chrome) bugs related to multi column layout. */
        perspective: 1;

        @media (min-width: ${breakpoints.medium}) {
          column-count: 2;
        }

        & > * {
          /* HACK: Fix webkit (i.e. Safari and Chrome) bugs related to multi column layout. */
          -webkit-transform: translate3d(0, 0, 0);
        }
      }

      .l-w100 {
        width: 100%;
      }

      .l-w33 {
        width: 100%;

        @media (min-width: ${breakpoints.medium}) {
          width: calc(100% / 2);
        }

        @media (min-width: ${breakpoints.large}) {
          width: calc(100% / 3);
        }
      }

      .l-w66 {
        width: 100%;

        @media (min-width: ${breakpoints.large}) {
          width: calc(100% / 3 * 2);
        }
      }

      .l-w25 {
        width: calc(100% / 2);

        @media (min-width: ${breakpoints.large}) {
          width: calc(100% / 4);
        }
      }

      .l-w50 {
        width: 100%;

        @media (min-width: ${breakpoints.large}) {
          width: calc(100% / 2);
        }
      }

      .l-w75 {
        width: 100%;

        @media (min-width: ${breakpoints.large}) {
          width: calc(100% / 4 * 3);
        }
      }

      .cf::after {
        display: table;

        clear: both;

        content: '';
      }
    `}</style>
  </div>
);

export default withStyles(Styles);
