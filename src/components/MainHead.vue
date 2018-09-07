<template>
  <header class="main-head">
    <!--<p class="head-logo"></p>-->
    <div class="head-space"><slot></slot></div>
    <label class="head-logout">注销</label>
  </header>
</template>

<script>
export default {
  name: 'MainHead',
  props: {

  },

  data() {
    return {

    }
  },

  computed: {

  },

  mounted() {

  },

  methods: {

  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/var.styl'

.main-head {
  display: flex
  align-items: center
  padding: 0 26px
  height: 56px
  background: $theme
  user-select: none
}

.head-logo {
  display: block
  width: 140px
  height: 44px
  /*background: url('../assets/img/logo.png') center center no-repeat*/
  /*background-size: 100%*/
}
.head-space {
  flex: 1
}
.head-logout {
  display: block
  line-height: 32px
  font-size: 14px
  color: $theme-weak
  cursor: pointer
  transition: all 200ms
  &:hover {
    color: $white
  }
  &:active {
    color: $theme-weak
    opacity: 0.6
  }
}

</style>
