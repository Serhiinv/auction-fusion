"use client";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@heroui/react";


export default function Header() {
    return (

        <Navbar>
            <NavbarBrand>
                <Link href="/" className="flex gap-1">
                <img alt="Auction Fusion logo" src="/logo.jpeg" width="50%"  />
                </Link>
                {/*<p className="font-bold text-inherit">Auction Fusion</p>*/}
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" href="/customers" >
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Partners
                    </Link>
                </NavbarItem>


            </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
                <Link color="foreground" href="/about">
                    About Us
                </Link>
            </NavbarItem>
        </NavbarContent>


            {/*<NavbarContent justify="end">*/}
            {/*    <NavbarItem className="hidden lg:flex">*/}
            {/*        <Link href="#">Login</Link>*/}
            {/*    </NavbarItem>*/}
            {/*    <NavbarItem>*/}
            {/*        <Button as={Link} color="primary" href="#" variant="flat">*/}
            {/*            Sign Up*/}
            {/*        </Button>*/}
            {/*    </NavbarItem>*/}
            {/*</NavbarContent>*/}
        </Navbar>

    );
}
