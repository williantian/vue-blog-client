<template>
  <div id="edit">
    <div id="create">
      <h1>编辑博客</h1>
      <main>
        <h3>文章标题</h3>
        <el-input></el-input>
        <p class="msg">限30个字</p>
        <h3>内容简介</h3>
        <el-input type="textarea" rows="3"></el-input>
        <p class="msg">限30个字</p>
        <h3>文章内容</h3>
        <el-input type="textarea" rows="20"></el-input>
      </main>
      <router-link to="/my"><el-button >确定</el-button></router-link>
    </div>
  </div>
</template>

<script src="./template.js"></script>

<style lang="less" src="./template.less"></style>
