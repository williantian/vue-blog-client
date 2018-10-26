<template>
  <div id="my">
    <section class="user-info">
      <img class="avatar" src="https://secure.gravatar.com/avatar/ff4317f0f9be382a2bca6ac3aded778a?s=50&r=pg&d=https%3A%2F%2Fdeveloper.mozilla.org%2Fstatic%2Fimg%2Favatar.png">
      <h3>jack</h3>
    </section>
    <section>
      <div class="item">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2018</span>
        </div>
        <h3>这是标题</h3>
        <p>这是内容哈哈哈哈哈哈哈哈哈哈哈哈
          这是内容哈哈哈哈哈哈哈哈哈哈哈哈
          这是内容哈哈哈哈哈哈哈哈哈哈哈哈
          这是内容哈哈哈哈哈哈哈哈哈哈哈哈
        </p>
        <div class="action">
          <router-link to="/edit/:blogId">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>
      <div class="item">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2018</span>
        </div>
        <h3>这是标题</h3>
        <p>这是内容哈哈哈哈哈哈哈哈哈哈哈哈</p>
        <div class="action">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style lang="less" src="./template.less"></style>
