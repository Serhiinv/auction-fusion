import * as React from "react";

export default function Footer() {
    return (
        <footer className="text-center py-4 bg-gray-100 dark:bg-gray-800">
            <div className="flex justify-center mb-2">
                <a
                    target="_blank"
                    href="https://www.linkedin.com/company/binary-vision-ltd/"
                    className="hover:opacity-80 transition-opacity"
                >
                    <img
                        alt="Linkedin"
                        loading="lazy"
                        width="30"
                        height="30"
                        decoding="async"
                        src="/social-media-linkedin.svg"
                    />
                </a>
            </div>

            <p className="text-gray-700 dark:text-gray-300">&copy; Binary Vision 2025</p>
        </footer>
    );
}