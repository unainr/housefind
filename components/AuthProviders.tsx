"use client"
import React from 'react'
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

const AuthProviders = () => {
  return (
    <>
    <div className="flex flex-col space-y-1.5">
    <Button  onClick={() => signIn("github")}
        variant="outline"
        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded borderp-2 text-sm font-medium  outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
        <svg
            className="h-[18px] w-[18px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 98 96">
            <path
                fillRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362l-.08-9.127c-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126l-.08 13.526c0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill=" #24292f"
            />
        </svg>
        Continue with GitHub
    </Button>
</div>
<div className="flex flex-col space-y-1.5">
    <Button onClick={() => signIn("google")}
        variant="outline"
        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border p-2 text-sm font-medium  outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90 92"
            fill="none"
            className="h-[18px] w-[18px]">
            <path
                d="M90 47.1c0-3.1-.3-6.3-.8-9.3H45.9v17.7h24.8c-1 5.7-4.3 10.7-9.2 13.9l14.8 11.5C85 72.8 90 61 90 47.1z"
                fill="#4280ef"
            />
            <path
                d="M45.9 91.9c12.4 0 22.8-4.1 30.4-11.1L61.5 69.4c-4.1 2.8-9.4 4.4-15.6 4.4-12 0-22.1-8.1-25.8-18.9L4.9 66.6c7.8 15.5 23.6 25.3 41 25.3z"
                fill="#34a353"
            />
            <path
                d="M20.1 54.8c-1.9-5.7-1.9-11.9 0-17.6L4.9 25.4c-6.5 13-6.5 28.3 0 41.2l15.2-11.8z"
                fill="#f6b704"
            />
            <path
                d="M45.9 18.3c6.5-.1 12.9 2.4 17.6 6.9L76.6 12C68.3 4.2 57.3 0 45.9.1c-17.4 0-33.2 9.8-41 25.3l15.2 11.8c3.7-10.9 13.8-18.9 25.8-18.9z"
                fill="#e54335"
            />
        </svg>
        Continue with Google
    </Button>
</div>
    </>
  )
}

export default AuthProviders