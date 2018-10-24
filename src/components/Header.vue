<template>
  <header v-bind:class="{login: isLogin,'no-login': !isLogin}">
      <template  v-if="!isLogin" >
        <h1>let's share</h1>
        <p>精品博客汇集</p>
        <div class="buttons">
          <el-button>登陆</el-button>
          <el-button>注册</el-button>
        </div>
      </template>
      <template v-if="isLogin">
        <h1>let's share</h1>
        <i class="edit el-icon-edit"></i>
        <img class="avatar" src="https://secure.gravatar.com/avatar/ff4317f0f9be382a2bca6ac3aded778a?s=50&r=pg&d=https%3A%2F%2Fdeveloper.mozilla.org%2Fstatic%2Fimg%2Favatar.png">
      </template>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isLogin: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../assets/base.less";
header.no-login{
  padding: 0 12% 30px 12%;
  display: grid;
  justify-items: center;
  background: @bgColor;

  h1{
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;/*里面的文本都是大写*/
  }
  p{
    margin: 15px 0 0 0;
    color: #fff;
  }
  .buttons{
    margin-top: 20px;
  }
}
header.login{
  display: flex;
  align-items: center;
  background: @bgColor;

  h1{
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;
  }
  .edit{
    color: #fff;
    font-size: 30px;
  }
  .avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 15px;
  }
}
</style>
