import { useMediaQuery, Box, Image, VStack } from "@chakra-ui/react";

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

export const Home = () => {
  const { products } = useContext(ProductsContext);

  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <Box>
      <VStack spacing={120}>
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
      <VitrineDestaques />
      <NewsLetter />
      <Footer />
    </Box>
  );
};
