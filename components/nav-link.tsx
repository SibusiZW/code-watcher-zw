'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ id, title }: { id: string, title: string }) {

    const pathname = usePathname();

    return (
        <Link key={id} href={`/conversation/${id}`} className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 text-sm font-medium ${pathname.includes(id) ? 'bg-blue-500 text-white' : ''}`}>{title}</Link>
    )
}