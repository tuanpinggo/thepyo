import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import ServiceGrid from "@/components/services/grid";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function ServicePage({config}){
    return(
        <MainLayout config={config}>
            <PyoBreakCrumbs
                title="Dịch vụ thẩm mỹ"
            />

            <Box component={"main"} py={{xs: 3, lg: 8}}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={6} lg={3}>
                            <ServiceGrid />
                        </Grid>
                        <Grid xs={12} md={6} lg={3}>
                            <ServiceGrid />
                        </Grid>
                        <Grid xs={12} md={6} lg={3}>
                            <ServiceGrid />
                        </Grid>
                        <Grid xs={12} md={6} lg={3}>
                            <ServiceGrid />
                        </Grid>
                        <Grid xs={12} md={6} lg={3}>
                            <ServiceGrid />
                        </Grid>
                        <Grid xs={12} md={6} lg={3}>
                            <ServiceGrid />
                        </Grid>
                        <Grid xs={12} md={6} lg={3}>
                            <ServiceGrid />
                        </Grid>
                        <Grid xs={12} md={6} lg={3}>
                            <ServiceGrid />
                        </Grid>
                    </Grid>
                    
                </Container>
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