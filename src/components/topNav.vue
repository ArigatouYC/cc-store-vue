<template>
  <div class="top">
        <div class="wrapper">
            <div class="top-left">
                <div class="welcome">CC商城欢迎您</div>
                <div class="login"><a href="#">请登录</a></div>
                <div class="regiest"><a href="#">注册</a></div>
            </div>
            <div class="top-right">
                <div class="top-right-item"><a href="#">我的订单</a></div>
                <div class="top-right-item"><a href="#">我的购物车</a></div>
                <div class="top-right-item"><a href="#">合作招商</a></div>
                <div class="top-right-item"><a href="#">商家后台</a></div>
                <div class="top-right-item"><a href="#">关注我们</a></div>
                <div class="top-right-item"><a href="#">企业采购</a></div>
                <div class="top-right-item"><a href="#">我的订单</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "topNav"
}
</script>

<style>
/* top */
.top-left {
    display: flex;
}

.top {
    height: 30px;
    line-height: 30px;
    background-color: #CCC;
    font-size: 14px;
}

.top a:hover {
    color: #BE3736;
}

.welcome {
    margin-right: 20px;
}



.login a {
    border-right: 1px solid #666;
    padding: 0 10px;
}

.regiest {
    padding: 0 10px;
}

.top-right {
    display: flex;
}

.top-right-item a {
    padding: 0 10px;
    border-right: 1px solid #666;
}

.top-right-item:first-child a {
    padding-left: 0;
}

.top-right-item:last-child a {
    padding-right: 0;
    border: 0;
}

/* top */
</style>