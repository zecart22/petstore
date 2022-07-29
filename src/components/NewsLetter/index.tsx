import {
  Heading,
  HStack,
  Image,
  useMediaQuery,
  Flex,
  Text,
  theme,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";

import icon from "../../assets/img/icone.png";
import line from "../../assets/img/line.png";

export const NewsLetter = () => {
  const [isLargerThan1198] = useMediaQuery("(min-width: 1198px)");

  return (
    <Flex mt={-10}>
      {isLargerThan1198 ? (
        <>
          <Flex
            h="340px"
            flexDirection="row"
            px="5"
            py="1"
            bg="theme.purple"
            boxShadow="0px 1px 4px"
            width="100%"
            zIndex="100"
            justifyContent="center"
            fontFamily={"Montserrat"}
            fontWeight={"bold"}
            color={"theme.white"}
          >
            <VStack spacing={5}>
              <HStack>
                <HStack>
                  <Image
                    w={"30px"}
                    h={"30px"}
                    src={icon}
                    alt={"banner1"}
                    ml={2}
                    mt={2}
                    mb={2}
                  />
                  <Text>{"ENTREGA GRÁTIS A PARTIR DE R$99,00"}</Text>
                </HStack>
                <HStack>
                  <Image
                    w={"30px"}
                    h={"30px"}
                    src={icon}
                    alt={"banner1"}
                    ml={2}
                    mt={2}
                    mb={2}
                  />
                  <Text>{"PARCELAMENTO SEM JUROS"}</Text>
                </HStack>
                <HStack>
                  <Image
                    w={"30px"}
                    h={"30px"}
                    src={icon}
                    alt={"banner1"}
                    ml={2}
                    mt={2}
                    mb={2}
                  />
                  <Text>{"CADASTRE-SE E GANHE DESCONTO"}</Text>
                </HStack>
              </HStack>
              <Image src={line} />
              <Heading>{"ASSINE NOSSA NEWSLETTER"}</Heading>
              <Text>
                {
                  "Cadastre-se para receber nossas novidades e descontos exclusivos!"
                }
              </Text>
              <HStack>
                <Input
                  border={"none"}
                  type={"email"}
                  placeholder={"E-mail"}
                  opacity={"100%"}
                  borderBottom={"1px solid"}
                  borderColor={"theme.white"}
                  _placeholder={{
                    color: "theme.white",
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                  }}
                ></Input>
                <Input
                  border={"none"}
                  type={"text"}
                  placeholder={"Nome"}
                  opacity={"100%"}
                  borderBottom={"1px solid"}
                  borderColor={"theme.white"}
                  _placeholder={{
                    color: "theme.white",
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                  }}
                ></Input>
                <Button
                  children={"Enviar"}
                  bg={"theme.yellow"}
                  color={"theme.white"}
                  w="120px"
                  h="42px"
                />
              </HStack>
            </VStack>
          </Flex>
        </>
      ) : (
        <Flex
          h="580px"
          flexDirection="row"
          px="5"
          py="1"
          bg="theme.purple"
          boxShadow="0px 1px 4px"
          width="100%"
          zIndex="100"
          justifyContent="center"
          fontFamily={"Montserrat"}
          fontWeight={"bold"}
          color={"theme.white"}
        >
          <VStack spacing={5}>
            <VStack>
              <HStack>
                <Image
                  w={"30px"}
                  h={"30px"}
                  src={icon}
                  alt={"banner1"}
                  ml={2}
                  mt={2}
                  mb={2}
                />
                <Text>{"ENTREGA GRÁTIS A PARTIR DE R$99,00"}</Text>
              </HStack>
              <HStack>
                <Image
                  w={"30px"}
                  h={"30px"}
                  src={icon}
                  alt={"banner1"}
                  ml={2}
                  mt={2}
                  mb={2}
                />
                <Text>{"PARCELAMENTO SEM JUROS"}</Text>
              </HStack>
              <HStack>
                <Image
                  w={"30px"}
                  h={"30px"}
                  src={icon}
                  alt={"banner1"}
                  ml={2}
                  mt={2}
                  mb={2}
                />
                <Text>{"CADASTRE-SE E GANHE DESCONTO"}</Text>
              </HStack>
            </VStack>
            <Image src={line} />
            <Heading>{"ASSINE NOSSA NEWSLETTER"}</Heading>
            <Text>
              {
                "Cadastre-se para receber nossas novidades e descontos exclusivos!"
              }
            </Text>
            <VStack>
              <Input
                w="300px"
                border={"none"}
                type={"email"}
                placeholder={"E-mail"}
                opacity={"100%"}
                borderBottom={"1px solid"}
                borderColor={"theme.white"}
                _placeholder={{
                  color: "theme.white",
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                }}
              ></Input>
              <Input
                w="300px"
                border={"none"}
                type={"text"}
                placeholder={"Nome"}
                opacity={"100%"}
                borderBottom={"1px solid"}
                borderColor={"theme.white"}
                _placeholder={{
                  color: "theme.white",
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                }}
              ></Input>
              <Button
                children={"Enviar"}
                bg={"theme.yellow"}
                color={"theme.white"}
                w="120px"
                h="42px"
              />
            </VStack>
          </VStack>
        </Flex>
      )}
    </Flex>
  );
};
