import {
  Button,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent
} from "@chakra-ui/react"
import { FiHeart } from 'react-icons/fi'

const Wishlist: React.FC = () => {
  const bg = useColorModeValue('gray.100', '#090e1a')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>

    <Button 
      bg={bg} 
      ml={1}
      colorScheme='pink'       
      variant="ghost" 
      as={Button} 
      onClick={onOpen}
      borderRadius="full"
      boxSize='50px'
    >
      <FiHeart size={20}/>
    </Button>
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Wishlist ❤</DrawerHeader>
        <DrawerBody>
          
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    </>
  )
}  

export default Wishlist;