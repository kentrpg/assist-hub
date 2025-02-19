<div align="center" >
  <img src="https://raw.githubusercontent.com/kentrpg/assist-hub/refs/heads/development/public/images/layout/logo-desktop.webp" width="200" alt="RENT4U輔具租賃LOGO" />
</div>
<h1 align="center" style="font-weight: 700">RENT4U｜輔具租賃網</h1>
<div align="center" >
<a href="https://assist-hub.vercel.app/" >專案網址</a >
<span>|</span>
<a href="https://chalk-freedom-ec6.notion.site/fb2e0e67fe44450a92037448b3deea00" >專案Notion文件</a >
</div>
<p align="center" >快速適配，為您打造專屬的輔具</p>

## 功能介紹

**► 使用者**

- 會員註冊、登入
- 詢問單 / 建議單
- 租賃輔具流程
- 購物車
- 使用者後台 (個人資訊、訂單、詢問單)
- 快速適配輔具
- LINE Login (快速登入)
- LINE Pay (無縫支付體驗)
- LINE Messaging (接收LINE推播通知)

**► 店家後臺**

- 修改使用者訂單運送狀態
- 針對用戶的詢問單狀況送出對應建議單

## 建議體驗流程

 **使用者 ( 知道自己需要何種輔具 ) :**
1. 瀏覽輔具商品列表 → 挑選需要的輔具 → 加入購物車。
2. 點擊「購物車」→ 選取要租賃的商品 → 選取租用期約、日期等等 → 付款 → 訂單成立 。
3. 進入「我的訂單」→ 查看訂單細節 → 根據內容了解運送狀態。 


  **使用者 ( 不確定自己適合何種輔具 ):**

1. 在「首頁」點擊「快速適配」按鈕 → 選取受傷部位 → 選擇對應的輔具類型 。
2. 對有興趣的輔具按下「加入詢問單」按鈕 → 按下前往詢問單。
3. 選擇當前行動能力分級 → 送出詢問單。
4. 進入「我的詢問單」→ 可查看已送出的詢問單 → 若店家已回覆的話則建議單按鈕可點擊。
5. 點擊「建議單」按鈕 → 可查看已收到的建議單及店家評論。
6. 最後針對店家的建議輔具，選擇是否租賃 → 接上述租賃流程。

## 下載及安裝

Clone 專案

```bash
  git clone https://github.com/kentrpg/assist-hub.git
```

進入專案

```bash
  cd assist-hub
```

安裝套件

```bash
  npm install
```

啟動專案

```bash
  npm run dev
```

---

## 資料夾結構

```
.
└── assist-hub /
    ├── components/
    │   ├── auth/
    │   ├── layout/
    │   ├── pages/
    │   └── ui/
    ├── constants
    ├── helpers/
    │   ├── api/
    │   ├── cookies/
    │   ├── format/
    │   └── mapping/
    ├── hooks
    ├── pages/
    │   ├── admin/
    │   ├── api/
    │   ├── auth/
    │   ├── cart/
    │   ├── inquiry/
    │   ├── product/
    │   ├── suggest/
    │   ├── user/
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   ├── 404.tsx
    │   ├── 500.tsx
    │   └── index.tsx
    ├── public
    ├── styles
    ├── types
    ├── utils/
    │   ├── api
    │   ├── react-hook-form
    │   ├── react-icons
    │   ├── redux/
    │   │   ├── slices/
    │   │   └── store/
    │   └── styled-component
    ├── .env.local
    ├── .eslintrc.json
    ├── .gitignore
    ├── middleware.tsx
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── prettier.config.js
    ├── README.md
    ├── settings.json
    └── tsconfig.json
```

其中元件層以基本三件套為主
scope在該元件內
分別為

- 元件
- 樣式
- 資料

**範例:**
```
└── component/
    ├── index.tsx 
    ├── styled.tsx 
    └── data.ts
```

---
## Git Flow 
 以 GitHub Flow 為基礎，建立符合我們團隊規範的客製化 Git Flow

---

<h2>Branch 命名規範 </h2>

| Category  | Issue Label | example 範例                     |
| --------- | ---------- | -------------------------------- |
| feature-[branch name]  |Feature     |feat-auth-provider |
| update-[branch name] | Improvement  | update-alert-toast |
| fix-[branch name]  | Bug   | fix-cart-quantity |
| hotfix-[branch name]  | 	Hotfix  | hotfix-linepay-api-query |


---

<h2>Commit Message 規範</h2>

| Type 類型 | Usage 格式 | example 範例                     |
| --------- | ---------- | -------------------------------- |
| 新增功能  | feat (scope)     | feat(order): add color and style for order status and shipping status |
| 修補錯誤  | fix (scope)     | fix(footer): disable non-functional category links |
| 更新事項  | update (scope)    | update(all): remove Tab hover effect on small screens  |
| 重構代碼  | refactor (scope)  | refactor(modal): adjust Modal content padding|


---

## 開發環境

<h2 align="center">UI設計</h2>

<img alt="miro" src="https://img.shields.io/badge/miro-FFD02F?style=for-the-badge&logo=miro&logoColor=black" />
<img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" />
<img alt="react-icons" src="https://img.shields.io/badge/react--icons-E91E63?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white" />
<img alt="canva" src="https://img.shields.io/badge/canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white" />

> **前期發想**

- **Miro** 

> **設計工具:**

- **Figma**
- **Canva** 
- **react-icons**

> **團隊協作/任務管理**

- **Notion**


<h2 align="center">前端技術</h2>

  <img alt="javascript" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="NextJS" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img alt="middleware" src="https://img.shields.io/badge/middleware-555555?style=for-the-badge&logo=stackshare&logoColor=white" />
  <img alt="styled-components" src="https://img.shields.io/badge/styled--components-db7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img alt="Redux" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
  <img alt="line-api" src="https://img.shields.io/badge/line%20api-00C300?style=for-the-badge&logo=line&logoColor=white" />
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img alt="Mock Service Worker" src="https://img.shields.io/badge/Mock SERVICE WORK-E34F26?style=for-the-badge&&logoColor=white" />
  <img alt="json-server" src="https://img.shields.io/badge/json--server-292929?style=for-the-badge&logo=json&logoColor=white" />
  <img alt="GItHUB" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
  <img alt="GIT" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
  <img alt="ESLINT" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
  <img alt="PRETTIER" src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
  <img alt="React-Hook-Form" src="https://img.shields.io/badge/react--hook--form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=white" />
  <img alt="postman" src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />

> **JavaScript 框架與工具:**

- **TypeScript**
- **React.js**
- **Next.js**

> **樣式管理:**

- **styled-components**
 
> **版本控制:**

- **Git / GitHub**

> **狀態管理:**

- **Redux Toolkit**

> **表單管理:**

- **React Hook Form**

> **第三方API:**

- **LINE Login**
- **LINE Pay**
- **LINE Messaging**

> **其他:**

- **React Slick :** 輪播套件
- **Middleware :** 處理特定頁面驗證、Redirect等邏輯

<h2 align="center">後端技術</h2>
<img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" />
<img src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white" />
<img src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" />
<img src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white" />
<img alt="postman" src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />

> **後端框架及語言**:

- **C# (.NET Framework)**
- **.NET Framework Web API**
- **RESTful API**

> **資料庫**:

- **MSSQL**

> **雲端 & 伺服器**:

- **Azure VM**


