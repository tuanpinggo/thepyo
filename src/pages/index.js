import Logo from "@/components/logo"
import EmptyLayout from "@/layouts/empty"
import { Stack, Typography } from "@mui/material"
import Head from "next/head"
import Image from "next/image"

export default function IndexPage(){
    return (
        <>
            <Head>
                <title>The Pyo Center Clinic</title>
            </Head>
            <Stack spacing={3} direction={"column"} width={"100vw"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
                <Logo />
                <Image
                    src="/build.png"
                    width={400}
                    height={300}
                    alt="The Pyo"
                />
                <Stack spacing={1} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Typography variant="body2" fontWeight={300} fontSize={18} textAlign={"center"}>
                        Xin chào! Cảm ơn bạn đã truy cập vào thepyo.vn
                    </Typography>
                    <Typography variant="body2" fontWeight={300} fontSize={18} textAlign={"center"}>
                        Hiện tại chúng tôi đang trong quá trình nâng cấp website, vui lòng quay lại sau!
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}

IndexPage.Layout = EmptyLayout