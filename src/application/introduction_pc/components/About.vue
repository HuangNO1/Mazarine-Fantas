<template>
  <div id="About">
    <div class="title">
      <span>About us</span>
    </div>
    <div>
      <div class="teamTable">
        <a-table :columns="columns" :dataSource="data" bordered>
          <template slot="name" slot-scope="text">
            {{ text }}
          </template>
          <template slot="nickname" slot-scope="text">
            {{ text }}
          </template>
          <template slot="email" slot-scope="text">
            {{ text }}
          </template>
          <template slot="area" slot-scope="text">
            {{ text }}
          </template>
          <template slot="title"></template>
          <template slot="footer"></template>
        </a-table>
      </div>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Nickname",
    dataIndex: "nickname",
    scopedSlots: { customRender: "nickname" }
  },
  {
    title: "Email",
    className: "email",
    dataIndex: "email",
    scopedSlots: { customRender: "email" }
  },
  {
    title: "Area of ​​Project",
    dataIndex: "area",
    scopedSlots: { customRender: "area" }
  }
];

const data = [
  {
    key: "1",
    name: "Wu Nan-Xi",
    nickname: "WNX",
    email: "374821053@qq.com",
    area: "Python, Django, Tenserflow"
  },
  {
    key: "2",
    name: "Li Zi-Sheng",
    nickname: "LZS",
    email: "1370865669@qq.com",
    area: "Python, Django, Vue"
  },
  {
    key: "3",
    name: "LWL",
    nickname: "LWL",
    email: "2892211452@qq.com",
    area: "Python, Django, Scrapy, Tensorflow"
  },
  {
    key: "4",
    name: "Huang Po Hsun",
    nickname: "REM",
    email: "fh831.cp9gw@gmail.com",
    area: "Vue, CSS, Js, Ant design"
  }
];
export default {
  data() {
    return {
      data,
      columns
    };
  }
};
</script>
<style>
#About {
  background: url("../../../assets/img/team.png") no-repeat fixed center
    center/cover;
  height: 100%;
  width: 100%;
}

.aboutImg {
  width: 35rem;
  box-shadow: 1px 1px 10px 1px;
  border-radius: 10px;
  margin-top: 4rem;
}

.teamTable {
  width: 70%;
  margin: 8rem auto;
  padding: 3rem;
  background: #ffffff;
  opacity: 90%;
  border-radius: 2rem;
}
</style>
