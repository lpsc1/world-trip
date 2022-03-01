import { Flex } from "@chakra-ui/react";
import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentContent } from "../components/ContinentContent";
import { ContinentCities } from "../components/ContinentCities";
import { Header } from "../components/Header";

export default function Continent() {
    return(
        <Flex direction='column'>
        <Header />
        <ContinentBanner />
        <ContinentContent />
        <ContinentCities />
        </Flex>
    )
}