"use client";

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";

export function HeaderActions() {
    return (
        <>
            <Unauthenticated>
                <SignInButton />
            </Unauthenticated>

            <Authenticated>
                <UserButton />
            </Authenticated>

            <AuthLoading>
                <div className="inline-block text-red-700 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
                </div>
            </AuthLoading>
        </>
    )
}