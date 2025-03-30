import {extendTheme , type ThemeConfig,} from '@chakra-ui/react';

const config: ThemeConfig =  {
    initialColorMode: 'dark',
    useSystemColorMode: true,
    
};

const styles = {
    global: {
        "html, body": {
            bg: '#FFE9C9',
            
        }
    }
};

const theme = extendTheme({
  config,
  styles,
  colors: {
    orange: {
      500: '#F97316', // You can adjust this hex code to match your desired orange
    }
  }
});

export default theme;