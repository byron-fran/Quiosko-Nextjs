"use client"
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

interface AdminRouteProps {
    link: {
        url: string;
        text: string;
        blank: boolean;
    }
}

const AdminRoute: FC<AdminRouteProps> = ({ link }) => {
    const pathname = usePathname()
    const isActive = pathname.startsWith(link.url);

    return (
        <Link
            className={`${isActive  ? 'bg-amber-400' : ''} border-t border-gray-200 py-3 font-bold px-3`}
            href={link.url}
            target={`${link.blank ? '_blank' : ''}`}
        >
            {link.text}
        </Link>
    )
}

export default AdminRoute
