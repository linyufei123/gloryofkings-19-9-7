<template>
<div>
    <van-swipe :autoplay="3000" indicator-color="white" class="aa">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</div>
</template>

<script>
import Vue from 'vue';
import { Button ,Swipe, SwipeItem } from 'vant';
Vue.use(Button).use(Swipe).use(SwipeItem);

export default {
  name: 'home',

}
</script>

<style scoped>
.aa{
  background: red;
}
</style>