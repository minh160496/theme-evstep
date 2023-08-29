import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { FormContact } from "../../components/FormContact";

export const Contact = () => {
  const BASE_URL_MEDIAS =
    process.env.NEXT_PUBLIC_BASE_URL_MEDIAS ||
    "http://localhost/wordpress/wp-content/uploads/2023/08";

  return (
    <Box
      bgImage={`url(${BASE_URL_MEDIAS}/bg-2.svg)`}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      py={"60px"}
    >
      <Container maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={"24px"}>
          <Box>
            <Image
              width={500}
              height={600}
              src={`${BASE_URL_MEDIAS}/image-sale.png`}
              alt="Khuyến mãi Evstep"
            />
          </Box>

          <FormContact />
        </SimpleGrid>
      </Container>
    </Box>
  );
};
