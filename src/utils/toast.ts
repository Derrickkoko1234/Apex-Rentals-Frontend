import { toast as sonnerToast } from "sonner";

interface ToastOptions {
  title?: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  closeButton?: boolean;
  id?: string;
  // important?: boolean;
}

export const toast = {
  success: (message: string, options?: ToastOptions) => {
    sonnerToast.success(options?.title || "Success", {
      description: message,
      duration: options?.duration || 3000,
      action: options?.action,
      closeButton: options?.closeButton,
      id: options?.id,
      // important: options?.important,
    });
  },

  error: (message: string, options?: ToastOptions) => {
    sonnerToast.error(options?.title || "Error", {
      description: message,
      duration: options?.duration || 5000,
      action: options?.action,
      closeButton: options?.closeButton ?? true,
      id: options?.id,
      // important: options?.important ?? true,
    });
  },

  warning: (message: string, options?: ToastOptions) => {
    sonnerToast.warning(options?.title || "Warning", {
      description: message,
      duration: options?.duration || 4000,
      action: options?.action,
      closeButton: options?.closeButton,
      id: options?.id,
      // important: options?.important,
    });
  },

  info: (message: string, options?: ToastOptions) => {
    sonnerToast.info(options?.title || "Info", {
      description: message,
      duration: options?.duration || 3000,
      action: options?.action,
      closeButton: options?.closeButton,
      id: options?.id,
      // important: options?.important,
    });
  },

  // For loading states that resolve to success/error
  promise: <T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string;
      error: string;
    },
    options?: Omit<ToastOptions, "description">
  ) => {
    return sonnerToast.promise(promise, {
      loading: messages.loading,
      success: messages.success,
      error: messages.error,
      duration: options?.duration,
      id: options?.id,
      action: options?.action,
    });
  },

  // Raw toast for custom needs
  custom: (title: string, options?: ToastOptions) => {
    sonnerToast(title, {
      description: options?.description,
      duration: options?.duration || 3000,
      action: options?.action,
      closeButton: options?.closeButton,
      id: options?.id,
    });
  },

  // Direct access to underlying toast library
  dismiss: sonnerToast.dismiss,
  // update: sonnerToast.update,
};
