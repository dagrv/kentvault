"use client";

import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader } from "lucide-react";
import { LoadingButton } from "@/components/loading-button";

const formSchema = z.object({
    title: z.string().min(2).max(93)
})

export default function UploadDocumentForm({
    onUpload, 
}: {
    onUpload: () => void;
}) {
	const createDocument = useMutation(api.documents.createDocument)
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await createDocument(values);
        onUpload();
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={form.control} name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Expense Report" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <LoadingButton 
                    isLoading={form.formState.isSubmitting}
                    loadingText="Uploading...">
                    Upload
                </LoadingButton>
            </form>
        </Form>
    );
}
