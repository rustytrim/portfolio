import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full border-b fixed flex justify-center items-center h-16">
            {/* <div className="fixed">test</div> */}
            <div className="w-2/3 flex justify-between items-center">
                <Link href="/" className="text-3xl">Rusty Trim</Link>
                <nav className="flex gap-10 text-lg items-center">
                    <Link href={"/projects"}>About</Link>
                    <Link href={"/projects"}>Projects</Link>
                </nav>
            </div>
        </header>
    )
}