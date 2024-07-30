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

export default function ServicePage() {
    return (
        <MainLayout>

            <PyoBreakCrumbs
                categories={[{ name: 'Dịch vụ thẩm mỹ', slug: "/dich-vu-tham-my" }]}
                title="Niền răng sứ thời trang"
            />

            <Box component={"main"} py={3} className="service-detail">
                <Container maxWidth={globalConfig.maxWidth}>
                    <Grid container spacing={5} justifyContent={"space-between"}>
                        <Grid xs={12} md={8}>
                            <Typography variant="h2" component={"h2"} color={"primary.main"} textTransform={"uppercase"} fontSize={26}>
                                INCLUSIVE MARKETING: WHY AND HOW DOES IT WORK?
                            </Typography>

                            <DetailPostMeta />
                            <WhatService />
                            <AdvantageService />
                            <MechanismService />
                            <WorkingProcessService />
                            <Faq />

                        </Grid>
                        <Grid xs={12} md={3}>
                            <WidgetService />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </MainLayout>
    )
}