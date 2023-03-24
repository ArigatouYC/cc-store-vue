<template>
  <div class="left-list">
    <ul v-for="item in 13" :key="item">
      <li>
        <a href="#">手机/数码/电器</a>
        <div class="insideList">
          <div class="listDetail">
            <ul>
              <li>手机/数码/电器/汽车/二手车/车主服务/汽车/二手车/车主服务</li>
              <li>
                汽车/二手车/车主服务/汽车/二手车/车主服务/汽车/二手车/车主服务
              </li>
              <li>
                宠物/宠物服务/护理/汽车/二手车/车主服务汽车/二手车/车主服务
              </li>
              <li>运动/休闲/户外/汽车/二手车/车主服务汽车/二手车/车主服务</li>
              <li>
                汽车/二手车/车主服务/汽车/二手车/车主服务汽车/二手车/车主服务
              </li>
              <li>运动/休闲/户外/汽车/二手车/车主服务汽车/二手车/车主服务</li>
              <li>
                汽车/二手车/车主服务/汽车/二手车/车主服务汽车/二手车/车主服务
              </li>
              <li>运动/休闲/户外/汽车/二手车/车主服务汽车/二手车/车主服务</li>
              <li>
                汽车/二手车/车主服务/汽车/二手车/车主服务汽车/二手车/车主服务
              </li>
              <li>运动/休闲/户外/汽车/二手车/车主服务汽车/二手车/车主服务</li>
              <li>
                汽车/二手车/车主服务/汽车/二手车/车主服务汽车/二手车/车主服务
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "leftList",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
/* animation */

/* animation */

.left-list {
  position: relative;
  width: 200px;
  height: 500px;
  background-color: #f4f4f4;
}

.left-list li {
  padding: 10px 10px;
  font-size: 14px;
}

.left-list li:hover {
  background-color: #be3736;
}

.left-list li:hover a {
  color: #fff;
}

.listDetail {
  display: none;
  position: absolute;
  top: 0;
  left: 200px;
  width: 700px;
  height: 500px;
  background-color: #f4f4f4;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
}

.listDetail a {
  padding: 10px;
}

.left-list li:hover .listDetail {
  display: block;
  cursor: pointer;
}

.left-list .insideList li:hover {
  background-color: #f4f4f4;
}
</style>