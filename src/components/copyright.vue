<template>
  <!-- 版权 -->
  <div class="copyright">
    <div class="wrapper footerHr">
      <div class="copyrightList">
        <div><a href="#">购物指南</a></div>
        <div><a href="#">购物流程</a></div>
        <div><a href="#">会员介绍</a></div>
        <div><a href="#">生活服务</a></div>
        <div><a href="#">联系客服</a></div>
      </div>
      <div class="copyrightList">
        <div><a href="#">购物指南</a></div>
        <div><a href="#">购物流程</a></div>
        <div><a href="#">会员介绍</a></div>
        <div><a href="#">生活服务</a></div>
        <div><a href="#">常见问题</a></div>

        <div><a href="#">联系客服</a></div>
      </div>
      <div class="copyrightList">
        <div><a href="#">购物指南</a></div>
        <div><a href="#">购物流程</a></div>
        <div><a href="#">会员介绍</a></div>
        <div><a href="#">生活服务</a></div>
        <div><a href="#">常见问题</a></div>
        <div><a href="#">CC大家电</a></div>
        <div><a href="#">联系客服</a></div>
      </div>
      <div class="copyrightList">
        <div><a href="#">购物指南</a></div>
        <div><a href="#">购物流程</a></div>
        <div><a href="#">会员介绍</a></div>
        <div><a href="#">生活服务</a></div>

        <div><a href="#">CC大家电</a></div>
        <div><a href="#">联系客服</a></div>
      </div>
      <div class="copyrightList">
        <div><a href="#">购物指南</a></div>
        <div><a href="#">常见问题</a></div>
        <div><a href="#">CC大家电</a></div>
        <div><a href="#">联系客服</a></div>
      </div>
      <div class="copyrightList">
        <div><a href="#">购物指南</a></div>
        <div><a href="#">购物流程</a></div>
        <div><a href="#">会员介绍</a></div>
        <div><a href="#">常见问题</a></div>
        <div><a href="#">CC大家电</a></div>
        <div><a href="#">联系客服</a></div>
      </div>
    </div>

    <div class="end">
      <div class="wrapper">
        <p><a href="#">关于我们</a></p>
        |
        <p><a href="#">商家帮助</a></p>
        |
        <p><a href="#">手机App</a></p>
        |
        <p><a href="#">隐私政策</a></p>
        |
        <p><a href="#">合作招聘</a></p>
        |
        <p><a href="#">联系我们</a></p>
        |
        <p><a href="#">友情链接</a></p>
      </div>
    </div>
    <div class="footerID">
      <p>京ICP312830912478</p>
    </div>
  </div>

  <!-- 版权 -->
</template>

<script>
export default {
    name : "copyright"
};
</script>

<style>
/* 版权信息 */
.copyright {
    background-color: #453F3E;
    padding-top: 30px;
    padding-bottom: 50px;
}

.copyrightList {
    font-size: 16px;
}

.copyrightList a {
    color: #DED7D6;
}

.copyrightList div {
    padding: 10px 0;
}

.copyrightList a:hover {
    color: #BE3736;
}

.footerHr {
    padding-bottom: 50px;
    border-bottom: #DED7D6 solid 1px;
}

.end {
    margin-top: 30px;
    font-size: 16px;
    color: #DED7D6;
}

.end p {
    float: left;
    padding: 0 30px;
}

.end p a {
    color: #DED7D6;
}

.end p a:hover {
    color: #BE3736;
}


.end:first-child p {
    padding-left: 0;
}


.footerID {
    padding-top: 30px;
    width: 1200px;
    margin: 0 auto;
}

.footerID p {
    font-size: 16px;
    color: #DED7D6;
    text-align: center;
}


/* 版权信息 */

</style>