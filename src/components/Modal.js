import React from "react";
import * as Styled from "../styles/style";

const Modal = ({
  active,
  setActive,
  title,
  children,
  btn1,
  btn2,
  saveModal,
  closeModal,
  ...props
}) => {
  return (
    <Styled.ModalWrapper
      onClick={() => setActive(false)}
      attr={active ? "active_modal" : ""}
    >
      <Styled.ModalContent
        onClick={(e) => e.stopPropagation()}
        attr={active ? "active_content" : ""}
      >
        <Styled.Nav>
          <h3>{title}</h3>
        </Styled.Nav>

        <Styled.Main>{children}</Styled.Main>
        <Styled.ModalFooter>
          <Styled.Button attr="primary" onClick={saveModal}>
            {btn1}
          </Styled.Button>
          <Styled.Button attr="outline" onClick={closeModal}>
            {btn2}
          </Styled.Button>
        </Styled.ModalFooter>
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  );
};

export default Modal;
