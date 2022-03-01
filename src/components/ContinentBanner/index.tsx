import { Flex, Text } from "@chakra-ui/react";

export function ContinentBanner() {
    return (
        <Flex
            w='100%'
            h={['150px', '300px', '500px']}
            px={['0', '0', '36']}
            pt={['0', '0', '72']}
            bgImage='url(/europebanner.svg)'
            bgPosition='center'
            bgRepeat='no-repeat'
            bgSize='cover'
            align='center'
            justify={['center', 'center', 'flex-start']}
        >
            <Text
            fontFamily='Poppins'
            fontSize={['28px', '48px']}
            fontStyle='normal'
            fontWeight='600'
            lineHeight={['42px', '72px']}
            color= '#F5F8FA'
            >Europa</Text>
        </Flex>
    )
}