import { DISCORD_URL, GITHUB_URL, LINKEDIN_URL, X_URL } from "@/constants";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="w-full border-t flex justify-center items-center h-16 text-4xl gap-5">
            <Link href={DISCORD_URL}><FaDiscord /></Link>
            <Link href={GITHUB_URL}><FaGithub /></Link>
            <Link href={LINKEDIN_URL}><FaLinkedin /></Link>
            <Link href={X_URL}><FaXTwitter /></Link>
        </footer>
    )
}