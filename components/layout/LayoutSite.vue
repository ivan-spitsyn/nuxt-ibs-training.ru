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

  font-family: 'Open Sans', Arial, sans-serif;
  font-weight: 200;
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