export const basePath = "/images";

export const logoPath = `${basePath}/logo`;
export const statusPath = `${basePath}/status`;
export const errorPath = `${basePath}/error`;
export const inquiryPath = `${basePath}/inquiry`;
export const cartPath = `${basePath}/cart`;
export const checkoutPath = `${basePath}/checkout`;
export const userPath = `${basePath}/user`;
export const layoutPath = `${basePath}/layout`;
export const productPath = `${basePath}/product`;
export const homePath = `${basePath}/home`;

export const footerWaveImages = {
  mobile: `${layoutPath}/wave375.webp`,
  tablet: `${layoutPath}/wave768.webp`,
  desktop: `${layoutPath}/wave1920.webp`,
};
export const bannerImages = {
  mobile: `${homePath}/banner-tablet.webp`,
  tablet: `${homePath}/banner.webp`,
};

export type BaseImage = {
  src: string;
  alt: string;
};

export const LinePay: BaseImage = {
  src: `${layoutPath}/LINE-Pay.webp`,
  alt: "LINE Pay",
};

export const LineIcon: BaseImage = {
  src: `${layoutPath}/LINE-icon.webp`,
  alt: "LINE",
};

export const MetaLogo: BaseImage = {
  src: `${layoutPath}/META-logo.webp`,
  alt: "META",
};

export const userEmpty: BaseImage = {
  src: `${userPath}/empty.webp`,
  alt: "插畫顯示一隻手點擊平板上的購物車圖示，象徵電子商務或線上購物的概念。象徵使用者目前沒有任何資料紀錄。",
};

export const brands: BaseImage[] = [
  {
    src: `${homePath}/company-1.webp`,
    alt: "Spiral Design Co.",
  },
  {
    src: `${homePath}/company-2.webp`,
    alt: "Inclusive Steps",
  },
  {
    src: `${homePath}/company-3.webp`,
    alt: "Prognoz Group",
  },
  {
    src: `${homePath}/company-4.webp`,
    alt: "PowerFlex Gym",
  },
  {
    src: `${homePath}/company-5.webp`,
    alt: "StepUp Mobility",
  },
  {
    src: `${homePath}/company-6.webp`,
    alt: "Eco Living Solutions",
  },
  {
    src: `${homePath}/company-7.webp`,
    alt: "Harmony Care",
  },
];
