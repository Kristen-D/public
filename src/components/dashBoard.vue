<template>
  <div :style="{ background: '#fff', height: '1800px' }">
      <a-row>
      <div class="backgroun-btm">
        <img src="static/images/backgroundmid.png" style="width:100%" alt="">
      </div>
    </a-row>
      <a-row>
          <a-col :span="24">
              <div class="position-back">
                  <img src="static/images/backgroundselect.png" style="width:100%">
              </div>
              <div class="position-back">
                  <span>等保合规，护网重保首选</span>
                  <img src="static/images/backgroundtop.png">
              </div>
          </a-col>
      </a-row>
      <a-row>
        <div class="backgroun-mid">
          <img src="static/images/backgrounbottom.png" alt="">
        </div>
      </a-row>
      <a-row>
        <div class="page-bottom">
          <img src="static/images/bottom.png" style="width: 100%" alt="">
        </div>
      </a-row>
      <a-row>
          <div class="input-top">
            <a-row>
              <a-col :span="22">
                  <a-input size="large" placeholder="例：输入：https://aisainfo-sec.com,为您的做最全面的体检" v-model="netUrl" class="input-in" />
                  <a-button type="primary" class="input-btn" @click="checkUrl">体检</a-button>
                  <div class="checkTip" v-if="isCheck">
                    <label v-if="isLoad===true">
                       <a-spin>
                        <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
                      </a-spin>
                    </label>
                    <span>{{tip}}</span>
                    <a v-if="isLoad===false" @click="download">下载体检结果</a>
                  </div>
              </a-col>
            </a-row>
          </div>
      </a-row>
      <a-row>
          <div class="desci-show">
            <a-col :span="8">
                  <div class="desci-menu1"><img src="static/images/menu1.png"> <span>可用性监测</span></div>
                  <div class="desci-menu1-word1"><span>HTTP监测</span></div>
                  <div class="desci-menu1-word2"><span>DNS监测</span></div>
                  <div class="desci-menu1-word2"><span>PING监测</span></div>
            </a-col>
            <div class="desci-menu1-line"></div>
            <a-col :span="8" >
                <div class="desci-menu2"><img src="static/images/menu2.png"> <span>合规性监测</span></div>
                <div class="desci-menu1-word1"><span style="margin-left: -80px;">远程网页篡改监测服务</span></div>
                <div class="desci-menu1-word2"><span style="margin-left: -80px;">网页敏感信息监测服务</span></div>
                <div class="desci-menu1-word2"><span style="margin-left: -162px;">暗链监控</span></div>
            </a-col>
            <div class="desci-menu1-line2"></div>
            <a-col :span="8">
              <div class="desci-menu1"><img src="static/images/menu3.png" style="margin-left: -147px"> <span>安全性监测</span></div>
              <div class="desci-menu1-word1"><span style="margin-left: -179px">Web漏洞扫描检测服务</span></div>
              <div class="desci-menu1-word2"><span style="margin-left: -266px">钓鱼监测</span></div>
              <div class="desci-menu1-word2"><span style="margin-left: -236px">系统漏洞扫描</span></div>
              <div class="desci-menu1-word2"><span style="margin-left: -258px">木马监测</span></div>
              <div class="desci-menu1-word2"><span style="margin-left: -215px">数据库漏洞扫描</span></div>
              <div class="desci-menu1-word2"><span style="margin-left: -242px">弱口令检查</span></div>
            </a-col>
          </div>
      </a-row>
      <a-row>
          <a-col :span="24">
              <div class="desci-list1">
                 <img src="static/images/list1.png">
              </div>
              <div class="desci-list1-word">
                 <span style="margin-left: 84px">专家级团队参与运营</span>
              </div>
          </a-col>
      </a-row>
      <a-row>
          <div class="desci-word1">
              <a-col :span="8">
                <div class="desci-word1-logo"><img src="static/images/word1-1.png" alt=""></div>
                <div class="desci-word1-column"><span>报表定制</span></div>
              </a-col>
              <div class="desci-menu2-line1"></div>
              <a-col :span="8">
                <div class="desci-word1-logo1"><img src="static/images/word1-2.png" alt=""></div>
                <div class="desci-word1-column"><span>服务定制</span></div>
              </a-col>
              <div class="desci-menu2-line2"></div>
              <a-col :span="8">
                <div class="desci-word1-logo"><img src="static/images/word1-3.png" alt=""></div>
                <div class="desci-word1-column"><span>安全定制</span></div>
              </a-col>
            <div class="desci-menu2-line3"></div>
          </div>
      </a-row>
      <a-row>
          <a-col :span="24">
              <div class="desci-list2">
                <img src="static/images/list2.png">
              </div>
              <div class="desci-list2-word">
                <span style="margin-left: 95px">击破网站被攻击被勒索枷锁</span>
              </div>
          </a-col>
      </a-row>
      <a-row>
          <div class="desci-word2">
               <a-col :span="8">
                  <div class="desci-word2-logo"><img src="static/images/word2-1.png"></div>
                  <div class="desci-word2-column"><span>网页挂马</span></div>
               </a-col>
               <div class="desci-menu2-line1"></div>
               <a-col :span="8">
                 <div class="desci-word2-logo"><img src="static/images/word2-2.png"></div>
                 <div class="desci-word2-column"><span>敏感信息</span></div>
               </a-col>
               <div class="desci-menu2-line2"></div>
               <a-col :span="8">
                 <div class="desci-word2-logo"><img src="static/images/word2-3.png"></div>
                 <div class="desci-word2-column"><span>漏洞利用</span></div>
               </a-col>
               <div class="desci-menu2-line3"></div>
          </div>
      </a-row>


  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        netUrl: '',
        //tip: '您的网站正在检测中，已经检测35%的页面，还有65%的页面未检测，请您耐心等待.....进度35%',
        //isCheck: true,
        //isLoad: true,
        tip: '',
        isCheck: false,
        isLoad: true,

      }
    },
    methods: {
      checkUrl() {
        let vm = this
        if (this.netUrl) {
          vm.isCheck = true;
          this.tip = '您的网站开始检测.....'
          setTimeout(function () {
            vm.tip = '您的网站正在检测中，已经检测35%的页面，还有65%的页面未检测，请您耐心等待.....进度35%'
          }, 5000);
          setTimeout(function () {
            vm.tip = '您的网站正在检测中，已经检测80%的页面，还有20%的页面未检测，请您耐心等待.....进度80%'
          }, 9000);
          setTimeout(function () {
            vm.tip = '您的网站已经检测结束'
            vm.isLoad = false;
          }, 14000);
        }
      },
      // download() {
      //   const h = this.$createElement;
      //   this.$info({
      //     title: '联系我们',
      //     width: 465,
      //     content: h('div', {}, [
      //       h('p', '钱先生'),
      //       h('p', '电 话:  133-3782-8853'),
      //       h('p', '邮 箱:  qian.ke@asiainfo-sec.com'),
      //       h('p', '公 司:  亚信科技有限公司'),
      //       h('p', '地 址:  南京市雨花区软件大道180号大数据产业园1号楼'),
      //     ]),
      //     onOk() {},
      //   });
      // }
      download() {
          this.$emit('getIndex','2')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .checkTip {
    width:1041px;
    height:19px;
    font-size:18px;
    font-family:Microsoft YaHei UI;
    font-weight:400;
    color:rgba(75,83,98,1);
    line-height:48px;
    margin-left: 118px;
  }
  .checkTip span {
    margin-right: 146px;
  }
  .ant-modal-content {
    width: 465px
  }

  .position-back {
    position: absolute
  }

  .backgroun-mid {
    position: absolute;
    margin-top: 850px;
    margin-left: 0px;
  }

  .backgroun-btm {
    position: absolute;
    margin-left: 0px;
    background-color: #ebeef4;
  }

  .page-bottom {
    position: absolute;
    margin-top: 2378px;
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
    margin-left: 110px;
    margin-top: 25px;
    height: 60px;
    width: 800px;
    width: 800px;
    border: 1px solid rgba(161,171,197,1);
  }

  .input-btn {
    margin-top: 26px;
    height: 60px;
    width: 160px;
    margin-left: 14px;
    background-color: #5C69D0;

  }

  .desci-show {
    width:1360px;
    height:465px;
    background:rgba(251,254,255,1);
    box-shadow:3px 4px 9px 0px rgba(39,47,108,0.25);
    opacity:0.9;
    margin-top: 51px;
    margin-left: 281px;
  }

  .desci-menu1 {
    margin-left: 47px;
    margin-top: 56px;
  }
  .desci-menu2 {
    margin-left: -20px;
    margin-top: 52px;
  }
  .desci-menu2 img {
    margin-top: -9px;
  }
  .desci-menu2 span{
    width:119px;
    height:25px;
    font-size:25px;
    font-family:Microsoft YaHei UI;
    font-weight:bold;
    color:rgba(75,83,98,1);
    line-height:50px;
    margin-left:8px;
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
    margin-left: 29px;

  }

  .desci-menu1-word2 {
    margin-top: 20px;
    margin-left: 29px;
  }
  .desci-menu1-word3 {

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

  .desci-list1 {
    margin-top: 30px;
    margin-left: 281px;
    position: absolute;
  }
  .desci-list1-word {
    margin-top: 100px;
    margin-left: -635px;
  }
  .desci-list1-word span{
    width:600px;
    height:36px;
    font-size:48px;
    font-family:PangMenZhengDao;
    font-weight:400;
    color: rgba(255,255,255,1);
    line-height:48px;
    position: absolute;
  }

  .desci-word1 {
    background-color: #FBFEFF;
    height: 330px;
    margin-top: 140px;
    width: 1360px;
    margin-left: 281px;
    /*border: 1px solid;*/
  }
  .desci-word1-logo {
    margin-top: 101px
  }

  .desci-word1-column {
    margin-top: 34px;
  }

  .desci-word1-column span {
    width:91px;
    height:24px;
    font-size:24px;
    font-family:Microsoft YaHei UI;
    font-weight:400;
    color:rgba(75,83,98,1);
    line-height:50px;
  }
  .desci-word1-logo1 {
    margin-top: 52px
  }

  .desci-list2 {
    margin-top: 30px;
    margin-left: 281px;
    position: absolute;
  }
  .desci-list2-word {
    margin-top: 100px;
    margin-left: -635px;
  }
  .desci-list2-word span{
    width:600px;
    height:36px;
    font-size:48px;
    font-family:PangMenZhengDao;
    font-weight:400;
    color: rgba(255,255,255,1);
    line-height:48px;
    position: absolute;
  }
  .desci-word2 {
    background-color: #FBFEFF;
    height: 330px;
    margin-top: 140px;
    width: 1360px;
    margin-left: 281px;
    /*border: 1px solid;*/
  }
  .desci-word2-logo {
    margin-top: 74px;
  }
  .desci-word2-column {
    margin-top: 46px;
  }
  .desci-word2-column span {
    width:89px;
    height:24px;
    font-size:24px;
    font-family:Microsoft YaHei UI;
    font-weight:400;
    color:rgba(75,83,98,1);
    line-height:50px;
  }
  .desci-menu2-line1 {
    width: 1px;
    height: 182px;
    background-color: #D4DBE9;
    position: absolute;
    margin-left: 24%;
    margin-top: 46px;
  }
  .desci-menu2-line2 {
    width: 1px;
    height: 182px;
    background-color: #D4DBE9;
    position: absolute;
    margin-left: 50%;
    margin-top: 46px;
  }
  .desci-menu2-line3 {
    width: 1px;
    height: 182px;
    background-color: #D4DBE9;
    position: absolute;
    margin-left: 50%;
    margin-top: 46px;
  }
</style>
