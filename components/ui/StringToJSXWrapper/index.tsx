import React, { ReactNode, Fragment } from "react";

/**
 * StringToJSXWrapper 元件用於處理文字中的標記替換
 *
 * @example 純文字標記使用 - 用於一般文字強調，傳入純文字陣列
 * ```tsx
 * const description = "為了您的訂單安全，店內取貨時需出示[marker]以完成核對";
 * const convertString = ["驗證碼"];
 *
 * <StringToJSXWrapper text={description} convertString={convertString}>
 *   {({ text }) => <Mark>{text}</Mark>}
 * </StringToJSXWrapper>
 * ```
 *
 * @example 帶 href 的標記使用 - 用於可點擊的文字連結，傳入的 convertString 型別要帶上 HrefMarkerProps
 * ```tsx
 * const label = "我同意[marker]和[marker]";
 * const convertString = [
 *   { text: "隱私權政策", href: "/privacy" },
 *   { text: "服務條款", href: "/terms" }
 * ];
 *
 * <StringToJSXWrapper text={label} convertString={convertString}>
 *   {({ text, index }) => (
 *     <InfoLink href={convertString[index].href}>{text}</InfoLink>
 *   )}
 * </StringToJSXWrapper>
 * ```
 */

export type HrefMarkerProps = {
  text: string;
  href: string;
};

/**
 * StringToJSXWrapper 的 Props 型別定義
 * text: 傳入要處理的文字內容，使用 [marker] 標記需要替換的位置
 * convertString: 要替換的文字陣列，可以是純文字陣列或帶有連結的物件陣列，依序對應 [marker] 的位置
 * children: 渲染函式，用於自定義標記的渲染方式，接收 { text: string; index: number } 參數
 * @param content.text - 要替換的文字
 * @param content.index - 當前標記的索引
 */

type StringToJSXWrapperProps = {
  text: string;
  convertString: string[] | HrefMarkerProps[];
  children: (content: { text: string; index: number }) => ReactNode;
};

const isHrefMarkerArray = (
  value: string[] | HrefMarkerProps[],
): value is HrefMarkerProps[] => {
  if (value.length === 0) return false;
  return typeof value[0] === "object" && "text" in value[0];
};

export const StringToJSXWrapper = ({
  text,
  convertString,
  children,
}: StringToJSXWrapperProps) => {
  const textArray = isHrefMarkerArray(convertString)
    ? convertString.map((item) => item.text)
    : convertString;

  const parts = text.split("[marker]");
  const shouldRenderMarker = (index: number) => index < parts.length - 1;

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {shouldRenderMarker(index) &&
            children({
              text: textArray[index],
              index,
            })}
        </Fragment>
      ))}
    </>
  );
};
