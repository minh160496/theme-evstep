"use client";

import { Loading } from "@/components/Loading";
import { Box, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner), {
  loading: () => <Loading />,
});
const Categorys = dynamic(() =>
  import("./Categorys").then((mod) => mod.Categorys)
);
const Contact = dynamic(() => import("./Contact").then((mod) => mod.Contact));
const Counters = dynamic(() =>
  import("./Counters").then((mod) => mod.Counters)
);
const Event = dynamic(() => import("./Event").then((mod) => mod.Event));
const Itel = dynamic(() => import("./Itel").then((mod) => mod.Itel));
const ListTeacher = dynamic(() =>
  import("./ListTeacher").then((mod) => mod.ListTeacher)
);
const ModalBase = dynamic(() => import("./Modal").then((mod) => mod.ModalBase));
const Model = dynamic(() => import("./Model").then((mod) => mod.Model));
const Partner = dynamic(() => import("./Partner").then((mod) => mod.Partner));
const Review = dynamic(() => import("./Review").then((mod) => mod.Review));
const Support = dynamic(() => import("./Support").then((mod) => mod.Support));

export const Home = ({ posts }: { posts: any[] }) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

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
        <Event posts={posts} />
      </Box>
      <Box mt="120px">
        <Itel openModal={onToggle} />
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
