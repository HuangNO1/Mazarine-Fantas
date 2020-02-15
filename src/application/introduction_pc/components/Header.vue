<template>
  <div id="Header">
    <a-carousel autoplay arrows>
      <div
        slot="prevArrow"
        slot-scope="props"
        class="custom-slick-arrow"
        style="left: 10px;zIndex: 1"
      >
        <a-icon type="left-circle" />
      </div>
      <div
        slot="nextArrow"
        slot-scope="props"
        class="custom-slick-arrow"
        style="right: 10px"
      >
        <a-icon type="right-circle" />
      </div>
      <div>
        <img class="scrollImg" src="../../../assets/img/Header1.png" />
      </div>
      <div>
        <img class="scrollImg" src="../../../assets/img/Header2.png" />
      </div>
      <div>
        <img class="scrollImg" src="../../../assets/img/Header3.png" />
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: [
        { imgUrl: "../../../assets/img/Header1.png" },
        { imgUrl: "../../../assets/img/Header2.png" },
        { imgUrl: "../../../assets/img/Header3.png" }
      ],
      data: [
        '<div class="slide">1</div>',
        '<div class="slide">2</div>',
        '<div class="slide">3</div>'
      ]
    };
  },
  created() {},
  mounted: {},
  methods: {},
  created() {}
};
</script>
<style>
#Header {
  width: 100%;
  height: 100%;
}
</style>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 100%;
  width: 100%;
  line-height: 30rem;
  background: #364d79;
  overflow: hidden;
}

/* .ant-carousel >>> .slick-slide h3 {
  color: #fff;
} */

.scrollImg {
  display: block;
  width: 100%;
  height: 100%;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}
</style>
