import { Box, Button, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image";
import { globalConfig } from "@/theme/config";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import FormHomepage from "@/components/form/formHomepage";
import { imageCdn } from "@/components/ui/imaWithCdn";
import ButtonCallToActionMobile from "./buttonCallToActionMobile";
import SlideItem from "./slideItem";

export default function SlideSection({slides}){

    const matches = useMediaQuery('(min-width:1650px)');

    const isMobile = useMediaQuery('(max-width:900px)');

    return(
        <Box position={"relative"} minHeight={{
            xs: 350,
            lg: 900
        }}>
            <Swiper 
                pagination={true} 
                navigation={isMobile ? false : true}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]} 
                className="mySwiper"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {slides.map((item,index) => (
                    <SwiperSlide key={index}>
                        <Stack position={"relative"} sx={{width: '100vw', height: isMobile ? "400px" : "668px"}} justifyContent={"center"}>
                            <Box position={"absolute"} top={0} left={0} right={0} bottom={0} zIndex={0}>
                                <Image 
                                    src={imageCdn(item?.attributes?.image?.data?.attributes?.url)}
                                    width={1920} 
                                    height={668} 
                                    alt="" 
                                    style={{
                                        width: '100vw',
                                        height: isMobile ? "400px" : "668px",
                                        objectFit:'cover',
                                        objectPosition: 'center'
                                    }}
                                    priority
                                />
                            </Box>
                            
                        </Stack>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ButtonCallToActionMobile />
            <Stack 
                display={{xs: "none", lg: "block"}}
                position={"absolute"} 
                bottom={30} 
                left={0} 
                right={0} 
                justifyContent={"center"} 
                alignItems={"center"} 
                zIndex={1}
            >
                <Container maxWidth={globalConfig.maxWidth}>
                    <Stack direction={"row"} alignItems={"center"} spacing={0}>
                        <SlideItem />
                        <SlideItem 
                            bgcolor="#03378B"
                        />
                        <SlideItem />
                        <SlideItem 
                            bgcolor="#03378B"
                        />
                        <SlideItem />
                    </Stack>
                </Container>
            </Stack>
        </Box>
    )
}