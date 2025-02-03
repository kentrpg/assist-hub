export type ToastType = "success" | "error";

export type ToastState = {
  type: ToastType;
  message: string;
} | null;

export type ToastProps = {
  type?: ToastType;
  message: string;
  onClose?: () => void;
  duration?: number;
  $top?: string;
  $right?: string;
};
