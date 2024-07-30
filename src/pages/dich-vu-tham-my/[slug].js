import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import DetailPostMeta from "@/components/page/detail-post/meta";
import AdvantageService from "@/components/page/detail-service/advantage";
import Faq from "@/components/page/detail-service/faq";
import WhatService from "@/components/page/detail-service/whatservice";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Image from "next/image";
import MechanismService from "./mechanism";
import WorkingProcessService from "@/components/page/detail-service/workingProcess";
import WidgetService from "@/components/page/detail-service/widget";
import FormHomepage from "@/components/form/formHomepage";

export default function ServicePage({posts,config, allService}) {
    
    const data = posts?.data?.[0]?.attributes

    return (
        <MainLayout config={config}>

            <PyoBreakCrumbs
                categories={[{ name: 'Dịch vụ thẩm mỹ', slug: "/dich-vu-tham-my" }]}
                title={data?.title}
            />

            <Box component={"main"} py={3} className="service-detail">
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={5} justifyContent={"space-between"}>
                        <Grid xs={12} md={8}>
                            <Typography variant="h2" component={"h2"} color={"primary.main"} textTransform={"uppercase"} fontSize={26}>
                                {data?.title}
                            </Typography>

                            <DetailPostMeta 
                                title={data?.title}
                                time={data?.createdAt}
                                description={data?.description}
                                url={`${globalConfig.home_url}/${data?.slug}`}
                            />

                            <WhatService data={data}/>
                            <AdvantageService data={data}/>
                            <MechanismService data={data}/>
                            <WorkingProcessService data={data}/>
                            <Faq data={data}/>

                        </Grid>
                        <Grid xs={12} md={3}>
                            <WidgetService datas={allService}/>
                        </Grid>
                    </Grid>
                    <Box bgcolor={"primary.main"} borderRadius={2} p={2} mt={4}>
                        <FormHomepage />
                    </Box>
                </Container>
            </Box>
        </MainLayout>
    )
}

export async function getStaticProps({ params }) {

    const slug = params?.slug

    const res = await fetch(`${globalConfig.api_url}/services?filters[slu][$eq]=${slug}&populate=*`)
    const posts = await res.json()

    const url1 = `${globalConfig.api_url}/config?populate=*`
    
    const getConfig = await fetch(url1)

    const configResponse = await getConfig.json()

    const res3 = await fetch(`${globalConfig.api_url}/services?populate=*`)
    const allService = await res3.json()
   
    return {
      props: {
        posts,
        config: configResponse?.data?.attributes,
        allService: allService?.data
      },
      revalidate: globalConfig.revalidateTime, // In seconds
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${globalConfig.api_url}/services`)
    const posts = await res.json()
   
    // Get the paths we want to pre-render based on posts
    const paths = posts?.data?.map((post) => ({
        params: { 
            slug: `${post.attributes.slug}`,
        },
    }))
   
    return { paths, fallback: 'blocking' }
}