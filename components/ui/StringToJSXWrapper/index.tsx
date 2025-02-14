import React, { Fragment } from "react";

/**
 * StringToJSXWrapper 元件用於處理文字中的標記替換，
 * 利用文字中的 “[marker]” 標記來決定需要被替換的位置，
 * 並透過 MarkerComponent prop 渲染自定義標記內容。
 *
 * @example 純文字標記使用 - 用於一般文字強調，傳入純文字陣列
 * ```tsx
 * const description = "為了您的訂單安全，店內取貨時需出示[marker]以完成核對";
 * const convertString = ["驗證碼"];
 *
 * 定義 MarkerComponent，用於渲染標記文字
 * const MarkMarker = ({ text }: MarkerProps) => <Mark>{text}</Mark>;
 *
 * <StringToJSXWrapper
 *   text={description}
 *   convertString={convertString}
 *   MarkerComponent={MarkMarker}
 * />
 * ```
 *
 * @example 帶 href 的標記使用 - 用於可點擊的文字連結，
 * - 需要傳入的 convertString 陣列中的物件型別包含 href 屬性，
 * - 並在 MarkerComponent 中根據 index 從 convertString 取得對應 href
 *
 * ```tsx
 * const label = "我同意[marker]和[marker]";
 * const convertString = [
 *   { text: "隱私權政策", href: "/privacy" },
 *   { text: "服務條款", href: "/terms" }
 * ];
 *
 * 定義 MarkerComponent，利用閉包或局部變數取得 convertString
 * const InfoLinkMarker = ({ text, index }: MarkerProps) => (
 *   <InfoLink href={convertString[index].href}>{text}</InfoLink>
 * );
 *
 * <StringToJSXWrapper
 *   text={label}
 *   convertString={convertString}
 *   MarkerComponent={InfoLinkMarker}
 * />
 * ```
 *
 * StringToJSXWrapper 的 Props 型別定義
 * @param text - 要處理的文字內容，其中用 "[marker]" 標記需要替換的位置
 * @param convertString - 替換標記的文字資料，可為純文字陣列或帶 href 的物件陣列
 * @param MarkerComponent - 自定義標記的渲染元件，會依序接收 { text: string, index: number } 作為 props
 */

export type HrefMarkerProps = {
  text: string;
  href: string;
};

export type MarkerProps = {
  text: string;
  index: number;
};

type StringToJSXWrapperProps = {
  text: string;
  convertString: HrefMarkerProps[];
  MarkerComponent: React.ComponentType<MarkerProps>;
};

export const StringToJSXWrapper = ({
  text,
  convertString,
  MarkerComponent,
}: StringToJSXWrapperProps) => {
  const textArray = convertString.map((item) => item.text);

  const parts = text.split("[marker]");
  const shouldRenderMarker = (index: number) => index < parts.length - 1;

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {shouldRenderMarker(index) && (
            <MarkerComponent text={textArray[index]} index={index} />
          )}
        </Fragment>
      ))}
    </>
  );
};
