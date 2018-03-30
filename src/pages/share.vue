<template>
<f7-actions :opened="share" @actions:close="sharefn()">
      <!-- Actions Group -->
      <f7-actions-group>
          <!-- Actions Label -->
          <!-- <f7-actions-label>分享到</f7-actions-label> -->
          <ul class="share">
              <h3>分享到:</h3>
              <f7-link>
                <i></i>
                <p>QQ好友</p>
              </f7-link>
              <f7-link>
                <i></i>
                <p>QQ空间</p>
              </f7-link>
              <f7-link>
                <i></i>
                <p>微信好友</p>
              </f7-link>
              <f7-link>
                <i></i>
                <p>微信朋友圈</p>
              </f7-link>
              <f7-link>
                <i></i>
                <p>新浪微博</p>
              </f7-link>
              <f7-link>
                <i></i>
                <p>QQ微博</p>
              </f7-link>
              <f7-link>
                <i></i>
                <p>复制链接</p>
              </f7-link>
          </ul>
          <!-- Actions Buttons -->

      </f7-actions-group>
      <!-- Another Group -->
      <!-- <f7-actions-group>
          <f7-link class="remove" @click="sharefn">取消</f7-link>
      </f7-actions-group> -->
    </f7-actions>
</template>
<script>
export default {
  data: function() {
    return {
      share :false,
    };
  },
  methods: {
    sharefn(){
      this.share = !this.share;
      console.log(this.share)
    }
  },
};
</script>
<style lang="less">
.TopsZ {
  position: fixed;
  top: 56px;
  right: 10px;
  padding: 10px 20px;
  background-color: #fff;
  line-height: 30px;
  vertical-align: middle;
  border-radius: 20px;
  z-index: 9999;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=50, Direction=27, Color=#454545)"; /*IE 8*/
  -moz-box-shadow: -2px 1px 50px 8px rgba(69, 69, 69, 0.5); /*FF 3.5+*/
  -webkit-box-shadow: -2px 1px 50px 8px rgba(69, 69, 69, 0.5); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: -2px 1px 50px 8px rgba(69, 69, 69, 0.5); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(
      Strength=50,
      Direction=135,
      Color=#454545
    ); /*IE 5.5-7*/
  > em {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Safari and Chrome */
    -o-transform: rotate(45deg); /* Opera */
    -moz-transform: rotate(45deg);
    top: -5px;
    right: 20px;
  }
  .link {
    color: #000;
    display: block;
    font-family: "PingFang-SC-Regular";
    font-size: 16px;
    color: #333333;
    i {
      margin-right: 10px;
    }
  }
}

.actions-group {
  .share {
    background-color: #fff;
    font-family: "PingFang-SC-Regular";
    font-size: 12px;
    color: #666666;

    h3 {
      font-weight: 400;
      padding: 10px 30px;
    }
    .link {
      display: inline-block;
      width: 24%;
      text-align: center;
      i {
        display: inline-block;
        width: 58px;
        height: 58px;
      }
      p {
        line-height: 30px;
        color: #333;
      }
    }
    .link:nth-of-type(1) {
      i {
        background: url("../assets/fenxiang.png") no-repeat 0px 0px;
      }
    }
    .link:nth-of-type(2) {
      i {
        background: url("../assets/fenxiang.png") no-repeat -71px -1px;
      }
    }
    .link:nth-of-type(3) {
      i {
        background: url("../assets/fenxiang.png") no-repeat -142px -2px;
      }
    }
    .link:nth-of-type(4) {
      i {
        background: url("../assets/fenxiang.png") no-repeat -214px -2px;
      }
    }
    .link:nth-of-type(5) {
      i {
        background: url("../assets/fenxiang.png") no-repeat -285px -1px;
      }
    }
    .link:nth-of-type(6) {
      i {
        background: url("../assets/fenxiang.png") no-repeat -356px -2px;
      }
    }
    .link:nth-of-type(7) {
      i {
        background: url("../assets/fenxiang.png") no-repeat -425px -2px;
      }
    }
  }
  .remove{
    background-color: #fff;
    text-align: center;
    line-height: 57px;
    width: 100%;
    font-size: 20px;
    color: #666;
    font-family: "PingFang-SC-Regular";
  }
}
</style>
