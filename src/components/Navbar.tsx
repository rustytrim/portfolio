import Link from "next/link";
import { Card, CardHeader } from "./ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Navbar() {

    // const [show, setShow] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setShow(true);
    //     }, 2500);
    // }, []);

    return (
        <div className="flex justify-center mt-4">
            <Card className="w-11/12">
                <CardHeader>
                    <div className="flex justify-between">
                        <Link href={"/#"} className="text-primary">rtgamingwdt</Link>
                        <div>
                            <div className="hidden md:flex gap-4">
                                <Link href={"/#contact"} className="text-primary">Contact</Link>
                                <Link href={"/#projects"} className="text-primary">Projects</Link>
                                <Link href={"/#resume"} className="text-primary">Resume</Link>
                            </div>
                            <div className="flex md:hidden">
                                <DropdownMenu>
                                    <DropdownMenuTrigger><FontAwesomeIcon icon={faBars} /></DropdownMenuTrigger>
                                    <DropdownMenuContent className="block md:hidden">
                                        <DropdownMenuItem>Projects</DropdownMenuItem>
                                        <DropdownMenuItem>Contact</DropdownMenuItem>
                                        <DropdownMenuItem>Resume</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>)
}