<template>
  <NuxtLink v-if="$props.href && $props.href.indexOf('http')"
            :to="$props.href" :class="cssClass">
    <span><slot /></span>
  </NuxtLink>
  <a v-else-if="$props.href && !$props.href.indexOf('http')"
     :href="$props.href" :class="cssClass" target="_blank">
    <span><slot /></span>
  </a>
  <div v-else :class="this.class">
    <span><slot /></span>
  </div>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    }
  },
  computed: {
    cssClass: () => 'button',
  }
}
</script>
<style lang="scss">
.button {
  display: inline-block;
  position: relative;
  height: 40px;
  padding: 0 23px;
  border-radius: 3px;
  border: none;
  background: transparent;
  outline: transparent;
  cursor: pointer;
  z-index: 1;

  @extend %text-p3;
  font-weight: 200;
  line-height: 1;
  color: #003979;
  text-decoration: none;

  &:before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 40px;
    vertical-align: middle;
    margin-left: -1px;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    border: 1px solid #cccdd7;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    pointer-events: none;
    border-radius: 3px;
    -ms-transform: matrix(1, 0, 0, 1, 0, 0);
    transform: matrix(1, 0, 0, 1, 0, 0);
    transition: 0.3s ease;
    z-index: -1;
  }
  &:hover:after {
    transform: matrix(1.04, 0, 0, 1.04, 0, 0);
  }

  span {
    display: inline-block;
    vertical-align: middle;
    font: inherit;
    color: inherit;
  }

  b {
    font-weight: 600;
  }
}

.button._w-full {
  width: 100%;
}

.button._white {
  color: #fff;
}

.button._b-white:after {
  background: #fff;
}

.button._b-blue {
  background: #0f427d;
  color: #fff;
}

.button._b-blue:after {
  border-color: #0f427d;
  background: #0f427d;
}

.button._submit {
  background: #fb9024;
  color: #fff;
}

.button._submit:after {
  border-color: #fb9024;
  background: #fb9024;
}

.button._size-l {
  height: 58px;
  font-size: 20px;
}

.button._size-l:before {
  height: 58px;
}

.button._search {}

.button._callback {}

.button._lang {}

.button._nav {}
</style>