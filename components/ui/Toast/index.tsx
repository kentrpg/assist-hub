import { useEffect, useState, useCallback } from "react";
import { MdCheckCircle } from "react-icons/md";
import { ToastContainer } from "./styled";
import type { ToastProps, ToastState, ToastType } from "./data";

/**
 * Toast 通知元件
 *
 * 使用方式：
 * 1. 在父元件中設置 state 來控制 Toast 的顯示狀態
 * ```typescript
 * const [showToast, setShowToast] = useState(false);
 * ```
 *
 * 2. 在需要顯示 Toast 的時候，state(showToast) 設置 true
 * ```typescript
 * const handleClick = () => {
 *   setShowToast(true);
 * };
 * ```
 *
 * 3. 在 JSX 中使用條件渲染來顯示 Toast
 * ```typescript
 * {showToast && (
 *   <Toast
 *     type="success"  // 'success' | 'error'
 *     message="成功儲存"  // 顯示的訊息
 *     onClose={() => setShowToast(false)}  // Toast 消失時的回調
 *     duration={3000}  // 可選，預設 3000ms
 *     $top="24px"     // 可選，預設 24px
 *     $right="24px"   // 可選，預設 24px
 *   />
 * )}
 * ```
 *
 * @param props.type - Toast 類型：'success' | 'error'
 * @param props.message - 顯示的訊息內容
 * @param props.onClose - Toast 消失時的回調函數
 * @param props.duration - 顯示時間（毫秒），預設 3000ms
 * @param props.$top - 距離頂部的位置，預設 24px
 * @param props.$right - 距離右側的位置，預設 24px
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
    // 設置 Toast 消失的計時器
    const hideTimer = setTimeout(() => {
      setIsLeaving(true);
    }, duration);

    // 設置移除 Toast 的計時器（包含動畫時間）
    const removeTimer = setTimeout(() => {
      isFunction && onClose();
    }, duration + animationDuration);

    // 計時器清空，避免記憶體洩漏
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
