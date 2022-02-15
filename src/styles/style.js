import styled, { css } from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 200ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  ${(props) =>
    ({
      active_modal: css`
        opacity: 1;
        pointer-events: all;
      `,
    }[props.attr])};
`;

export const ModalContent = styled.div`
  border-radius: 5px;
  background-color: #fff;
  transition: all 0.35s;
  width: 566px;
  ${(props) =>
    ({
      active_content: css`
        transform: scale(1);
      `,
    }[props.attr])}
`;

export const Nav = styled.nav`
  height: 60px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  border-radius: 5px 5px 0 0 !important;
  h3 {
    font-size: 18px;
    font-weight: 500;
    color: #423a3a;
  }
  img {
    cursor: pointer;
  }
`;

export const Main = styled.main`
  padding: 20px;
  max-height: 70vh;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  border-top: 1px solid #e4e4e4;
`;

export const Button = styled.button`
  padding: 10px 15px;
  height: 40px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #fff;
  border-radius: 6px;
  color: #000;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  gap: 10px;
  user-select: none;
  ${(props) => props?.disabled}
  ${(props) => props?.customStyles}
   ${(props) =>
    ({
      primary: css`
        color: #fff;
        border-radius: 3px;
        background: #0278de;
      `,
      outline: css`
        border-radius: 3px;
        color: rgba(0, 0, 0, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.5);
      `,
    }[props.attr])}
`;
export const Form = styled.div`
  width: 200px;
  height: 150px;
  background-color: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 10px;
    border: 1px dashed #efefef;
  }
`;
export const MediaUrl = styled.div`
  color: blue;
  cursor: pointer;
  padding: 10px;
  border: 1px dashed #efefef;
`;
export const Input = styled.input`
  height: 44px;
  padding: 0 15px;
  display: inline-flex;
  align-items: center;
  border: 2px solid #e6e6e6;
  outline: none;
`;
