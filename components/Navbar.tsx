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
  const bg = useColorModeValue('gray.100', '#000912')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Flex w="100%" p={4} boxShadow="lg" bg={bg} className='navbar'>
      <h1 style={{ fontWeight: 'bold', alignSelf: 'center' }}>
        <Link href='/'>
          Next Commerce
        </Link>
      </h1>
      <Spacer />

      <Button 
        bg={bg} 
        variant="ghost" 
        as={Button} 
        onClick={onOpen}
        borderRadius="full"
        boxSize='50px'
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
      <MenuButton 
        bg={bg} 
        ml={1} 
        variant="ghost" 
        as={Button} 
        borderRadius="full"
        boxSize='50px'
      >
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