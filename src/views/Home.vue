<template>
  <article class="home">
    <MainHead>
      &emsp;<span @click="openTabState({ id: 'LightApps', $router })">Open LightApps</span>
      &emsp;<span @click="openTabState({ id: 'WhiteList', $router })">Open WhiteList</span>
    </MainHead>
    <header class="home-head">
      <router-link class="head-base" to="/Base" replace><i></i></router-link>
      <transition-group class="head-tabs" tag="ul" name="slide">
        <router-link tag="li" v-for="item in tabState" :key="item.id" :to="item.path" replace>
          {{item.name}}<i @click="closeTab(item, $event)">×</i>
        </router-link>
      </transition-group>
    </header>
    <section class="home-content">
      <transition name="slide">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </section>
  </article>
</template>

<script>
// import { } from 'element-ui'
// import jdy from '../assets/js/jdy'
import { mapState, mapActions } from 'vuex'
import MainHead from '../components/MainHead'

export default {
  name: 'Home',
  data() {
    return {

    }
  },

  computed: {
    ...mapState(['tabState']),
  },

  created() {

  },

  mounted() {

  },

  activated() {

  },

  methods: {
    ...mapActions(['openTabState', 'closeTabState']),
    closeTab(item, event) {
      event.preventDefault()
      this.closeTabState({
        id: item.id,
        $router: this.$router,
      })
    }
  },

  components: {
    MainHead,
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/var.styl'

.home {
  display: flex
  flex-direction: column
  min-height: 100%
}

.home-head {
  display: flex
  height: 32px
  background: $silver
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1)
  .head-base {
    display: block
    width: 32px
    height: 32px
    background: $white
    transition: all 200ms
    > i {
      display: block
      width: 100%
      height: 100%
      background: url('../assets/img/base.png') center center no-repeat
      background-size: 16px 16px
      transition: all 200ms
    }
    &:hover {
      > i {
        opacity: 0.6
      }
    }
    &:active {
      background: $silver
      > i {
        opacity: 1
      }
    }
  }
  .head-tabs {
    display: flex
    flex: 1
    position: relative
    overflow: hidden
    white-space: nowrap
    &:after {
      content: ''
      position: absolute
      top: 0
      right: 0
      width: 30px
      height: 100%
      background: linear-gradient(to right, rgba(0, 0, 0, 0), $silver 80%)
    }
    > li {
      position: relative
      margin-left: 13px
      margin-right: 16px
      padding: 0 10px
      line-height: 32px
      color: $light-black
      border-bottom: 2px solid rgba(0, 0, 0, 0)
      box-sizing: border-box
      cursor: pointer
      transition: all 200ms
      &.router-link-active {
        color: $theme
        border-color: $theme
      }
      &:hover {
        color: $theme
        > i {
          opacity: 1
        }
      }
      &:active {
        color: $dark-blue
        > i {
          color: $dark-blue
        }
      }
      > i {
        display: block
        position: absolute
        right: -20px
        top: 50%
        margin-top: -16px
        width: 24px
        height: 34px
        line-height:  30px
        font-size: 24px
        color: $theme
        text-align: right
        opacity: 0
        transition: all 200ms
      }
    }
  }
}

.home-content {
  flex: 1
}

</style>
