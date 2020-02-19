<template>
  <div id="Features">
    <div class="title">
      <span>Features</span>
    </div>
    <a-row style="height: 90%">
      <a-col :span="14">
        <div class="Fcontent">
          <div class="title2">
            Massist is an excellent English writing platform.
          </div>
          <div class="compare">Compared with others:</div>
          <div
            style="margin: 4rem auto auto; font-size: 1.5rem; line-height: 3rem; color: #02c902;"
          >
            <div><a-icon type="check-circle" /> More cleaner and beautiful</div>
            <div>
              <a-icon type="check-circle" /> Allows identifying text on paper by
              image recognition
            </div>
            <div>
              <a-icon type="check-circle" /> Optimizing long text parsing by
              Attention mechanism
            </div>
            <div>
              <a-icon type="check-circle" /> Reduce errors using residual
              networks
            </div>
          </div>
        </div>
      </a-col>
      <a-col :span="10">
        <div class="divImg">
          <img
            class="featureImg"
            src="../../../assets/img/Features.png"
            alt="Features"
          />
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script></script>
<style>
#Features {
  background: #fff;
  height: 100%;
  width: 100%;
}

.title {
  font-size: 4rem;
  text-align: center;
  justify-content: center;
  background-color: #e8e8e8;
}

.divImg {
}

.featureImg {
  width: 40rem;
  box-shadow: 1px 1px 10px 1px;
  border-radius: 10px;
  margin-top: 4rem;
}

.Fcontent {
  padding: 1rem;
  width: 70%;
  display: flex;
  margin: 8rem auto;
  justify-content: center;
  flex-direction: column;
}

.title2 {
  font-size: 2rem;
}

.compare {
  font-size: 1.5rem;
}
</style>
