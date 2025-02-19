import { useEffect, useRef } from "react";

type Handler = (event: MouseEvent | KeyboardEvent) => void;

/**
 * 監聽元素外部點擊和 ESC 鍵事件的自定義 Hook
 * 常用於下拉選單、模態框等需要點擊外部或按 ESC 關閉的場景
 * 
 * @param handler - 當觸發外部點擊或 ESC 鍵時執行的回調函數
 * @param listenCapturing - 是否在捕獲階段處理事件，預設為 true
 * @returns - 返回 ref 物件，需要綁定到要監聽外部點擊的元素上
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const [isOpen, setIsOpen] = useState(false);
 *   const buttonRef = useOutsideClick(() => setIsOpen(false), true);
 *   
 *   return (
 *     <button ref={buttonRef}>
 *       Toggle Menu
 *     </button>
 *   );
 * };
 * ```
 */
export const useOutsideClick = (
  handler: Handler,
  listenCapturing: boolean = true,
) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isClickOutside =
        ref.current && !ref.current.contains(event.target as Node);
      isClickOutside && handler(event);
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handler(event);
      }
    };

    document.addEventListener("click", handleClickOutside, listenCapturing);
    document.addEventListener("keydown", handleEscKey, listenCapturing);

    // clean up function: remove all event listeners
    return () => {
      document.removeEventListener("click", handleClickOutside, listenCapturing);
      document.removeEventListener("keydown", handleEscKey, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
};
