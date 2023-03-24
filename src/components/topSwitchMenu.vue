<template>
      <div class="listSwitch">
        <div class="wrapper-noflex">
            <ul class="goodsList">
                <div class="all"><span>全部商品分类</span></div>
                <li><a href="#">CC超市</a></li>
                <li><a href="#">进口好货</a></li>
                <li><a href="#">五金店</a></li>
                <li><a href="#">大牌特卖</a></li>
                <li><a href="#">家居家电</a></li>
                <li><a href="#">数码电子</a></li>
                <li><a href="#">拍卖</a></li>
                <li><a href="#">生鲜</a></li>
                <li><a href="#">CC会员</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name : "topSwitchMenu"
}
</script>

<style>
/* Top Switch Menu */

.listSwitch {
    /* margin-top: 30px; */
    margin: 10px 0;
    border-bottom: 2px #BE3736 solid;
}

.all {
    width: 200px;
    text-align: center;
    background-color: #BE3736;
}

.all span {
    font-size: 18px;
    color: #fff;
}

.goodsList {
    display: flex;
    height: 50px;
    line-height: 50px;
}

.goodsList a {
    padding: 0 20px;
    font-size: 18px;
}

.goodsList li:hover {
    background-color: #BE3736;
}

.goodsList li:hover a {
    color: #fff;
}

/* Top Switch Menu */

</style>