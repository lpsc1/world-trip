import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex
            w='100%'
            maxWidth={1440}
            h={['163px', '368.21px']}
            align='center'
            justify={['center', 'space-between']}
            bgImage="url('/Background.svg')"
            bgRepeat='no-repeat'
            bgSize='cover'
            p={['4', '10', '20', '20', '36']}
        >

            <Flex direction='column'>
                <Text
                    w={['238px', '426px']}
                    h={['58px', '108px']}
                    color='#F5F8FA'
                    fontFamily='Poppins'
                    fontWeight='500'
                    fontStyle='normal'
                    fontSize={['20px', '36px']}
                    lineHeight={['30px', '54px']}
                >
                    5 Continentes,<br /> infinitas possibilidades.
                </Text>

                <Text
                    w={['333px', '524px']}
                    h={['41px', '57px']}
                    color='#DADADA'
                    fontFamily='Poppins'
                    fontWeight='normal'
                    fontSize={['14px', '20px']}
                    lineHeight={['21px', '30px']}
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Flex>

            <Image
                display={['none', 'none', 'none', 'block']}
                w={['300px',' 300px', '300px', '430px']}
                src='Airplane.svg' 
                alt="avião voando com algumas nuvens"
                transform={"rotate(5deg) translateY(60px)"} 
                ml='8'
            />
        </Flex>
    )
}