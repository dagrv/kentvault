import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export function LoadingButton(
    { isLoading, children, loadingText } : 
    { isLoading: boolean, children: ReactNode, loadingText: string }) {
    
        return (
        <Button disabled={isLoading} type="submit">
            { isLoading && <Loader className="animate-spin mr-1" /> }
            { isLoading ? loadingText : children }
        </Button>
    )
}