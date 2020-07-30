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
          <div class="desci-show">
            <a-col :span="8">
                  <div class="desci-menu1"><img src="/static/images/menu1.png"> <span>可用性监测</span></div>
                  <div class="desci-menu1-word1"><span>HTTP监测</span></div>
                  <div class="desci-menu1-word2"><span>DNS监测</span></div>
                  <div class="desci-menu1-word2"><span>PING监测</span></div>
            </a-col>
            <div class="desci-menu1-line"></div>
            <a-col :span="8" >
                <div class="desci-menu1"><img src="/static/images/menu2.png"> <span>合规性监测</span></div>
                <div class="desci-menu1-word1"><span>远程网页篡改监测服务</span></div>
                <div class="desci-menu1-word2"><span>网页敏感信息监测服务</span></div>
                <div class="desci-menu1-word2"><span>暗链监控</span></div>
            </a-col>
            <div class="desci-menu1-line2"></div>
            <a-col :span="8">
              <div class="desci-menu1"><img src="/static/images/menu3.png"> <span>合规性监测</span></div>
              <div class="desci-menu1-word1"><span>Web漏洞扫描检测服务</span></div>
              <div class="desci-menu1-word2"><span>钓鱼监测</span></div>
              <div class="desci-menu1-word2"><span>系统漏洞扫描</span></div>
              <div class="desci-menu1-word2"><span>木马监测</span></div>
              <div class="desci-menu1-word2"><span>数据库漏洞扫描</span></div>
              <div class="desci-menu1-word2"><span>弱口令检查</span></div>
            </a-col>
          </div>
      </a-row>
      <a-row>
          <a-col>
             <div>
               <img src="/static/images/list1.png" alt="">
             </div>
          </a-col>
      </a-row>



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

  .desci-show {
    width:1360px;
    height:465px;
    background:rgba(251,254,255,1);
    box-shadow:3px 4px 9px 0px rgba(39,47,108,0.25);
    opacity:0.9;
    margin-top: 51px;
    margin-left: 205px;
  }

  .desci-menu1 {
    /*margin-left: 131px;*/
    margin-top: 56px;
  }
  .desci-menu1 span {
    width:119px;
    height:25px;
    font-size:25px;
    font-family:Microsoft YaHei UI;
    font-weight:bold;
    color:rgba(75,83,98,1);
    line-height:50px;
  }

  .desci-menu1 img {
    margin-top: -10px;
    margin-right: 10px;
  }

  .desci-menu1-word1 {
    margin-top: 20px;
  }

  .desci-menu1-word2 {
    margin-top: 20px;
  }

  .desci-menu1-word span{
    width:80px;
    height:119px;
    font-size:19px;
    font-family:Microsoft YaHei UI;
    font-weight:400;
    color:rgba(75,83,98,1);
    line-height:50px;
  }

  .desci-menu1-line {
    width: 1px;
    height: 310px;
    background-color: #D4DBE9;
    position: absolute;
    margin-left: 25%;
    margin-top: 46px;
  }
  .desci-menu1-line2 {
    width: 1px;
    height: 310px;
    background-color: #D4DBE9;
    position: absolute;
    margin-left: 50%;
    margin-top: 46px;
  }


</style>
