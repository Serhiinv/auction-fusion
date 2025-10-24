"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import * as React from "react";
import { basePath } from "@/config/basePath";
import MenuIcon from "./MenuIcon";

const menuItems = [
    { href: "/features", label: "Features" },
    { href: "/customers", label: "Customers" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact Us" } //For desktop right side button in separate div (not in this array)
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav ref={menuRef} className="bg-gray-100 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left side: Logo and main nav buttons */}
                    <div className="flex items-center gap-8">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
                            <img
                                alt="Auction Fusion logo"
                                src={`${basePath}/logo.jpeg`}
                                className="h-10 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation - 3 buttons */}
                        <div className="hidden md:flex items-center gap-6">
                            {menuItems.slice(0, 3).map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-700 hover:underline px-3 py-2 text-sm font-medium transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <p className="text-4xl">TEST</p>

                    {/* Right side: About Us button */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:underline px-4 py-2 text-sm font-medium transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Hamburger menu button for mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <MenuIcon isOpen={isMenuOpen} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu - positioned absolutely on top */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-gray-100/80 border-t border-gray-200 shadow-lg md:hidden z-40 backdrop-blur-sm">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
