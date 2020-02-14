<template>
  <div id="app">
  <!-- carousel -->
    <!--<a-carousel autoplay>
      <div v-for="item in image" :key="item.imgUrl">
        <img class="scrollImg" :src="item.imgUrl" />
      </div>
    </a-carousel>-->
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
        image: [
        { imgUrl: "../../../assets/img/Header1.png" },
        { imgUrl: "../../../assets/img/Header2.png" },
        { imgUrl: "../../../assets/img/Header3.png" },
      ],
    };
  },
  created() {},
  mounted: {},
  methods: {},
  created() {}
};
</script>
<style>
#app {
  height: 100%;
   background: url(../../../assets/img/Header1.png) no-repeat fixed center center/cover;
    /* no-repeat -> 不重複
       fixed -> 圖片不要跟著滾輪動
       center center -> 將圖片定位到中心
       cover -> 圖片填滿區塊
    */ 
}
</style>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  max-height: 30rem;
  line-height: 30rem;
  background: #364d79;
  overflow: hidden;
}

/* .ant-carousel >>> .slick-slide h3 {
  color: #fff;
} */

.scrollImg {
  display: block;
  margin: auto;
  max-width: 130%;
}
</style>