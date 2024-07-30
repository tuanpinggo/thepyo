import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import FormContract from "@/components/form/default";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";

export default function ContactUs({config}) {
    return (
        <MainLayout config={config}>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>

                                <Stack spacing={1}>
                                    <Typography>
                                        <strong>Địa chỉ :</strong> 75 Phạm Viết Chánh, Ho Chi Minh City, Vietnam
                                    </Typography>
                                    <Typography>
                                        <strong>Hotline :</strong> 0988 847 958
                                    </Typography>
                                    <Typography>
                                        <strong>Email : </strong> thepyovietnam@gmail.com
                                    </Typography>
                                    <Typography>
                                        <strong>Website : </strong>  www.thepyo.vn
                                    </Typography>
                                </Stack>
                                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                    <Typography>
                                        <strong>Social : </strong>
                                    </Typography>
                                    <IconBrandFacebook />
                                    <IconBrandTwitter />
                                    <IconBrandYoutube />
                                    <IconBrandLinkedin />
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
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
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
   
    return {
      props: {
        config
      },
      revalidate: globalConfig.revalidateTime,
    }
}