<template>
  <header id="header">
      <template v-if="!isLogin">
        <h1>let's share</h1>
        <p>精品博客汇集</p>
        <div class="buttons">
          <el-button>登陆</el-button>
          <el-button>注册</el-button>
        </div>
      </template>
      <template v-if="isLogin">
        <p>let's share</p>
        <i class="el-icon-edit"></i>
        <img src="">
      </template>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isLogin: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../assets/base.less";
#header{
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
}
</style>
