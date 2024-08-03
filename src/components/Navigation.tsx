"use client";

import { Menu, User } from "lucide-react";
import Link from "next/link";
import style from "./styles/global.module.css";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/series", label: "Series" },
  { href: "/movies", label: "Movies" },
  { href: "/latest", label: "Latests" },
];

export default function Navigation() {
  return (
    <>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <span className="sr-only">Menu</span>
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <MainMenu />
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:block">
        <MainMenu />
      </div>
    </>
  );
}

function MainMenu() {
  const pathname = usePathname();

  return (
    <nav className="h-full">
      <ul className="h-full flex flex-col gap-6 lg:flex-row lg:items-center">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                pathname === link.href && "font-bold cursor-default pointer-events-none",
                pathname !== link.href && "hover:opacity-80",
                "text-lg lg:text-base text-primary transition-opacity duration-400",
                style.linkunderline
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="mt-auto">
          <Link
            href="/account"
            className={`flex justify-center items-center gap-1 text-xl lg:text-base ${style.pill}`}
          >
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
}
