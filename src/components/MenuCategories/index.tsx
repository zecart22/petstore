import {
  Flex,
  HStack,
  Text,
  Button,
  useDisclosure,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";
import { FaCat, FaDog, FaExchangeAlt, FaGift } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { AiOutlineTags } from "react-icons/ai";

import { Meni } from "./Menu";

export const MenuCategories = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [isLargerThan1015] = useMediaQuery("(min-width: 1015px)");
  const [isLargerThan1543] = useMediaQuery("(min-width: 1543px)");
  const [isLargerThan713] = useMediaQuery("(min-width: 713px)");

  return (
    <>
      <Flex
        h="50px"
        flexDirection="row"
        justifyContent="center"
        px="5"
        py="1"
        bg="theme.purple"
        boxShadow="0px 1px 4px"
        position="relative"
        width="100%"
        zIndex="100"
      >
        <>
          <Flex
            alignItems="flex-end"
            color={"theme.white"}
            fontFamily="Montserrat"
            fontWeight={"bold"}
          >
            <HStack spacing="8">
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="theme.purple"
                  fontFamily="Montserrat"
                  fontWeight={"bold"}
                  fontSize={"20px"}
                  _hover={{
                    transform: "translateY(-2px)",
                    color: "theme.yellow",
                  }}
                  leftIcon={<FaDog />}
                >
                  Categorias
                </MenuButton>
                <MenuList>
                  <MenuGroup
                    title="Gatos"
                    color={"theme.black"}
                    fontFamily="Montserrat"
                    fontWeight={"bold"}
                    fontSize={"20px"}
                  >
                    <MenuItem color={"theme.black"}>Rações</MenuItem>
                    <MenuItem color={"theme.black"}>Caminhas</MenuItem>
                    <MenuItem color={"theme.black"}>Brinquedos </MenuItem>
                    <MenuItem color={"theme.black"}>Petiscos </MenuItem>
                    <MenuItem color={"theme.black"}>Roupinhas </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup
                    title="Cachorros"
                    color={"theme.black"}
                    fontFamily="Montserrat"
                    fontWeight={"bold"}
                    fontSize={"20px"}
                  >
                    <MenuItem color={"theme.black"}>Rações </MenuItem>
                    <MenuItem color={"theme.black"}>Caminhas</MenuItem>
                    <MenuItem color={"theme.black"}>Brinquedos </MenuItem>
                    <MenuItem color={"theme.black"}>Petiscos </MenuItem>
                    <MenuItem color={"theme.black"}>Coleiras </MenuItem>
                    <MenuItem color={"theme.black"}>Roupinhas </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>

              {isLargerThan1543 ? (
                <>
                  <HStack
                    as="button"
                    fontSize={"20px"}
                    _hover={{
                      transform: "translateY(-2px)",
                      color: "theme.yellow",
                    }}
                  >
                    <FaCat />
                    <Text>Quem somos</Text>
                  </HStack>
                  <HStack
                    as="button"
                    fontSize={"20px"}
                    _hover={{
                      transform: "translateY(-2px)",
                      color: "theme.yellow",
                    }}
                  >
                    <RiMoneyDollarCircleLine />
                    <Text>Como comprar</Text>
                  </HStack>
                  <HStack
                    as="button"
                    fontSize={"20px"}
                    _hover={{
                      transform: "translateY(-2px)",
                      color: "theme.yellow",
                    }}
                  >
                    <FaExchangeAlt />
                    <Text>Trocas</Text>
                  </HStack>
                </>
              ) : (
                <></>
              )}
              {isLargerThan1015 ? (
                <>
                  <HStack
                    as="button"
                    fontSize={"20px"}
                    _hover={{
                      transform: "translateY(-2px)",
                      color: "theme.yellow",
                    }}
                  >
                    <TbTruckDelivery />
                    <Text>Entregas</Text>
                  </HStack>
                  <HStack
                    as="button"
                    fontSize={"20px"}
                    _hover={{
                      transform: "translateY(-2px)",
                      color: "theme.yellow",
                    }}
                  >
                    <FaGift />
                    <Text>Presentes</Text>
                  </HStack>
                </>
              ) : (
                <></>
              )}
              {isLargerThan713 ? (
                <>
                  <HStack
                    as="button"
                    fontSize={"20px"}
                    _hover={{
                      transform: "translateY(-2px)",
                      color: "theme.yellow",
                    }}
                  >
                    <AiOutlineTags />
                    <Text>Vale Brinde</Text>
                  </HStack>
                  <HStack
                    as="button"
                    fontSize={"20px"}
                    _hover={{
                      transform: "translateY(-2px)",
                      color: "theme.yellow",
                    }}
                  >
                    <BsFillEmojiHeartEyesFill />
                    <Text>Progama de Pontos</Text>
                  </HStack>
                </>
              ) : (
                <></>
              )}

              <>
                <HStack spacing={4}>
                  <Flex as="button" onClick={onToggle}>
                    <FiMenu size={30} color={"#ee9a08"} />
                  </Flex>
                </HStack>
                <Meni isOpen={isOpen} onClose={onClose} />
              </>
            </HStack>
          </Flex>
        </>
      </Flex>
    </>
  );
};
