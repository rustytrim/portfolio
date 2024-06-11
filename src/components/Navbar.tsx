"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {

    const [cover, toggleCover] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => toggleCover(window.scrollY > 100));
        return () => window.removeEventListener("scroll", () => toggleCover(window.scrollY > 100));
    }, []);

    return (
        <>
            <header style={{ backgroundColor: cover ? "blue" : "transparent" }} className="w-full border-b fixed flex justify-center items-center h-16">
                <div className="w-2/3 flex justify-between items-center">
                    <Link href="/" className="sm:text-3xl">Rusty Trim</Link>
                    <nav className="hidden sm:flex gap-10 text-lg items-center">
                        <Link href={"/projects"}>About</Link>
                        <Link href={"/projects"}>Projects</Link>
                    </nav>
                    <GiHamburgerMenu className="sm:hidden" />
                </div>
            </header>
            <div className="w-full h-[3.25rem]" />
        </>
    )
}