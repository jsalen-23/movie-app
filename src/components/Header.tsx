import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-10">
      <div className="max-w-[1440px] p-4 mx-auto flex items-center justify-between">
        <div>
          <Link
            href="/"
            aria-label="Go home"
            className="flex gap-1 items-center text-sky-500"
          >
            <Image src="/logo.svg" width={160} height={80} alt="Logo" />
          </Link>
        </div>
        <div className="hidden lg:block lg:flex-1 max-w-[550px]">
          <form className="flex relative">
            <Input
              className="flex-1 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 rounded-r-none"
              placeholder="Search a movie..."
              type="search"
            />
            <Button type="submit" className="rounded-l-none absolute right-0 background dark:bg-primary border border-solid border-[#afafaf6f]">
              <Search size={20} />
            </Button>
          </form>
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
