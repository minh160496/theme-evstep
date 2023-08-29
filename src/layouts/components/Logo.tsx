import Image from "next/image";
import Link from "next/link";
import { BASE_URL_MEDIAS } from "../../CONST";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        width={100}
        height={100}
        src={`${BASE_URL_MEDIAS}/logo-2.svg`}
        alt="logo evstep"
      />
    </Link>
  );
};
