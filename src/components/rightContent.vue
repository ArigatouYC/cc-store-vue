<template>
  <div class="rightContent">
    <div class="news">
      <div class="newsTop">
        <div>CC快报</div>
        <div class="more">查看更多 ></div>
      </div>
      <ul class="newsItem">
        <li>[特惠] iPhone14 Pro Max，今日特惠</li>
        <li>[特惠] iPhone14 Pro Max，今日特惠</li>
        <li>[特惠] iPhone14 Pro Max，今日特惠</li>
        <li>[特惠] iPhone14 Pro Max，今日特惠</li>
        <li>[特惠] iPhone14 Pro Max，今日特惠</li>
        <li>[特惠] iPhone14 Pro Max，今日特惠</li>
      </ul>
    </div>

    <div class="iconBtn">
      <div class="btnItem">
        <img src="../static/logo/宠物.png" alt="宠物" />
        <span>宠物</span>
      </div>
      <div class="btnItem">
        <img src="../static/logo/美妆.png" alt="美妆" />
        <span>美妆</span>
      </div>
      <div class="btnItem">
        <img src="../static/logo/二手车.png" alt="二手车" />
        <span>二手车</span>
      </div>
      <div class="btnItem">
        <img src="../static/logo/家居.png" alt="家居" />
        <span>家居</span>
      </div>
      <div class="btnItem">
        <img src="../static/logo/二手车.png" alt="二手车" />
        <span>二手车</span>
      </div>
      <div class="btnItem">
        <img src="../static/logo/家装.png" alt="家装" />
        <span>家装</span>
      </div>
      <div class="btnItem">
        <img src="../static/logo/数码.png" alt="数码" />
        <span>数码</span>
      </div>

      <div class="btnItem">
        <img src="../static/logo/鞋子.png" alt="鞋子" />
        <span>鞋子</span>
      </div>
      <div class="btnItem">
        <img src="../static/logo/二手车.png" alt="二手车" />
        <span>二手车</span>
      </div>
    </div>
  </div>
  <!-- mid右侧内容-->
</template>

<script>
export default {
  name: "rightContent",
};
</script>

<style>
.rightContent {
  width: 300px;
  height: 500px;
  padding-top: 0;
}

.news {
  font-size: 14px;
  color: #666;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
}

.rightContent .news {
  width: 280;
  height: 230px;
  padding: 10px;
}

.newsTop {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #666;
}

.newsTop .more {
  cursor: pointer;
}

.newsItem li {
  margin: 10px 0;
  cursor: pointer;
}

.iconBtn {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 260px;
  margin-top: 10px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  /* border: #666 solid 1px; */
}

.btnItem {
  width: 80px;
  height: 80px;
  padding-top: 10px;
  text-align: center;
  cursor: pointer;
}

.iconBtn img {
  margin: 0 auto;
  width: 45px;
  height: 45px;
}

/* 轮播右边的CC快报和下面内容 */
</style>