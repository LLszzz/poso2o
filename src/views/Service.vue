<template>
  <div>
    <div class="top borderBottomGray">
      <i class="iconfont icon-fanhui" @click="goBack"></i>
      <div>
        <span>商户名</span>
      </div>
    </div>
    <div>
      <div class="scrollY" :class="chatBoxHeight" ref="chatBox">
        <div v-for="item,index in msgsList">
          <div class="chatTips">
            <div>{{item.showTime}}</div>
          </div>
          <div v-if="item.flow=='in'" class="otherSay">
            <div class="avatar">
              <img
                mode="aspectFill"
                src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
              />
            </div>
            <div class="main">
              <div v-if="item.type=='text'" class="message" v-html="item.text"></div>
              <!-- <div class="photo">
                <img
                  mode="widthFix"
                  src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
                />
              </div>
              <div class="voice">
                <i class="iconfont icon-CombinedShapex voiceIcon"></i>
                2''
              </div>
              <div class="video">
                <img
                  mode="widthFix"
                  src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
                />
                <i class="iconfont icon-bofang fontWhite playIcon"></i>
              </div>-->
            </div>
          </div>
          <div v-if="item.flow=='out'" class="mySay">
            <div class="flex-1"></div>
            <div class="main">
              <div v-if="item.type=='text'" class="message" v-html="item.text"></div>
              <!-- <div class="photo">
                <img
                  mode="widthFix"
                  src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
                />
              </div>
              <div class="voice">
                <i class="iconfont icon-CombinedShapex voiceIcon"></i>
                2''
              </div>
              <div class="video">
                <img
                  mode="widthFix"
                  src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
                />
                <i class="iconfont icon-bofang fontWhite playIcon"></i>
              </div>-->
            </div>
            <div class="avatar">
              <img
                mode="aspectFill"
                src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
              />
            </div>
          </div>
        </div>
        <!-- <div class="chatTips">
          <div>10:10</div>
        </div>
        <div class="otherSay">
          <div class="avatar">
            <img
              mode="aspectFill"
              src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
            />
          </div>
          <div class="main">
            <div class="message">
              一段文字一
              <img src="http://yx-web.nosdn.127.net/webdoc/h5/emoji/emoji/emoji_0.png" />
            </div>
          </div>
        </div>
        <div class="chatTips">
          <div>10:10</div>
        </div>
        <div class="otherSay">
          <div class="avatar">
            <img
              mode="aspectFill"
              src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
            />
          </div>
          <div class="main">
            <div class="photo">
              <img
                mode="widthFix"
                src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
              />
            </div>
          </div>
        </div>
        <div class="chatTips">
          <div>10:10</div>
        </div>
        <div class="otherSay">
          <div class="avatar">
            <img
              mode="aspectFill"
              src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
            />
          </div>
          <div class="main">
            <div class="video">
              <img
                mode="widthFix"
                src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
              />
              <i class="iconfont icon-bofang fontWhite playIcon"></i>
            </div>
          </div>
        </div>
        <div class="chatTips">
          <div>10:10</div>
        </div>
        <div class="mySay">
          <div class="flex-1"></div>
          <div class="main">
            <div class="video">
              <img
                mode="widthFix"
                src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
              />
              <i class="iconfont icon-bofang fontWhite playIcon"></i>
            </div>
          </div>
          <div class="avatar">
            <img
              mode="aspectFill"
              src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
            />
          </div>
        </div>
        <div class="chatTips">
          <div>10:10</div>
        </div>
        <div class="otherSay">
          <div class="avatar">
            <img
              mode="aspectFill"
              src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
            />
          </div>
          <div class="main">
            <div class="voice">
              <i class="iconfont icon-CombinedShapex voiceIcon"></i>
              2''
            </div>
          </div>
        </div>
        <div class="chatTips">
          <div>10:10</div>
        </div>
        <div class="mySay">
          <div class="flex-1"></div>
          <div class="main">
            <div class="voice">
              <i class="iconfont icon-yuyin voiceIcon"></i>
              2''
            </div>
          </div>
          <div class="avatar">
            <img
              mode="aspectFill"
              src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
            />
          </div>
        </div>
        <div class="chatTips">
          <div>10:10</div>
        </div>
        <div class="mySay">
          <div class="flex-1"></div>
          <div class="main">
            <div class="message">一段文字一</div>
          </div>
          <div class="avatar">
            <img
              mode="aspectFill"
              src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
            />
          </div>
        </div>
        <div class="chatTips">
          <div>10:10</div>
        </div>
        <div class="mySay">
          <div class="flex-1"></div>
          <div class="main">
            <div class="photo">
              <img
                mode="widthFix"
                src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
              />
            </div>
          </div>
          <div class="avatar">
            <img
              mode="aspectFill"
              src="http://img4.cache.netease.com/lady/2014/11/20/201411200913407ed86.png"
            />
          </div>
        </div>-->
      </div>
      <div class="footer bgWhite">
        <div>
          <div class="chatinput-content">
            <!-- <img @click='changeInputType' class="chatinput-img" src="/static/icon/chat/voice.png" role="img"> -->
            <i @click="changeInputType" class="iconfont icon-yuyin1 chatinput-img"></i>
            <input
              v-if="!is_voice"
              bindconfirm="inputSend"
              bindinput="inputChange"
              class="chatinput-input"
              placeholder="输入文字"
              @keyup.enter="sendText"
              style="margin-bottom: 10px;"
              v-model="inputContent"
            />
            <div v-if="is_voice" class="chatinput-input voice">按住说话</div>
            <i class="iconfont icon-add chatinput-img fr"></i>
            <i @click="toggleEmoji" class="iconfont icon-emoji chatinput-img fr"></i>
            <!-- <img @click="toggleMore" class="chatinput-img fr" src="/static/icon/chat/more.png" role="img"> -->
            <!-- <img @click="toggleEmoji" class="chatinput-img fr emoji" src="/static/icon/chat/emoji.png" role="img"> -->
          </div>
        </div>
        <div v-if="showEmoji" class="emojiBox">
          <div class="emoji-content">
            <div v-if="emojiType=='emoji'">
              <swiper :options="swiperEmoji">
                <swiper-slide v-for="item in emojiList">
                  <div
                    v-for="item in item"
                    class="emoji-content-item"
                    @click="joinEmoji(item.name)"
                  >
                    <img class="emoji-content-img-emoji" :src="item.img" />
                  </div>
                  <div @click="deleteEmoji" class="emoji-content-item">
                    <img class="emoji-content-img-emoji" src="../assets/img/chat/delete.png" />
                  </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>

            <div v-if="emojiType=='ajmd'">
              <swiper :options="swiperEmoji">
                <swiper-slide v-for="item in ajmdList">
                  <div v-for="item in item" catchtap="joinEmoji" class="emoji-content-item">
                    <img class="emoji-content-img-other" :src="item.img" />
                  </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>

            <div v-if="emojiType=='xxy'">
              <swiper :options="swiperEmoji">
                <swiper-slide v-for="item in xxyList">
                  <div v-for="item in item" catchtap="joinEmoji" class="emoji-content-item">
                    <img class="emoji-content-img-other" :src="item.img" />
                  </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>

            <div v-if="emojiType=='lt'">
              <swiper :options="swiperEmoji">
                <swiper-slide v-for="item in ltList">
                  <div v-for="item in item" catchtap="joinEmoji" class="emoji-content-item">
                    <img class="emoji-content-img-other" :src="item.img" />
                  </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
          </div>
          <div class="emojiType">
            <div
              @click="changeEmojiType('emoji')"
              data-type="emoji"
              :class="emojiType=='emoji'?'active':''"
            >
              <img src="../assets/img/chat/album-emoji.png" />
            </div>
            <div
              @click="changeEmojiType('ajmd')"
              data-type="ajmd"
              :class="emojiType=='ajmd'?'active':''"
            >
              <img src="../assets/img/chat/album-ajtd.png" />
            </div>
            <div
              @click="changeEmojiType('xxy')"
              data-type="xxy"
              :class="emojiType=='xxy'?'active':''"
            >
              <img src="../assets/img/chat/album-xxy.png" />
            </div>
            <div @click="changeEmojiType('lt')" data-type="lt" :class="emojiType=='lt'?'active':''">
              <img src="../assets/img/chat/album-lt.png" />
            </div>
            <div class="flex-1"></div>
            <div @click="sendText" class="emojiSend">发送</div>
          </div>
        </div>
        <!-- <div wx:if='{{showMore}}' class='moreBox'>
      <div>
        <div>
          <img src='/static/icon/chat/photo.png'>
        </div>
        <div>相册</div>
      </div>
      <div>
        <div>
          <img src='/static/icon/chat/shoot.png'>
        </div>
        <div>拍摄</div>
      </div>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
import NIM from "@/assets/js/NIM_Web_NIM_v6.6.0.js";
import { setTimeout } from "timers";
export default {
  props: ["shop_id"],
  data() {
    return {
      chatBoxHeight: "VH85",
      inputContent: "",
      is_voice: false,
      showEmoj: false,
      emojiType: "emoji",
      showEmoji: false,
      swiperEmoji: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        }
      },
      emojiList: [[{}]],
      ajmdList: [[{}]],
      xxyList: [[{}]],
      ltList: [[{}]],
      nim: {},
      msgsList: [],
      openid: "oaERPuCpXCiAkrXjE26qKh0FaMF0"
    };
  },
  methods: {
    goBack() {
      this._data.nim.disconnect();
      this.$router.go(-1);
    },
    changeInputType() {
      //语音 文字切换
      this._data.is_voice = !this._data.is_voice;
    },
    sliceArray(array, size) {
      //数组分割行数
      var result = [];
      for (var x = 0; x < Math.ceil(array.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(array.slice(start, end));
      }
      return result;
    },
    changeEmojiType(type) {
      //切换emoji 表情包
      this._data.emojiType = type;
    },
    toggleEmoji() {
      //表情包展示隐藏
      let showEmoji = this._data.showEmoji;
      let chatBoxHeight = "VH85";
      if (!showEmoji) {
        chatBoxHeight = "VH50";
      }
      this._data.showEmoji = !showEmoji;
      this._data.chatBoxHeight = chatBoxHeight;
    },
    joinEmoji(name) {
      //加入emoji
      let inputContent = this._data.inputContent;
      inputContent += name;
      this._data.inputContent = inputContent;
    },
    deleteEmoji() {
      //删除emoji
      let inputContent = this._data.inputContent;
      let r_inputContent = inputContent
        .split("")
        .reverse()
        .join("");
      let start = r_inputContent.indexOf("]");
      let end = r_inputContent.indexOf("[");
      if (start != -1 && end != -1) {
        let r_result =
          r_inputContent.slice(0, start) + r_inputContent.slice(end + 1);
        let result = r_result
          .split("")
          .reverse()
          .join("");
        this._data.inputContent = result;
      }
    },
    timeStampToTime(timeStamp, format, dateSeparate, timeSeparate) {
      //判断时间戳位数，如等于10位即乘1000；
      if (timeSeparate == undefined) {
        timeSeparate = ":";
      }
      if (timeStamp == "now") {
        timeStamp = Date.parse(new Date());
      }
      if (timeStamp < 9999999999) {
        timeStamp *= 1000;
      }
      var date = new Date(timeStamp);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      month = month >= 10 ? month : "0" + month;
      var day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
      var hour =
        date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
      var minute =
        date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
      var second =
        date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds();
      if (format == "yMd") {
        return year + dateSeparate + month + dateSeparate + day;
      } else if (format == "yMdhm") {
        return (
          year +
          dateSeparate +
          month +
          dateSeparate +
          day +
          " " +
          hour +
          timeSeparate +
          minute
        );
      } else if (format == "hm") {
        return hour + timeSeparate + minute;
      }
    },
    sendText() {
      //发送文本
      let that = this;
      let inputContent = that._data.inputContent;
      if (inputContent == "") {
        alert("请输入文本信息");
      } else {
        that._data.nim.sendText({
          scene: "p2p",
          to: that._data.shop_id,
          text: inputContent,
          done: (error, msg) => {
            console.log(
              "发送" +
                msg.scene +
                " " +
                msg.type +
                "消息" +
                (!error ? "成功" : "失败") +
                ", id=" +
                msg.idClient,
              error,
              msg
            );

            if (!error) {
              that.renewUI();
              let msgsList = that._data.msgsList;
              let newMsg = msg;
              let todayZeroTime =
                that.timeStampToTime("now", "yMd", ".") + " 0:0:0";
              let todayZeroTimeStamp = new Date(todayZeroTime).getTime();
              //验证发送人，生成时间
              let openidLowed = that._data.openid.toLowerCase();

              newMsg.showTime = that.timeStampToTime(
                newMsg.time,
                "yMdhm",
                "-",
                ":"
              );

              if (newMsg.time > todayZeroTimeStamp) {
                newMsg.showTime = that.timeStampToTime(
                  newMsg.time,
                  "hm",
                  "-",
                  ":"
                );
              }
              if (newMsg.type == "text") {
                //遇到[]遍历，替换表情
                let text = newMsg.text;
                // let textArr_r=text.split('').reverse();
                let textArr = text.split("");
                let leftParenthesis = [];
                let rightParenthesis = [];
                textArr.forEach((j, index) => {
                  if (j == "[") {
                    leftParenthesis.push(index);
                  }
                  if (j == "]") {
                    rightParenthesis.push(index);
                  }
                });
                let hasExpressionArr = [];
                leftParenthesis.forEach((j, index) => {
                  //开始index j 结束index rightParenthesis[index]
                  hasExpressionArr.push(
                    textArr.slice(j, rightParenthesis[index] + 1).join("")
                  );
                });
                hasExpressionArr = Array.from(new Set(hasExpressionArr));
                let hasExpressionObj = [];
                for (let j of hasExpressionArr) {
                  for (let k of that._data.new_emojiList) {
                    if (j == k.name) {
                      hasExpressionObj.push(k);
                    }
                  }
                }
                hasExpressionObj.forEach((j, index) => {
                  text = text.split(j.name);
                  text = text.join(`<img class='emojiForChat' src='${j.img}'>`);
                  // text.join('<img src='+j.img+'>')
                });
                newMsg.text = text;
                msgsList.push(newMsg);
                that._data.msgsList = msgsList;
                //重绘所有
                that.renewUI();
              }
            }
          }
        });
      }
    },
    renewUI() {
      let that = this;
      that._data.showEmoji = false;
      that._data.inputContent = "";
      setTimeout(() => {
        that.$refs.chatBox.scrollTop = that._data.msgsList.length * 1000;
      }, 100);
    },
    openNim() {
      let that = this;
      var data = {};
      that._data.nim = new NIM({
        // 初始化SDK
        // debug: true
        appKey: "68bbcb2de458d1e283dd406024bed0e3",
        account: that._data.openid,
        token: that._data.openid,
        onconnect: onConnect,
        onerror: onError,
        onwillreconnect: onWillReconnect,
        ondisconnect: onDisconnect,
        // 多端
        onloginportschange: onLoginPortsChange,
        // 用户关系
        onblacklist: onBlacklist,
        onsyncmarkinblacklist: onMarkInBlacklist,
        onmutelist: onMutelist,
        onsyncmarkinmutelist: onMarkInMutelist,
        // 好友关系
        onfriends: onFriends,
        onsyncfriendaction: onSyncFriendAction,
        // 用户名片
        onmyinfo: onMyInfo,
        onupdatemyinfo: onUpdateMyInfo,
        onusers: onUsers,
        onupdateuser: onUpdateUser,
        // 超大群
        onSuperTeams: onSuperTeams,
        onSyncCreateSuperTeam: onSyncCreateSuperTeam,
        onDismissSuperTeam: onDismissSuperTeam,
        onUpdateSuperTeamMember: onUpdateSuperTeamMember,
        onUpdateSuperTeam: onUpdateSuperTeam, // 更新超大群的回调
        onAddSuperTeamMembers: onAddSuperTeamMembers, // 新成员入超大群的回调
        onRemoveSuperTeamMembers: onRemoveSuperTeamMembers,
        // 群组
        onteams: onTeams,
        onsynccreateteam: onCreateTeam,
        onteammembers: onTeamMembers,
        onsyncteammembersdone: onSyncTeamMembersDone,
        onupdateteammember: onUpdateTeamMember,
        // 会话
        onsessions: onSessions,
        onupdatesession: onUpdateSession,
        // 消息
        onroamingmsgs: onRoamingMsgs,
        onofflinemsgs: onOfflineMsgs,
        onmsg: onMsg,
        // 系统通知
        onofflinesysmsgs: onOfflineSysMsgs,
        onsysmsg: onSysMsg,
        onupdatesysmsg: onUpdateSysMsg,
        onsysmsgunread: onSysMsgUnread,
        onupdatesysmsgunread: onUpdateSysMsgUnread,
        onofflinecustomsysmsgs: onOfflineCustomSysMsgs,
        oncustomsysmsg: onCustomSysMsg,
        // 同步完成
        onsyncdone: onSyncDone
      });

      function onConnect() {
        console.log("连接成功");
      }
      function onWillReconnect(obj) {
        // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
        console.log("即将重连", obj);
      }
      function onDisconnect(error) {
        // 此时说明 `SDK` 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
        console.log("连接断开", error);
        if (error) {
          switch (error.code) {
            // 账号或者密码错误, 请跳转到登录页面并提示错误
            case 302:
              break;
            // 重复登录, 已经在其它端登录了, 请跳转到登录页面并提示错误
            case 417:
              break;
            // 被踢, 请提示错误后跳转到登录页面
            case "kicked":
              break;
            default:
              break;
          }
        }
      }
      function onError(error, obj) {
        console.log("发生错误", error, obj);
      }

      function onLoginPortsChange(loginPorts) {
        console.log("当前登录帐号在其它端的状态发生改变了", loginPorts);
      }

      function onBlacklist(blacklist) {
        console.log("收到黑名单", blacklist);
        data.blacklist = that._data.nim.mergeRelations(
          data.blacklist,
          blacklist
        );
        data.blacklist = that._data.nim.cutRelations(
          data.blacklist,
          blacklist.invalid
        );
        refreshBlacklistUI();
      }
      function onMarkInBlacklist(obj) {
        console.log(
          obj.account + "被你" + (obj.isAdd ? "加入" : "移除") + "黑名单",
          obj
        );
        if (obj.isAdd) {
          addToBlacklist(obj);
        } else {
          removeFromBlacklist(obj);
        }
      }
      function addToBlacklist(obj) {
        data.blacklist = that._data.nim.mergeRelations(
          data.blacklist,
          obj.record
        );
        refreshBlacklistUI();
      }
      function removeFromBlacklist(obj) {
        data.blacklist = that._data.nim.cutRelations(
          data.blacklist,
          obj.record
        );
        refreshBlacklistUI();
      }
      function refreshBlacklistUI() {
        // 刷新界面
      }
      function onMutelist(mutelist) {
        console.log("收到静音列表", mutelist);
        data.mutelist = that._data.nim.mergeRelations(data.mutelist, mutelist);
        data.mutelist = that._data.nim.cutRelations(
          data.mutelist,
          mutelist.invalid
        );
        refreshMutelistUI();
      }
      function onMarkInMutelist(obj) {
        console.log(
          obj.account + "被你" + (obj.isAdd ? "加入" : "移除") + "静音列表",
          obj
        );
        if (obj.isAdd) {
          addToMutelist(obj);
        } else {
          removeFromMutelist(obj);
        }
      }
      function addToMutelist(obj) {
        data.mutelist = that._data.nim.mergeRelations(
          data.mutelist,
          obj.record
        );
        refreshMutelistUI();
      }
      function removeFromMutelist(obj) {
        data.mutelist = that._data.nim.cutRelations(data.mutelist, obj.record);
        refreshMutelistUI();
      }
      function refreshMutelistUI() {
        // 刷新界面
      }

      function onFriends(friends) {
        console.log("收到好友列表", friends);
        data.friends = that._data.nim.mergeFriends(data.friends, friends);
        data.friends = that._data.nim.cutFriends(data.friends, friends.invalid);
        refreshFriendsUI();
      }
      function onSyncFriendAction(obj) {
        console.log("收到好友操作", obj);
        switch (obj.type) {
          case "addFriend":
            console.log("你在其它端直接加了一个好友" + obj);
            onAddFriend(obj.friend);
            break;
          case "applyFriend":
            console.log("你在其它端申请加了一个好友" + obj);
            break;
          case "passFriendApply":
            console.log("你在其它端通过了一个好友申请" + obj);
            onAddFriend(obj.friend);
            break;
          case "rejectFriendApply":
            console.log("你在其它端拒绝了一个好友申请" + obj);
            break;
          case "deleteFriend":
            console.log("你在其它端删了一个好友" + obj);
            onDeleteFriend(obj.account);
            break;
          case "updateFriend":
            console.log("你在其它端更新了一个好友", obj);
            onUpdateFriend(obj.friend);
            break;
        }
      }
      function onAddFriend(friend) {
        data.friends = that._data.nim.mergeFriends(data.friends, friend);
        refreshFriendsUI();
      }
      function onDeleteFriend(account) {
        data.friends = that._data.nim.cutFriendsByAccounts(
          data.friends,
          account
        );
        refreshFriendsUI();
      }
      function onUpdateFriend(friend) {
        data.friends = that._data.nim.mergeFriends(data.friends, friend);
        refreshFriendsUI();
      }
      function refreshFriendsUI() {
        // 刷新界面
      }

      function onMyInfo(user) {
        console.log("收到我的名片", user);
        data.myInfo = user;
        updateMyInfoUI();
      }
      function onUpdateMyInfo(user) {
        console.log("我的名片更新了", user);
        data.myInfo = that._data.nim.util.merge(data.myInfo, user);
        updateMyInfoUI();
      }
      function updateMyInfoUI() {
        // 刷新界面
      }
      function onUsers(users) {
        console.log("收到用户名片列表", users);
        data.users = that._data.nim.mergeUsers(data.users, users);
      }
      function onUpdateUser(user) {
        console.log("用户名片更新了", user);
        data.users = that._data.nim.mergeUsers(data.users, user);
      }

      function onSuperTeams(superTeams) {
        console.log("收到超大群列表", superTeams);
        data.superTeams = that._data.nim.mergeTeams(
          data.superTeams,
          superTeams
        );
        onInvalidSuperTeams(superTeams.invalid);
      }
      function onInvalidSuperTeams(teams) {
        data.superTeams = that._data.nim.cutTeams(data.superTeams, teams);
        data.invalidSuperTeams = that._data.nim.mergeTeams(
          data.invalidSuperTeams,
          teams
        );
        refreshSuperTeamsUI();
      }

      function onSyncCreateSuperTeam(team, owner) {
        console.log("创建了一个超大群 onSyncCreateSuperTeam ", team, owner);
        data.superTeams = that._data.nim.mergeTeams(data.superTeams, team);
        refreshSuperTeamsUI();
        onSuperTeamMembers({
          teamId: team.teamId,
          members: owner
        });
      }
      function onAddSuperTeamMembers(team, accounts, members) {
        console.log(
          "添加群成员 onAddSuperTeamMembers ",
          team,
          accounts,
          members
        );
        if (!accounts && !members) {
          accounts = team.accounts || [];
          members = team.members || [];
          team = team.team || {};
        }
        var teamId = team.teamId;

        // 如果是别人被拉进来了，那么拼接群成员列表
        // 如果是自己被拉进来了，那么同步一次群成员列表

        if (accounts.indexOf(data.account) === -1) {
          onSuperTeamMembers({
            teamId: teamId,
            members: members
          });
        } else {
          // ...
        }
        onSuperTeams(team);
      }
      function onDismissSuperTeam(obj) {
        console.log("解散超大群 onDismissSuperTeam", obj);
        var teamId = obj.teamId;
        removeAllSuperTeamMembers(teamId);
        data.superTeams = that._data.nim.cutTeams(data.superTeams, obj);
        refreshSuperTeamsUI();
        refreshSuperTeamMembersUI();
      }
      function onRemoveSuperTeamMembers(obj) {
        console.log(
          "移除了群成员 onRemoveSuperTeamMembers ",
          obj.accounts,
          obj
        );
        var teamId = obj.team.teamId;
        var accounts = obj.accounts;
        var team;
        if (!teamId && !accounts) {
          accounts = obj.accounts || [];
        }
        // 如果是别人被踢了，那么移除群成员
        // 如果是自己被踢了，那么离开该群
        if (accounts.indexOf(data.account) === -1) {
          if (team) {
            onSuperTeams(team);
          }
          if (!data.superTeamMembers) {
            data.superTeamMembers = {};
          }
          data.superTeamMembers[
            teamId
          ] = that._data.nim.cutTeamMembersByAccounts(
            data.superTeamMembers[teamId],
            teamId,
            accounts
          );
          refreshSuperTeamMembersUI();
        } else {
          leaveSuperTeam(teamId);
        }
      }
      function onUpdateSuperTeam(err, msg) {
        console.log("更新了超大群 teamId", err, msg);
      }
      function onUpdateSuperTeamMember(member) {
        console.log("群成员信息更新了", member);
      }
      function leaveSuperTeam(teamId) {
        onInvalidSuperTeams({
          teamId: teamId
        });
        removeAllSuperTeamMembers(teamId);
      }
      function refreshSuperTeamsUI() {}
      function refreshSuperTeamMembersUI() {}
      function removeAllSuperTeamMembers() {}
      function onTeams(teams) {
        console.log("群列表", teams);
        data.teams = that._data.nim.mergeTeams(data.teams, teams);
        onInvalidTeams(teams.invalid);
      }
      function onInvalidTeams(teams) {
        data.teams = that._data.nim.cutTeams(data.teams, teams);
        data.invalidTeams = that._data.nim.mergeTeams(data.invalidTeams, teams);
        refreshTeamsUI();
      }
      function onCreateTeam(team) {
        console.log("你创建了一个群", team);
        data.teams = that._data.nim.mergeTeams(data.teams, team);
        refreshTeamsUI();
        onTeamMembers({
          teamId: team.teamId,
          members: owner
        });
      }
      function refreshTeamsUI() {
        // 刷新界面
      }
      function onTeamMembers(obj) {
        console.log("收到群成员", obj);
        var teamId = obj.teamId;
        var members = obj.members;
        data.teamMembers = data.teamMembers || {};
        data.teamMembers[teamId] = that._data.nim.mergeTeamMembers(
          data.teamMembers[teamId],
          members
        );
        data.teamMembers[teamId] = that._data.nim.cutTeamMembers(
          data.teamMembers[teamId],
          members.invalid
        );
        refreshTeamMembersUI();
      }
      function onSyncTeamMembersDone() {
        console.log("同步群列表完成");
      }
      function onUpdateTeamMember(teamMember) {
        console.log("群成员信息更新了", teamMember);
        onTeamMembers({
          teamId: teamMember.teamId,
          members: teamMember
        });
      }
      function refreshTeamMembersUI() {
        // 刷新界面
      }

      function onSessions(sessions) {
        console.log("收到会话列表", sessions);
        data.sessions = that._data.nim.mergeSessions(data.sessions, sessions);
        updateSessionsUI();
      }
      function onUpdateSession(session) {
        console.log("会话更新了", session);
        data.sessions = that._data.nim.mergeSessions(data.sessions, session);
        let msgsList = that._data.msgsList;
        let newMsg = session.lastMsg;
        if (newMsg.flow == "in") {
          let todayZeroTime =
            that.timeStampToTime("now", "yMd", ".") + " 0:0:0";
          let todayZeroTimeStamp = new Date(todayZeroTime).getTime();
          //验证发送人，生成时间
          let openidLowed = that._data.openid.toLowerCase();

          newMsg.showTime = that.timeStampToTime(
            newMsg.time,
            "yMdhm",
            "-",
            ":"
          );

          if (newMsg.time > todayZeroTimeStamp) {
            newMsg.showTime = that.timeStampToTime(newMsg.time, "hm", "-", ":");
          }
          if (newMsg.type == "text") {
            //遇到[]遍历，替换表情
            let text = newMsg.text;
            // let textArr_r=text.split('').reverse();
            let textArr = text.split("");
            let leftParenthesis = [];
            let rightParenthesis = [];
            textArr.forEach((j, index) => {
              if (j == "[") {
                leftParenthesis.push(index);
              }
              if (j == "]") {
                rightParenthesis.push(index);
              }
            });
            let hasExpressionArr = [];
            leftParenthesis.forEach((j, index) => {
              //开始index j 结束index rightParenthesis[index]
              hasExpressionArr.push(
                textArr.slice(j, rightParenthesis[index] + 1).join("")
              );
            });
            hasExpressionArr = Array.from(new Set(hasExpressionArr));
            let hasExpressionObj = [];
            for (let j of hasExpressionArr) {
              for (let k of that._data.new_emojiList) {
                if (j == k.name) {
                  hasExpressionObj.push(k);
                }
              }
            }
            hasExpressionObj.forEach((j, index) => {
              text = text.split(j.name);
              text = text.join(`<img class='emojiForChat' src='${j.img}'>`);
              // text.join('<img src='+j.img+'>')
            });
            newMsg.text = text;
            msgsList.push(newMsg);
            that._data.msgsList = msgsList;
            setTimeout(() => {
              that.$refs.chatBox.scrollTop = that._data.msgsList.length * 1000;
            }, 100);
          }
        }

        updateSessionsUI();
      }
      function updateSessionsUI() {
        // 刷新界面
      }

      function onRoamingMsgs(obj) {
        console.log("漫游消息", obj);
        pushMsg(obj.msgs);
      }
      function onOfflineMsgs(obj) {
        console.log("离线消息", obj);
        pushMsg(obj.msgs);
      }
      function onMsg(msg) {
        console.log("收到消息", msg.scene, msg.type, msg);
        pushMsg(msg);
      }
      function pushMsg(msgs) {
        if (!Array.isArray(msgs)) {
          msgs = [msgs];
        }
        var sessionId = msgs[0].sessionId;
        data.msgs = data.msgs || {};
        data.msgs[sessionId] = that._data.nim.mergeMsgs(
          data.msgs[sessionId],
          msgs
        );
      }

      function onOfflineSysMsgs(sysMsgs) {
        console.log("收到离线系统通知", sysMsgs);
        pushSysMsgs(sysMsgs);
      }
      function onSysMsg(sysMsg) {
        console.log("收到系统通知", sysMsg);
        pushSysMsgs(sysMsg);
      }
      function onUpdateSysMsg(sysMsg) {
        pushSysMsgs(sysMsg);
      }
      function pushSysMsgs(sysMsgs) {
        data.sysMsgs = that._data.nim.mergeSysMsgs(data.sysMsgs, sysMsgs);
        refreshSysMsgsUI();
      }
      function onSysMsgUnread(obj) {
        console.log("收到系统通知未读数", obj);
        data.sysMsgUnread = obj;
        refreshSysMsgsUI();
      }
      function onUpdateSysMsgUnread(obj) {
        console.log("系统通知未读数更新了", obj);
        data.sysMsgUnread = obj;
        refreshSysMsgsUI();
      }
      function refreshSysMsgsUI() {
        // 刷新界面
      }
      function onOfflineCustomSysMsgs(sysMsgs) {
        console.log("收到离线自定义系统通知", sysMsgs);
      }
      function onCustomSysMsg(sysMsg) {
        console.log("收到自定义系统通知", sysMsg);
      }

      function onSyncDone() {
        console.log("同步完成");
        //添加商家为好友
        that._data.nim.addFriend({
          account: that._data.shop_id,
          ps: "ps",
          done: (error, obj) => {
            console.log(
              "直接加为好友" + (!error ? "成功" : "失败"),
              error,
              obj
            );
            if (!error) {
              onAddFriend(obj.friend);
              //获取聊天记录
              that._data.nim.getHistoryMsgs({
                scene: "p2p",
                to: that._data.shop_id,
                reverse: true,
                done: (error, obj) => {
                  console.log(
                    "获取云端历史记录" + (!error ? "成功" : "失败"),
                    error,
                    obj
                  );
                  if (!error) {
                    console.log(obj.msgs);
                    let msgsList = [];
                    let todayZeroTime =
                      that.timeStampToTime("now", "yMd", ".") + " 0:0:0";
                    let todayZeroTimeStamp = new Date(todayZeroTime).getTime();
                    //验证发送人，生成时间
                    let openidLowed = that._data.openid.toLowerCase();
                    for (let i of obj.msgs) {
                      i.showTime = that.timeStampToTime(
                        i.time,
                        "yMdhm",
                        "-",
                        ":"
                      );
                      if (i.from == openidLowed) {
                        //来自自己发送
                        i.flow = "out";
                      }
                      if (i.time > todayZeroTimeStamp) {
                        i.showTime = that.timeStampToTime(
                          i.time,
                          "hm",
                          "-",
                          ":"
                        );
                      }
                      if (i.type == "text") {
                        //遇到[]遍历，替换表情
                        let text = i.text;
                        // let textArr_r=text.split('').reverse();
                        let textArr = text.split("");
                        let leftParenthesis = [];
                        let rightParenthesis = [];
                        textArr.forEach((j, index) => {
                          if (j == "[") {
                            leftParenthesis.push(index);
                          }
                          if (j == "]") {
                            rightParenthesis.push(index);
                          }
                        });
                        let hasExpressionArr = [];
                        leftParenthesis.forEach((j, index) => {
                          //开始index j 结束index rightParenthesis[index]
                          hasExpressionArr.push(
                            textArr
                              .slice(j, rightParenthesis[index] + 1)
                              .join("")
                          );
                        });
                        hasExpressionArr = Array.from(
                          new Set(hasExpressionArr)
                        );
                        let hasExpressionObj = [];
                        for (let j of hasExpressionArr) {
                          for (let k of that._data.new_emojiList) {
                            if (j == k.name) {
                              hasExpressionObj.push(k);
                            }
                          }
                        }
                        hasExpressionObj.forEach((j, index) => {
                          text = text.split(j.name);
                          text = text.join(
                            `<img class='emojiForChat' src='${j.img}'>`
                          );
                          // text.join('<img src='+j.img+'>')
                        });
                        i.text = text;
                      }
                      msgsList.push(i);
                    }
                    that._data.msgsList = msgsList;
                    //重绘所有
                    that.renewUI();
                  }
                }
              });
            }
          }
        });
      }
    }
  },
  mounted() {
    let that = this;
    // that._data.shop_id = that.$route.query.shop_id;
    that._data.shop_id = "oyTPiwPXUDSEKyLykGUFpZr0CmzM";
    //生成emoji
    let emojiList = {
      emoji: {
        "[大笑]": {
          file: "emoji_0.png"
        },
        "[可爱]": {
          file: "emoji_01.png"
        },
        "[色]": {
          file: "emoji_02.png"
        },
        "[嘘]": {
          file: "emoji_03.png"
        },
        "[亲]": {
          file: "emoji_04.png"
        },
        "[呆]": {
          file: "emoji_05.png"
        },
        "[口水]": {
          file: "emoji_06.png"
        },
        "[汗]": {
          file: "emoji_145.png"
        },
        "[呲牙]": {
          file: "emoji_07.png"
        },
        "[鬼脸]": {
          file: "emoji_08.png"
        },
        "[害羞]": {
          file: "emoji_09.png"
        },
        "[偷笑]": {
          file: "emoji_10.png"
        },
        "[调皮]": {
          file: "emoji_11.png"
        },
        "[可怜]": {
          file: "emoji_12.png"
        },
        "[敲]": {
          file: "emoji_13.png"
        },
        "[惊讶]": {
          file: "emoji_14.png"
        },
        "[流感]": {
          file: "emoji_15.png"
        },
        "[委屈]": {
          file: "emoji_16.png"
        },
        "[流泪]": {
          file: "emoji_17.png"
        },
        "[嚎哭]": {
          file: "emoji_18.png"
        },
        "[惊恐]": {
          file: "emoji_19.png"
        },
        "[怒]": {
          file: "emoji_20.png"
        },
        "[酷]": {
          file: "emoji_21.png"
        },
        "[不说]": {
          file: "emoji_22.png"
        },
        "[鄙视]": {
          file: "emoji_23.png"
        },
        "[阿弥陀佛]": {
          file: "emoji_24.png"
        },
        "[奸笑]": {
          file: "emoji_25.png"
        },
        "[睡着]": {
          file: "emoji_26.png"
        },
        "[口罩]": {
          file: "emoji_27.png"
        },
        "[努力]": {
          file: "emoji_28.png"
        },
        "[抠鼻孔]": {
          file: "emoji_29.png"
        },
        "[疑问]": {
          file: "emoji_30.png"
        },
        "[怒骂]": {
          file: "emoji_31.png"
        },
        "[晕]": {
          file: "emoji_32.png"
        },
        "[呕吐]": {
          file: "emoji_33.png"
        },
        "[拜一拜]": {
          file: "emoji_160.png"
        },
        "[惊喜]": {
          file: "emoji_161.png"
        },
        "[流汗]": {
          file: "emoji_162.png"
        },
        "[卖萌]": {
          file: "emoji_163.png"
        },
        "[默契眨眼]": {
          file: "emoji_164.png"
        },
        "[烧香拜佛]": {
          file: "emoji_165.png"
        },
        "[晚安]": {
          file: "emoji_166.png"
        },
        "[强]": {
          file: "emoji_34.png"
        },
        "[弱]": {
          file: "emoji_35.png"
        },
        "[OK]": {
          file: "emoji_36.png"
        },
        "[拳头]": {
          file: "emoji_37.png"
        },
        "[胜利]": {
          file: "emoji_38.png"
        },
        "[鼓掌]": {
          file: "emoji_39.png"
        },
        "[握手]": {
          file: "emoji_200.png"
        },
        "[发怒]": {
          file: "emoji_40.png"
        },
        "[骷髅]": {
          file: "emoji_41.png"
        },
        "[便便]": {
          file: "emoji_42.png"
        },
        "[火]": {
          file: "emoji_43.png"
        },
        "[溜]": {
          file: "emoji_44.png"
        },
        "[爱心]": {
          file: "emoji_45.png"
        },
        "[心碎]": {
          file: "emoji_46.png"
        },
        "[钟情]": {
          file: "emoji_47.png"
        },
        "[唇]": {
          file: "emoji_48.png"
        },
        "[戒指]": {
          file: "emoji_49.png"
        },
        "[钻石]": {
          file: "emoji_50.png"
        },
        "[太阳]": {
          file: "emoji_51.png"
        },
        "[有时晴]": {
          file: "emoji_52.png"
        },
        "[多云]": {
          file: "emoji_53.png"
        },
        "[雷]": {
          file: "emoji_54.png"
        },
        "[雨]": {
          file: "emoji_55.png"
        },
        "[雪花]": {
          file: "emoji_56.png"
        },
        "[爱人]": {
          file: "emoji_57.png"
        },
        "[帽子]": {
          file: "emoji_58.png"
        },
        "[皇冠]": {
          file: "emoji_59.png"
        },
        "[篮球]": {
          file: "emoji_60.png"
        },
        "[足球]": {
          file: "emoji_61.png"
        },
        "[垒球]": {
          file: "emoji_62.png"
        },
        "[网球]": {
          file: "emoji_63.png"
        },
        "[台球]": {
          file: "emoji_64.png"
        },
        "[咖啡]": {
          file: "emoji_65.png"
        },
        "[啤酒]": {
          file: "emoji_66.png"
        },
        "[干杯]": {
          file: "emoji_67.png"
        },
        "[柠檬汁]": {
          file: "emoji_68.png"
        },
        "[餐具]": {
          file: "emoji_69.png"
        },
        "[汉堡]": {
          file: "emoji_70.png"
        },
        "[鸡腿]": {
          file: "emoji_71.png"
        },
        "[面条]": {
          file: "emoji_72.png"
        },
        "[冰淇淋]": {
          file: "emoji_73.png"
        },
        "[沙冰]": {
          file: "emoji_74.png"
        },
        "[生日蛋糕]": {
          file: "emoji_75.png"
        },
        "[蛋糕]": {
          file: "emoji_76.png"
        },
        "[糖果]": {
          file: "emoji_77.png"
        },
        "[葡萄]": {
          file: "emoji_78.png"
        },
        "[西瓜]": {
          file: "emoji_79.png"
        },
        "[光碟]": {
          file: "emoji_80.png"
        },
        "[手机]": {
          file: "emoji_81.png"
        },
        "[电话]": {
          file: "emoji_82.png"
        },
        "[电视]": {
          file: "emoji_83.png"
        },
        "[声音开启]": {
          file: "emoji_84.png"
        },
        "[声音关闭]": {
          file: "emoji_85.png"
        },
        "[铃铛]": {
          file: "emoji_86.png"
        },
        "[锁头]": {
          file: "emoji_87.png"
        },
        "[放大镜]": {
          file: "emoji_88.png"
        },
        "[灯泡]": {
          file: "emoji_89.png"
        },
        "[锤头]": {
          file: "emoji_90.png"
        },
        "[烟]": {
          file: "emoji_91.png"
        },
        "[炸弹]": {
          file: "emoji_92.png"
        },
        "[枪]": {
          file: "emoji_93.png"
        },
        "[刀]": {
          file: "emoji_94.png"
        },
        "[药]": {
          file: "emoji_95.png"
        },
        "[打针]": {
          file: "emoji_96.png"
        },
        "[钱袋]": {
          file: "emoji_97.png"
        },
        "[钞票]": {
          file: "emoji_98.png"
        },
        "[银行卡]": {
          file: "emoji_99.png"
        },
        "[手柄]": {
          file: "emoji_100.png"
        },
        "[麻将]": {
          file: "emoji_101.png"
        },
        "[调色板]": {
          file: "emoji_102.png"
        },
        "[电影]": {
          file: "emoji_103.png"
        },
        "[麦克风]": {
          file: "emoji_104.png"
        },
        "[耳机]": {
          file: "emoji_105.png"
        },
        "[音乐]": {
          file: "emoji_106.png"
        },
        "[吉他]": {
          file: "emoji_107.png"
        },
        "[火箭]": {
          file: "emoji_108.png"
        },
        "[飞机]": {
          file: "emoji_109.png"
        },
        "[火车]": {
          file: "emoji_110.png"
        },
        "[公交]": {
          file: "emoji_111.png"
        },
        "[轿车]": {
          file: "emoji_112.png"
        },
        "[出租车]": {
          file: "emoji_113.png"
        },
        "[警车]": {
          file: "emoji_114.png"
        },
        "[自行车]": {
          file: "emoji_115.png"
        }
      }
    };
    let emojiBaseUrl = `http://yx-web.nosdn.127.net/webdoc/h5/emoji`;
    // let emojiList=[];
    let new_emojiList = [];
    for (let emoji in emojiList) {
      let emojiItem = emojiList[emoji];
      for (let key in emojiItem) {
        // let item = emojiItem[key]
        // item.img = `${emojiBaseUrl}/${emoji}/${item.file}`
        new_emojiList.push({
          name: key,
          file: emojiItem[key].file,
          img: `${emojiBaseUrl}/${emoji}/${emojiItem[key].file}`
        });
      }
    }
    let last_emojiList = that.sliceArray(new_emojiList, 23);
    that._data.emojiList = last_emojiList;
    that._data.new_emojiList = new_emojiList;
    let ajmdList = [];
    for (let i = 1; i <= 48; i++) {
      let key = "ajmd0" + (i >= 10 ? i : "0" + i);
      ajmdList.push({
        name: key,
        file: key + ".png",
        img: "http://yx-web.nosdn.127.net/webdoc/h5/emoji/ajmd/" + key + ".png"
      });
    }
    ajmdList = that.sliceArray(ajmdList, 10);
    that._data.ajmdList = ajmdList;
    let xxyList = [];
    for (let i = 1; i <= 40; i++) {
      let key = "xxy0" + (i >= 10 ? i : "0" + i);
      xxyList.push({
        name: key,
        file: key + ".png",
        img: "http://yx-web.nosdn.127.net/webdoc/h5/emoji/xxy/" + key + ".png"
      });
    }
    xxyList = that.sliceArray(xxyList, 10);
    that._data.xxyList = xxyList;
    let ltList = [];
    for (let i = 1; i <= 20; i++) {
      let key = "lt0" + (i >= 10 ? i : "0" + i);
      ltList.push({
        name: key,
        file: key + ".png",
        img: "http://yx-web.nosdn.127.net/webdoc/h5/emoji/lt/" + key + ".png"
      });
    }
    ltList = that.sliceArray(ltList, 10);
    that._data.ltList = ltList;
    that.openNim();
  }
};
</script>
<style lang="scss" scoped='scoped'>
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

.swiper-container {
  width: 100vw;
  height: 28vh;
}

.footer {
  border: 0.02rem solid #ccc;
  box-sizing: border-box;
}

.chatinput-wrapper {
  width: 100%;
  background-color: #fff;
  border: 0.02rem solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
}

.chatinput-content {
  width: 100%;
  height: 7vh;
  color: #999;
}

.chatinput-img {
  font-size: 0.5rem;
  border-radius: 100%;
  margin: 0.2rem 0.2rem;
  display: inline-block;
}

.chatinput-img.emoji {
  margin-right: 0;
}

.chatinput-img:active {
  opacity: 0.6;
}

.chatinput-input {
  width: 4.66rem;
  height: 5vh;
  border-radius: 0.12rem;
  border: 1px solid #ccc;
  margin-top: 0.15rem;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 0.2rem;
  font-size: 0.3rem;
}

.chatinput-input.voice {
  text-align: center;
  line-height: 5vh;
  letter-spacing: 0.1rem;
}

.chatinput-voice-mask {
  width: 4.66rem;
  height: 0.76rem;
  line-height: 0.76rem;
  display: inline-block;
  border-radius: 0.12rem;
  border: 1px solid #ccc;
  margin-top: 0.12rem;
  vertical-align: top;
  box-sizing: border-box;
  /* padding-left: 20rem; */
  font-size: 0.3rem;
  text-align: center;
  color: #333336;
  background-color: #fff;
  letter-spacing: 0.04rem;
}

.chatinput-voice-mask-hover {
  background-color: #cecece;
  color: #333336;
}

.fr {
  float: right;
}

.emojiBox {
  font-size: 0;
}

.emojiType {
  display: flex;
  border-top: 0.02rem solid #999;
  border-bottom: 0.02rem solid #999;
  height: 7vh;
  width: 100vw;
}

.emojiType img {
  width: 0.88rem;
  height: 0.84rem;
  padding: 0.08rem 0.1rem;
  box-sizing: border-box;
  border-right: 0.02rem soild #999;
}

.emojiSend {
  width: 7vh;
  height: 7vh;
  line-height: 7vh;
  background-color: #01bcb5;
  color: white;
  font-size: 0.3rem;
  text-align: center;
}

.emojiType .active {
  background-color: #aaa;
}

.emoji-content {
  width: 100%;
  height: 28vh;
  /* padding-top: 30rem; */
  //   padding-left: .20rem;
  box-sizing: border-box;
}

.emoji-content-swiper {
  width: 100%;
  height: 28vh;
}

.emoji-content-item {
  display: inline-block;
  margin: 0.17rem;
}

.emoji-content-img-emoji {
  width: 0.56rem;
  height: 0.56rem;
}

.emoji-content-img-other {
  width: 1.13rem;
  height: 1.13rem;
}

.moreBox {
  display: flex;
  text-align: center;
  height: 4rem;
  padding: 0.4rem;
  border-top: 0.02rem solid #ccc;
  width: 100vw;
}

.moreBox > div {
  width: 2rem;
  font-size: 0.26rem;
}

.moreBox img {
  width: 1.2rem;
  height: 1.2rem;
}

.chatBox {
  padding: 0.2rem 0;
  overflow-y: auto;
}

.otherSay,
.mySay {
  display: flex;
  margin-bottom: 0.3rem;
}

.otherSay .avatar,
.mySay .avatar {
  width: 1.2rem;
  text-align: center;
}

.otherSay .avatar img,
.mySay .avatar img {
  width: 0.8rem;
  height: 0.8rem;
}

.otherSay .message,
.mySay .message {
  max-width: 60vw;
  padding: 0.2rem;
  border-radius: 0.15rem;
  background-color: white;
  font-size: 0.28rem;
}

.otherSay .message img,
.mySay .message img,
.emojiForChat {
  width: 0.5rem;
  height: 0.5rem;
  vertical-align: middle;
}

.mySay .message {
  background-color: #01bcb5;
  color: white;
}

.otherSay .photo img,
.otherSay .video img,
.mySay .photo img,
.mySay .video img {
  width: 3rem;
}

.chatTips {
  text-align: center;
  margin-bottom: 0.15rem;
}

.chatTips > div {
  background-color: #d6d6d6;
  display: inline-block;
  color: white;
  font-size: 0.24rem;
  padding: 0.05rem 0.15rem;
  max-width: 80vw;
  border-radius: 0.1rem;
}

.otherSay .video,
.mySay .video {
  position: relative;
}

.otherSay .video .playIcon,
.mySay .video .playIcon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  //   width: 10vw;
  //   height: 10vw;
  font-size: 0.8rem;
}

.otherSay .voice {
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.01rem;
  background-color: white;
  text-align: right;
  padding: 0 0.3rem;
  width: 3rem;
  position: relative;
}

.otherSay .voice .voiceIcon {
  position: absolute;
  left: 0.3rem;
}

.mySay .voice {
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.1rem;
  background-color: #01bcb5;
  color: white;
  padding: 0 0.3rem;
  width: 3rem;
  position: relative;
}

.mySay .voice .voiceIcon {
  position: absolute;
  right: 0.3rem;
}
</style>


