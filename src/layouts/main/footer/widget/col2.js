import { Stack, Typography } from "@mui/material";

export default function FooterWidget2({data}){
    return(
        <>
            <Typography variant="h2" component={"h2"} color="#fff" mb={3}>
                LIÊN HỆ
            </Typography>
            <Stack gap={1}>
                <Typography color="#fff">
                    <strong>Địa chỉ :</strong> {data?.address}
                </Typography>
                <Typography color="#fff">
                    <strong>Hotline :</strong> {data?.hotline}
                </Typography>
                <Typography color="#fff">
                    <strong>Email :</strong> {data?.email}
                </Typography>
                <Typography color="#fff">
                    <strong>Website :</strong> {data?.website}
                </Typography>
            </Stack>
        </>
    )
}