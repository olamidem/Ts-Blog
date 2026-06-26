import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}
const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
