"use client"

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { createDocument } from '../convex/documents';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export function Header() {
    return <div className="bg-[#1c1c1c] py-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex gap-4 items-center text-white text-xl rounded-lg bg-red-950 p-2 border-2 border-red-800">
                <Image src="/logo2.png" width={40} height={40} alt={"Logo"} className="rounded-sm" />KentVault
            </div>

            <div>
                <Unauthenticated>
                    <SignInButton />
                </Unauthenticated>
                
                <Authenticated>
                    <div className="flex gap-4">
                        <ModeToggle />
                        <UserButton />
                    </div>
                </Authenticated>
            </div>
        </div>
    </div>
}