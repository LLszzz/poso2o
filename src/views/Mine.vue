<template>
  <!--我的-->
  <div class="Mine">
    <div class="top">
      <i class="iconfont icon-menu-line"></i>
      <div>
        <div>
          <img src="../assets/img/1.jpg" />
        </div>
        <span>比酷品牌</span>
      </div>
      <i></i>
    </div>
    <div class="center">
      <div>
        <p>
          直播回顾
          <span>(5)</span>
        </p>
        <div @click="$router.push({path:'/Review'})">
          <span>全部</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
      <div>
        <div>
          <div class="center_live">
            <div>
              <img src="../assets/img/3.jpg" />
              <span>直播</span>
            </div>
            <p>认证号单人四排...</p>
            <span>汐妖丶</span>
          </div>
          <div class="center_live">
            <div>
              <img src="../assets/img/3.jpg" />
              <span>直播</span>
            </div>
            <p>认证号单人四排...</p>
            <span>汐妖丶</span>
          </div>
          <div class="center_live">
            <div>
              <img src="../assets/img/3.jpg" />
              <span>直播</span>
            </div>
            <p>认证号单人四排...</p>
            <span>汐妖丶</span>
          </div>
          <div class="center_live">
            <div>
              <img src="../assets/img/3.jpg" />
              <span>直播</span>
            </div>
            <p>认证号单人四排...</p>
            <span>汐妖丶</span>
          </div>
        </div>
      </div>
      <div>
        <p>我的订单</p>
        <div @click="$router.push({path:'/personal/OrderList',query:{type:0}})">
          <span>查看更多订单</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
      <div>
        <ul>
          <li @click="$router.push({path:'/personal/OrderList',query:{type:1}})">
            <i class="iconfont icon-icon"></i>
            <p>待付款</p>
          </li>
          <li @click="$router.push({path:'/personal/OrderList',query:{type:2}})">
            <i class="iconfont icon-daifahuo"></i>
            <p>待发货</p>
          </li>
          <li @click="$router.push({path:'/personal/OrderList',query:{type:3}})">
            <i class="iconfont icon-daishouhuo"></i>
            <p>待收货</p>
          </li>
          <li @click="$router.push({path:'/personal/OrderList',query:{type:4}})">
            <i class="iconfont icon-pingjia"></i>
            <p>我的评价</p>
          </li>
          <li>
            <i class="iconfont icon-shouhou"></i>
            <p>退款/售后</p>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li @click="$router.push({path:'/personal/ChangePhone'})">
            <div>
              <i class="iconfont icon-icon--1"></i>
              <span>手机</span>
            </div>
            <div>
              <span>18564033392</span>
              <i class="iconfont icon-jiantou"></i>
            </div>
          </li>
          <li>
            <div>
              <i class="iconfont icon-dizhi"></i>
              <span>地址</span>
            </div>
            <div>
              <span class="onlyOneLine displyIB VW50">广东省广州市番禺区南村镇汉溪大道6号</span>
              <i class="iconfont icon-jiantou"></i>
            </div>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
    <tabBar :idx="4"></tabBar>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    tabBar
  }
};
</script>

<style lang="scss" scoped="scoped" >
@import url("//at.alicdn.com/t/font_1275272_dva6924wh8.css");
.top {
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-sizing: border-box;
  padding: 0 3vw;
  > i {
    font-size: 30px;
  }
  span {
    margin: 0 1vw;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    > div {
      width: 10vw;
      height: 10vw;
      border-radius: 5vw;
      overflow: hidden;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.center {
  width: 100vw;
  height: 84vh;
  overflow: hidden;
  > div:nth-of-type(1),
  > div:nth-of-type(3) {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    padding: 0 3vw;
    align-items: center;
    height: 6vh;
    background: white;
    margin-top: 0.5vh;
    border-bottom: 1px solid #dcdcdc;
    i {
      margin: 0 1vw;
    }
  }
  > div:nth-of-type(2) {
    margin-bottom: 0.5vh;
    height: 23vh;
    width: 100%;
    background: white;
    box-sizing: border-box;
    padding: 2vw;
    overflow-y: hidden;
    overflow-x: scroll;
    > div {
      white-space: nowrap;
    }
  }
  > div:nth-of-type(4) {
    margin-bottom: 0.5vh;
    width: 100%;
    height: 12vh;
    background: white;
    > ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 12vh;
      > li {
        text-align: center;
        > i {
          font-size: 24px;
        }
        > p {
          font-size: 12px;
        }
      }
    }
  }
  > div:nth-of-type(5) {
    li {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      width: 100%;
      padding: 0 3vw;
      align-items: center;
      height: 8vh;
      background: white;
      border-bottom: 1px solid #dcdcdc;
      > div {
        font-size: 14px;
      }
      > div:nth-of-type(2) {
        color: #9b9b9b;
      }
      i {
        margin: 0 1vw;
      }
    }
  }
  > div:nth-of-type(6) {
    width: 100%;
    margin-top: 0.2vh;
    height: 19vh;
    background: white;
  }
}
.center_live {
  display: inline-block;
  font-size: 0;
  width: 40vw;
  height: 23vh;
  margin-left: 2vw;
  > div {
    width: 100%;
    height: 14vh;
    position: relative;
    > img {
      width: 100%;
      height: 100%;
    }
    > span {
      background: #ff7701;
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 12px;
      padding: 0.5vw 2vw;
    }
  }
  > p {
    font-size: 14px;
    padding: 0 1vw;
  }
  > span {
    padding: 0 1vw;
    font-size: 12px;
    color: #9d9d9d;
  }
}
.Mine {
  width: 100%;
  height: 100%;
  background: aliceblue;
  position: relative;
}
</style>