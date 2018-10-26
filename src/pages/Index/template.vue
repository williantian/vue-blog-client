<template>
  <div id="index">
      <section class="blog-pasts">
        <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`" >
          <figure class="avatar">
            <img :src="blog.user.avatar" :alt="blog.user.username">
            <figcaption>{{blog.user.username}}</figcaption>
          </figure>
          <h3>{{blog.title}} <span> {{blog.createdAt}}</span></h3>
          <p>{{blog.description}}</p>
        </router-link>
      </section>
      <section class="page">
        <el-pagination
          layout="prev, pager, next"
          :total="total"  @current-change="onPageChange">
        </el-pagination>
      </section>
  </div>
</template>

<script src="./template.js"></script>

<style lang="less" src="./template.less"></style>


