import Logo from "@/components/logo";
import { globalConfig } from "@/theme/config";
import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import Link from "next/link";
import MainNav from "./mainNav";
import SearchBox from "./search";
import HeaderMobile from "./mobile";
import theme from "@/theme/default";

export default function Header({data}){
    
    const matches = useMediaQuery('(max-width:1180px)');

    return(
        <Box className="header" component={"header"} bgcolor={matches ? "primary.main" : "#fff"}>
            <Container maxWidth={globalConfig.maxWidth}>
                <Stack 
                    direction={"row"} 
                    justifyContent={"space-between"} 
                    alignItems={"center"} 
                    spacing={2} 
                    height={75} 
                    gap={5}
                >
                    <Link href="/">
                        <Logo 
                            color={matches ? "#fff" : theme.palette.primary.main}
                        />
                    </Link>
                    <MainNav data={data}/>
                    <SearchBox />

                    <HeaderMobile data={data}/>

                </Stack>


            </Container>
        </Box>
    )
}