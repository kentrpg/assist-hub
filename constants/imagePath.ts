export const baseImagePath = "/images";

type ImagesPathProps = {
  id: string;
  title: string;
  description: string;
  type: {
    src: string;
    alt: string;
  };
};

type ImagePathProps = Omit<ImagesPathProps, "id">;

type ConvertStringProps = ImagePathProps & {
  convertString: string[];
};

export const InquiryUnauthorized: ImagePathProps = {
  title: "還在為合適的輔具煩惱？",
  description: "透過詢問單獲取免費1對1專業建議",
  type: {
    src: `${baseImagePath}/inquiry-NotLoggedIn-3.webp`,
    alt: "插畫顯示一位醫生透過手機與患者進行遠端醫療諮詢，旁邊有心電圖圖案和對話框圖示，象徵醫療數據傳遞與交流。",
  },
};

export const CheckoutDeclined: ConvertStringProps = {
  title: "付款失敗",
  description: "請於隔日 [marker] 前完成付款",
  convertString: ["23:59"],
  type: {
    src: `${baseImagePath}/failed.webp`,
    alt: "插畫顯示一名穿紅色衣服的男子坐在椅子上，右腳打著石膏，象徵受傷或行動不便的狀態。",
  },
};

export const CheckoutApproval: ConvertStringProps = {
  title: "付款成功",
  description: "為了您的訂單安全，店內取貨時需出示[marker]以完成核對",
  convertString: ["驗證碼"],
  type: {
    src: `${baseImagePath}/successful.webp`,
    alt: "插畫顯示一名穿淺灰色上衣的男子使用拐杖站立，右腳打著石膏，象徵正在康復中的狀態。",
  },
};

export const InquiryEmpties: ImagesPathProps[] = [
  {
    id: "1",
    title: "瀏覽輔具",
    description: "在網站上瀏覽並找到您需要的輔具",
    type: {
      src: `${baseImagePath}/inquiry-empty-1.webp`,
      alt: "簡約插畫透明背景顯示一台黃色輪椅，象徵行動輔助工具。",
    },
  },
  {
    id: "2",
    title: "加入詢問",
    description: "點選「我要詢問」按鈕，輔具將添加至詢問欄",
    type: {
      src: `${baseImagePath}/inquiry-empty-2.webp`,
      alt: "插畫顯示一雙手正在填寫表格，右手握筆，左手扶住表格，旁邊有完成的核對標記，象徵表單填寫或任務完成。",
    },
  },
  {
    id: "3",
    title: "填寫資料",
    description: "前往詢問單，詳細描述患者情況和特定需求",
    type: {
      src: `${baseImagePath}/inquiry-empty-3.webp`,
      alt: "黃色按鈕上寫著『加入詢問單』，左側有輔助圖標，右側有一隻手指點擊按鈕，象徵互動行為。",
    },
  },
  {
    id: "4",
    title: "送出詢問單",
    description: "點擊送出按鈕，等待店家專業建議單",
    type: {
      src: `${baseImagePath}/inquiry-empty-4.webp`,
      alt: "透明背景插畫顯示一台筆記型電腦和一台螢幕，背景有雲端圖標與雙向箭頭，象徵資料在雲端同步的概念。",
    },
  },
];

export const CartSteps: ImagesPathProps[] = [
  {
    id: "1",
    title: "在家裡就可以挑選輔具",
    description: "",
    type: {
      src: `${baseImagePath}/cart-empty-1.webp`,
      alt: "插畫顯示一位患者在家中使用平板電腦瀏覽輔具，旁邊有輔具的圖片和描述，象徵在家中就能輕鬆選購。",
    },
  },
  {
    id: "2",
    title: "租賃試用體驗，再決定是否購買",
    description: "",
    type: {
      src: `${baseImagePath}/cart-empty-2.webp`,
      alt: "插畫顯示一名男子雙手捂住耳朵，背景有擴音器、耳朵圖示和音量靜音符號，象徵聽力障礙或噪音問題，旁邊還有醫療專家進行聽力評估的場景。",
    },
  },
  {
    id: "3",
    title: "隨著康復進展，提供合適輔具",
    description: "",
    type: {
      src: `${baseImagePath}/cart-empty-3.webp`,
      alt: "插畫顯示一名佩戴助聽器的男子側面，旁邊有放大的助聽器圖示和醫療專家，象徵患者在康復過程中可以依照建議參考不同輔具。",
    },
  },
];
