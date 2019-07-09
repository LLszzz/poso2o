<template>
  <!--播放页面-->
  <div class="Video" style="background:black">
    <div class="live" @click="isShop=false">
      <video
        :width="width"
        :height="height"
        webkit-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        playsinline="true"
        autoplay="autoplay"
      >
        <source :src="liveInfo.replay_url==''?liveInfo.play_url:liveInfo.replay_url" type="video/mp4" />
        <object type="application/x-shockwave-flash" data="myvideo.swf">
          <param name="movie" value="myvideo.swf" />
          <param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
        </object>
        当前浏览器不支持 video直接播放，点击这里下载视频：
        <a href="myvideo.webm">下载视频</a>
      </video>
      <!--<ali-player ></ali-player>-->
    </div>
    <div class="top">
      <div @click="$router.push({path:'/Shop',query:{shop_id:liveInfo.shop_id}})">
        <div>
          <img :src="liveInfo.shop_logo" />
        </div>
        <div>
          <p>{{liveInfo.shop_name}}</p>
          <p>
            <span>{{liveInfo.lock_count}}</span>观看
          </p>
        </div>
      </div>
      <div @click="flowFun">
        <span v-if="liveInfo.has_flow==0" class="iconfont icon-chakantieziguanzhu">关注</span>
        <span v-else>已关注</span>
      </div>
      <i class="iconfont icon-fork" @click="$router.push({path:'/'})"></i>
    </div>
    <div class="left">
      <div>
        <!-- <i class="iconfont icon-icon2"></i>
        <span>2</span>
        <p>亲密度待领取</p>
        <i class="iconfont icon-jiantou1"></i>-->
      </div>
      <div style="height:40vh">
        <!-- <div>
          <h4>喜讯61进店福利</h4>
          <p>INFORMATION</p>
          <div>每天四场抢八个免单</div>
          <div>全场下单立减60元</div>
          <div>红色字体秒杀价属实</div>
        </div>
        <div>
          <h4>芳芳</h4>
          <p>INFORMATION</p>
          <div>157身高</div>
          <div>85斤</div>
          <div>上方关注芳芳哦</div>
        </div>-->
      </div>
      <div>
        <i class="iconfont icon-tubiaolunkuo-"></i>
        <span>W********8真正去买</span>
      </div>
      <div ref="chatBox">
        <div>
          <p v-for="item in msgList">
            <!-- <span>铁粉3</span> -->
            <span>{{item.fromNick}}</span>
            {{item.text}}
          </p>
        </div>
      </div>
      <div v-if="liveInfo.play_goods.length>0">
        <div>
          <img :src="liveInfo.play_goods[0].main_picture" />
        </div>
        <div>
          <p>{{liveInfo.play_goods[0].goods_name}}</p>
          <span>￥{{liveInfo.play_goods[0].price}}</span>
        </div>
      </div>
    </div>
    <div class="bottom flex">
      <i class="iconfont icon-gouwudai" @click="isShop=true"></i>
      <input
        type="text"
        @focus="placeholder=''"
        @keyup.enter="sendChat"
        v-model="placeholder"
        placeholder="跟主播聊什么"
      />
      <i class="iconfont icon-gengduo"></i>
      <i class="iconfont icon-fanhui1"></i>
      <i @click="likeFun" class="iconfont icon-aixin1" :class="liveInfo.has_like==0?'':'active'"></i>
      <span @click="likeFun" class="likePeople">{{liveInfo.like_count}}</span>
    </div>
    <div class="shop" :class="isShop?'isShop':''" style="overflow-y:hidden">
      <div>
        <div>
          <div>
            <img :src="liveInfo.shop_logo" />
          </div>
          <div>
            <h5>{{liveInfo.shop_name}}</h5>
            <span>综合评分 无字段</span>
          </div>
        </div>
        <div @click="$router.push({path:'/Shop',query:{shop_id:liveInfo.shop_id}})">进店逛逛</div>
      </div>
      <div style="height:45vh;overflow-y:auto">
        <div v-for="item in liveInfo.play_goods" class="shop_commodity">
          <div>
            <img :src="item.main_picture" />
          </div>
          <div>
            <p>{{item.goods_name}}</p>
            <div>
              <span>￥{{item.price}}</span>
              <i class="iconfont icon-tubiaolunkuo-" @click="getGoodsDetail(item.goods_id)"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--商品-->
    <div class="commodity" v-if="isCommodity">
      <div>
        <div>
          <div>
            <img :src="goodsInfo.main_picture" />
          </div>
          <div>
            <div @click="isCommodity=false">
              <i class="iconfont icon-fork"></i>
            </div>
            <span>￥{{goodsInfo.price}}</span>
            <p>库存{{goodsNumber}}件</p>
            <h5>{{selectSkuTips}}</h5>
          </div>
        </div>
        <div v-if="goods_size_arr.length>0" class="commodity_sel">
          <h5>尺码</h5>
          <ul>
            <li
              v-for="item,index in goods_size_arr"
              @click="selectSkuFun('size',index)"
              :class="item.active?'active':''"
            >{{item.name}}</li>
          </ul>
        </div>
        <div v-if="goods_colour_arr.length>0" class="commodity_sel">
          <h5>颜色分类</h5>
          <ul>
            <li
              v-for="item,index in goods_colour_arr"
              @click="selectSkuFun('colour',index)"
              :class="item.active?'active':''"
            >{{item.name}}</li>
          </ul>
        </div>
        <div class="quantity">
          <h5>购买数量</h5>
          <div>
            <i @click="Quantity>1?Quantity--:Quantity=1">-</i>
            <span>{{Quantity}}</span>
            <i @click="Quantity<goodsNumber?Quantity++:Quantity">+</i>
          </div>
        </div>
        <div class="commodity_bottom">
          <div @click="collectGoods">
            <div>
              <i class="iconfont icon-aixin" :class="has_collect==0?'':'active'"></i>
              <p>收藏</p>
            </div>
          </div>
          <div @click="goService">
            <div>
              <i class="iconfont icon-liaotian2"></i>
              <p>联系</p>
            </div>
          </div>
          <span style="background: #FF5101;">加入购物车</span>
          <span style="background: red;">立即购买</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueAliplayer from "vue-aliplayer";
import Chatroom from "@/assets/js/NIM_Web_Chatroom_v6.6.0.js";
import { all } from "q";
import { constants } from "crypto";
import { truncate } from "fs";
export default {
  data() {
    return {
      openid: "oaERPuCpXCiAkrXjE26qKh0FaMF0",
      play_id: "190709115435477",
      width: 0,
      height: 0,
      placeholder: "",
      isShop: false,
      isCommodity: false,
      Quantity: 1,
      chatroom: "",
      msgList: [],
      liveInfo: {
        play_goods: []
      },
      goodsInfo: [],
      goodsNumber: 0,
      selectSkuTips: "",
      goods_colour_arr: [],
      goods_size_arr: [],
      has_collect:0
    };
  },
  methods: {
    getSize() {
      var width = document.body.offsetWidth;
      var height = document.body.offsetHeight;
      this.width = width;
      this.height = height;
    },
    goService(){
      let that=this;
      that._data.chatroom.disconnect()
      this.$router.push({path:'/Service',query:{shop_id:that._data.liveInfo.shop_id}})
    },
    getGoodsDetail(goods_id) {
      let that = this;
      that.$require
        .get("https://wechat.poso2o.com/OpenGoodsManage.htm?Act=info", {
          params: {
            app_openid: "oaERPuCpXCiAkrXjE26qKh0FaMF0",
            shop_id: that._data.liveInfo.shop_id,
            goods_id
          }
        })
        .then(res => {
          let goodsInfo = res.data.data.goods;
          let goods_spec = goodsInfo.goods_spec;

          //颜色集合
          var colour_array = new Array();
          for (var i in goods_spec) {
            var isExist = false;
            for (var j in colour_array) {
              if (colour_array[j].name == goods_spec[i].spec_colour) {
                isExist = true;
                break;
              }
            }
            if (!isExist && goods_spec[i].spec_colour != "") {
              var colourObject = new Object();
              colourObject.name = goods_spec[i].spec_colour;
              colourObject.num = 1;
              colourObject.active = false;
              colour_array.push(colourObject);
            }
          }

          // goods.colours = colour_array;

          //尺寸集合
          var size_array = new Array();
          for (var i in goods_spec) {
            var isExist = false;
            for (var j in size_array) {
              if (size_array[j].name == goods_spec[i].spec_size) {
                isExist = true;
                break;
              }
            }
            if (!isExist && goods_spec[i].spec_size != "") {
              var sizeObject = new Object();
              sizeObject.name = goods_spec[i].spec_size;
              sizeObject.num = 1;
              sizeObject.active = false;
              size_array.push(sizeObject);
            }
          }
          // goods.sizes = size_array;
          let selectSkuTips = "选择";
          if (colour_array.length > 0) {
            selectSkuTips += "颜色";
            if (size_array.length > 0) {
              selectSkuTips += ",";
            }
          }
          if (size_array.length > 0) {
            selectSkuTips += "尺码";
          }
          that._data.goodsInfo = goodsInfo;
          that._data.goods_colour_arr = colour_array;
          that._data.goods_size_arr = size_array;
          that._data.goods_spec = goods_spec;
          that._data.goodsNumber = goodsInfo.goods_number;
          that._data.selectSkuTips = selectSkuTips;
          that._data.has_collect = res.data.data.has_collect;
          that._data.selectGoodsNumber = 1;
          that._data.isCommodity = true;
        });
    },
    flowFun() {
      //关注
      let that = this;
      let liveInfo = that._data.liveInfo;
      let nowFlowState = liveInfo.has_flow;
      let url = "Act=flow";
      if (nowFlowState != 0) {
        url = "Act=unFlow";
      }
      that.$require
        .get("https://wechat.poso2o.com/SmallPlayManage.htm?" + url, {
          params: {
            app_openid: that._data.openid,
            play_id: that._data.play_id
          }
        })
        .then(res => {
          if (res.data.code == "success") {
            //请求成功
            if (nowFlowState == 0) {
              nowFlowState = 1;
            } else {
              nowFlowState = 0;
            }
            that._data.liveInfo.nowFlowState = nowFlowState;
          } else {
            alert(res.data.msg);
          }
        })
        .catch(err => {});
    },
    likeFun() {
      //点赞
      let that = this;
      let liveInfo = that._data.liveInfo;
      let nowLikeState = liveInfo.has_like;
      let url = "Act=like";
      if (nowLikeState != 0) {
        url = "Act=unLike";
      }
      that.$require
        .get("https://wechat.poso2o.com/SmallPlayManage.htm?" + url, {
          params: {
            app_openid: that._data.openid,
            play_id: that._data.play_id
          }
        })
        .then(res => {
          if (res.data.code == "success") {
            //请求成功
            let like_count = liveInfo.like_count;
            if (nowLikeState == 0) {
              nowLikeState = 1;
              like_count += 1;
            } else {
              nowLikeState = 0;
              like_count -= 1;
            }
            that._data.liveInfo.has_like = nowLikeState;
            that._data.liveInfo.like_count = like_count;
          } else {
            alert(res.data.msg);
          }
        })
        .catch(err => {});
    },
    selectSkuFun(type, index) {
      //选择sku属性
      let that = this;
      let goods_spec = this._data.goods_spec;
      let goods_colour_arr = this._data.goods_colour_arr;
      let goods_size_arr = this._data.goods_size_arr;
      if (type == "colour") {
        //当前选择颜色、单选
        for (let i of goods_colour_arr) {
          i.active = false;
        }
        goods_colour_arr[index].active = true;
        //更新选择
        // that.setData({
        //   goods_colour_arr
        // })
        that._data.goods_colour_arr = goods_colour_arr;
        if (goods_size_arr.length > 0) {
          //如果有尺寸选项
          let isSelectSize = false;
          let selectIndex = -1;
          goods_size_arr.forEach((i, index) => {
            if (i.active) {
              //如果有选中尺寸
              isSelectSize = true;
              selectIndex = index;
            }
          });
          if (isSelectSize) {
            //两项皆以选择。查询库存生成tips
            for (let i of goods_spec) {
              if (
                i.spec_colour == goods_colour_arr[index].name &&
                i.spec_size == goods_size_arr[selectIndex].name
              ) {
                // that.setData({
                //   goodsNumber: i.spec_number,
                //   selectSkuTips: goods_colour_arr[index].name +','+ goods_size_arr[selectIndex].name
                // })
                that._data.goodsNumber = i.spec_number;
                that._data.selectSkuTips =
                  goods_colour_arr[index].name +
                  "," +
                  goods_size_arr[selectIndex].name;
              }
            }
          }
          //只选其中一项，不更新库存等信息，只更新按钮
        } else {
          //如果无尺寸选择，查询库存生成tips
          for (let i of goods_spec) {
            if (i.spec_colour == goods_colour_arr[index].name) {
              // that.setData({
              //   goodsNumber: i.spec_number,
              //   selectSkuTips: goods_colour_arr[index].name
              // })
              that._data.goodsNumber = i.spec_number;
              that._data.selectSkuTips = goods_colour_arr[index].name;
            }
          }
        }
      } else {
        //当前选择尺寸
        for (let i of goods_size_arr) {
          i.active = false;
        }
        goods_size_arr[index].active = true;
        //更新按钮选择，单选
        // that.setData({
        //   goods_size_arr
        // })
        that._data.goods_size_arr = goods_size_arr;
        if (goods_colour_arr.length > 0) {
          //如果有颜色选项
          let isSelectColour = false;
          let selectIndex = -1;
          goods_colour_arr.forEach((i, index) => {
            if (i.active) {
              //如果有选中颜色
              isSelectColour = true;
              selectIndex = index;
            }
          });
          if (isSelectColour) {
            //两项皆以选择。查询库存生成tips
            for (let i of goods_spec) {
              if (
                i.spec_colour == goods_colour_arr[selectIndex].name &&
                i.spec_size == goods_size_arr[index].name
              ) {
                // that.setData({
                //   goodsNumber: i.spec_number,
                //   selectSkuTips: goods_colour_arr[selectIndex].name + ',' + goods_size_arr[index].name
                // })
                that._data.goodsNumber = i.spec_number;
                console.log();
                that._data.selectSkuTips =
                  goods_colour_arr[selectIndex].name +
                  "," +
                  goods_size_arr[index].name;
              }
            }
          }
          //如不选择颜色选项，不更新库存等信息，只更新按钮视图
        } else {
          //如果无颜色选择，查询库存生成tips
          for (let i of goods_spec) {
            if (i.spec_size == goods_size_arr[index].name) {
              // that.setData({
              //   goodsNumber: i.spec_number,
              //   selectSkuTips: goods_size_arr[index].name
              // })
              that._data.goodsNumber = i.spec_number;
              that._data.selectSkuTips = goods_size_arr[index].name;
            }
          }
        }
      }
    },
    sendChat() {
      //聊天室发送信息
      let that = this;
      let message = this._data.placeholder;
      if (message == "") {
        alert("请输入消息内容");
        return false;
      }
      that._data.placeholder = "";
      this._data.chatroom.sendText({
        text: message,
        done: (error, msg) => {
          // console.log('发送聊天室' + msg.type + '消息' + (!error?'成功':'失败') + ', id=' + msg.idClient, error, msg);
          let msgList = that._data.msgList;
          msgList = msgList.concat([msg]);
          that._data.msgList = msgList;
          setTimeout(() => {
            that.$refs.chatBox.scrollTop = msgList.length * 100;
          }, 100);
        }
      });
    },
    collectGoods(){
      //收藏、取消收藏商品
      let that=this;
      let has_collect=that._data.has_collect;
      let url='Act=collect';
      if(has_collect!=0){
        url='Act=unCollect';
      }
            that.$require
        .get("https://wechat.poso2o.com/OpenGoodsManage.htm?" + url, {
          params: {
            app_openid: that._data.openid,
      shop_id: that._data.liveInfo.shop_id,
      goods_id: that._data.goodsInfo.goods_id
          }
        }).then((res) => {
          if(res.data.code=='success'){
            if(has_collect==0){
              has_collect=1
            }else{
              has_collect=0
            }
            that._data.has_collect=has_collect;
          }else{

            alert(res.data.msg)
          }
        }).catch((err) => {
          
        });
    }
  },
  mounted() {
    let that = this;
    that.getSize();
    that.$require
      .get("https://wechat.poso2o.com/SmallPlayManage.htm?Act=info", {
        params: {
          app_openid: that._data.openid,
          play_id: that._data.play_id
        }
      })
      .then(res => {
        let data = res.data.data;
        //渲染数据
        that._data.liveInfo = data;
        that._data.play_url = data.play_url;
        //链接网易云信
        that._data.chatroom = new Chatroom({
          appKey: "68bbcb2de458d1e283dd406024bed0e3",
          account: that._data.openid,
          token: that._data.openid,
          chatroomId: data.chatroom_id,
          chatroomAddresses: ["wlnimsc1.netease.im:443"],
          onconnect: onChatroomConnect,
          onerror: onChatroomError,
          onwillreconnect: onChatroomWillReconnect,
          ondisconnect: onChatroomDisconnect,
          // 消息
          onmsgs: onChatroomMsgs
        });
        function onChatroomConnect(chatroomInfo) {
          console.log("进入聊天室", chatroomInfo);
        }
        function onChatroomWillReconnect(obj) {
          // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
          console.log("即将重连", obj);
        }
        function onChatroomDisconnect(error) {
          // 此时说明 `SDK` 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
          console.log("连接断开", error);
          if (error) {
            switch (error.code) {
              // 账号或者密码错误, 请跳转到登录页面并提示错误
              case 302:
                break;
              // 被踢, 请提示错误后跳转到登录页面
              case "kicked":
                break;
              default:
                break;
            }
          }
        }
        function onChatroomError(error, obj) {
          console.log("发生错误", error, obj);
        }
        function onChatroomMsgs(msgs) {
          console.log("收到聊天室消息", msgs);
          let msgList = that._data.msgList;
          let newMsgList = [];
          for (let i of msgs) {
            if (i.text != "") {
              newMsgList.push(i);
            }
          }
          msgList = msgList.concat(newMsgList);
          that._data.msgList = msgList;
          setTimeout(() => {
            that.$refs.chatBox.scrollTop = msgList.length * 100;
          }, 100);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    "ali-player": VueAliplayer
  }
};
</script>

<style scoped="scoped" lang="scss">
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #fff;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #fff;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #fff;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #fff;
}
.isShop {
  transform: translateY(-55vh);
}
.shop {
  transition: all 1s;
  width: 94vw;
  margin: 0 auto;
  border-top-left-radius: 5vw;
  border-top-right-radius: 5vw;
  height: 55vh;
  background: white;
  overflow: hidden;
  overflow-y: scroll;
  > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    padding: 0 2vw;
    align-items: center;
    width: 88vw;
    margin: 0 auto;
    height: 10vh;
    border-bottom: 1px solid #f7f8f8;
    > div:nth-of-type(1) {
      display: flex;
      > div:nth-of-type(1) {
        margin-right: 2vw;
        width: 10vw;
        height: 10vw;
        overflow: hidden;
        border-radius: 50%;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      span {
        font-size: 12px;
        color: #bfbfbf;
      }
    }
    > div:nth-of-type(2) {
      width: 18vw;
      height: 4vh;
      background: linear-gradient(left, #ff8b01, #ff5501);
      font-size: 12px;
      text-align: center;
      line-height: 4vh;
      color: white;
      border-radius: 5vw;
      margin-right: 2vw;
    }
  }
}
.commodity_bottom {
  width: 100vw;
  height: 8vh;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #f5f5f5;
  align-items: center;
  > div {
    width: 20vw;
    display: inline-flex;
    height: 8vh;
    align-items: center;
    justify-content: center;
    align-items: center;
    > div {
      text-align: center;
      > i {
        font-size: 20px;
      }
      > p {
        text-align: center;
        width: 100%;
        font-size: 12px;
      }
    }
  }
  > span {
    width: 30vw;
    display: inline-block;
    height: 8vh;
    line-height: 8vh;
    text-align: center;
    color: white;
  }
}
.quantity {
  box-sizing: border-box;
  padding: 2vh 4vw;
  width: 96%;
  margin: 0 auto;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    > i,
    > span {
      display: inline-block;
      background: #f5f5f5;
      width: 8vw;
      height: 8vw;
      text-align: center;
      line-height: 8vw;
      font-style: normal;
      border-radius: 1vw;
    }
    > span {
      margin: 0 1vw;
      border-radius: 0;
    }
  }
}
.commodity {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  > div {
    position: relative;
    height: 70vh;
    width: 100%;
    background: white;
    position: absolute;
    left: 0;
    bottom: 0;
    > div:nth-of-type(1) {
      box-sizing: border-box;
      padding: 2vh 4vw;
      display: flex;
      width: 100%;
      > div:nth-of-type(1) {
        width: 34vw;
        height: 34vw;
        overflow: hidden;
        border-radius: 2vw;

        > img {
          width: 100%;
          height: 100%;
        }
      }
      > div:nth-of-type(2) {
        width: 58vw;
        box-sizing: border-box;
        padding: 1vh 0;
        padding-left: 4vw;
        > div {
          text-align: right;
          > i {
            display: inline-block;
            width: 5vw;
            height: 5vw;
            border: 1px solid black;
            border-radius: 50%;
            font-size: 12px;
            text-align: center;
            line-height: 5vw;
          }
        }
        > span {
          color: #ff5101;
          font-weight: bold;
        }
        > p {
          font-size: 12px;
          color: #b2b2b2;
          margin: 2vh 0;
        }
        > h5 {
          font-weight: 100;
        }
      }
    }
    .commodity_sel {
      box-sizing: border-box;
      padding: 2vh 4vw;
      width: 96%;
      margin: 0 auto;
      border-bottom: 1px solid #f5f5f5;
      > ul {
        width: 100%;
        display: flex;
        margin-top: 2vh;
        > li {
          margin-right: 4vw;
          min-width: 14vw;
          min-height: 5vh;
          text-align: center;
          padding: 0.5vh 4vw;
          background: #f5f5f5;
          border-radius: 2vw;
          display: flex;
          justify-content: center;
          align-items: center;
          > div {
            width: 6vw;
            height: 6vw;
            margin-right: 2vw;
            overflow: hidden;
            border-radius: 1vw;
            > img {
              width: 100%;
              height: 100%;
            }
          }
          > span {
            font-size: 12px;
          }
        }
      }
    }
  }
}

.shop_commodity {
  display: flex;
  justify-content: space-between;
  padding: 0 2vw;
  align-items: center;
  width: 88vw;
  margin: 0 auto;
  height: 20vh;
  border-bottom: 1px solid #f7f8f8;
  > div:nth-of-type(1) {
    width: 28vw;
    height: 28vw;
    overflow: hidden;
    border-radius: 2vw;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  > div:nth-of-type(2) {
    height: 26vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > p {
      font-weight: bold;
      width: 55vw;
    }
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > span {
        color: #f34364;
      }
      > i {
        color: #ed99aa;
        font-size: 14px;
        width: 7vw;
        height: 7vw;
        text-align: center;
        line-height: 7vw;
        border: 1px solid #ed99aa;
        border-radius: 50%;
      }
    }
  }
}
.Video {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.live {
  width: 100%;
  height: 100%;
  video {
    height: 100%;
  }
}
.top {
  position: absolute;
  text-align: left;
  top: 1vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 0 5vw;
  height: 8vh;
  align-items: center;
  box-sizing: border-box;
  font-size: 12px;
  > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    > div:nth-of-type(1) {
      width: 10vw;
      height: 10vw;
      border-radius: 5vw;
      overflow: hidden;
      margin-right: 2vw;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  > div:nth-of-type(2) {
    > span {
      background: #ff2851;
      font-size: 12px;
      padding: 1vh 2vw;
      border-radius: 4vw;
      box-sizing: border-box;
    }
  }
  > i {
    font-size: 24px;
  }
}
.left {
  position: absolute;
  top: 9vh;
  left: 0;
  padding: 0 4vw;
  box-sizing: border-box;
  > div:nth-of-type(1) {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4vw;
    padding: 0 2vw;
    display: flex;
    align-items: center;
    i {
      font-size: 24px;
    }
    > i,
    > span {
      color: #ff4144;
    }
    > p {
      color: white;
      margin: 0 2vw;
      font-size: 12px;
    }
  }
  > div:nth-of-type(2) {
    background: rgba(0, 0, 0, 0.1);
    color: white;
    display: inline-block;
    margin-top: 2vh;
    > div {
      padding: 2vw;
      color: #ffffff;
      > h4 {
        margin: 0.5vh 0;
        font-weight: 100;
      }
      > div {
        font-size: 12px;
        margin: 0.5vh 0;
      }
      > p {
        font-size: 12px;
        padding-bottom: 1vh;
        border-bottom: 3px solid #ffffff;
      }
    }
  }
  > div:nth-of-type(3) {
    margin-top: 1vh;
    background: #e55c3a;
    color: white;
    padding: 0.5vh 2vw;
    border-radius: 2vw;
    display: flex;
    align-items: center;
    > i {
      font-size: 20px;
    }
    > span {
      font-size: 14px;
      margin-left: 1vw;
    }
  }
  > div:nth-of-type(4) {
    overflow: hidden;
    width: 60vw;
    height: 24vh;
    overflow-y: scroll;
    > div {
      > p {
        color: white;
        margin: 1vh 0;
        font-size: 14px;
        line-height: 4vh;
        > span {
          margin-right: 1vw;
        }
        > span:nth-of-type(1) {
          font-size: 12px;
          background: deepskyblue;
          padding: 0.5vh 1vw;
          border-radius: 1vw;
          box-sizing: border-box;
        }
        > span:nth-of-type(2) {
          color: #8ad2f1;
        }
      }
    }
  }
  > div:nth-of-type(5) {
    width: 45vw;
    height: 8vh;
    background: white;
    border-radius: 1vw;
    overflow: hidden;
    display: flex;
    > div:nth-of-type(1) {
      width: 8vh;
      height: 8vh;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    > div:nth-of-type(2) {
      padding: 2vw;
      box-sizing: border-box;
      > p {
        font-size: 14px;
      }
      > span {
        font-size: 12px;
        color: #f23558;
      }
    }
  }
}
.bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  > i {
    color: white;
    font-size: 0.55rem;
  }
  > i:nth-of-type(1) {
    color: #ff3064;
    font-size: 40px;
  }
  input {
    padding: 1vw 2vw;
    border: none;
    border-bottom: 1px solid #696e79;
    background: transparent;
    color: #f0f8ff;
  }
}
.likePeople {
  position: absolute;
  right: 0.1rem;
  bottom: 0.55rem;
  background-color: #ff2851;
  color: white;
  padding: 0.02rem 0.08rem;
  border-radius: 1000rem;
  font-size: 0.2rem;
}
.iconfont.icon-aixin1.active {
  color: #ff2851;
}

.commodity > div .commodity_sel .active {
  color: white;
  background-color: #ff0000;
}

.iconfont.icon-aixin.active{
  color: #ff2851;
}
</style>