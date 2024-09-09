import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { deleteClientAction } from "@/lib/action";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function DeleteAlertDialog({ regNumber }: { regNumber: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error, message } = await deleteClientAction(regNumber);
      if (error) {
        toast({
          title: "Error Occured",
          description: error,
          className: " toast-container toast-error",
        });
        return;
      }
      router.push("/admin");
      toast({
        title: "Sucess",
        description: message,
        className: " toast-container toast-sucess",
      });
    } catch (err) {
      console.error("Error deleting client:", err);
      toast({
        title: "Error Occured",
        description: "Internal Server Error",
        className: " toast-container toast-error",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="shad-danger-btn">DELETE CLIENT</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="shad-dialog sm:max-w-md">
        <AlertDialogHeader className="mb-4 space-y-3">
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-light-200">
            This action cannot be undone. This will permanently delete this
            member and remove the data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2">
          <AlertDialogCancel className="shad-primary-btn">
            CANCEL
          </AlertDialogCancel>
          <AlertDialogAction className="shad-danger-btn" onClick={handleDelete}>
            {" "}
            {!isLoading ? (
              <div className="flex items-center ">DELETE CLIENT</div>
            ) : (
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/icons/loader.svg"
                  alt="loader"
                  width={24}
                  height={24}
                  className="animate-spin"
                />
                Loading...
              </div>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteAlertDialog;
