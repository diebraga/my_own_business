import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  Flex,
  Button,
  Spacer,
} from "@chakra-ui/react"
import { SettingsIcon } from '@chakra-ui/icons'
import ThemeMode from './ThemeMode'

const Navbar: React.FC = () => {
  return (
    <Flex w="100%" p={4} boxShadow="lg" className='navbar'>
      <Menu>
        <h1>
          Next Commerce
        </h1>
        <Spacer />
      <MenuButton variant="ghost" as={Button} _hover={{ bg: "#ebedf0" }}>
        <SettingsIcon />
      </MenuButton>
        <MenuList>
          <ThemeMode />
        </MenuList>
      </Menu>
    </Flex>
  )
}  

export default Navbar;