// Notification helper utilities for consistent toast notifications across the app
import toast from 'react-hot-toast';

export const notify = {
    success: (message: string, title?: string) => {
        toast.success(
            <div>
                {title && <div className="font-semibold mb-1">{title}</div>}
                <div className="text-sm">{message}</div>
            </div>,
            { duration: 4000 }
        );
    },
    
    error: (message: string, title?: string) => {
        toast.error(
            <div>
                {title && <div className="font-semibold mb-1">{title}</div>}
                <div className="text-sm">{message}</div>
            </div>,
            { duration: 5000 }
        );
    },
    
    loading: (message: string) => {
        return toast.loading(message);
    },
    
    promise: <T,>(
        promise: Promise<T>,
        messages: {
            loading: string;
            success: string;
            error: string;
        }
    ) => {
        return toast.promise(promise, messages);
    },
    
    dismiss: (toastId?: string) => {
        toast.dismiss(toastId);
    },
};
