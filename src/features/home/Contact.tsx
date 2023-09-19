import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { FormContact } from "../../components/FormContact";

export const Contact = () => {
  return (
    <Box
      bgImage={`url(/bg-2.svg)`}
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
              src={`/image-sale.png`}
              alt="Khuyến mãi Vstep"
            />
          </Box>

          <FormContact />
        </SimpleGrid>
      </Container>
    </Box>
  );
};
