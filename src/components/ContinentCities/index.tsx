import { Flex, Grid, Text } from "@chakra-ui/react";
import { City } from "./city";

export function ContinentCities() {
    return (
        <Flex
            w='100%'
            //align='center'
            //justify='center'
            direction='column'
        >
            <Text
                // ml={['16px', '140']}
                mt={['32px', ' 80px']}
                w={['164px', '246px']}
                h={['36px', '54px']}
                fontFamily='Poppins'
                fontSize={['24px', '36px']}
                fontStyle='normal'
                fontWeight='500'
                lineHeight={['36px', '54px']}
                color='#47585B'
            // textAlign='right'
            //align='left'
            //justifyContent='left'
            >
                Cidades +100
            </Text>

            <Grid
            templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} 
            gap={['20px', '45px']} 
            alignItems='center'
            justifyContent='center'
            px={['30px', '0']}
            >
                <City cityImage="londres" cityCountry="Reino Unido" cityName="Londres" countryImage="reinounido"  />
                <City cityImage="paris" cityCountry="França" cityName="Paris" countryImage="franca"  />
                <City cityImage="roma" cityCountry="Itália" cityName="Roma" countryImage="italia"  />
                <City cityImage="praga" cityCountry="República Tcheca" cityName="Praga" countryImage="republicatcheca"  />
                <City cityImage="amsterda" cityCountry="Holanda" cityName="Amsterdã" countryImage="holanda"  />
            </Grid>
        </Flex>
    )
}