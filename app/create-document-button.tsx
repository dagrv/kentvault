"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import UploadDocumentForm from "./upload-document-form";
import { useState } from "react";
import { UploadIcon } from "lucide-react";

export default function CreateDocumentButton() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog onOpenChange={setIsOpen} open={isOpen}>
			<DialogTrigger asChild>
				<Button className="outline outline-offset-2 outline-red-900">
					<UploadIcon className="w-5 h-5 mr-1 " />
					Upload Document
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
				<DialogTitle>Upload New Document</DialogTitle>
				<DialogDescription>
					Upload a new document to search over
				</DialogDescription>

				<UploadDocumentForm onUpload={() => setIsOpen(false)} />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
