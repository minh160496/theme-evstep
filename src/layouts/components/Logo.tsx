import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import { BASE_URL_MEDIAS } from "../../CONST";
import { Box } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Link href="/">
      <Box>
        <Image
          width={100}
          height={100}
          src={`${BASE_URL_MEDIAS}/logo-2.svg`}
          alt="logo evstep"
        />
      </Box>
    </Link>
  );
};
