import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import {
  IoCheckmarkCircle,
  IoCloseCircleSharp,
  IoInformation,
} from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";

interface ToastProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
  description?: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  type,
  message,
  description,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const checkType = () => {
    switch (type) {
      case "success":
        return <IoCheckmarkCircle size={25} color="#00ff00" />;
      case "error":
        return <IoCloseCircleSharp size={25} color="#ff0000" />;
      case "info":
        return <IoInformation size={25} color="#0000ff" />;
      case "warning":
        return <IoIosWarning size={25} color="#FFEB3B" />;
      default:
        return <IoCheckmarkCircle size={25} color="#00ff00" />;
    }
  };

  return (
    <div className="w-[358px] md:w-[452px] h-[90px] rounded-lg bg-white p-5 my-3 mx-auto border border-[#E4E4E4] shadow shadow-[rgba(0,0,0,0.1)] flex items-center gap-5">
      {checkType()}
      <div className="flex-1 flex flex-col items-start gap-1">
        <h2 className="text-nowrap font-semibold text-gray-950 leading-5 text-[14px]">
          {message}
        </h2>
        {description && (
          <p className="font-normal leading-4 text-[12px] text-nowrap text-gray-700">
            {description}
          </p>
        )}
      </div>
      <button onClick={onClose}>
      <MdClose
        size={25}
        color="#73737F"
        role="button"
        aria-label="Close toast"
      />
      </button>
    </div>
  );
};
