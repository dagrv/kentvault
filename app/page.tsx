"use client";

import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { createDocument } from '../convex/documents';


export default function Home() {
	const documents = useQuery(api.documents.getDocuments);
	const createDocument = useMutation(api.documents.createDocument)

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Unauthenticated>
				<div className="bg-sky-600 p-2 rounded-md">
					<SignInButton />
				</div>
				
			</Unauthenticated>
			<Authenticated>
				<UserButton />

				<button onClick={() => {
					createDocument({title: 'hello'})
				}} className="bg-sky-500 p-2 rounded-lg w-full">Click here</button>

				{documents?.map((doc) => (
					<div key={doc._id}>{doc.title}</div>
				))}
			</Authenticated>
		</main>
	);
}
