import { Heading, Flex } from "@chakra-ui/react";
import { CardProducts } from "../CardProducts";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/Products";

export const VitrineNews = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Heading
        color={"theme.gray"}
        fontFamily={"Montserrat"}
        textAlign={"center"}
        mt={5}
        mb={5}
      >
        NOVIDADES
      </Heading>
      <Flex justifyContent={"center"}>
        <Flex
          w="50vw"
          bg="primary.main"
          borderRadius="5px"
          flexWrap={"wrap"}
          flexDirection="row"
          justifyContent={"space-around"}
        >
          {products &&
            products.map((item) => (
              <CardProducts
                tittle={item.name}
                descount={item.descount}
                image={item.image}
                isNew={item.isNew}
                price={item.price}
                selected={false}
              />
            ))}
        </Flex>
      </Flex>
    </>
  );
};
