import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import FormContract from "@/components/form/default";
import DefaultSeo from "@/components/seo/init";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import Link from "next/link";

export default function ContactUs({config,navbar}) {
    return (
        <MainLayout config={config} navbar={navbar}>
            <DefaultSeo
                title="Liên hệ The Pyo"
                description="The Pyo, mọi khuyết điểm sẽ được hóa thành ưu điểm. Với đội ngũ chuyên gia hàng đầu và công nghệ hiện đại, The Pyo cam kết mang lại vẻ đẹp hoàn hảo"
            />
            <PyoBreakCrumbs
                title="Liên hệ"
            />
            <Box component={"main"} py={{ xs: 3, lg: 8 }}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={{xs: 3, lg: 8}}>
                        <Grid xs={12} lg={6} order={{xs: 2, lg: 1}}>
                            <FormContract />
                        </Grid>
                        <Grid xs={12} lg={6} order={{xs: 1, lg: 2}}>
                            <Stack spacing={2}>
                                <Typography variant='h2' component={"h2"} fontWeight={700} fontSize={20} color={"primary.main"}>
                                    LIÊN HỆ VỚI CHÚNG TÔI
                                </Typography>
                                <Typography>
                                    {config?.description_contact}
                                </Typography>

                                <Stack spacing={1}>
                                    <Typography>
                                        <strong>Địa chỉ :</strong> {config?.address}
                                    </Typography>
                                    <Typography>
                                        <strong>Hotline :</strong> {config?.hotline}
                                    </Typography>
                                    <Typography>
                                        <strong>Email : </strong> {config?.email}
                                    </Typography>
                                    <Typography>
                                        <strong>Website : </strong>  {config?.website}
                                    </Typography>
                                </Stack>
                                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                    <Typography>
                                        <strong>Social : </strong>
                                    </Typography>
                                    <Link href={config?.facebook}>
                                        <IconBrandFacebook />
                                    </Link>
                                    <Link href={config?.twitter}>
                                        <IconBrandTwitter />
                                    </Link>
                                    <Link href={config?.youtube}>
                                        <IconBrandYoutube />
                                    </Link>
                                    <Link href={config?.instagram}>
                                        <IconBrandInstagram />
                                    </Link>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.38281832222!2d106.6822571!3d10.7656094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f004207347d%3A0x24ccc872eae5bd9a!2sThe%20Pyo%20%7C%20Center%20clinic!5e0!3m2!1svi!2s!4v1722264650289!5m2!1svi!2s" 
                        width="100%" 
                        height="450" 
                        loading="lazy" 
                        style={{border: "none"}}
                    />
                </Box>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const url1 = `${globalConfig.api_url}/config?populate=*`
    
    const getConfig = await fetch(url1)
  
    const configResponse = await getConfig.json()
  
    const config = configResponse?.data?.attributes

    const urlNavbar = `${globalConfig.api_url}/menus/1?nested&populate=*`
    const getNavbar = await fetch(urlNavbar)
    const navbarResponse = await getNavbar.json()
   
    return {
      props: {
        config,
        navbar: navbarResponse?.data?.attributes?.items
      },
      revalidate: globalConfig.revalidateTime,
    }
}