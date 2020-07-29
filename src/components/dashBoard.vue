<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu theme="dark" mode="horizontal" @select="chooseTip" :default-selected-keys="[indexNum]" :style="{ lineHeight: '64px', float: 'left' }">
        <a-menu-item key="1">首页</a-menu-item>
        <a-menu-item key="2">试用</a-menu-item>
        <a-menu-item key="3">联系我们</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{padding: '0px 50px',marginTop: '64px' }">


    </a-layout-content>

  </a-layout>
</template>
<script>
  import hello from "./HelloWorld"
  import apply from "./applyBoard"
  export default {
    components:{
      hello,
      apply
    },
    data() {
      return {
        indexNum: '1'
      }
    },
    methods: {
      chooseTip: function(value){
        this.indexNum = value.key;
        if (this.indexNum === '1') {
          this.router.push('./hello')
        } else if (this.indexNum === '2') {
          this.$router.push('/hello')
        }
      }
    },
    mounted() {
      this.router.push('./hello')
    }
  }

</script>
<style scoped>
  #components-layout-demo-fixed .logo {
    width: 120px;
    height: 31px;
    background: url(/static/images/logo.png) -9% no-repeat;
    /*background: rgba(255, 255, 255, 0.2);*/
    margin: 16px 24px 16px 0;
    float: left;
  }
  .ant-carousel >>> .slick-slide {
    text-align: center;
    line-height: 160px;
    background: #12366d;
    overflow: hidden;
    height: 350px;

  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }
</style>
