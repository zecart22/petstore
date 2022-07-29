import {
  Box,
  Button,
  VStack,
  Image,
  Text,
  useMediaQuery,
  HStack,
  Link as LinkK,
  theme,
  useBoolean,
  color,
} from "@chakra-ui/react";

import { useContext } from "react";
import { ProductsContext } from "../../contexts/Products";
import { useState } from "react";

interface CardProductsProps {
  image: string;
  tittle: string;
  price: number;
  descount: string;
  isNew: boolean;
  selected: boolean;
}

export const CardProducts = ({
  image,
  tittle,
  selected,
  price,
  descount,
  isNew,
}: CardProductsProps) => {
  const [flag, setFlag] = useBoolean();

  const [isLargerThan913] = useMediaQuery("(min-width: 913px)");

  return (
    <>
      {isLargerThan913 ? (
        <Box
          mt="8px"
          cursor="pointer"
          width="325px"
          textAlign={"center"}
          justifyContent="column"
        >
          {descount === "" ? (
            <></>
          ) : (
            <>
              <Box
                w={"83px"}
                h={"25px"}
                bg={"#8158C5"}
                color={"theme.white"}
                textAlign={"center"}
              >
                {descount}
              </Box>
            </>
          )}

          <HStack>
            {flag ? (
              <Button
                bg="theme.yellow"
                mt={10}
                fontSize={12}
                color={"theme.white"}
                boxShadow={"lg"}
              >
                Compra rápida
              </Button>
            ) : (
              ""
            )}

            <Box
              width="250px"
              h="325px"
              marginBottom={6}
              align-items="center"
              bgImage={image}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              opacity={"100%"}
              onMouseEnter={setFlag.on}
              onMouseLeave={setFlag.off}
              _hover={{
                opacity: "70%",
              }}
            ></Box>
          </HStack>
          {isNew ? (
            <>
              <Box
                w={"83px"}
                h={"25px"}
                bg={"theme.yellow"}
                color={"theme.white"}
                textAlign={"center"}
                fontWeight={"extrabold"}
              >
                {"NOVO!"}
              </Box>
            </>
          ) : (
            <></>
          )}

          <HStack mb="17px" flexDirection={"column"}>
            <VStack spacing={"10px"}>
              <VStack spacing={"-5px"}>
                <Text
                  as="span"
                  w="150px"
                  h="70px"
                  display="inline-block"
                  white-space="nowrap"
                  overflow="hidden"
                  text-overflow="ellipsis"
                >
                  {tittle}
                </Text>
                <Text
                  as="span"
                  w="400px"
                  h="70px"
                  display="inline-block"
                  white-space="nowrap"
                  overflow="hidden"
                  text-overflow="ellipsis"
                >
                  R${price.toFixed(2)}
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </Box>
      ) : (
        /* mobile */
        <Box
          mt="8px"
          cursor="pointer"
          width="325px"
          textAlign={"center"}
          justifyContent="column"
        >
          {descount === "" ? (
            <></>
          ) : (
            <>
              <Box
                w={"83px"}
                h={"25px"}
                bg={"#8158C5"}
                color={"theme.white"}
                textAlign={"center"}
              >
                {descount}
              </Box>
            </>
          )}
          <HStack>
            {flag ? (
              <Button
                bg="theme.yellow"
                mt={10}
                fontSize={12}
                color={"theme.white"}
                boxShadow={"lg"}
              >
                Compra rápida
              </Button>
            ) : (
              ""
            )}
            <Box
              width="300px"
              h="325px"
              marginBottom={6}
              align-items="center"
              bgImage={image}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              opacity={"100%"}
              onMouseEnter={setFlag.on}
              onMouseLeave={setFlag.off}
              _hover={{
                opacity: "70%",
              }}
            ></Box>
          </HStack>
          {isNew ? (
            <>
              <Box
                w={"83px"}
                h={"25px"}
                bg={"theme.yellow"}
                color={"theme.white"}
                textAlign={"center"}
                fontWeight={"extrabold"}
              >
                {"NOVO!"}
              </Box>
            </>
          ) : (
            <></>
          )}

          <HStack mb="17px" flexDirection={"column"}>
            <VStack spacing={"10px"}>
              <VStack spacing={"-5px"}>
                <Text
                  as="span"
                  w="150px"
                  h="70px"
                  display="inline-block"
                  white-space="nowrap"
                  overflow="hidden"
                  text-overflow="ellipsis"
                >
                  {tittle}
                </Text>
                <Text
                  as="span"
                  w="400px"
                  h="70px"
                  display="inline-block"
                  white-space="nowrap"
                  overflow="hidden"
                  text-overflow="ellipsis"
                >
                  R${price.toFixed(2)}
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </Box>
      )}
    </>
  );
};
