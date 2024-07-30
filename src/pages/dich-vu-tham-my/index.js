import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import ServiceGrid from "@/components/services/grid";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function ServicePage({config,data}){
    return(
        <MainLayout config={config}>
            <PyoBreakCrumbs
                title="Dịch vụ thẩm mỹ"
            />

            <Box component={"main"} py={{xs: 3, lg: 8}}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={2}>

                        {data?.map(item =>

                            <Grid xs={12} md={6} lg={3} key={item.id}>
                                <ServiceGrid item={item?.attributes}/>
                            </Grid>
                        )}
                        
                    </Grid>
                    
                </Container>
            </Box>

        </MainLayout>
    )
}

export async function getStaticProps() {
    const url1 = `${globalConfig.api_url}/config?populate=*`
    const url2 = `${globalConfig.api_url}/services?populate=*`
    
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