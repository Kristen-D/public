<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu theme="dark" mode="horizontal":default-selected-keys="['1']":style="{ lineHeight: '64px', float: 'left' }">
        <a-menu-item key="1">首页</a-menu-item>
        <a-menu-item key="2">试用</a-menu-item>
        <a-menu-item key="3">关于</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{padding: '0px 50px',marginTop: '64px' }">
      <div :style="{ background: '#fff', padding: '24px', height: '800px' }">
        Content
      </div>
    </a-layout-content>
  </a-layout>
</template>
<style>
  #components-layout-demo-fixed .logo {
    width: 120px;
    height: 31px;
    background: url(/static/images/logo.png) -9% no-repeat;
    /*background: rgba(255, 255, 255, 0.2);*/
    margin: 16px 24px 16px 0;
    float: left;
  }
</style>
