import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CountUp from "react-countup";

interface ICounter {
  start: number;
  end: number;
  subfix: string;
}

export const Counter = (props: ICounter) => {
  const { start, end, subfix } = props;
  return (
    <CountUp
      enableScrollSpy={true}
      start={start}
      end={end}
      duration={2}
      suffix="+"
      onEnd={() => console.log("Ended! 👏")}
      onStart={() => console.log("Started! 💨")}
    >
      {({ countUpRef }) => (
        <Flex justifyContent={"center"} flexDir="column" align={"center"}>
          <span
            style={{ fontSize: "2rem", textAlign: "center" }}
            ref={countUpRef}
          />
          <Heading fontSize="lg" color="red.500">
            {subfix}
          </Heading>
        </Flex>
      )}
    </CountUp>
  );
};

const counters = [
  { start: 0, end: 5, suffix: "Năm hoạt động" },
  { start: 0, end: 300, suffix: "Giáo viên tài năng" },
  { start: 0, end: 20000, suffix: "Học viên cán đích" },
  { start: 0, end: 29, suffix: "Đối tác đồng hành" },
];

export const Counters = () => {
  return (
    <Container maxW="6xl">
      <Heading textAlign={"center"} fontSize={"2xl"} mb="24px">
        Những con số ấn tượng
      </Heading>
      <SimpleGrid
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        spacing={"8"}
      >
        {counters.map((counter, index) => (
          <Counter
            key={index}
            start={counter.start}
            end={counter.end}
            subfix={counter.suffix}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};
