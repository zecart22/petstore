import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <InputGroup>
      <InputRightElement
        pointerEvents="none"
        children={<BsSearch color="gray.300" />}
      />
      <Input
        type="text"
        placeholder="pesquisar"
        _placeholder={{
          opacity: 0.4,
          color: "inherit",
          fontFamily: "Montserrat",
        }}
        focusBorderColor="theme.purple"
      />
    </InputGroup>
  );
};

export const SearchBarMobile = () => {
  return (
    <InputGroup>
      <InputRightElement
        pointerEvents="none"
        children={<BsSearch color="gray.300" />}
      />
      <Input type="text" focusBorderColor="theme.purple" />
    </InputGroup>
  );
};
