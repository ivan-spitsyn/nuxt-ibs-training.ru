<script>
export default {
  name: 'Site'
}
</script>
<template>
  <div id="site" class="site">
    <slot />
  </div>
</template>
<style lang="scss">
/* open-sans-300 - latin-ext_latin_cyrillic-ext_cyrillic */
@font-face {
  font-display: swap;
  font-family: 'OpenSansLocal';
  font-style: normal;
  font-weight: 300;
  src: url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-300.eot'); /* IE9 Compat Modes */
  src: local(''),
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-300.woff2') format('woff2'), /* Super Modern Browsers */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-300.woff') format('woff'), /* Modern Browsers */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-300.ttf') format('truetype'), /* Safari, Android, iOS */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-300.svg#OpenSans') format('svg'); /* Legacy iOS */
}
/* open-sans-regular - latin-ext_latin_cyrillic-ext_cyrillic */
@font-face {
  font-display: swap;
  font-family: 'OpenSansLocal';
  font-style: normal;
  font-weight: 400;
  src: url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-regular.woff2') format('woff2'), /* Super Modern Browsers */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-regular.woff') format('woff'), /* Modern Browsers */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-regular.ttf') format('truetype'), /* Safari, Android, iOS */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
}
/* open-sans-500 - latin-ext_latin_cyrillic-ext_cyrillic */
@font-face {
  font-display: swap;
  font-family: 'OpenSansLocal';
  font-style: normal;
  font-weight: 500;
  src: url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-500.eot'); /* IE9 Compat Modes */
  src: local(''),
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-500.woff2') format('woff2'), /* Super Modern Browsers */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-500.woff') format('woff'), /* Modern Browsers */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-500.ttf') format('truetype'), /* Safari, Android, iOS */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-500.svg#OpenSans') format('svg'); /* Legacy iOS */
}
/* open-sans-600 - latin-ext_latin_cyrillic-ext_cyrillic */
@font-face {
  font-display: swap;
  font-family: 'OpenSansLocal';
  font-style: normal;
  font-weight: 600;
  src: url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-600.eot'); /* IE9 Compat Modes */
  src: local(''),
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-600.woff2') format('woff2'), /* Super Modern Browsers */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-600.woff') format('woff'), /* Modern Browsers */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-600.ttf') format('truetype'), /* Safari, Android, iOS */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-600.svg#OpenSans') format('svg'); /* Legacy iOS */
}
/* open-sans-700 - latin-ext_latin_cyrillic-ext_cyrillic */
@font-face {
  font-display: swap;
  font-family: 'OpenSansLocal';
  font-style: normal;
  font-weight: 700;
  src: url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-700.eot'); /* IE9 Compat Modes */
  src: local(''),
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-700.woff2') format('woff2'), /* Super Modern Browsers */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-700.woff') format('woff'), /* Modern Browsers */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-700.ttf') format('truetype'), /* Safari, Android, iOS */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-700.svg#OpenSans') format('svg'); /* Legacy iOS */
}
/* open-sans-800 - latin-ext_latin_cyrillic-ext_cyrillic */
@font-face {
  font-display: swap;
  font-family: 'OpenSansLocal';
  font-style: normal;
  font-weight: 800;
  src: url("~/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-800.eot"); /* IE9 Compat Modes */
  src: local(''),
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-800.woff2') format('woff2'), /* Super Modern Browsers */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-800.woff') format('woff'), /* Modern Browsers */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-800.ttf') format('truetype'), /* Safari, Android, iOS */
  url('@/assets/fonts/open-sans-v29-latin-ext_latin_cyrillic-ext_cyrillic-800.svg#OpenSans') format('svg'); /* Legacy iOS */
}

*, *::before, *::after {
  box-sizing: border-box
}

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
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  height: 100%;
  position: relative;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: transparent;

  font-family: 'OpenSansLocal', Arial, sans-serif;
  font-weight: 300;
  line-height: 1.15;
  vertical-align: baseline;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 1439px) {
  .page._content {
    padding-top: 76px;
  }
}
</style>