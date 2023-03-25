<template>
  <div class="left-list">
    <ul v-for="item in 13" :key="item">
      <li>
        <a href="#">手机/数码/电器</a>
        <div class="insideList">
          <HoverList class="enter-active"></HoverList>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import "animate.css";

import HoverList from "./hoverList.vue";

export default {
  name: "leftList",
  components: { HoverList },
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


.enter-active{
  animation: anm 0.3s;
}

@keyframes anm {
  from{
    transform: translateX(-100px);
  }
  to{
    transform: translateX(0);
  }
}
</style>