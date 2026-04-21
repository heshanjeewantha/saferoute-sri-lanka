import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        const isSuccess = props.variant === "success";
        return (
          <Toast key={id} {...props}>
            <div className="flex items-start gap-3">
              {isSuccess && (
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-white drop-shadow" />
              )}
              <div className="grid gap-0.5">
                {title && (
                  <ToastTitle className={isSuccess ? "text-white font-bold text-base" : ""}>
                    {title}
                  </ToastTitle>
                )}
                {description && (
                  <ToastDescription className={isSuccess ? "text-white/90 text-sm" : ""}>
                    {description}
                  </ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose className={isSuccess ? "text-white/70 hover:text-white" : ""} />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
