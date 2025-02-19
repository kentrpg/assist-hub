export type ModalMode = "default" | "inquiry";

export type ModalProps = {
  mode?: ModalMode;
  description?: string;
  onClose: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
  isOpen: boolean;
};
