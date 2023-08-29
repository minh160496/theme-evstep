import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BASE_URL_MEDIAS } from "../../CONST";
import { FormContact } from "../../components/FormContact";

export const Contact = () => {
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