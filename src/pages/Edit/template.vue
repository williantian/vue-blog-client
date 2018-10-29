<template>
  <div id="edit">
    <h1>创建博客</h1>
      <h3>文章标题</h3>
      <el-input v-model="title"></el-input>
      <p class="msg">限30个字</p>
      <h3>内容简介</h3>
      <el-input v-model="description" type="textarea" :autosize="{ minRows: 2, maxRows: 6}"></el-input>
      <p class="msg">限30个字</p>
      <h3>文章内容</h3>
      <el-input v-model="content" type="textarea" :autosize="{ minRows: 5, maxRows: 30}"></el-input>
      <p>
        <label>是否展示到首页</label>
        <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </p>
    <el-button v-on:click="onEdit">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style lang="less" src="./template.less"></style>
