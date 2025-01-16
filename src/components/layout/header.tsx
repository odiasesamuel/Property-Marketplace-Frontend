import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

type HeaderType = {
  className: string;
};

const Header: React.FC<HeaderType> = ({ className }) => {
  return (
    <div className={`${className} w-full flex items-center justify-between relative text-appGreen px-[3.5%]`}>
      <div className="w-[10%] h-[30px] flex items-center">
        <Image alt="Logo of the company" src="/images/logo.svg" width={20} height={20} className="mr-3 w-6" />
        <h1 className="text-lg font-medium">JustHome</h1>
      </div>
      <nav className="w-[30%] h-[30px] absolute left-1/2 -translate-x-1/2 flex items-center justify-between font-medium ase">
        <Link href="">Home</Link>
        <Link href="">Listing</Link>
        <Link href="">Blog</Link>
        <Link href="">Contact</Link>
      </nav>

      <div className="w-[17%] h-[30px] flex justify-end">
        <Button className="w-[30px] h-full rounded-full">
          <User className="w-4" />
        </Button>
        <Button variant="outline" className="px-6 ml-3 text-sm">
          Add Property
        </Button>
      </div>
    </div>
  );
};

export default Header;
