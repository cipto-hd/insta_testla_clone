import {
  cloneElement,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import popupStyles from "./index.module.css";

type TReactElement =
  | ReactElement<any, string | JSXElementConstructor<any>>
  | Function;

interface ICustomPopupProps {
  title: string;
  trigger: TReactElement;
  children: ReactNode;
}

const renderTrigger = (
  trigger: TReactElement | Function,
  onClick: Function,
  onBlur?: Function
) => {
  const triggerProps: any = { onClick, onBlur };

  if (typeof trigger === "function") {
    const comp = trigger();
    return !!trigger && cloneElement(comp, triggerProps);
  }

  return !!trigger && cloneElement(trigger, triggerProps);
};

const CustomPopup = ({ title, trigger, children }: ICustomPopupProps) => {
  const [show, setShow] = useState(false);

  const openPopup = () => {
    setShow(true);
  };

  const closePopup = () => {
    setShow(false);
  };

  return (
    <>
      {renderTrigger(trigger, openPopup, closePopup)}
      <div
        style={{
          visibility: show ? "visible" : "hidden",
          opacity: show ? "1" : "0",
        }}
        className={popupStyles.overlay}
        onClick={closePopup}
      >
        <div
          className={popupStyles.popup + " bg-gray-50 text-gray-800"}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex flex-row items-center justify-between pb-1 border-b">
            <h2 className="font-semibold text-gray-800">{title}</h2>
            <div
              className="text-3xl font-bold text-gray-900 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125"
              onClick={closePopup}
            >
              &times;
            </div>
          </div>
          <div className={popupStyles.content + " mt-4"}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default CustomPopup;
