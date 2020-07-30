<template>
  <div :style="{ background: '#fff', height: '1800px' }">
      <a-row>
          <a-col :span="24">
              <div class="position-back">
                  <img src="/static/images/backgroundselect.png" style="width:100%" >
              </div>
              <div class="position-back">
                  <span>等保合规，护网重保首选</span>
                  <img src="/static/images/backgroundtop.png">
              </div>
          </a-col>
      </a-row>
      <a-row>
          <div class="input-top">
            <a-row>
              <a-col :span="22">
                  <a-input size="large" placeholder="例：输入：https://aisainfo-sec.com,为您的做最全面的体检" class="input-in" />
                <a-button type="primary" class="input-btn">体检</a-button>
              </a-col>
            </a-row>
          </div>
      </a-row>
      <a-row>

      </a-row>


<!--    <div class="backSelect">-->
<!--       <div class="backTop"><span>等保合规，护网重保首选</span></div>-->

<!--      <div :style="{margin: '50px 0px'}" >-->
<!--        <a-input-search placeholder="输入：https://aisainfo-sec.com,为您的做最全面的体检" enter-button="体检" size="large" />-->
<!--      </div>-->

<!--      <div :style="{height: '60px', float: 'left'}">-->
<!--        <a-spin size="large" /><span>您的网站正在检测中，已经抽检100个页面，还有200个页面未抽检，请您耐心等待……90%</span> <a :style="{marginLeft: '20px',textDecoration: 'underline'}">下载体检结果</a>-->
<!--      </div>-->
<!--    </div>-->


<!--    <div :style="{marginTop: '160px'}">-->
<!--      <a-row :gutter="[16,16]">-->
<!--        <a-col :span="8"><a-card><p>HTTP监测</p><p>DNS监测</p><p>PING监测</p></a-card></a-col>-->
<!--        <a-col :span="8"><a-card><p>远程网页篡改监测服务</p><p>网页敏感信息监测服务</p><p>暗链监控</p></a-card></a-col>-->
<!--        <a-col :span="8"><a-card><p> Web漏洞扫描检测服务     钓鱼监测</p>-->
<!--          <p> 系统漏洞扫描                 木马监测</p><p>数据库漏洞扫描              弱口令检查</p></a-card>-->
<!--        </a-col>-->
<!--      </a-row>-->
<!--      <a-row :gutter="[16,16]">-->
<!--        <a-col :span="24"><a-card><p>专家级团队参与运营</p></a-card></a-col>-->
<!--      </a-row>-->
<!--      <a-row :gutter="[16,16]">-->
<!--        <a-col :span="8"><a-card><p>报表定制</p></a-card></a-col>-->
<!--        <a-col :span="8"><a-card><p>服务定制</p></a-card></a-col>-->
<!--        <a-col :span="8"><a-card><p>安全定制</p></a-card></a-col>-->
<!--      </a-row>-->
<!--      <a-row :gutter="[16,16]">-->
<!--        <a-col :span="24"><a-card><p>击破网站被攻击被勒索枷锁</p></a-card></a-col>-->
<!--      </a-row>-->
<!--      <a-row :gutter="[16,16]">-->
<!--        <a-col :span="8"><a-card><p>网页挂马</p></a-card></a-col>-->
<!--        <a-col :span="8"><a-card><p>敏感信息</p></a-card></a-col>-->
<!--        <a-col :span="8"><a-card><p>漏洞利用</p></a-card></a-col>-->
<!--      </a-row>-->
<!--    </div>-->
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

  .position-back {
    position: absolute
  }

  .position-back span {
    width: 526px;
    height: 47px;
    font-size: 48px;
    font-family: Microsoft YaHei;
    font-weight: 300;
    color: rgba(92,105,208,1);
    line-height: 48px;
    margin-left: 356px;
    margin-right: 53px;
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

  .input-top {
    width: 1360px;
    height: 175px;
    background: rgba(251,254,255,1);
    opacity: 0.9;
    margin-top: 485px;
    margin-left: 280px;
  }

  .input-in {
    margin-left: 30px;
    margin-top: 25px;
    height: 60px;
    width: 850px;
    border: 1px solid rgba(161,171,197,1);
  }

  .input-btn {
    margin-top: 26px;
    height: 60px;
    width: 160px;
    margin-left: 18px;
    background-color: #5C69D0;

  }

</style>
