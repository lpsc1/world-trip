import { Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y} from 'swiper'
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Slider() {
  return (
      <Flex 
      mt={['20px', '52px']}
      w='100%'
      maxWidth='1240px'
      mx='auto'
      mb={['5', '10']}
      h={['250px', '450px']}
      >
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{delay: 4000,}}
      style={{width: '100%', flex: '1'}}
    >
      <SwiperSlide>
          <Flex
          w='100%'
          h='100%'
          align='center'
          justify='center'
          direction='column'
          bgImage='url(/europe.svg)'
          bgRepeat='no-repeat'
          bgSize='cover'
          textAlign='center'
          bgPosition='center'
          >
              <Link href='/continent'>
                  <a>
                      <Heading 
                      fontSize={['24px', '48px']}
                      color='#F5F8FA'
                      >Europa</Heading>
                      <Text
                       fontSize={['14px', '24px']}
                       color='#DADADA'
                      >O continente mais antigo.</Text>
                  </a>
              </Link>
          </Flex>
      </SwiperSlide>
      <SwiperSlide>
      <Flex
          w='100%'
          h='100%'
          align='center'
          justify='center'
          direction='column'
          bgImage='url(/southamerica.jpg)'
          bgRepeat='no-repeat'
          bgSize='cover'
          textAlign='center'
          bgPosition='center'
          >
              <Link href='/continent/southamerica'>
                  <a>
                      <Heading 
                      fontSize={['24px', '48px']}
                      color='#F5F8FA'
                      >América do Sul</Heading>
                      <Text
                       fontSize={['14px', '24px']}
                       color='#DADADA'
                      >Ah... O clima tropical.</Text>
                  </a>
              </Link>
          </Flex>
      </SwiperSlide>
      <SwiperSlide>
      <Flex
          w='100%'
          h='100%'
          align='center'
          justify='center'
          direction='column'
          bgImage='url(/northamerica.jpg)'
          bgRepeat='no-repeat'
          bgSize='cover'
          textAlign='center'
          bgPosition='center'
          >
              <Link href='/continent/northamerica'>
                  <a>
                      <Heading 
                      fontSize={['24px', '48px']}
                      color='#F5F8FA'
                      >América do Norte</Heading>
                      <Text
                       fontSize={['14px', '24px']}
                       color='#DADADA'
                      >Hello!</Text>
                  </a>
              </Link>
          </Flex>
      </SwiperSlide>
      <SwiperSlide>
      <Flex
          w='100%'
          h='100%'
          align='center'
          justify='center'
          direction='column'
          bgImage='url(/asia.jpg)'
          bgRepeat='no-repeat'
          bgSize='cover'
          textAlign='center'
          bgPosition='top'
          >
              <Link href='/continent/asia'>
                  <a>
                      <Heading 
                      fontSize={['24px', '48px']}
                      color='#F5F8FA'
                      >Ásia</Heading>
                      <Text
                       fontSize={['14px', '24px']}
                       color='#DADADA'
                      >anime</Text>
                  </a>
              </Link>
          </Flex>
      </SwiperSlide>
      <SwiperSlide>
      <Flex
          w='100%'
          h='100%'
          align='center'
          justify='center'
          direction='column'
          bgImage='url(/africa.jpg)'
          bgRepeat='no-repeat'
          bgSize='cover'
          textAlign='center'
          bgPosition='bottom'
          >
              <Link href='/continent/africa'>
                  <a>
                      <Heading 
                      fontSize={['24px', '48px']}
                      color='#F5F8FA'
                      >África</Heading>
                      <Text
                       fontSize={['14px', '24px']}
                       color='#DADADA'
                      >Savana</Text>
                  </a>
              </Link>
          </Flex>
      </SwiperSlide>
      <SwiperSlide>
      <Flex
          w='100%'
          h='100%'
          align='center'
          justify='center'
          direction='column'
          bgImage='url(/oceania.jpg)'
          bgRepeat='no-repeat'
          bgSize='cover'
          textAlign='center'
          bgPosition='bottom'
          >
              <Link href='/continent/oceania'>
                  <a>
                      <Heading 
                      fontSize={['24px', '48px']}
                      color='#F5F8FA'
                      >Oceania</Heading>
                      <Text
                       fontSize={['14px', '24px']}
                       color='#DADADA'
                      >Canguru</Text>
                  </a>
              </Link>
          </Flex>
      </SwiperSlide>
      
    </Swiper>
    </Flex>
  );
};