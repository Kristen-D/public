<template>
  <div>
      <a-row>
        <a-col :span="24">
          <div class="background"><img src="static/images/form.png"></div>
        </a-col>
        <a-col >
          <div class="background-btm"><img src="static/images/bottom.png"></div>
        </a-col>
      </a-row>
    <div class="form" v-if="!show">
      <div class="tip-word">
        <img src="static/images/tip.png">
        <span>请留下您的联系方式，我们将会提供针对您网站的专业评估和咨询服务，为您的网站提供专业监测和护航服务。</span>
      </div>
      <div class="base">
        <span>基础信息</span>
      </div>
      <a-form-model :model="form" :rules="rules" :ref="form" :style="{marginTop: '3%'}" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item label="网址"  prop="url" class="model-item">
          <a-input  v-model="form.url" default-value="mysite" style="height: 46px;"  suffix=".com"  >
            <a-select slot="addonBefore"  default-value="Http://" style="width: 90px; height: 46px">
              <a-select-option value="Http://">
                http://
              </a-select-option>
              <a-select-option value="Https://">
                https://
              </a-select-option>
            </a-select>
          </a-input>
        </a-form-model-item>
        <a-form-model-item  label="企业"  prop="company" class="model-item">
          <a-input v-model="form.company" class="model-item-height" />
        </a-form-model-item>
        <a-form-model-item label="姓名" prop="username" class="model-item">
          <a-input v-model="form.username" class="model-item-height" />
        </a-form-model-item>
        <a-form-model-item  label="手机"  prop="mobilePhone" class="model-item">
          <a-input v-model="form.mobilePhone" class="model-item-height" />
        </a-form-model-item>
        <a-form-model-item label="邮箱" prop="email" class="model-item">
          <a-input  v-model="form.email"  class="model-item-height" />
        </a-form-model-item>
        <a-form-model-item class="model-item">
          <div style="margin-left: 161px">
              <a-button type="primary" :style="{width: '200px',marginRight: '17px', height: '46px', backgroundColor: '#5C69D0',border: 'node'}" @click="saveInfo">我要咨询</a-button>
              <a-button :style="{width: '200px',marginRight: '17px', height: '46px'}" @click="getReport">我要网站体检报告</a-button>
              <a-button :style="{width: '200px',marginRight: '17px', height: '46px'}">检查次数{{count}}</a-button>
          </div>
        </a-form-model-item>
      </a-form-model>
    </div >
    <div class="form" style="position: absolute" v-if="show">
      <a-result :title="tip">
        <template #icon>
          <a-icon type="smile" theme="twoTone" />
        </template>
        <template #extra>
          <a-button type="primary" @click="close">
             关闭
          </a-button>
        </template>
      </a-result>
    </div>
  </div>
</template>

<script>
  import { Modal } from 'ant-design-vue';
    export default {

        name: "applyBoard",
        data() {
          let validatorPhone=(rule,value,callback)=>{
              // 如果为空值，就抛出错误
              if(!value){
                callback(new Error("请输入手机号!"));
              }else{
                // 正则判断手机号格式的格式，正则判断失败抛出错误，否则直接callback()
                if(!/^1[2-9]\d{9}$/.test(value)){
                  callback(new Error("手机号格式不正确!"));
                }else{
                  callback();
                }
              }
            };
          let validatorName=(rule,value,callback)=>{
            const pattern2 = new RegExp('[\u4e00-\u9fa5_0-9A-Za-z]+');
            if(!value){
              callback(new Error("请输入中文、英文、数字!"));
            }else{
              for (let i = 0; i < value.length; i++) {
                if (!pattern2.test(value[i])) {
                  return  callback(new Error("姓名格式不正确"));
                }
              }
               return callback();
            }
          };
          let validatorEmail=(rule,value,callback)=>{
            if(!value){
              callback(new Error("请输入邮箱!"));
            }else{
              if(!/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(value)){
                callback(new Error("邮箱不正确!"));
              }else{
                callback();
              }
            }
          };
          let validatorUrl=(rule,value,callback)=>{
            if(!value){
              callback(new Error("请输入网址!"));
            }else{
              callback();
            }
          };
          let validatorCompany=(rule,value,callback)=>{
            const pattern2 = new RegExp('[\u4e00-\u9fa5_0-9A-Za-z]+');
            if(!value){
              callback(new Error("请输入中文、英文、数字!"));
            }else{
              for (let i = 0; i < value.length; i++) {
                if (!pattern2.test(value[i])) {
                  return  callback(new Error("请输入正确的企业名称"));
                }
              }
              return callback();
            }
          };
          return {
            labelCol: { span: 4 },
            wrapperCol: { span: 17 },
            count: '1000',
            show: false,
            tip: '提交成功! 我们会在48小时内联系您',
            form: {
              url: '',
              username: '',
              company: '',
              email: '',
              mobilePhone: '',
            },
            rules:{
              mobilePhone:[{validator:validatorPhone,trigger:"blur"}, {required: true, message: '请输入手机号', trigger: 'blur' }],
              username:[{validator:validatorName,trigger:"blur"}, {required: true, message: '请输入姓名', trigger: 'blur' }],
              company:[{validator:validatorCompany,trigger:"blur"}, {required: true, message: '请输入企业名称', trigger: 'blur' }],
              email:[{validator:validatorEmail,trigger:"blur"}, {required: true, message: '请输入邮箱', trigger: 'blur' }],
              url:[{validator:validatorUrl,trigger:"blur"}, {required: true, message: '请输入网址', trigger: 'blur' }],
              // validator对应手机格式验证方法（注意必须要有callback）
              // trigger对应触发验证的条件。取值有change(表单值改变时触发)；blur(表单元素失去焦点时触发)
            }
          }
        },
        methods: {
          initCheck(formName) {
            let flag = false;
            this.$refs[formName].validate(valid => {
              if (valid) {
                flag = true
              }
            });
            return flag;
          },
          getReport: function() {
            this.tip ='提交信息后! 我们会在48小时内联系您';
            this.show = true;
          },
          close: function() {
            let tmp = {
              url: '',
                username: '',
                company: '',
                email: '',
                mobilePhone: '',
            }
            this.form = tmp;
            this.show = false;
          },
          saveInfo: function() {
            if (this.initCheck(this.form) ) {
              this.show = true;
              this.$axios.post('/safe/save', this.form)
                .then(function (response) {
                  if (response.data.code === 'Common.Success') {
                    this.show = true;
                    const h = this.$createElement;
                    this.$info({
                      title: '提交成功',
                      content: h('div', {}, [
                        h('p', '请您留意电话邮箱'),
                        h('p', '我们将会在24小时之内联系您'),
                      ]),
                      onOk() {},
                    })
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            };
          }
        },
        created() {
          let vm = this;
          this.$axios.get('/safe/count')
          .then(function(rs) {
            console.log(rs)
            console.log('这个是成功的数据')
            if (rs.data.code === 'Common.Success') {
              vm.count = rs.data.data;
            }

          })
          .catch(function (error) {
              console.log('数字报错')
              console.log(error)
          })
        }
    }
</script>

<style scoped>
  .ant-input {
    height: 46px;
  }
  label.ant-form-item-required {
    color: red
  }
  .ant-input-affix-wrapper .ant-input:not(:last-child) {
    padding-right: 30px;
    height: 46px;
  }

  .model-item {
    margin-left: -4%;

  }
  .model-item-height {
    height: 46px;
  }
  .base {
    margin-top: 2%;
    margin-left: -1%;
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
    text-align: initial;
    margin-left: 10%;
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
  .ant-result {
     margin-top: 150px;
  }



</style>
<style>
  label.ant-form-item-required {
    width:35px;height:16px;font-size:16px;font-family:Microsoft YaHei UI;font-weight:400;color:rgba(75,83,98,1);line-height:50px;
  }
  .ant-select-selection--single .ant-select-selection__rendered {
    margin-top: 6px;
    width: 59px;
    height: 17px;
    font-size: 16px;
    font-family: Microsoft YaHei UI;
    font-weight: 400;
    color: rgba(51,51,51,1);
  }
  .ant-select-arrow {
    margin-top: 1px;
  }
  .ant-input-group > .ant-input-affix-wrapper:not(:first-child) .ant-input {
    height: 45px;
  }
  .ant-input-suffix {
    height: 17px;
    font-size: 16px;
    font-family: Microsoft YaHei UI;
    font-weight: 400;
    color: rgba(51,51,51,1);
  }
  .ant-form-item-label {
    margin-right: 1%;
  }
  .ant-btn ant-btn-primary {
    width: 200px;
    margin-right: 17px;
    height: 46px;
    background-color: #5C69D0;
    border: none;
  }
</style>
