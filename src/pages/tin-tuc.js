import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import PostList from "@/components/post/list";
import Widget from "@/components/post/widgets";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Divider, Stack } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function TinTucPage({config,data, categories, tags}){
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
                            <Widget categories={categories} tags={tags}/>
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
    const url3 = `${globalConfig.api_url}/categories?populate=*`
    const url4 = `${globalConfig.api_url}/tags?populate=*`
    
    const getConfig = await fetch(url1)
    const getData = await fetch(url2)
    const getCategories = await fetch(url3)
    const getTags = await fetch(url4)
  
    const configResponse = await getConfig.json()
    const dataResponse = await getData.json()
    const dataCategories = await getCategories.json()
    const tagResponse = await getTags.json()
  
    const config = configResponse?.data?.attributes
   
    return {
      props: {
        config,
        data: dataResponse?.data,
        categories: dataCategories?.data,
        tags: tagResponse?.data
      },
      revalidate: globalConfig.revalidateTime,
    }
}