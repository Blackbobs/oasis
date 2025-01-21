class ToastManager {
  private toast: {
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    description: string;
  } | null = null;
  private onToastChangedCallback?: (toast: {
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    description: string;
  } | null) => void;

  setOnToastChangedCallback(
    callback: (toast: {
      type: 'success' | 'error' | 'warning' | 'info';
      message: string;
      description: string;
    } | null) => void
  ) {
    this.onToastChangedCallback = callback;
  }

  showToast(
    type: 'success' | 'error' | 'warning' | 'info',
    message: string,
    description: string
  ) {
    const newToast = { type, message, description };
    this.toast = newToast;

    if (this.onToastChangedCallback) {
      this.onToastChangedCallback(newToast);
    }
  }

  hideToast() {
    this.toast = null;
    if (this.onToastChangedCallback) {
      this.onToastChangedCallback(null);
    }
  }

  getToast() {
    return this.toast;
  }
}

const toastManager = new ToastManager();
export default toastManager;