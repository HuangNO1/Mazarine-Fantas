<template>
  <div id="Translate" style="overflow: auto; height: 100%; padding: 1.5rem;">
    <!--
    <a-select defaultValue="lucy" style="width: 120px" @change="handleChange">
      <a-select-option v-for="item in language" value="item.type">{{
        item.descript
      }}</a-select-option>
    </a-select>-->
    <div :style="{ padding: '24px', background: '#fff', minHeight: '50rem' }">
      translate
      <a-select
        defaultValue="auto"
        style="width: 120px"
        @change="handleChangeFrom"
      >
        <a-select-option v-for="item in language" :value="item.type">{{
          item.descript
        }}</a-select-option>
      </a-select>
      <a-textarea
        style="font-size: 1.2rem;"
        placeholder="Enter"
        :autosize="{ minRows: 10, maxRows: 15 }"
        @change="translate"
      />
      <a-select
        defaultValue="auto"
        style="width: 120px"
        @change="handleChangeTo"
      >
        <a-select-option v-for="item in language" :value="item.type">{{
          item.descript
        }}</a-select-option>
      </a-select>
      <a-textarea
        style="font-size: 1.2rem;"
        placeholder="Output"
        :autosize="{ minRows: 10, maxRows: 15 }"
        disabled="true"
        :value="output"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      language: [
        { type: "auto", descript: "auto" },
        { type: "zh", descript: "简体中文" },
        { type: "en", descript: "英文" },
        { type: "yue", descript: "粤语" },
        { type: "wyw", descript: "文言文" },
        { type: "jp", descript: "日语" },
        { type: "kor", descript: "韩语" },
        { type: "fra", descript: "法语" },
        { type: "spa", descript: "西班牙语" },
        { type: "th", descript: "泰语" },
        { type: "ara", descript: "阿拉伯语" },
        { type: "ru", descript: "俄语" },
        { type: "pt", descript: "葡萄牙语" },
        { type: "de", descript: "德语" },
        { type: "it", descript: "意大利语" },
        { type: "el", descript: "希腊语" },
        { type: "nl", descript: "荷兰语" },
        { type: "pl", descript: "波兰语" },
        { type: "bul", descript: "保加利亚语" },
        { type: "est", descript: "爱沙泥亚语" },
        { type: "dan", descript: "丹麦语" },
        { type: "fin", descript: "芬兰语" },
        { type: "cs", descript: "捷克语" },
        { type: "rom", descript: "罗马尼亚语" },
        { type: "slo", descript: "斯洛文尼亚语" },
        { type: "swe", descript: "瑞典语" },
        { type: "hu", descript: "匈牙利语" },
        { type: "cht", descript: "繁體中文" },
        { type: "vie", descript: "越南语" }
      ],

      q: "apple",
      from: "auto",
      to: "auto",
      appid: "20200219000386136",
      salt: "1435660288",
      key: "ymuZXPryaYEmwbPDcvq5",
      sign: "8e37954953b9a521dd6d45d27a06ff9b",
      output
    };
  },
  methods: {
    handleChangeFrom(value) {
      this.from = value;
      console.log(`selected ${value}`);
    },
    handleChangeTo(value) {
      this.to = value;
      console.log(`selected ${value}`);
    },
    translate() {
      axios
        .get(
          "http://api.fanyi.baidu.com/api/trans/vip/translate?q=" + this.q
          + "&from=" + this.from
          + "&to=" + this.to
          + "&appid=" + this.appid
          + "&salt=" + this.salt
          + "&sign=" + this.sign
        )
        .then(response => {
          console.log(response);
          this.output = response.dst;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
