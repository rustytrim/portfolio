import { DISCORD_URL, GITHUB_URL, LINKEDIN_URL, X_URL } from "@/constants";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="w-full border-t flex justify-center items-center h-16 text-4xl gap-5">
            <Link target="_blank" href={DISCORD_URL}><FaDiscord /></Link>
            <Link target="_blank" href={GITHUB_URL}><FaGithub /></Link>
            <Link target="_blank" href={LINKEDIN_URL}><FaLinkedin /></Link>
            <Link target="_blank" href={X_URL}><FaXTwitter /></Link>
        </footer>
    )
}