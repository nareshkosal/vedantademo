// components/Modal.tsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-black">
          <FaTimes className="h-6 w-6" />
        </button>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Modal;