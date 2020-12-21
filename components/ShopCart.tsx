import {
  Menu,
  MenuButton,
  MenuList,
  Flex,
  Button,
  Spacer,
  MenuGroup,
  useColorModeValue,
  Box
} from "@chakra-ui/react"
import Summary from './CartSummary'
import Products from './Products'

import { FaShoppingCart } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import ThemeMode from './ThemeMode'

const Navbar: React.FC = () => {
  const bg = useColorModeValue('gray.100', 'gray.1000')
  const color = useColorModeValue('blue.700', 'blue .100')

  return (
    <>
    <Flex w="100%" p={4} boxShadow="lg" bg={bg} color={color} className='navbar'>
      <Menu>
        <h1 style={{ fontWeight: 'bold', alignSelf: 'center' }}>
          Next Commerce
        </h1>
        <Spacer />
      <MenuButton bg={bg} color={color} variant="ghost" as={Button} >
        <FaShoppingCart />
      </MenuButton>
        <MenuList boxShadow="lg">
          <MenuGroup title='Your cart 😊' color=''>
            <Summary />
          </MenuGroup>
        </MenuList>
      </Menu>

      <Menu>
      <MenuButton bg={bg} color={color} ml={1} variant="ghost" as={Button} >
        <MdSettings />
      </MenuButton>
        <MenuList boxShadow="lg">
          <ThemeMode />
        </MenuList>
      </Menu>
    </Flex>
    <Box color={color} className="page-container">
      <Products />
    </Box>
    </>
  )
}  

export default Navbar;