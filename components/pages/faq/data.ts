import { RefObject } from "react";

export type QuestionType = {
  id: number;
  question: string;
  answer: string;
};

export type SectionType = {
  id: string;
  title: string;
  questions: QuestionType[];
};

export const faqData: SectionType[] = [
  {
    id: "rental",
    title: "租賃流程相關",
    questions: [
      {
        id: 1,
        question: "如何申請租賃輔具？",
        answer: "您可以直接在我們的網站上挑選所需輔具，按照流程完成租賃訂單；或根據店家提供的建議單，選擇適合的輔具進行租賃操作。無論是您親自操作，還是依循專業建議，我們都將竭誠為您服務。",
      },
      {
        id: 2,
        question: "租賃輔具需要提供哪些文件？",
        answer: "您不需要提供任何證明文件，也可以代為租賃外縣市的親友輔具。如果需要申請輔具租賃補助，我們的服務人員將為您提供全程協助，確保過程順利。",
      },
      {
        id: 3,
        question: "整個租賃流程大約需要多長時間？",
        answer: "一般來說，從完成結帳到輔具送達，通常需要3至5個工作日。若遇特殊情況，例如高峰期或供應調度問題，可能會有些許延遲。具體配送進度將由客服透過LINE通知您。",
      },
    ],
  },
  {
    id: "cost",
    title: "費用相關",
    questions: [
      {
        id: 1,
        question: "租賃輔具的費用如何計算？",
        answer: "輔具租賃費用會根據設備種類、租賃時間、取貨方式，以及輔具的尺寸來計算。我們的價格透明且清楚，您可以在確認訂單前清楚了解費用明細。",
      },
      {
        id: 2,
        question: "是否需要支付押金？",
        answer: "部分輔具租賃可能需支付一定押金，具體金額會在租賃結帳過程中明確告知。待租賃期間結束且輔具狀態良好後，押金將全額退還。",
      },
      {
        id: 3,
        question: "可接受哪些付款方式？",
        answer: "我們支持多種付款方式，包括信用卡、Line Pay電子支付，以及銀行匯款。您可以選擇最適合自己的支付方式，確保交易過程安全方便。",
      },
      {
        id: 4,
        question: "如需延長租期，費用如何計算？",
        answer: "延長租期將按照原租賃費率按天計算。請在租期結束前與Line客服聯繫，以便及時安排續租並確定最終費用。",
      },
    ],
  },
  {
    id: "equipment",
    title: "輔具使用相關",
    questions: [
      {
        id: 1,
        question: "什麼是粗大運動功能分類系統（GMFCS）？",
        answer: "粗大運動功能分類系統（Gross Motor Function Classification System，簡稱GMFCS）是一套分級標準，用於描述兒童或青少年在日常活動中的粗大運動功能，後被廣泛運用在失能評估。GMFCS分為五個等級，從可以自由走動到需要完全依賴輔具或他人幫助進行移動。透過這個分級系統，我們能夠更清楚了解患者的運動能力，並為其提供最適合的輔具或康復建議。",
      },
      {
        id: 2,
        question: "輔具使用方法不熟悉，該怎麼辦？",
        answer: "若您對輔具的操作不熟悉，別擔心！我們隨附詳細的操作說明書以及教學影片，讓您輕鬆學會使用。配送輔具時，我們的專業配送員或店家人員也會現場進行操作說明，並提供一份衛教單，幫助您快速上手。",
      },
      {
        id: 3,
        question: "輔具損壞或故障怎麼處理？",
        answer: "如果輔具在使用過程中出現損壞或故障，請立即與我們的Line客服中心聯繫。我們會根據情況安排檢修、更換或提供技術支援，確保您能繼續安全使用輔具。",
      },
      {
        id: 4,
        question: "可以更換租賃中的輔具嗎？",
        answer: "如果租賃期間發現輔具不適合您的需求，請與我們的Line客服聯繫。我們將協助您進行更換，並為您安排適合的輔具。可能會有一定的處理時間及費用，具體詳情請以客服回覆為準。",
      },
    ],
  },
];

export type SectionRefs = {
  [key: string]: RefObject<HTMLDivElement>;
};