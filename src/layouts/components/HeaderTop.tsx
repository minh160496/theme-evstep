import { Box, HStack, Icon, Link, Tag, TagLabel } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

export const Tags = ({
  label,
  type,
  children,
}: {
  label: string;
  type: string;
  children: ReactNode;
}) => {
  return (
    <Tag
      borderRadius="full"
      variant="solid"
      colorScheme="gray"
      py="8px"
      px="8px"
      as={Link}
      href={`${type}:${label}`}
    >
      {children}
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
};

export const HeaderTop = () => {
  return (
    <HStack align={"center"}>
      <Box mr="12px">
        <Tags type="tel" label="0985764235">
          <Icon as={LuPhone} />
        </Tags>
      </Box>

      <Tags type="email" label="aume@gmail.com">
        <Icon as={MdOutlineMail} />
      </Tags>
    </HStack>
  );
};
