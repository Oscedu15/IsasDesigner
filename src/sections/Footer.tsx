import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Link from "next/link";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
    {href: 'https://github.com/Oscedu15', label: 'Developed by: Oscar Garcia'}
];

export default function Footer() {
    return (
        <footer className="py-16">
            <div className="container ">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div>
                        <Image src={logoImage} alt="Logo Image" className="" />
                    </div>
                    <div>
                        <nav className="flex gap-6 flex-wrap justify-center">
                            {footerLinks?.map((link, index) => (
                                <Link
                                    href={link.href}
                                    key={index}
                                    className="text-white/50 text-sm" target="_blanck"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
