import {
  Menu,
  MenuButton,
  MenuList,
  Flex,
  Button,
  Spacer,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent
} from "@chakra-ui/react"
import Link from 'next/link'
import Summary from './CartSummary'
import { FaShoppingCart } from 'react-icons/fa'
import { FiMoreVertical } from 'react-icons/fi'
import ThemeMode from './ThemeMode'
import Wishlist from './Wishlist'

const Navbar: React.FC = () => {
  const bg = useColorModeValue('gray.100', '#090e1a')
  const color = useColorModeValue('gray.700', 'gray.50')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Flex w="100%" p={4} boxShadow="lg" bg={bg} color={color} className='navbar'>
      <h1 style={{ fontWeight: 'bold', alignSelf: 'center' }}>
        <Link href='/'>
          Next Commerce
        </Link>
      </h1>
      <Spacer />

      <Button 
        bg={bg} 
        color={color} 
        variant="ghost" 
        as={Button} 
        onClick={onOpen}
      >
        <FaShoppingCart size={20}/>
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Your cart 😊</DrawerHeader>
          <DrawerBody>
            <Summary />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Wishlist />

      <Menu>
      <MenuButton bg={bg} color={color} ml={1} variant="ghost" as={Button} >
        <FiMoreVertical size={20}/>
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