import PyoBreakCrumbs from "@/components/breakcrumbs/default";
import DetailPostMeta from "@/components/page/detail-post/meta";
import TOC from "@/components/page/detail-post/toc";
import Widget from "@/components/post/widgets";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function DetailPost(){
    return(
        <MainLayout>
            <PyoBreakCrumbs 
                categories={[{name: 'Tin tức - Khuyến mại', slug: 'tin-tuc-khuyen-mai'}]}
                title="Inclusive Marketing: Why and How Does it Work?"
            />

            <Box component={"main"} py={3}>
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={{xs: 3, lg: 10}}>
                        <Grid xs={12} md={9}>

                            <Typography variant="h2" component={"h2"} color={"primary.main"} textTransform={"uppercase"} fontSize={26}>
                                INCLUSIVE MARKETING: WHY AND HOW DOES IT WORK?
                            </Typography>

                            <DetailPostMeta />

                            <TOC />

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