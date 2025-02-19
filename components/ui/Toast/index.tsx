import { useEffect, useState, useCallback } from "react";
import { MdCheckCircle } from "react-icons/md";
import { ToastContainer } from "./styled";
import type { ToastProps, ToastState, ToastType } from "./data";

/**
 * Toast 通知元件
 *
 * 使用方式：
 * - 在元件中引入並使用 useToast hook
 *
 * ```typescript
 * const YourComponent = () => {
 *   const { openToast, Toast } = useToast();
 *
 *   const handleSuccess = () => {
 *     openToast("操作成功"); // 預設為 success 類型
 *   };
 *
 *   const handleError = () => {
 *     openToast("操作失敗", "error");
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={handleSuccess}>成功按鈕</button>
 *       <button onClick={handleError}>失敗按鈕</button>
 *       <Toast />
 *     </div>
 *   );
 * };
 * ```
 *
 * @hook useToast
 * @returns {object} Toast hook 物件
 * @property {function} openToast - 顯示 Toast 的函數，參數：(message: string, type?: "success" | "error")
 * @property {function} hideToast - 手動隱藏 Toast 的函數
 * @property {function} Toast - Toast 元件，需要在 JSX 中渲染
 *
 * @component ToastComponent
 * @param {object} props - Toast 元件屬性
 * @param {ToastType} [props.type="success"] - Toast 類型：'success' | 'error'
 * @param {string} props.message - 顯示的訊息內容
 * @param {function} props.onClose - Toast 消失時的回調函數
 * @param {number} [props.duration=3000] - 顯示時間（毫秒）
 * @param {string} [props.$top="24px"] - 距離頂部的位置
 * @param {string} [props.$right="24px"] - 距離右側的位置
 */
export const useToast = () => {
  const [toastState, setToastState] = useState<ToastState>(null);

  const openToast = useCallback(
    (message: string, type: ToastType = "success") => {
      setToastState({ type, message });
    },
    [],
  );

  const hideToast = useCallback(() => {
    setToastState(null);
  }, []);

  const Toast = useCallback(() => {
    if (!toastState) return null;

    return (
      <ToastComponent
        type={toastState.type}
        message={toastState.message}
        onClose={hideToast}
      />
    );
  }, [toastState, hideToast]);

  return {
    openToast,
    hideToast,
    Toast,
  };
};

const ToastComponent = ({
  type = "success",
  message = "成功",
  duration = 3000,
  onClose,
  $top = "24px",
  $right = "24px",
}: ToastProps) => {
  const [isLeaving, setIsLeaving] = useState(false);
  const animationDuration = 300;
  const isFunction = typeof onClose === "function";

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsLeaving(true);
    }, duration);

    const removeTimer = setTimeout(() => {
      isFunction && onClose();
    }, duration + animationDuration);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [duration, onClose, isFunction]);

  return (
    <ToastContainer
      $type={type}
      $isLeaving={isLeaving}
      $top={$top}
      $right={$right}
    >
      <MdCheckCircle size={20} />
      {message}
    </ToastContainer>
  );
};

export default ToastComponent;
