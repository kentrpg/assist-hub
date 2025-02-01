export type ToastProps = {
  type: "success" | "error";
  message: string;
  duration?: number;
  $top?: string;
  $right?: string;
  onClose: () => void;
};
