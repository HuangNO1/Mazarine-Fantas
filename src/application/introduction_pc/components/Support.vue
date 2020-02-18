<template>
  <div id="Support">
    <div class="title">
      <span>Support</span>
    </div>
    <div style="width: 80%; margin: 8rem auto;">
      <a-row :gutter="48">
        <a-col :span="12">
          <a-card title="Python" :bordered="false" hoverable="true">
            <div class="Logo">
              <img
                class="Logo"
                src="../../../assets/icon/python.png"
                alt="py"
              />
            </div>
            <div>
              The back-end of our web is based on Python as the development
              language.
            </div>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="Vue" :bordered="false" hoverable="true">
            <div class="Logo">
              <img class="Logo" src="../../../assets/logo.png" alt="vue" />
            </div>
            <div>
              Vue is a popular front-end framework that can efficiently and
              flexibly develop excellent front-ends.
            </div>
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="48">
        <a-col :span="12">
          <a-card title="Django" :bordered="false" hoverable="true">
            <div class="Logo">
              <img
                class="Logo"
                src="../../../assets/icon/django.png"
                alt="dj"
              />
            </div>
            <div>
              Django is a python-based backend framework and is the most
              prestigious and mature web framework in the Python world.
            </div>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="Tensorflow" :bordered="false" hoverable="true">
            <div class="Logo">
              <img
                class="Logo"
                src="../../../assets/icon/tensorflow.png"
                alt="tf"
              />
            </div>
            <div>
              Vue is a popular front-end framework that can efficiently and
              flexibly develop excellent front-ends.
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
#Support {
  background: #fff;
  height: 100%;
  width: 100%;
}

.Logo {
  width: 10rem;
}
</style>
