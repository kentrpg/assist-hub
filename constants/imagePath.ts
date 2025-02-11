export const basePath = "/images";
export const socialPath = `${basePath}/social`;

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
