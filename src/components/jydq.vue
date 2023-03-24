<template>
  <!-- 家用电器 -->
  <div class="jydq">
    <div class="wrapper jydqTop">
      <h1>家用电器</h1>
      <div class="jydqList">
        <ul class="flexList">
          <li><a href="#">热门</a></li>
          <li><a href="#">大家电</a></li>
          <li><a href="#">生活电器</a></li>
          <li><a href="#">厨房电器</a></li>
          <li><a href="#">高端电器</a></li>
          <li><a href="#">空气/净水</a></li>
        </ul>
      </div>
    </div>
    <div class="bigPictures">
      <div class="wrapper">
        <div class="bigPictureItem">
          <div class="bigPictureItemTopTxt">
            <div class="bigPictureItemTopTxtLeft">
              <p><a href="#">节能补贴</a></p>
              <p><a href="#">空气净化器</a></p>
              <p><a href="#">滚筒洗衣机</a></p>
            </div>
            <div class="bigPictureItemTopTxtRight">
              <p><a href="#">节能补贴</a></p>
              <p><a href="#">空气净化器</a></p>
              <p><a href="#">滚筒洗衣机</a></p>
            </div>
          </div>
          <div></div>
        </div>
        <div class="bigPictureItemX"></div>

        <div class="bigPictureItem">
          <div class="bigPictureItemTop"></div>
          <div></div>
        </div>

        <div class="bigPictureItem"></div>
        <div class="bigPictureItem">
          <div class="bigPictureItemTop"></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
  <!-- 家用电器 -->
</template>

<script>
export default {
  name: "jydq",
};
</script>

<style>
/* 家用电器 */
.jydq {
  margin-top: 10px;
}

.jydqTop {
  border-bottom: 2px #be3736 solid;
}

.flexList {
  display: flex;
}

.jydqList li {
  padding: 0 10px;
  font-size: 14px;
  border-right: 1px solid #666;
}

.jydqList li:first-child {
  padding-left: 0;
}

.jydqList li:last-child {
  border: 0;
  padding-right: 0;
}

.jydqList li:hover a {
  color: #be3736;
}

.bigPictures {
  margin-bottom: 30px;
}

.bigPictureItemX {
  height: 400px;
  width: 320px;
  background-color: pink;
  border-right: #666 solid 1px;
}

.bigPictureItem {
  height: 400px;
  width: 220px;
  background-color: pink;
  border-right: #666 solid 1px;
}

.bigPictureItemTop {
  height: 200px;
  border-bottom: #666 solid 1px;
}

.bigPictureItemTopTxt {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  text-align: center;
  padding: 10px;
  height: 150px;
}

.bigPictureItemTopTxt a:hover {
  color: #be3736;
}

.bigPictureItemTopTxtLeft p,
.bigPictureItemTopTxtRight p {
  margin: 15px 0;
  padding: 5px 0;
  border-bottom: #666 solid 1px;
}
/* 家用电器 */
</style>