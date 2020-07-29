<template>
  <div>
<!--    <div :style="{float: 'left'}">💡:请留下您的联系方式，我们将会提供针对您网站的专业评估和咨询服务，为您的网站提供专业监测和护航服务</div>-->
    <div >
      💡:请留下您的联系方式，我们将会提供针对您网站的专业评估和咨询服务，为您的网站提供专业监测和护航服务
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
        <a-form-model-item :wrapper-col="{ span: 15,offset:4 }">
          <a-button type="primary" :style="{width: '195px',marginRight: '10px'}">我要咨询</a-button>
          <a-button style="margin-left: 80px;width: 160px;">我要网站体检报告</a-button>
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
  .input-size {
    width: 770px;
    margin:0 auto;
  }
</style>
