import { Stack, Typography } from "@mui/material";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import Link from "next/link";

export default function FooterWidget4({data}){
    return(
        <>
            <Typography variant="h2" component={"h2"} color="#fff" mb={3}>
                LIÊN KẾT
            </Typography>
            <Stack gap={1}>

                <Link href={data?.facebook || "/"}>
                    <Stack direction={"row"} spacing={1.5} alignItems={"center"}>
                        <IconBrandFacebook color="#fff" size={20}/>
                        <Typography color="#fff" fontWeight={600}>Facebook</Typography>
                    </Stack>
                </Link>
                <Link href={data?.youtube || "/"}>
                    <Stack direction={"row"} spacing={1.5} alignItems={"center"}>
                        <IconBrandYoutube color="#fff" size={20}/>
                        <Typography color="#fff" fontWeight={600}>Youtube</Typography>
                    </Stack>
                </Link>
                <Link href={data?.instagram || "/"}>
                    <Stack direction={"row"} spacing={1.5} alignItems={"center"}>
                        <IconBrandInstagram color="#fff" size={20}/>
                        <Typography color="#fff" fontWeight={600}>Instagram</Typography>
                    </Stack>
                </Link>
                <Link href={data?.twitter || "/"}>
                    <Stack direction={"row"} spacing={1.5} alignItems={"center"}>
                        <IconBrandTwitter color="#fff" size={20}/>
                        <Typography color="#fff" fontWeight={600}>Twitter</Typography>
                    </Stack>
                </Link>
                
            </Stack>
        </>
    )
}