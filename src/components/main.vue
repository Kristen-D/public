<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header>
<!--      <div class="logo" />-->
<!--      <div>-->
<!--        -->
<!--      </div>-->
      <img src="static/images/logonew.png" :style="{float: 'left',marginTop: '7px', marginLeft: '285px'}">
      <a-menu theme="dark" mode="horizontal" @select="chooseTip" :default-selected-keys="[indexNum]" :style="{ lineHeight: '64px', float: 'left', }">
        <a-menu-item key="1" style="margin-left: 110px;">首页</a-menu-item>
        <a-menu-item key="2" style="margin-left: 103px;">试用</a-menu-item>
        <a-menu-item key="3" style="margin-left: 103px;">联系我们</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <div v-if="this.indexNum === '1'">
        <dash></dash>
      </div>
      <div v-if="this.indexNum === '2'">
        <apply></apply>
      </div>
    </a-layout-content>

  </a-layout>
</template>
<script>
  import dash from "./dashBoard"
  import apply from "./applyBoard"
  import { Modal } from 'ant-design-vue';
  export default {
    components:{
      dash,
      apply
    },
    data() {
      return {
        indexNum: '1',
        visible: false,
        tmpNum: ''
      }
    },
    methods: {
      chooseTip: function(value){
        this.tmpNum = this.indexNum;
        this.indexNum = value.key;
          if (this.indexNum === '3') {
            this.visible = true;
            const h = this.$createElement;
            this.$info({
              title: '联系我们',
              content: h('div', {}, [
                h('p', '钱先生'),
                h('p', '电 话:  133-3782-8853'),
                h('p', '邮 箱:  qian.ke@asiainfo-sec.com'),
                h('p', '公 司:  亚信科技有限公司'),
                h('p', '地 址:  南京市雨花区软件大道180号大数据产业园1号楼'),
              ]),
              onOk() {},
            });
          this.indexNum = this.tmpNum;
        }

      },
      handleOk(e) {
        this.visible = false;
        this.indexNum = this.tmpNum;
      },
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
    /*background: url(static/images/logonew.png) -9% no-repeat;*/
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
  .ant-menu-item ant-ment-item-active ant-menu-item-select {
    background-color: #d05c85
  }
  .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: #5C69D0

  }
  .ant-menu-dark, .ant-menu-dark .ant-menu-sub {
    background-color: #5C69D0;

  }

  li.ant-menu-item {
    width:35px;
    font-size:18px;
    font-family:Microsoft YaHei UI;
    font-weight:400;
    color:rgba(235,238,244,1);
  }

  .ant-menu-dark .ant-menu-item:hover {
    background-color: #5C69D0;
    color: #73D1BA;
  }
  .ant-menu-dark .ant-menu-item-selected {
    color: #73D1BA;
    width:36px;
    font-size:18px;
    font-family:Microsoft YaHei UI;
    font-weight:bold;
  }

</style>

