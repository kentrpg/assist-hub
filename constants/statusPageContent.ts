import { BaseImage, cartPath, errorPath, homePath, inquiryPath, layoutPath } from "@/constants/imagePath";
import { StyledLinkType } from "@/helpers/mapping/linkMap";

type ImageProps = {
  imageProps: BaseImage;
};

export type StepImage = ImageProps & {
  id: string;
  title: string;
  description: string;
};

type StatusImage = Omit<StepImage, "id"> & {
  convertString?: string[];
  links?: 
    {
      text: string;
      href: string;
      target: "_blank" | "_self";
      theme: StyledLinkType;
      // theme: {
      //   layoutType: StyledLinkType;
      //   buttonVariants: "primary" | "secondary";
      //   buttonSizes: "large" | "xlarge";
      // };
    }[]
  ;
};

export const checkoutDeclined: StatusImage = {
  title: "付款失敗",
  description: "請於隔日 <span>23:59</span> 前完成付款",
  imageProps: {
    src: `${cartPath}/failed.webp`,
    alt: "插畫顯示一名穿紅色衣服的男子坐在椅子上，右腳打著石膏，象徵受傷或行動不便的狀態。",
  },
  links: [
    {
      text: "查看訂單",
      href: "/user/order",
      target: "_self",
      theme: "SecondaryButton"
      // theme: {
      //   layoutType: "solid",
      //   buttonVariants: "secondary",
      //   buttonSizes: "xlarge",
      // },
    },
    {
      text: "回購物車",
      href: "/cart",
      target: "_self",
      theme: "PrimaryButton"
      // theme: {
      //   layoutType: "solid",
      //   buttonVariants: "primary",
      //   buttonSizes: "xlarge",
      // },
    },
  ],
};

export const checkoutApproval: StatusImage = {
  title: "付款成功",
  description: "為了您的訂單安全，店內取貨時需出示<span>驗證碼</span>以完成核對",
  imageProps: {
    src: `${cartPath}/successful.webp`,
    alt: "插畫顯示一名穿淺灰色上衣的男子使用拐杖站立，右腳打著石膏，象徵正在康復中的狀態。",
  },
};

export const inquiryUnauthorized: StatusImage = {
  title: "還在為合適的輔具煩惱？",
  description: "透過詢問單獲取免費1對1專業建議",
  imageProps: {
    src: `${inquiryPath}/unauthorized.webp`,
    alt: "插畫顯示一位醫生透過手機與患者進行遠端醫療諮詢，旁邊有心電圖圖案和對話框圖示，象徵醫療數據傳遞與交流。",
  },
};

export const notFound: StatusImage = {
  title: "哎呀！找不到這個頁面了！",
  description: "您嘗試進入的頁面可能已被移除、名稱更改，或暫時無法使用。",
  imageProps: {
    src: `${errorPath}/404.webp`,
    alt: "插畫顯示 404 錯誤頁面，圖案包含斷開的插頭和文字 Oops..! 與 Page Not Found，象徵網頁未找到的狀態。",
  },
};

export const serverBusy: StatusImage = {
  title: "伺服器忙線中，請稍候",
  description: "我們目前正處於高峰使用時段，系統正在處理大量請求。<span>請您耐心等待，我們會盡快為您服務！</span>",
  imageProps: {
    src: `${errorPath}/500.webp`,
    alt: "插畫顯示伺服器房內的場景，三位技術人員正在操作筆記型電腦，周圍有伺服器機櫃、資料庫圖標、齒輪與雲端符號，象徵數據處理與雲端運算的概念。",
  },
};

export const inquiryEmpties: StepImage[] = [
  {
    id: "1",
    title: "瀏覽輔具",
    description: "在網站上瀏覽並找到您需要的輔具",
    imageProps: {
      src: `${inquiryPath}/empty-1.webp`,
      alt: "簡約插畫透明背景顯示一台黃色輪椅，象徵行動輔助工具。",
    },
  },
  {
    id: "2",
    title: "加入詢問",
    description: "點選「我要詢問」按鈕，輔具將添加至詢問欄",
    imageProps: {
      src: `${inquiryPath}/empty-2.webp`,
      alt: "插畫顯示一雙手正在填寫表格，右手握筆，左手扶住表格，旁邊有完成的核對標記，象徵表單填寫或任務完成。",
    },
  },
  {
    id: "3",
    title: "填寫資料",
    description: "前往詢問單，詳細描述患者情況和特定需求",
    imageProps: {
      src: `${inquiryPath}/empty-3.webp`,
      alt: "黃色按鈕上寫著『加入詢問單』，左側有輔助圖標，右側有一隻手指點擊按鈕，象徵互動行為。",
    },
  },
  {
    id: "4",
    title: "送出詢問單",
    description: "點擊送出按鈕，等待店家專業建議單",
    imageProps: {
      src: `${inquiryPath}/empty-4.webp`,
      alt: "透明背景插畫顯示一台筆記型電腦和一台螢幕，背景有雲端圖標與雙向箭頭，象徵資料在雲端同步的概念。",
    },
  },
];

export const cartSteps: StepImage[] = [
  {
    id: "1",
    title: "在家裡就可以挑選輔具",
    description: "",
    imageProps: {
      src: `${cartPath}/empty-1.webp`,
      alt: "插畫顯示一位患者在家中使用平板電腦瀏覽輔具，旁邊有輔具的圖片和描述，象徵在家中就能輕鬆選購。",
    },
  },
  {
    id: "2",
    title: "租賃試用體驗，再決定是否購買",
    description: "",
    imageProps: {
      src: `${cartPath}/empty-2.webp`,
      alt: "插畫顯示一名男子雙手捂住耳朵，背景有擴音器、耳朵圖示和音量靜音符號，象徵聽力障礙或噪音問題，旁邊還有醫療專家進行聽力評估的場景。",
    },
  },
  {
    id: "3",
    title: "隨著康復進展，提供合適輔具",
    description: "",
    imageProps: {
      src: `${cartPath}/empty-3.webp`,
      alt: "插畫顯示一名佩戴助聽器的男子側面，旁邊有放大的助聽器圖示和醫療專家，象徵患者在康復過程中可以依照建議參考不同輔具。",
    },
  },
];

export const inquiryTabs: StepImage[] = [
  {
    id: "1",
    title: "具平地跑跳能力",
    description: "可在平地上自由行走、跑步及跳躍，活動能力接近正常人。",
    imageProps: {
      src: `${inquiryPath}/action-assessment-1.webp`,
      alt: "插畫顯示一名戴眼鏡的男子正揮手，表現友好或打招呼的動作。",
    },
  },
  {
    id: "2",
    title: "在平地無法跑跳，但可放手行走",
    description: "需要扶手或輔具協助，能有限地行走和攀爬樓梯。",
    imageProps: {
      src: `${inquiryPath}/action-assessment-2.webp`,
      alt: "插畫顯示兩名男子，一人手臂吊著繃帶，另一人使用拐杖並腳部打著石膏，象徵不同受傷狀態的描述。",
    },
  },
  {
    id: "3",
    title: "行走需扶持穩定物",
    description: "需使用助行器或輪椅，步態不穩，需他人協助移動。",
    imageProps: {
      src: `${inquiryPath}/action-assessment-3.webp`,
      alt: "插畫顯示一名長者使用助行器站立，旁邊有一名女子攙扶，象徵支援與照護情境。",
    },
  },
  {
    id: "4",
    title: "無法行走，但能在無頭靠支撐下維持坐姿",
    description: "完全依賴輪椅或電動輔具，無法自行站立或行走。",
    imageProps: {
      src: `${inquiryPath}/action-assessment-4.webp`,
      alt: "插畫顯示一名女子坐在電動輪椅上，右腳戴著護具，象徵依賴輔助工具的行動方式。",
    },
  },
  {
    id: "5",
    title: "無頭靠支撐下難以維持坐姿",
    description: "全身重度障礙，需全天候護理和支撐輔具，且需要貼身看護。",
    imageProps: {
      src: `${inquiryPath}/action-assessment-5.webp`,
      alt: "插畫顯示一位站立的人正在推著輪椅，上面坐著一位男子，象徵協助行動不便者的情境。",
    },
  },
  {
    id: "6",
    title: "無法自行評估",
    description: "需等待專業人士評估。",
    imageProps: {
      src: `${layoutPath}/logo-desktop.webp`,
      alt: "插畫顯示兩名男子，一人手臂吊著繃帶，另一人使用拐杖並腳部打著石膏，象徵不同受傷狀態的描述。",
    },
  },
];

export const homeSolutions: StepImage[] = [
  {
    id: "1",
    title: "不確定需要什麼輔具",
    description:
      "提供快速適配功能，根據身體部位找到適合的輔具，無需自行判斷，可將輔具加入詢問單，由專業人員提供建議。",
    imageProps: {
      src: `${homePath}/solution-1.webp`,
      alt: "插畫顯示一輛黃色汽車與一名人形符號發生碰撞，象徵交通事故或車禍發生的情境。",
    },
  },
  {
    id: "2",
    title: "身體康復之路",
    description:
      "我們提供靈活租期和多樣產品，能根據康復進程輕鬆切換不同輔具，省心又省錢。",
    imageProps: {
      src: `${homePath}/solution-2.webp`,
      alt: "插畫顯示一名病人正在進行步行復健訓練，旁邊有一名護理師或物理治療師協助，象徵康復與醫療支持。",
    },
  },
  {
    id: "3",
    title: "短期使用",
    description:
      "提供短期租賃服務，按日、週、月彈性選擇，讓輔具使用高效、經濟，不再為存放煩惱。",
    imageProps: {
      src: `${homePath}/solution-3.webp`,
      alt: "插畫顯示一名男子坐在輪椅上，身穿藍色上衣與綠色褲子，背景為灰色，象徵行動輔助需求。",
    },
  },
  {
    id: "4",
    title: "購買價格太貴",
    description:
      "租賃能大幅降低使用成本，讓您以不到購買價格的一小部分，輕鬆獲得所需輔具。",
    imageProps: {
      src: `${homePath}/solution-4.webp`,
      alt: "插畫顯示一名病人躺在醫院病床上，正在接受點滴治療，背景為灰色，象徵住院或醫療照護。",
    },
  },
  {
    id: "5",
    title: "維修和保養",
    description:
      "我們的租賃服務包含免費維修和保養，租期內不需擔心任何額外費用，讓您使用更省心。",
    imageProps: {
      src: `${homePath}/solution-5.webp`,
      alt: "插畫顯示一張空置的醫療病床，上方有一把工具扳手的圖示，象徵病床維護或醫療設備維修。",
    },
  },
];
