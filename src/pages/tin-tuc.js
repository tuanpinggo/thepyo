import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import PostList from "@/components/post/list";
import Widget from "@/components/post/widgets";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Divider, Stack } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function TinTucPage({config,data}){
    return(
        <MainLayout config={config}>
            <PyoBreakCrumbs 
                title="Tin tức"
            />
            <Box component={"main"} py={8}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={3}>
                        <Grid xs={12} md={9}>
                            <Stack gap={3} divider={<Divider light />}>
                                {data?.map(item =>
                                    <PostList key={item.id} data={item?.attributes}/>
                                )}
                            </Stack>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Widget />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const url1 = `${globalConfig.api_url}/config?populate=*`
    const url2 = `${globalConfig.api_url}/posts?populate=*&?filters[categories][operator]=1`
    
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