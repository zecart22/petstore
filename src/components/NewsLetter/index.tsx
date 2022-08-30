import {
  Heading,
  HStack,
  Image,
  useMediaQuery,
  Flex,
  Text,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";

import icon from "../../assets/img/icone.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import line from "../../assets/img/line.png";

import logo from "../../assets/img/logo.png";
import pay from "../../assets/img/payments.png";

import { RiWhatsappFill } from "react-icons/ri";
import { FaArrowAltCircleUp } from "react-icons/fa";

export const NewsLetter = () => {
  const [isLargerThan1198] = useMediaQuery("(min-width: 1198px)");

  return (
    <Flex flexDirection={"column"}>
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
            <VStack spacing={5} justifyContent={"flex-end"}>
              <FaArrowAltCircleUp size={60} color={"#FFF"} />
              <RiWhatsappFill size={70} color={"#FFF"} />
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
          <VStack spacing={5} justifyContent={"flex-end"}>
            <FaArrowAltCircleUp size={40} color={"#FFF"} />
            <RiWhatsappFill size={50} color={"#FFF"} />
          </VStack>
        </Flex>
      )}
      {isLargerThan1198 ? (
        <>
          <Flex
            h="340px"
            flexDirection="row"
            px="5"
            py="1"
            bg="theme.white"
            boxShadow="0px 1px 4px"
            width="100%"
            zIndex="100"
            justifyContent="center"
            fontFamily={"Montserrat"}
            fontWeight={"bold"}
          >
            <VStack mt={10}>
              <Image src={logo} />
              <HStack>
                <BsFacebook color={"#FFA200"} size={30} />

                <BsTwitter color={"gray"} size={30} />
                <BsInstagram color={"gray"} size={30} />
              </HStack>
              <Text w="330px" textAlign={"center"}>
                {
                  "© 2019  •  CNPJ 00.000.000/0000-00 Rua Tal de Tal, 123 - Cidade"
                }
              </Text>
            </VStack>
            <VStack mt={10} ml={10}>
              <Text fontWeight={"extrabold"} color={"theme.purple"}>
                {"PET STORE"}
              </Text>
              <Text color={"gray"}>{"Quem Somos"}</Text>
              <Text color={"gray"}>{"Como comprar"}</Text>
              <Text color={"gray"}>{"Trocas e devoluções"}</Text>
              <Text color={"gray"}>{"Frete e entregas"}</Text>
            </VStack>
            <VStack mt={10} ml={10}>
              <Text fontWeight={"extrabold"} color={"theme.purple"}>
                {"CONTATOS"}
              </Text>
              <Text color={"gray"}>{"(99)9999-99999"}</Text>
              <Text color={"gray"}>{"(99)9999-99999"}</Text>
              <Text color={"gray"}>{"contato@petstore.com.br"}</Text>
            </VStack>
            <VStack mt={10} ml={10}>
              <Text fontWeight={"extrabold"} color={"theme.purple"}>
                {"PAGAMENTO"}
              </Text>
              <Image src={pay}></Image>
            </VStack>
          </Flex>
        </>
      ) : (
        <>
          <Flex
            h="840px"
            flexDirection="column"
            px="5"
            py="1"
            bg="theme.white"
            width="100%"
            zIndex="100"
            justifyContent="center"
            fontFamily={"Montserrat"}
            fontWeight={"bold"}
            mt={20}
          >
            <VStack mt={10}>
              <Image src={logo} />
              <HStack>
                <BsFacebook color={"#FFA200"} size={30} />

                <BsTwitter color={"gray"} size={30} />
                <BsInstagram color={"gray"} size={30} />
              </HStack>
              <Text w="330px" textAlign={"center"}>
                {
                  "© 2019  •  CNPJ 00.000.000/0000-00 Rua Tal de Tal, 123 - Cidade"
                }
              </Text>
            </VStack>

            <VStack mt={10} ml={10}>
              <Text fontWeight={"extrabold"} color={"theme.purple"}>
                {"PET STORE"}
              </Text>
              <Text color={"gray"}>{"Quem Somos"}</Text>
              <Text color={"gray"}>{"Como comprar"}</Text>
              <Text color={"gray"}>{"Trocas e devoluções"}</Text>
              <Text color={"gray"}>{"Frete e entregas"}</Text>
            </VStack>
            <VStack mt={10} ml={10}>
              <Text fontWeight={"extrabold"} color={"theme.purple"}>
                {"CONTATOS"}
              </Text>
              <Text color={"gray"}>{"(99)9999-99999"}</Text>
              <Text color={"gray"}>{"(99)9999-99999"}</Text>
              <Text color={"gray"}>{"contato@petstore.com.br"}</Text>
            </VStack>

            <VStack mt={10} ml={10}>
              <Text fontWeight={"extrabold"} color={"theme.purple"}>
                {"PAGAMENTO"}
              </Text>
              <Image src={pay}></Image>
            </VStack>
          </Flex>
        </>
      )}

      <HStack justifyContent={"center"} mt="5px">
        <Text color={"gray"}>{"Tecnologia e Desenvolvimento"}</Text>
        <Text color={"gray"}>{"Robert Pupo Developer"}</Text>
      </HStack>
    </Flex>
  );
};
