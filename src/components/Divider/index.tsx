import { Flex, Image, Text } from "@chakra-ui/react";

export function Divider() {
    return(
        <Flex mt={[ '36px','80px']} direction='column' justify='center' align='center'>
            <Image src='/Divider.png'/>
            <Text
            fontFamily='Poppins'
            fontStyle='normal'
            fontWeight='500'
            fontSize={['20px', '36px']}
            lineHeight={['30px', '54px']}
            textAlign='center'
            color='#47585B'
            mt={['24px', '52px']}>
                Vamos nessa? <br /> Então escolha seu continente
            </Text>
        </Flex>
    )
}