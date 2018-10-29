<template>
  <div id="register">
    <div class="form">
      <h4>用户名</h4>
      <input v-model="username" placeholder="用户名">
      <h4>密码</h4>
      <input v-model="password" placeholder="密码" @keyup.enter="onRegister">
      <el-button @click="onRegister" size="medium">注册</el-button>
    </div>
    <p class="notice">已有账号？<router-link to="/login" class="notice-link">立即登录</router-link></p>
  </div>
</template>

<script src="./template.js"></script>

<style lang="less" src="./template.less"></style>
