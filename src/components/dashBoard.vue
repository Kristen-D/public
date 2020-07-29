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
      <div :style="{marginTop:'40px',float: 'left'}">💡:请留下您的联系方式，我们将会提供针对您网站的专业评估和咨询服务，为您的网站提供专业监测和护航服务</div>
      <div :style="{marginTop:'110px'}">
          <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="网址" class="input-size">
            <a-input addon-before="Http://" addon-after=".com" default-value="mysite" />
          </a-form-model-item>
            <a-form-model-item label="企业" class="input-size">
              <a-input v-model="form.name" />
            </a-form-model-item>
          <a-form-model-item label="姓名" class="input-size">
            <a-input v-model="form.desc" />
          </a-form-model-item>
          <a-form-model-item label="手机" class="input-size">
            <a-input v-model="form.desc" />
          </a-form-model-item>
          <a-form-model-item label="邮箱" class="input-size">
            <a-input v-model="form.desc" />
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 22 }">
            <a-button type="primary" @click="onSubmit" :style="{width: '195px',marginRight: '10px'}">我要咨询</a-button>
            <a-button style="margin-left: 80px;width: 160px;">我要网站体检报告</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
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
        indexNum: '1',
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
        form: {
          name: '',
          region: undefined,
          date1: undefined,
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
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
  .input-size {
    width: 770px;
    margin:0 auto;
  }
</style>
