// src/hooks/useToastNotifications.ts
import toastManager from '../utils/ToastManager';

const successToast = (message: string, description: string) => {
  toastManager.showToast('success', message, description);
};

const errorToast = (message: string, description: string) => {
  toastManager.showToast('error', message, description);
};

const infoToast = (message: string, description: string) => {
  toastManager.showToast('info', message, description);
};

const warningToast = (message: string, description: string) => {
  toastManager.showToast('warning', message, description);
};

export { successToast, errorToast, infoToast, warningToast };
