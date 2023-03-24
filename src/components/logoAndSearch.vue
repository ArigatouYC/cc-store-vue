<template>
      <div class="logoAndSearch">
        <div class="wrapper">
            <div class="logo">
                Logo
            </div>
            <div class="search">
                <input type="text">
                <button class="btn"><span>搜索</span></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "logoAndSearch"
}
</script>

<style>
/* logoAndSearch */
.logoAndSearch .logo {
    width: 200px;
    height: 100px;

    line-height: 100px;
    font-size: 50px;
    text-align: center;
}

.logoAndSearch .search {
    /* ?????????????????? */
    font-size: 0;
    height: 100px;
    line-height: 100px;
}

.logoAndSearch .search input {
    width: 450px;
    height: 40px;
    border: #BE3736 solid 1px;
}

.search .btn {
    background-color: #BE3736;
    width: 80px;
    height: 40px;
    border: 0;
    cursor: pointer;
}

.search .btn:hover {
    background-color: #a33535;
}

.search .btn span {
    vertical-align: middle;
    font-size: 20px;
    color: #fff;
}
/* logoAndSearch */
</style>