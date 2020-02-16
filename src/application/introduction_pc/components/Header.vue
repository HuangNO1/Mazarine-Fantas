<template>
  <div id="Header">
    <!-- Title -->
    <div class="Title">
      <div style="width: 570px; margin: 20rem auto 0;">
        <img src="../../../assets/icon/icon_1.png" alt="" />
      </div>
      <!-- Write typing -->
      <div class="typing">
        <vue-typer
          :text="[
            'Since using this platform, I have fallen in love with English writing.',
            'No one can stop me from using Massist.',
            'After our captain used Massist, she got a perfect score of CET-6.',
            'Have fun learning English.'
          ]"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="70"
          :pre-erase-delay="2000"
          :erase-delay="250"
          erase-style="select-all"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>
      </div>
      
    </div>
    <!-- carousel -->
    <a-carousel style="height: 100%;width: 100%;" autoplay arrows>
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
import { VueTyper } from "vue-typer";

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
  components: {
    VueTyper
  },
  created() {},
  mounted: {},
  methods: {}
};
</script>
<style>
#Header {
  width: 100%;
  height: 100%;
  background: #fff;
}

.Title {
  z-index: 10;
  width: 100%;
  position: fixed;
}

.typing {
  width: 100%;
  margin: auto;
  font-size: 2rem;
  text-align: center;
}

.vue-typer .custom.char.typed {
  color: #14aaf5;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}
</style>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 100%;
  width: 100%;
  line-height: 30rem;
  background: #fff;
  overflow: hidden;
}

/* .ant-carousel >>> .slick-slide h3 {
  color: #fff;
} */

.scrollImg {
  display: block;
  min-width: 100%;
  max-width: 250%;
  max-height: 120%;
  object-fit: cover;
}
</style>
