<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header>
<!--      <div class="logo" />-->
<!--      <div>-->
<!--        -->
<!--      </div>-->
      <img src="/static/images/logonew.png" :style="{float: 'left',marginTop: '7px'}">
      <a-menu theme="dark" mode="horizontal" @select="chooseTip" :default-selected-keys="[indexNum]" :style="{ lineHeight: '64px', float: 'left' }">
        <a-menu-item key="1">首页</a-menu-item>
        <a-menu-item key="2">试用</a-menu-item>
        <a-menu-item key="3">联系我们</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{padding: '0px 50px',marginTop: '64px' }">
      <div v-if="this.indexNum === '1'">
        <dash></dash>
      </div>
      <div v-else>
        <apply></apply>
      </div>
    </a-layout-content>

  </a-layout>
</template>
<script>
  import dash from "./dashBoard"
  import apply from "./applyBoard"
  export default {
    components:{
      dash,
      apply
    },
    data() {
      return {
        indexNum: '1',

      }
    },
    methods: {
      chooseTip: function(value){
        this.indexNum = value.key;
      }
    },
    mounted() {
      //this.router.push('./hello')
    }
  }

</script>
<style scoped>
  #components-layout-demo-fixed .logo {
    width: 120px;
    height: 31px;
    background: url(/static/images/logonew.png) -9% no-repeat;
    /*background: rgba(255, 255, 255, 0.2);*/
    margin: 16px 24px 16px 0;
    float: left;
  }
  .ant-layout-header{
    background:#5C69D0
  }

  .ant-carousel >>> .slick-slide {
    text-align: center;
    line-height: 160px;
    background: #5C69D0;
    overflow: hidden;
    height: 350px;

  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }
  .ant-menu-item{
    background-color:#5C69D0
  }


</style>
<style>
  .ant-menu-item ant-ment-item-active ant-menu-item-select {
    background-color: #d05c85
  }
  .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: #5C69D0

  }
  .ant-menu-dark .ant-menu-item:hover {
    background-color: #5C69D0;
    color: #73D1BA;
  }
  .ant-menu-dark .ant-menu-item-selected {
    color: #73D1BA;
  }



</style>
