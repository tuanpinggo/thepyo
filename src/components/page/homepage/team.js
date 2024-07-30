import OurTeamWidget from "@/components/teams/widget";
import DefaultTitleSection from "@/components/ui/title";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function OurTeam({data}) {
    return (
        <Box py={{ xs: 3, lg: 8 }}>
            <Container maxWidth={globalConfig.maxWidth}>
                <Stack spacing={2}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <DefaultTitleSection title={data?.team_title} />
                        <Box display={{ xs: "none", md: 'block' }}>
                            <Link href="/doi-ngu">
                                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                    <Typography>Xem tất cả</Typography>
                                    <IconChevronRight size={16} />
                                </Stack>
                            </Link>
                        </Box>
                    </Stack>
                    <Box textAlign={"justify"}>
                        <div dangerouslySetInnerHTML={{__html: data?.team_description_ck}} />
                    </Box>
                </Stack>
                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid xs={12} lg={3}>
                        <OurTeamWidget />
                    </Grid>
                    <Grid xs={12} lg={3}>
                        <OurTeamWidget />
                    </Grid>
                    <Grid xs={12} lg={3}>
                        <OurTeamWidget />
                    </Grid>
                    <Grid xs={12} lg={3}>
                        <OurTeamWidget />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}