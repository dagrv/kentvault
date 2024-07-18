"use client";

import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { createDocument } from '../convex/documents';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";


export default function Home() {
	const documents = useQuery(api.documents.getDocuments);
	const createDocument = useMutation(api.documents.createDocument)

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Unauthenticated>
				<SignInButton />
			</Unauthenticated>
			
			<Authenticated>
				<UserButton />

				<ModeToggle/>

				<Button onClick={() => {
					createDocument({title: 'hello'})
				}}>Click here</Button>

				{documents?.map((doc) => (
					<div key={doc._id}>{doc.title}</div>
				))}
			</Authenticated>
		</main>
	);
}
