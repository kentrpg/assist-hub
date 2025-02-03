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
} from "./styled";

const controller = {
  default: {
    type: "text",
    description: "成功",
  },
  inquiry: {
    type: "image",
    imgSrc: "images/inquiry-modal.png",
    imgAlt:
      "插畫顯示一名醫生透過手機螢幕與患者進行線上諮詢，周圍有健康相關的圖標，如心臟、肺部和檔案，象徵遠端醫療與健康管理的概念。",
    description: "您已成功寄出詢問單，爾後店家會由信箱與您聯繫",
  },
};

export const useModal = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    description: "",
    mode: "default",
  });

  const openModal = useCallback(
    (description: string, mode: ModalMode = "default") => {
      setModalState({
        isOpen: true,
        description,
        mode,
      });
    },
    [],
  );

  const closeModal = useCallback(() => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  const Modal = useCallback(() => {
    return (
      <ModalComponent
        isOpen={modalState.isOpen}
        onClose={closeModal}
        mode={modalState.mode as ModalMode}
        description={modalState.description}
      />
    );
  }, [modalState.isOpen, modalState.mode, modalState.description, closeModal]);

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
      <Content>
        <Body>
          {children || (
            <>
              {mode === "default" ? (
                <>
                  <Text>{description || controller[mode].description}</Text>
                  <OutlinedButton onClick={handleClose}>確定</OutlinedButton>
                </>
              ) : (
                <>
                  <Image
                    src={controller[mode].imgSrc}
                    alt={controller[mode].imgAlt}
                    width={120}
                    height={120}
                  />
                  <Text>{description || controller[mode].description}</Text>
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
