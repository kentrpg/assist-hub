import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { ModalMode, ModalProps } from "./data";
import {
  Body,
  Content,
  Wrapper,
  Image,
  Text,
  Button,
  OutlinedButton,
  ImageWrapper,
} from "./styled";

const modalControls = {
  default: {
    type: "text",
    description: "成功",
  },
  inquiry: {
    type: "image",
    imgSrc: "images/inquiry-modal.webp",
    imgAlt:
      "插畫顯示一名醫生透過手機螢幕與患者進行線上諮詢，周圍有健康相關的圖標，如心臟、肺部和檔案，象徵遠端醫療與健康管理的概念。",
    description: "您已成功寄出詢問單，\n爾後店家會由信箱與您聯繫",
  },
};

export const useModal = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    description: "",
    mode: "default" as ModalMode,
    onConfirm: undefined as (() => void) | undefined,
  });

  const openModal = useCallback(
    (
      description: string,
      mode: ModalMode = "default",
      options?: { onConfirm?: () => void },
    ) => {
      setModalState({
        isOpen: true,
        description,
        mode,
        onConfirm: options?.onConfirm,
      });
    },
    [],
  );

  const closeModal = useCallback(() => {
    if (modalState.onConfirm) {
      modalState.onConfirm();
    }
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, [modalState.onConfirm]);

  const Modal = useCallback(() => {
    return (
      <ModalComponent
        isOpen={modalState.isOpen}
        onClose={closeModal}
        mode={modalState.mode}
        description={modalState.description}
        onConfirm={modalState.onConfirm}
      />
    );
  }, [
    modalState.isOpen,
    modalState.mode,
    modalState.description,
    modalState.onConfirm,
    closeModal,
  ]);

  return {
    openModal,
    closeModal,
    Modal,
  };
};

const ModalComponent = ({
  mode = "default",
  description,
  onClose,
  children,
  isOpen,
  onConfirm,
}: ModalProps) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleClose]);

  if (typeof window === "undefined" || !isOpen) return null;

  const modalContent = (
    <Wrapper onClick={handleWrapperClick} $isOpen={isOpen}>
      <Content $isImageMode={mode === "inquiry"}>
        <Body>
          {children || (
            <>
              {mode === "default" ? (
                <>
                  <Text>{description || modalControls[mode].description}</Text>
                  <OutlinedButton onClick={handleClose}>確定</OutlinedButton>
                </>
              ) : (
                <>
                  <ImageWrapper>
                    <Image
                      src={modalControls[mode].imgSrc}
                      alt={modalControls[mode].imgAlt}
                      width={140}
                      height={140}
                    />
                    <Text>{modalControls[mode].description}</Text>
                  </ImageWrapper>
                  <Button onClick={handleClose}>確定</Button>
                </>
              )}
            </>
          )}
        </Body>
      </Content>
    </Wrapper>
  );

  return createPortal(modalContent, document.body);
};

export default ModalComponent;
