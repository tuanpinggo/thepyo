import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import PostList from "@/components/post/list";
import Widget from "@/components/post/widgets";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Divider, Stack } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function KhuyenMaiPage({config}){
    return(
        <MainLayout config={config}>
            <PyoBreakCrumbs 
                title="Chương trình khuyến mại"
            />
            <Box component={"main"} py={8}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={3}>
                        <Grid xs={12} md={9}>
                            <Stack gap={3} divider={<Divider light />}>
                                <PostList />
                                <PostList />
                                <PostList />
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