"use client";

import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";

export const LayoutBottom = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxW={"6xl"}>
      <SimpleGrid columns={{ base: 2, lg: 3 }} gap={"24px"}>
        <GridItem colSpan={{ base: 3, lg: 2 }}>{children}</GridItem>
        <GridItem className="sidebar-posts" colSpan={{ base: 3, lg: 1 }}>
          <Sidebar />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
