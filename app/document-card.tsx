import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Doc } from "@/convex/_generated/dataModel"

export function DocumentCard({ document }: { document: Doc<"documents">}) {
	return (
		<Card className="hover:shadow-lg transition-shadow">
			<CardHeader>
				<CardTitle>{document.title}</CardTitle>
				<CardDescription>Description</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Content</p>
			</CardContent>
			<CardFooter>
				<Button className="w-full bg-red-800 text-white hover:bg-red-900">View</Button>
			</CardFooter>
		</Card>
	)
}