import { Flex, HStack, Image, useMediaQuery } from "@chakra-ui/react";

import { FaUser } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { SearchBar, SearchBarMobile } from "../components/SearchBar";
import logo from "../assets/img/logo.png";

export const Header = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <Flex
        h="120px"
        flexDirection="row"
        justifyContent="center"
        px="5"
        py="1"
        bg="theme.white"
        boxShadow="0px 1px 4px"
        position="relative"
        width="100%"
        zIndex="100"
      >
        {isLargerThan1024 ? (
          <>
            <HStack spacing={40}>
              <SearchBar />
              <Image src={logo} />
              <HStack spacing={5}>
                <FaUser size={25} />
                <BsFillCartFill size={25} />
              </HStack>
            </HStack>
          </>
        ) : (
          <>
            <HStack spacing={10}>
              <SearchBarMobile />
              <Image src={logo} w="150" h="30" />
              <HStack spacing={2}>
                <FaUser size={15} />
                <BsFillCartFill size={15} />
              </HStack>
            </HStack>
          </>
        )}
      </Flex>
    </>
  );
};
