import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { CheckIcon, XIcon } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, icon, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {icon === "success" && (
              <div className="p-1 rounded-full bg-green-500">
                <CheckIcon className="h-4 w-4 text-white" />
              </div>
            )}
            {icon === "error" && (
              <div className="p-1 rounded-full bg-red-500">
                <XIcon className="h-4 w-4 text-white" />
              </div>
            )}
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport className="fixed top-0 right-0 z-50 m-4" />
    </ToastProvider>
  )
}
