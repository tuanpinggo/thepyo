import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import DefaultSeo from "@/components/seo/init";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function AboutUsPage({config,data}){

    const {title,content,sapo,seo} = data?.attributes

    return(
        <MainLayout config={config}>
            <DefaultSeo
                title={seo?.title}
                description={seo?.description}
            />
            <Box component={"main"} py={{xs: 3, lg: 8}}>
                <Container maxWidth={"md"}>
                    <Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
                        <Typography variant="h1" component={"h1"} fontWeight={700} fontSize={38} color="primary.main" textAlign={"center"}>
                            {title}
                        </Typography>
                        <Typography variant="body1" fontWeight={300} fontSize={17} textAlign={"center"}>
                            {sapo}
                        </Typography>
                        <Box className="content">
                            <div dangerouslySetInnerHTML={{__html: content}} />
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const url1 = `${globalConfig.api_url}/config?populate=*`
    const url2 = `${globalConfig.api_url}/gioi-thieu?populate=*`
    
    const getConfig = await fetch(url1)
    const getData = await fetch(url2)
  
    const configResponse = await getConfig.json()
    const dataResponse = await getData.json()
  
    const config = configResponse?.data?.attributes
   
    return {
      props: {
        config,
        data: dataResponse?.data
      },
      revalidate: globalConfig.revalidateTime,
    }
}