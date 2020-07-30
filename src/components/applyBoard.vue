<template>
  <div>
    <a-row>

        <a-col :span="24">
            <div class="background"><img src="/static/images/form.png"  style="width:100%"></div>
        </a-col>
      <a-col >
        <div class="background-btm"><img src="/static/images/bottom.png" style="width:100%"></div>
      </a-col>

    </a-row>
    <div class="form">
      <div class="tip-word">
        <img src="/static/images/tip.png">
        <span>请留下您的联系方式，我们将会提供针对您网站的专业评估和咨询服务，为您的网站提供专业监测和护航服务。</span>
      </div>
      <div class="base">
        <span>基础信息</span>
      </div>

      <a-form-model :model="form" :style="{marginTop: '70px', marginLeft:'50px'}" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item label="网址">
          <a-input default-value="mysite">
            <a-select slot="addonBefore" default-value="Http://" style="width: 90px">
              <a-select-option value="Http://">
                Http://
              </a-select-option>
              <a-select-option value="Https://">
                Https://
              </a-select-option>
            </a-select>
            <a-select slot="addonAfter" default-value=".com" style="width: 80px">
              <a-select-option value=".com">
                .com
              </a-select-option>
            </a-select>
          </a-input>
        </a-form-model-item>
        <a-form-model-item label="企业">
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item label="姓名">
          <a-input v-model="form.desc" />
        </a-form-model-item>
        <a-form-model-item label="手机">
          <a-input v-model="form.desc" />
        </a-form-model-item>
        <a-form-model-item label="邮箱">
          <a-input v-model="form.desc" />
        </a-form-model-item>
        <a-form-model-item>
          <div style="margin-left: 120px">
              <a-button type="primary" :style="{width: '195px',marginRight: '10px'}">我要咨询</a-button>
              <a-button style="margin-left: 80px;width: 160px;">我要网站体检报告</a-button>
          </div>
        </a-form-model-item>
      </a-form-model>
    </div >
  </div>
</template>

<script>
    export default {
        name: "applyBoard",
        data() {
          return {
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
        }
    }
</script>

<style scoped>
  .base {
    margin-top: 57px;
  }
  .base span {
    width:119px;
    height:25px;
    font-size:25px;
    font-family:Microsoft YaHei UI;
    font-weight:bold;
    color:rgba(75,83,98,1);
    line-height:50px;
  }

  .background {
    position: absolute;
    height: 960px;
  }
  .background-btm {
    position: absolute;
    margin-top: 960px
  }
  .form {
    width:1360px;
    height:723px;
    background:rgba(251,254,255,1);
    box-shadow:3px 4px 9px 0px rgba(39,47,108,0.25);
    opacity:0.9;
    margin-left: 281px;
    margin-top: 73px;
  }
  .tip-word {
    padding-top: 41px;
  }

  .tip-word span {
    width:870px;
    height:19px;
    font-size:18px;
    font-family:Microsoft YaHei UI;
    font-weight:400;
    color:rgba(92,105,208,1);
    line-height:48px;
  }

  .tip-word img {
    margin-top: -4px;
    margin-right: 10px;
  }

  .ant-form-item-label {
    margin-right: 26px;
  }
</style>
