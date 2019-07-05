<template>
  <div>
    <div class="top">
      <i class="iconfont icon-fanhui" @click="$router.push({path:'/Mine'})"></i>
      <div>
        <span>我的订单</span>
      </div>
    </div>
    <div class="grayLine"></div>
    <div class="flex textCenter bgWhite nav fs28">
      <div @click="changeNowType(0)" :class="nowType==0?'active':''" class="flex-1">
        全部
        <div></div>
      </div>
      <div @click="changeNowType(1)" :class="nowType==1?'active':''" class="flex-1">
        待付款
        <div></div>
      </div>
      <div @click="changeNowType(2)" :class="nowType==2?'active':''" class="flex-1">
        待发货
        <div></div>
      </div>
      <div @click="changeNowType(3)" :class="nowType==3?'active':''" class="flex-1">
        待收货
        <div></div>
      </div>
      <div @click="changeNowType(4)" :class="nowType==4?'active':''" class="flex-1">
        待评价
        <div></div>
      </div>
    </div>
    <div class="p20 VH86 srcollY">
      <div class="bgWhite p20 radius10 mb20">
        <div class="fontGray fs28 pb-20 onlyOneLine">店铺名</div>
        <div class="flex pb-20">
          <div class="w220">
            <div
              class="w200 h200 squarePhoto"
              style="background-image:url('https://t10.baidu.com/it/u=3052958643,2945691397&fm=76')"
            ></div>
          </div>
          <div class="flex flex-1 relative">
            <div class="flex-1">
              <div class="onlyTwoLine">商品名称商品名称商品名称商品名称商品名称商品名称</div>
              <div class="h10"></div>
              <div class="fontGray onlyTwoLine fs28">SKU</div>
            </div>
            <div class="w120 textRight">
              <div class="fs28">￥100</div>
              <div class="fs26 fontGray">×1</div>
            </div>
          </div>
        </div>
        <div class="flex pb-20">
          <div class="w220">
            <div
              class="w200 h200 squarePhoto"
              style="background-image:url('https://t10.baidu.com/it/u=3052958643,2945691397&fm=76')"
            ></div>
          </div>
          <div class="flex flex-1 relative">
            <div class="flex-1">
              <div class="onlyTwoLine">商品名称商品名称商品名称商品名称商品名称商品名称</div>
              <div class="h10"></div>
              <div class="fontGray onlyTwoLine fs28">SKU</div>
            </div>
            <div class="w120 textRight">
              <div class="fs28">￥100</div>
              <div class="fs26 fontGray">×1</div>
            </div>
          </div>
        </div>
        <div class="textRight fs26 pb-20">
          共1件商品 合计：￥
          <span class="fs30">40.00</span>
        </div>
        <div class="textRight">
          <div class="displayIB textCenter goodsBtn">查看物流</div>
          <div class="displayIB textCenter goodsBtn">查看物流</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type"],
  data() {
    return {
      nowType: 0
    };
  },
  methods: {
    changeNowType(type) {
      this._data.nowType = type;
    }
  },
  mounted() {
    let that = this;
    that._data.nowType = that.$route.query.type;
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
.nav {
  height: 6vh;
  line-height: 6vh;
}
.nav .active {
  color: #01bcb5;
  position: relative;
}
.nav .active > div {
  height: 0.04rem;
  width: 100%;
  background-color: #01bcb5;
  bottom: 0;
  left: 0;
}

.goodsBtn {
  width: 1.5rem;
  font-size: 0.26rem;
  height: 0.5rem;
  line-height: 0.46rem;
  border: 0.02rem solid #666;
  border-radius: 10000rem;
  margin-left: 0.2rem;
}
</style>