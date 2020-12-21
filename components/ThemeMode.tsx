import { useColorMode, MenuItem, MenuGroup } from '@chakra-ui/react'

const ThemeMode: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
    <MenuGroup title='Theme'>
      <MenuItem
        onClick={toggleColorMode}
      >
        {colorMode === 'dark' ? 'Light mode theme' : 'Dark mode theme'}
      </MenuItem>
    </MenuGroup>
    </>
  )
}

export default ThemeMode;