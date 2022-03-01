import { Flex, Image, Text } from "@chakra-ui/react";

interface TypeProps {
    image: string;
    description: string;
    name: string;
}

export function Type({image, description, name}: TypeProps) {
    return(
        <Flex direction={['row', 'column']} align='center' justify='center'>
                <Image
                    src="/Ellipse.png"
                    mr='2'
                    display={['block', 'block', 'none']}
                />
                <Image
                    src={`/${image}`}
                    alt={`${description}`}
                    w='85px'
                    h='85px'
                    mb='6'
                    display={['none', 'none', 'block']}
                />
                <Text
                    fontFamily='Poppins'
                    fontStyle='normal'
                    fontWeight={['500', '600']}
                    fontSize={['18px', '24px']}
                    lineHeight={['27px', '36px']}
                    textAlign='center'
                    color='#47585B'
                    marginTop={['', '24px']}
                >{name}</Text>
            </Flex>
    )
}