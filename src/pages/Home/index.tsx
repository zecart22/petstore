import {
  useMediaQuery,
  Box,
  Image,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";

import { Header } from "../../Header";
import { Footer } from "../../components/Footer";
import { BannerCategories } from "../../components/BannerCategories";
import { MenuCategories } from "../../components/MenuCategories";
import { NewsLetter } from "../../components/NewsLetter";
import { VitrineDestaques } from "../../components/VitrineDestaques";
import { VitrineNews } from "../../components/VitrineNews";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/Products";
import { ImageSlider, ImageSliderMobile } from "../../components/Slider";
import { dataBanners } from "../../components/Slider/dataBanners";
import bannerDog from "../../assets/img/bannerDog.png";
import bannerCat from "../../assets/img/bannerCat.png";

export const Home = () => {
  const { products } = useContext(ProductsContext);

  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const [isLargerThan750] = useMediaQuery("(min-width: 750px)");

  return (
    <Box>
      <VStack>
        <Header />
        <MenuCategories />
        {isLargerThan1280 ? (
          <>
            <ImageSlider slides={dataBanners} />
          </>
        ) : (
          <VStack>
            <Box h={10} />
            <ImageSliderMobile slides={dataBanners} />
          </VStack>
        )}
      </VStack>
      <BannerCategories />
      <VitrineNews />
      {isLargerThan750 ? (
        <>
          <Flex
            justifyContent={"center"}
            flexDirection={"row"}
            flexWrap={"wrap"}
          >
            <Image src={bannerCat} ml={10} mt={10} />
            <Image src={bannerDog} ml={10} mt={10} />
          </Flex>
        </>
      ) : (
        <>
          <Flex
            justifyContent={"center"}
            flexDirection={"row"}
            flexWrap={"wrap"}
          >
            <Image src={bannerCat} ml={10} mt={10} w="250px" h="100px" />
            <Image src={bannerDog} ml={10} mt={10} w="250px" h="100px" />
          </Flex>
        </>
      )}

      <VitrineDestaques />
      <NewsLetter />
    </Box>
  );
};
