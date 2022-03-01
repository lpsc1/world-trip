import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Type } from "./type";



export default function TravelTypes() {
    return (
        <Grid
        templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
        w='100%'
        justifyContent='space-between'
        alignContent='center'
        mt={['10', '32']}
        mx='auto'
        maxW='1160px'
        gap={[1, 5]}
>
            <GridItem>
                <Type image='cocktail.png' description='taça' name='vida noturna' />
            </GridItem>
            <GridItem>
                <Type image='surf.png' description='Prancha de surf e sol' name='praia' />
            </GridItem>
            <GridItem>
                <Type image='building.png' description='Prédio' name='moderno' />
            </GridItem>
            <GridItem>
                <Type image='museum.png' description='Museu' name='clássico' />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]} >
                <Type image='earth.png' description='Planeta Terra' name='e mais...' />
            </GridItem>
        </Grid>
    )
}







