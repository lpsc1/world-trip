import { Box, Flex, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function ContinentContent() {
    return (
        <Flex
            w='100%'
            direction={['column', 'column', 'column' ,'row']}
            align='center'
            justify='center'
            gap={['16px', '70px']}
            mt={['24px', '80px']}

        >
            <Text
                w={['343px', '600px']}
                h={['146px', '211px']}
                color='#47585B'
                fontFamily='Poppins'
                fontSize={['14px', '24px']}
                fontStyle='normal'
                fontWeight='normal'
                lineHeight={['21px', '36px']}
                textAlign='justify'
            >
                A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>
            <Flex
                direction='row'
                align='center'
                justify='center'
                gap='42px'
            >
                <Flex
                    w={['60px', '98px']}
                    h={['59px', '99px']}
                    direction='column'
                    align='center'

                >
                    <Text
                        fontFamily='Poppins'
                        fontSize={['24px', '48px']}
                        fontStyle='normal'
                        fontWeight='600'
                        lineHeight={['36px', '72px']}
                        color='#FFBA08'

                    >50</Text>
                    <Text
                        fontFamily='Poppins'
                        fontSize={['18px', '24px']}
                        fontStyle='normal'
                        fontWeight={['normal', '600']}
                        lineHeight={['27px', '36px']}
                        color='#47585B'
                    >países</Text>
                </Flex>

                <Flex
                    w={['67px', '122px']}
                    h={['53px', '99px']}
                    direction='column'
                    align='center'
                >
                    <Text
                        fontFamily='Poppins'
                        fontSize={['24px', '48px']}
                        fontStyle='normal'
                        fontWeight='600'
                        lineHeight={['36px', '72px']}
                        color='#FFBA08'
                    >60</Text>
                    <Text
                        fontFamily='Poppins'
                        fontSize={['18px', '24px']}
                        fontStyle='normal'
                        fontWeight={['normal', '600']}
                        lineHeight={['27px', '36px']}
                        color='#47585B'
                    >línguas</Text>
                </Flex>

                <Flex
                    w={['120px', '165px']}
                    h={['55px', '99px']}
                    direction='column'
                    align='center'>
                    <Text
                        fontFamily='Poppins'
                        fontSize={['24px', '48px']}
                        fontStyle='normal'
                        fontWeight='600'
                        lineHeight={['36px', '72px']}
                        color='#FFBA08'
                    >27</Text>
                    <Text
                        fontFamily='Poppins'
                        fontSize={['18px', '24px']}
                        fontStyle='normal'
                        fontWeight={['normal', '600']}
                        lineHeight={['27px', '36px']}
                        color='#47585B'
                    >cidades +100 
                    <Popover>
                        <PopoverTrigger>
                            <span>
                                <Icon 
                                as={RiInformationLine} 
                                cursor='pointer' 
                                color='gray.400' 
                                w={['10px', '16px']} 
                                h={['10px', '16px']} 
                                />
                            </span>
                        </PopoverTrigger>
                        <PopoverContent bg='gray.700' color="yellow.400">
                            <PopoverArrow bg='gray.700' />
                            <PopoverCloseButton />
                            <PopoverBody fontWeight='400' fontSize='lg' >
                                Paris, Europa, Chile, Canadá, China
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    </Text>
                </Flex>

            </Flex>
        </Flex>
    )
}