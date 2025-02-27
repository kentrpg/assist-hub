import { BASE_URL } from "@/constants/environment";
import { opengraphPath } from "@/constants/imagePath";

export type HeadMetatagProps = {
  title: string;
  description?: string;
  canonical?: string;
  basicOnly?: boolean;
};

type DefaultMetatag = {
  description: string;
  image: string;
  locale: string;
  type: "website";
  siteName: string;
};

export const defaultMetatag: DefaultMetatag = {
  description:
    "從拐杖到電動床，RENT4U 幫助您找到最合適的輔具！不確定需要什麼？我們的專業團隊提供免費諮詢，幫助您快速找到解決方案。",
  image: `${BASE_URL}${opengraphPath}/og-image.png`,
  locale: "zh_TW",
  type: "website",
  siteName: "RENT4U",
};
