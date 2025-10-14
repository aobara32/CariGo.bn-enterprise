import { useToast, toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export function ToastDebugger() {
  const { toasts, dismiss } = useToast();

  const showSuccessToast = () => {
    console.log('[ToastDebugger] Showing success toast');
    toast({
      title: "Success!",
      description: "This is a success message.",
      variant: "default",
    });
  };

  const showErrorToast = () => {
    console.log('[ToastDebugger] Showing error toast');
    toast({
      title: "Error!",
      description: "This is an error message.",
      variant: "destructive",
    });
  };

  const showWarningToast = () => {
    console.log('[ToastDebugger] Showing warning toast');
    toast({
      title: "Warning",
      description: "This is a warning message.",
    });
  };

  const dismissAllToasts = () => {
    console.log('[ToastDebugger] Dismissing all toasts');
    dismiss();
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
      <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
        🐛 Toast Debugger
      </h3>
      
      <div className="space-y-2 mb-4">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Active toasts: <span className="font-bold">{toasts.length}</span>
        </div>
        
        {toasts.length > 0 && (
          <div className="text-xs text-gray-500 dark:text-gray-500 max-w-xs">
            {toasts.map((t, index) => (
              <div key={t.id} className="mb-1 p-2 bg-gray-50 dark:bg-gray-900 rounded">
                Toast #{index + 1} (ID: {t.id})
                <br />
                Title: {t.title?.toString()}
                <br />
                Open: {t.open ? "✓" : "✗"}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Button 
          onClick={showSuccessToast}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Show Success Toast
        </Button>
        
        <Button 
          onClick={showErrorToast}
          className="w-full bg-red-600 hover:bg-red-700"
        >
          Show Error Toast
        </Button>
        
        <Button 
          onClick={showWarningToast}
          className="w-full bg-yellow-600 hover:bg-yellow-700"
        >
          Show Warning Toast
        </Button>
        
        <Button 
          onClick={dismissAllToasts}
          variant="outline"
          className="w-full"
          disabled={toasts.length === 0}
        >
          Dismiss All
        </Button>
      </div>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-500">
        💡 Open browser console to check logs
      </div>
    </div>
  );
}



