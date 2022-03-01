import { Flex, Grid, Icon, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from 'react-icons/ri';


export function Header() {
    const { asPath } = useRouter();
    const notHomePage = asPath !== '/'

    return (
        <Flex
            w='100%'
            maxWidth={1480}
            h={['50px', '100px']}
            align='center'
            justify='center'
        >
            <Grid
            h='100%'
            mx='auto'
            w='100%'
            maxW='1160px'
            alignItems='center'
            templateColumns='repeat(3, 1fr)'
            justifyContent='center'
            >
        {notHomePage && (
            
            <Link
            href='/'>
            <a>
                <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf='start' ml={['16px', 'auto']} />
            </a>
            </Link>
            
        )}
            <Image
                w={['81px', '184px']}
                src='Logo.png'
                alt="Logo world trip"
                justifySelf='center'
                gridColumn='2'
            />
            </Grid>
        </Flex>
    )
}