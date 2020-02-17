# mazarine-fantas

## 項目簡介

中國大學生服務外包大賽，湖南省中南大學計算機學院軟件工程 18 級隊伍 - Mazarine Fantas 的前端 Vue Web 項目，此為 A13 的題目，製作智能批改英文作文的平台。網頁名稱暫定 **Massist**，中文為 **M 助手**。

## Project setup

```zsh
yarn install #yarn
npm install #npm
```

### Compiles and hot-reloads for development

```zsh
yarn serve #yarn
npm run serve #npm
```

### Compiles and minifies for production

```zsh
yarn build #yarn
npm run build #npm
```

### Lints and fixes files

```zsh
yarn lint #yarn
npm run lint #npm
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 項目成員

- 吳南希
- 劉文龍
- 黎梓晟
- 黃柏曛(HuangNO1, Rem, Huang Po-Hsun)

## 頁面

我們使用 **Vue-cli** 作為開發工具。並鑑於網頁響應式更多時候無法編排完美，所以以 PC 端和移動端分別開發，在 `src/application` 裡面的所有頁面，凡是頁面應用名稱末有 `_pc` 的頁面是 PC 端頁面，反之，有 `_mobile` 的是移動端。

### 推廣頁面 

作為推廣我們項目的頁面，可達到展現特色的效果。

- 頁首 Header
- 特色 Features
- 技術 Support
- 關於 About
- 頁尾 Footer

### 登入登出頁面

帳戶登入註冊作業。

- 登入子組件 Login
- 註冊子組件 Register

### 工作頁面

實現主要業務。目前暫定有以下子組件：

（待確認）

### 頁面設定

在項目目錄有個 `vue.config.js` 的 Js 文件，這是用於設定所有頁面的地方。根據我的設定，頁面應用需要在 `src/application` 裡面，並且該資料夾裡的應用文件皆需要與父目錄名稱一樣。

可在 `vue.config.js` 末修改你的首頁入口預設值。

```js
// 配置首页 入口链接
before: app => {
  app.get('/', (req, res, next) => {
    for (let i in pages) {
      //res.write(`<a target="_self" href="/${i}">/${i}</a></br>`);
      if (i === 'work_pc') {
        res.write(`<script>document.location.href="/${i}#/Home";</script>`);
      }
    }
    res.end()
  });
}
```

### 頁面跳轉

關於 PC 端與移動端的應用跳轉，寫在各應用的組件裡。以下內容為 `login_pc`在 `Login.vue` 組件內寫得跳轉判斷。

```js
function isPC() {
  //是否為PC端
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

export default {
  created() {
    // this.$router.push({ path: "/Login" ,replace: true});
    console.log("isPC");
    if (isPC() === true) {
      console.log("isPC = true");
    } else {
      document.location.href = "/login_mobile";
      console.log("isPC = false");
    }
  },
};
```

## LICENSE

[The MIT License](https://github.com/HuangNO1/Mazarine-Fantas/blob/master/LICENSE)