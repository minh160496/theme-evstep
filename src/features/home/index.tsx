"use client";

import { Box, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { Banner } from "./Banner";
import { Categorys } from "./Categorys";
import { Contact } from "./Contact";
import { Counters } from "./Counters";
import { Event } from "./Event";
import { Itel } from "./Itel";
import { ListTeacher } from "./ListTeacher";
import { ModalBase } from "./Modal";
import { Model } from "./Model";
import { Partner } from "./Partner";
import { Review } from "./Review";
import { Support } from "./Support";

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Banner />
      <Box mt="80px">
        <Categorys />
      </Box>
      <Box mt="80px">
        <Counters />
      </Box>
      <Box mt="80px">
        <Model />
      </Box>
      <Box mt="80px">
        <Support />
      </Box>
      <Box mt="80px">
        <ListTeacher />
      </Box>
      <Box mt="120px">
        <Review />
      </Box>
      <Box mt="120px">
        <Event />
      </Box>
      <Box mt="120px">
        <Itel />
      </Box>
      <Box mt="60px">
        <Partner />
      </Box>
      <Box mt="60px">
        <Contact />
      </Box>
      <ModalBase isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};
