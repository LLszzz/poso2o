<template>
  <div>
    <div class="top">
      <i class="iconfont icon-fanhui" @click="$router.push({path:'/Mine'})"></i>
      <div>
        <span>更换手机</span>
      </div>
    </div>
    <div class="p20">
      <div class="borderBottomGray relative">
        <div class="showLeft left20">手机号</div>
        <input
          class="bigInput"
          v-model="inputPhone"
          maxlength="11"
          type="number"
          placeholder="请输入新手机号"
        />
      </div>
      <div class="relative">
        <div class="showLeft left20">验证码</div>
        <input class="bigInput" v-model="inputVerify" type="number" placeholder="请输入验证码" />
        <div
          @click="getverifyCode"
          class="showRight fontWhite btn right20 VW30"
          :class="verifyCode=='获取验证码'?'bgGreen':'bgGray'"
        >{{verifyCode}}</div>
      </div>
      <div class="h50"></div>
      <div class="W100 fontWhite btn bgGreen">确定</div>
    </div>
  </div>
</template>
<script>
import { clearInterval } from "timers";
import { all } from "q";
export default {
  data() {
    return {
      verifyCode: "获取验证码",
      inputPhone: "",
      inputVerify: ""
    };
  },
  methods: {
    getverifyCode() {
      let that = this;
      if (that._data.inputPhone.length != 11) {
        alert("请输入正确的手机号码");
        return false;
      }
      if (that._data.verifyCode == "获取验证码") {
        let start = 60;
        that._data.verifyCode = "（" + start + "）S";
        let timer = setInterval(() => {
          start -= 1;
          if (start < 1) {
            window.clearInterval(timer);
            that._data.verifyCode = "获取验证码";
          }
          that._data.verifyCode = "（" + start + "）S";
        }, 1000);
      }
    }
  }
};
</script>
<style lang="scss">
.top {
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-sizing: border-box;
  padding: 0 3vw;
  position: relative;
  > i {
    font-size: 30px;
  }
  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.bigInput {
  padding-left: 1.5rem;
}
</style>