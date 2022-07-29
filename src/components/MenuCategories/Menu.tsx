import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  HStack,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

import logo from "../../assets/img/logo.png";

import { FaCat, FaDog, FaExchangeAlt, FaGift } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { AiOutlineTags } from "react-icons/ai";

interface IMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Meni = ({ isOpen, onClose }: IMenuProps) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <Image src={logo}></Image>
        </DrawerHeader>
        <DrawerBody bg={"theme.purple"}>
          <VStack spacing={5} color={"theme.white"}>
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
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
