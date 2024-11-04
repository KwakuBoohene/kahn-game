import {extendTheme , type ThemeConfig,} from '@chakra-ui/react';

const config: ThemeConfig =  {
    initialColorMode: 'dark',
    useSystemColorMode: true,
    
};

const styles = {
    global: {
        "html, body": {
            bg: '#70706E',
            
        }
    }
};

const theme = extendTheme({ config, styles });

export default theme;