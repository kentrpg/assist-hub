export const basePath = "/images";
export const socialPath = `${basePath}/social`;

// TBD: 尚待討論 image folder management
export const logoPath = `${basePath}/logo`;
export const statusPath = `${basePath}/status`;
export const errorPath = `${basePath}/error`;
export const inquiryPath = `${basePath}/inquiry`;
export const cartPath = `${basePath}/cart`;
export const checkoutPath = `${basePath}/checkout`;
export const userPath = `${basePath}/user`;
export const layoutPath = `${basePath}/layout`;

export const footerWaveImages = {
  mobile: `${layoutPath}/wave375.webp`,
  tablet: `${layoutPath}/wave768.webp`,
  desktop: `${layoutPath}/wave1920.webp`,
};

export type BaseImage = {
  src: string;
  alt: string;
};

export const LinePay: BaseImage = {
  src: `${socialPath}/LINE_Pay.webp`,
  alt: "LINE Pay logo",
};

export const LineIcon: BaseImage = {
  src: `${socialPath}/LINE_icon.webp`,
  alt: "LINE logo",
};

export const MetaLogo: BaseImage = {
  src: `${socialPath}/META-logo.webp`,
  alt: "META logo",
};

export const userEmpty: BaseImage = {
  src: `${userPath}/empty.webp`,
  alt: "插畫顯示一隻手點擊平板上的購物車圖示，象徵電子商務或線上購物的概念。象徵使用者目前沒有任何資料紀錄。",
};
