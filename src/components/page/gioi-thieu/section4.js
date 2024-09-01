import DefaultTitleSection from "@/components/ui/title";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function AboutSection4({ data }) {
    return (
        <Box bgcolor="#fff" py='50px'>
            <Container maxWidth={globalConfig.maxWidth}>
                <Grid container spacing={{ xs: 3, lg: 8 }}>
                    <Grid xs={12} lg={6}>
                        <Box width={"100%"} height={360} bgcolor={'#d9d9d9'} borderRadius={2} />
                    </Grid>
                    <Grid xs={12} lg={6}>
                        <Stack spacing={2}>
                            <DefaultTitleSection title={data?.title_value} />
                            <Box className="about-section-content">
                                <div dangerouslySetInnerHTML={{__html: data?.content_value}} />
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}