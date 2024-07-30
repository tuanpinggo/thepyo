
import { globalConfig } from "@/theme/config";
import { Box, Breadcrumbs, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import { IconHome2 } from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function PyoBreakCrumbs({
    categories = [],
    title = "The Pyo",
}) {

    const matches = useMediaQuery('(min-width:1180px)');

    const colorText = matches ? "#f0f0f0" : "#333"
    const colorH1 = matches ? "#f0f0f0" : "primary.main"

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Box
                bgcolor={{
                    xs: "secondary.main",
                    lg: "primary.main"
                }}
                position={"relative"}
                overflow={"hidden"}
            >
                <Container maxWidth={globalConfig.maxWidth}>
                    <Stack
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={1}
                        minHeight={200}
                    >
                        <Breadcrumbs aria-label="breadcrumb" separator={<Typography variant="body2" color={colorText}>{"›"}</Typography>}>

                            <Link href="/">
                                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                    <IconHome2 color={colorText} size={15} />
                                    <Typography variant="body2" color={colorText}>Trang chủ</Typography>
                                </Stack>
                            </Link>

                            {categories?.length > 0 && categories?.map((item, key) =>
                                <Link href={item?.slug} key={key}>
                                    <Typography variant="body2" color={colorText}>{item?.name}</Typography>
                                </Link>
                            )}

                            <Typography variant="body2" color={colorText}>{title}</Typography>

                        </Breadcrumbs>
                        <Typography variant="h1" component={"h1"} color={colorH1} textTransform={"uppercase"} letterSpacing={-1}>
                            {title}
                        </Typography>

                    </Stack>
                </Container>
                <Box sx={styles.patternLeft}>
                    <Image
                        src={'/pattern-light.svg'}
                        width={250}
                        height={250}
                        alt="The Pyo Pattern"
                    />
                </Box>
                <Box sx={styles.patternRight}>
                    <Image
                        src={'/pattern-light.svg'}
                        width={250}
                        height={250}
                        alt="The Pyo Pattern"
                    />
                </Box>
            </Box>
        </>
    )
}

const styles = {
    patternLeft: {
        position: 'absolute',
        bottom: -50,
        left: -50,
        display: {
            xs: 'none',
            lg: 'block'
        }
    },
    patternRight: {
        position: 'absolute',
        top: -80,
        right: -80,
        display: {
            xs: 'none',
            lg: 'block'
        }
    }
}