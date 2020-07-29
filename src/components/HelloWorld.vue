<template>
  <div :style="{ background: '#fff', padding: '24px', height: '1800px' }">
    <div>
      <a-carousel autoplay>
        <div><h3>一站式网站安全监测服务</h3></div>
        <div><h3>7X24小时专家服务</h3></div>
        <div><h3>等保合规、护网重保首选</h3></div>
      </a-carousel>
    </div>
    <div :style="{margin: '50px 0px'}">
      <a-input-search placeholder="输入：https://aisainfo-sec.com,为您的做最全面的体检" enter-button="体检" size="large" @search="onSearch"/>
    </div>

    <div :style="{height: '60px', float: 'left'}">
      <a-spin size="large" /><span>您的网站正在检测中，已经抽检100个页面，还有200个页面未抽检，请您耐心等待……90%</span> <a :style="{marginLeft: '20px',textDecoration: 'underline'}">下载体检结果</a>
    </div>

    <div :style="{marginTop: '160px'}">
      <a-row :gutter="[16,16]">
        <a-col :span="8"><a-card><p>HTTP监测</p><p>DNS监测</p><p>PING监测</p></a-card></a-col>
        <a-col :span="8"><a-card><p>远程网页篡改监测服务</p><p>网页敏感信息监测服务</p><p>暗链监控</p></a-card></a-col>
        <a-col :span="8"><a-card><p> Web漏洞扫描检测服务     钓鱼监测</p>
          <p> 系统漏洞扫描                 木马监测</p><p>数据库漏洞扫描              弱口令检查</p></a-card>
        </a-col>
      </a-row>
      <a-row :gutter="[16,16]">
        <a-col :span="24"><a-card><p>专家级团队参与运营</p></a-card></a-col>
      </a-row>
      <a-row :gutter="[16,16]">
        <a-col :span="8"><a-card><p>报表定制</p></a-card></a-col>
        <a-col :span="8"><a-card><p>服务定制</p></a-card></a-col>
        <a-col :span="8"><a-card><p>安全定制</p></a-card></a-col>
      </a-row>
      <a-row :gutter="[16,16]">
        <a-col :span="24"><a-card><p>击破网站被攻击被勒索枷锁</p></a-card></a-col>
      </a-row>
      <a-row :gutter="[16,16]">
        <a-col :span="8"><a-card><p>网页挂马</p></a-card></a-col>
        <a-col :span="8"><a-card><p>敏感信息</p></a-card></a-col>
        <a-col :span="8"><a-card><p>漏洞利用</p></a-card></a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
