import { Text } from "@chakra-ui/react";

interface IMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: IMenuProps) => {
  return <Text>MenuHeader</Text>;
};
