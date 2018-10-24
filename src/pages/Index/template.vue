<template>
  <div id="index">
      <section class="blog-pasts">
        <div class="item">
          <figure class="avatar">
            <img src="https://secure.gravatar.com/avatar/ff4317f0f9be382a2bca6ac3aded778a?s=50&r=pg&d=https%3A%2F%2Fdeveloper.mozilla.org%2Fstatic%2Fimg%2Favatar.png">
            <figcaption>jack</figcaption>
          </figure>
          <h3>哈哈哈哈哈哈 <span>刚刚</span></h3>
          <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
        </div>
        <div class="item">
          <figure class="avatar">
            <img src="https://secure.gravatar.com/avatar/ff4317f0f9be382a2bca6ac3aded778a?s=50&r=pg&d=https%3A%2F%2Fdeveloper.mozilla.org%2Fstatic%2Fimg%2Favatar.png">
            <figcaption>jack</figcaption>
          </figure>
          <h3>哈哈哈哈哈哈 <span>刚刚</span></h3>
          <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
        </div>
      </section>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.css"></style>
<style lang="less">
@import "../../assets/base.less";
#index{
  .item{
    display: grid;
    grid: auto auto / 80px 1fr;
    
    .avatar{
      grid-column: 1;
      grid-row: 1 / span2;
      justify-self: center;
      text-align: center;

      img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      figcaption{
        font-size: 12px;
        color: @textLightColor;
      }
    }
    h3{
      grid-column: 2;
      grid-row: 1;

      &>span{
        color: @textLightColor;
        font-size: 12px;
        font-weight: normal;
      }
    }
    p{
      grid-column: 2;
      grid-row: 2;
      margin-top: 0;
    }
  }
}
</style>

