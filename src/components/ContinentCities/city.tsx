import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CityProps {
    cityImage: string;
    cityName: string;
    cityCountry: string;
    countryImage: string;

}

export function City({ cityImage, cityName, cityCountry, countryImage }: CityProps) {
    return (
        <Box
            borderRadius='4px'
            overflow='hidden'
        //w={['256px']}
        //h={['279px']}   
        >
            <Image
                w='100%'
                h='173px'
                src={`/${cityImage}.svg`}
            />

            <Flex
                w='256px'
                h='106px'
                direction='row'
                p='6'
                align='center'
                justify='space-between'
                border='1px'
                borderColor='yellow.300'
                borderTop='0'
                ml='23.5'
            >
                <Flex direction='column'>
                    <Text>{cityName}</Text>
                    <Text>{cityCountry}</Text>

                </Flex>

                <Image
                    src={`/${countryImage}.svg`}
                />

            </Flex>

        </Box>
    )
}