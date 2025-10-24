import * as React from "react";
import { basePath } from "@/config/basePath";

export default function Footer() {
    return (
        <footer className="text-center py-4 bg-gray-100">
            <div className="flex justify-center mb-2">
                <a
                    target="_blank"
                    href="https://www.linkedin.com/company/binary-vision-ltd/"
                    className="hover:opacity-80 transition-opacity"
                    rel="noreferrer"
                >
                    <img
                        alt="Linkedin"
                        loading="lazy"
                        width="30"
                        height="30"
                        decoding="async"
                        src={`${basePath}/social-media-linkedin.svg`}
                    />
                </a>
            </div>

            <p className="text-gray-700">&copy; Binary Vision 2025</p>
        </footer>
    );
}