import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { createDocument } from '../convex/documents';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { HeaderActions } from "./header-actions";

export function Header() {
    return <div className="bg-[#141414] py-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex gap-4 items-center text-white text-xl rounded-lg bg-[#141414] p-2 pr-4 border-2 border-red-800">
                <Image src="/logo2.png" width={30} height={40} alt={"Logo"} className="rounded-sm" />KentVault
            </div>

            <div className="flex gap-4 items-center">
                <ModeToggle />
                <HeaderActions />
            </div>
        </div>
    </div>
}