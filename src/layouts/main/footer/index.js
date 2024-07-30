import Logo from "@/components/logo";
import { globalConfig } from "@/theme/config";
import { Box, Container, Divider, Stack } from "@mui/material";
import FooterWidget from "./widget";
import CopyRight from "./copyright";
import Image from "next/image";

export default function Footer({data}){
    return(
        <Box py={5} position={"relative"} bgcolor={"primary.main"} sx={{borderTop: '8px solid #103064'}} overflow={"hidden"}>
            <Container maxWidth={globalConfig.maxWidth}>
                <Stack gap={6}>
                    <Logo color="#fff" />
                    <FooterWidget data={data}/>
                    <Stack gap={3}>
                        <Divider sx={{bgcolor: '#ccc'}} />
                        <CopyRight data={data}/>
                    </Stack>
                </Stack>
            </Container>
            <Box sx={styles.patternLeft}>
                <Image
                    src={'/pattern-light.svg'}
                    width={320}
                    height={323}
                    alt="The Pyo Pattern"
                />
            </Box>
            <Box sx={styles.patternRight}>
                <Image
                    src={'/pattern-light.svg'}
                    width={320}
                    height={323}
                    alt="The Pyo Pattern"
                />
            </Box>
        </Box>
    )
}

const styles = {
    patternLeft: {
        position: 'absolute',
        top: -50,
        left: -50,
        display: {
            xs: "none",
            lg: "block"
        }
    },
    patternRight: {
        position: 'absolute',
        bottom: -80,
        right: -80
    }
}