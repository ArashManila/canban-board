import { ReactNode, useCallback, useEffect } from "react";
import data from "../../DataManagment/dataM";

type ModalProps = {
  active: boolean;
  children?: ReactNode;
  setActive: (active: boolean) => void;
};

const Modal = ({ active, setActive, children }: ModalProps) => {
  const escFunction = useCallback((event: KeyboardEvent) => {
    event.stopPropagation();
    if (event.key === "Escape" && data.Get("User name")) setActive(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const CloseFunction = () => {
    if (data.Get("User name")) setActive(false);
  };
//E:\html разное\tasks for purrweb\task 1\deployment\trello-react\public\close-black-button.svg
//E:\html разное\tasks for purrweb\task 1\deployment\trello-react\src\components\Modal\Modal.tsx
//./../../../public/close-black-button.svg
  return (
    <>
      <div
        className={active ? "modal active" : "modal"}
        onClick={CloseFunction}
      >
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <div className="button-wrapper-modal">
            <button className="button button-transparent" type="button" onClick={CloseFunction}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99978 10L13.5353 13.5355M6.46424 13.5355L9.99978 10L6.46424 13.5355ZM13.5353 6.46447L9.99978 10L13.5353 6.46447ZM9.99978 10L6.46424 6.46447L9.99978 10Z" stroke="#B9B9B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          </div>
          
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
