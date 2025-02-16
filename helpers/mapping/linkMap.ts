import { PrimaryButton, SecondaryButton } from "@/styles/link";

const buttonMap = {
  PrimaryButton,
  SecondaryButton,
};

export type StyledLinkType = keyof typeof buttonMap;

// TBD: 需要再討論 StyledLink 的設計
// export const StyledLink = {
//   solid: {
//     buttonVariants: "primary",
//     buttonSizes: "xlarge",
//   },
//   icon: {
//   },
// };

// export type StyledLinkType = keyof typeof StyledLink;

export const getButtonComponent = (layoutType: "PrimaryButton" | "SecondaryButton") => {
  return buttonMap[layoutType] || SecondaryButton;
};
