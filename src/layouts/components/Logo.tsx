import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  const BASE_URL_MEDIAS =
    process.env.NEXT_PUBLIC_BASE_URL_MEDIAS ||
    "http://localhost/wordpress/wp-content/uploads/2023/08";

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
