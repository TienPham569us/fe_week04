'use client'
import Link from "next/link";

export default function UnauthorizedAccessPage() {
    return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
            <div className="flex flex-row text-[#f43f5e] font-bold">
            <h1>Unauthorized access, please login or register to continue...</h1>
            </div>
            <div className="flex flex-col justify-center content-center">
            <Link href={"/register"} className="text-center flex flex-row justify-center">
                <button className="button-auth">Register</button>
            </Link>
            <Link href={"/login"} className="text-center flex flex-row justify-center">
                <button className="button-auth">Login</button>
            </Link>
            </div>
        </div>
    </div>
    )
}