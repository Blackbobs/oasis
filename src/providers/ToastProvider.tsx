import React, { ReactNode, useCallback, useState, useEffect } from 'react';
import toastManager from '../utils/ToastManager';
import { Toast } from '../components/Toast';

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<{
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    description: string;
  } | null>(null);

  const handleClose = useCallback(() => {
    setToast(null);
    toastManager.hideToast();
  }, []);

  useEffect(() => {
    toastManager.setOnToastChangedCallback(setToast);
    return () => {
      toastManager.setOnToastChangedCallback(() => {});
    };
  }, []);

  return ( 
    <div className="relative">
      {toast && (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-full z-[999999]">
          <Toast
            type={toast.type}
            message={toast.message}
            description={toast.description}
            onClose={handleClose}
          />
        </div>
      )}
      {children}
    </div>
  );
};