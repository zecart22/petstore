import { Box, HStack, Image, useMediaQuery, Flex } from "@chakra-ui/react";

import image1 from "../../assets/img/bannerCategory1.png";
import image2 from "../../assets/img/bannerCategory2.png";
import image3 from "../../assets/img/bannerCategory3.png";

export const BannerCategories = () => {
  const [isLargerThan1198] = useMediaQuery("(min-width: 1198px)");

  return (
    <Flex mt={-10}>
      {isLargerThan1198 ? (
        <>
          <Flex
            h="160px"
            flexDirection="row"
            flexWrap={"wrap"}
            px="5"
            py="1"
            bg="theme.yellow"
            boxShadow="0px 1px 4px"
            width="100%"
            zIndex="100"
            justifyContent="center"
          >
            <>
              <Image src={image1} alt={"banner1"} ml={2} mt={2} mb={2}></Image>
              <Image src={image2} alt={"banner2"} ml={2} mt={2} mb={2}></Image>
              <Image src={image3} alt={"banner3"} ml={2} mt={2} mb={2}></Image>
            </>
          </Flex>
        </>
      ) : (
        <>
          <Flex
            h="360px"
            flexDirection="row"
            flexWrap={"wrap"}
            px="5"
            py="1"
            bg="theme.yellow"
            boxShadow="0px 1px 4px"
            width="100%"
            zIndex="100"
            justifyContent="center"
          >
            <>
              <Image src={image1} alt={"banner1"} ml={2} mt={2} mb={2}></Image>
              <Image src={image2} alt={"banner2"} ml={2} mt={2} mb={2}></Image>
              <Image src={image3} alt={"banner3"} ml={2} mt={2} mb={2}></Image>
            </>
          </Flex>
        </>
      )}
    </Flex>
  );
};
