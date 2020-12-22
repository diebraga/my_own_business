import {
  Menu,
  MenuButton,
  MenuList,
  Flex,
  Button,
  Spacer,
  MenuGroup,
  useColorModeValue,
} from "@chakra-ui/react"
import Summary from './CartSummary'
import { FaShoppingCart } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import ThemeMode from './ThemeMode'

const Navbar: React.FC = () => {
  const bg = useColorModeValue('gray.100', '#090e1a')
  const color = useColorModeValue('gray.700', 'gray .100')

  return (
    <>
    <Flex w="100%" p={4} boxShadow="lg" bg={bg} color={color} className='navbar'>
      <Menu>
        <h1 style={{ fontWeight: 'bold', alignSelf: 'center' }}>
          Next Commerce
        </h1>
        <Spacer />
      <MenuButton bg={bg} color={color} variant="ghost" as={Button} >
        <FaShoppingCart size={20}/>
      </MenuButton>
        <MenuList boxShadow="lg">
          <MenuGroup title='Your cart 😊'>
            <Summary />
          </MenuGroup>
        </MenuList>
      </Menu>

      <Menu>
      <MenuButton bg={bg} color={color} ml={1} variant="ghost" as={Button} >
        <MdSettings size={20}/>
      </MenuButton>
        <MenuList boxShadow="lg">
          <ThemeMode />
        </MenuList>
      </Menu>
    </Flex>
    </>
  )
}  

export default Navbar;