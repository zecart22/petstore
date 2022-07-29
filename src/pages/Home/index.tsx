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

  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Box>
      <VStack spacing={120}>
        <Header />
        <MenuCategories />

        <ImageSlider slides={dataBanners} />

        <BannerCategories />
        <VitrineNews />
        <VitrineDestaques />
        <NewsLetter />
        <Footer />
      </VStack>
    </Box>
  );
};
