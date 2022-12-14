import { Heading, Flex } from "@chakra-ui/react";
import { CardProducts } from "../CardProducts";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/Products";

export const VitrineDestaques = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Heading
        color={"theme.black"}
        fontFamily={"Montserrat"}
        textAlign={"center"}
        mt={5}
        mb={5}
      >
        DESTAQUES
      </Heading>
      <Flex justifyContent={"center"} mt={10}>
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
