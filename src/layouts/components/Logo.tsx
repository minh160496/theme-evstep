import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        priority
        width={100}
        height={100}
        style={{ position: "relative", transform: "scale(1.6)" }}
        src={`/logo.png`}
        alt="logo Vstep"
      />
    </Link>
  );
};
