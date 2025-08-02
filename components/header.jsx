import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-0">
      <nav>
        <Link href="/">
          {/* <Image src={"logo.png"} alt="welth logo" height={60} width={200} /> */}
        </Link>
      </nav>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
