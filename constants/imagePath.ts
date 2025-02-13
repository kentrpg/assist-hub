export const basePath = "/images";
export const socialPath = `${basePath}/social`;

// TBD: 尚待討論 image folder management
export const logoPath = `${basePath}/logo`;
export const statusPath = `${basePath}/status`;
export const errorPath = `${basePath}/error`;
export const inquiryPath = `${basePath}/inquiry`;
export const cartPath = `${basePath}/cart`;
export const checkoutPath = `${basePath}/checkout`;
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
