export type ToastProps = {
  type: "success" | "error";
  message: string;
  duration?: number;
  $top?: string;
  $right?: string;
  onClose: () => void;
};

export type ToastState = {
  type: ToastProps["type"];
  message: string;
} | null;