import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  // Ensure the user is checked before rendering the header
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container wx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src={"/logo.png"} alt="welth logo" height={60} width={200} />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
              <Button variant="outline" className="justify-between">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href="/transactions/create">
              <Button  className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
             appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
