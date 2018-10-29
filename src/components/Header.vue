<template>
  <header v-bind:class="{login: isLogin,'no-login': !isLogin}">
      <template  v-if="!isLogin" >
        <h1>let's share</h1>
        <p>精品博客汇集</p>
        <div class="buttons">
          <router-link to="/login"><el-button>立即登陆</el-button></router-link>
          <router-link to="/register"><el-button>注册账号</el-button></router-link>
        </div>
      </template>
      <template v-if="isLogin">
        <h1><router-link to="/">let's share</router-link></h1>
        <router-link to="/create"><i class="edit el-icon-plus"></i></router-link>
        <div class="user">
          <img class="avatar" v-bind:src="user.avatar" v-bind:alt="user.username" v-bind:title="user.username">
          <ul>
            <li><router-link to="/my">我的</router-link></li>
            <li><a href="#" v-on:click = onLogout>注销</a></li>
          </ul>
        </div>
      </template>
  </header>
</template>

<script>
import auth from '@/api/auth'
import { mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {}
  },
  
  computed: {
    ...mapGetters([
      'isLogin',
      'user'
    ])
  },
  created() {
    this.checkLogin()
  },
  methods: {
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    onLogout(){
      this.logout()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../assets/base.less";
@import "../assets/common.less";
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
    margin-top: 30px;
  }
  .el-button{
    font-size: 13px;
    color: #006600;
    height: 30px;
    line-height: 28px;
    padding: 0 16px;
    border-radius: 2px;
    font-weight: normal;
    border: 1px solid #149739;
    margin: 0 5px;
  }
}
header.login{
  display: flex;
  align-items: center;
  background: @bgColor;
  padding: 0 20px;

  .el-button{
    font-size: 13px;
    color: #006600;
    height: 30px;
    line-height: 28px;
    padding: 0 16px;
    border-radius: 2px;
    font-weight: normal;
    border: 1px solid #149739;
    margin: 0 5px;
  }

  h1{
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;
    a{
      color: #fff;
    }
  }
  .edit{
    color: #fff;
    font-size: 30px;
  }
  .avatar{
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }

  .user{
    position: relative;

    ul{
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin: 0;
      background: #fff;
    }
    li{
     
    }
    a{
      text-decoration: none;
      color: #333;
      font-size: 12px;
      display: block;
      padding: 5px 5px;
      &:hover{
        background: #eaeaea;
      }
    }
    &:hover ul{
    display: block;
    }
  }
  
}
</style>
