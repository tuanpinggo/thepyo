import { Stack, Typography } from "@mui/material";

export default function FooterWidget1({data}){
    return(
        <>
            <Typography variant="h2" component={"h2"} color="#fff" mb={3}>
                {data?.company}
            </Typography>
            <Stack gap={1}>
                <Typography color="#fff">
                    <strong>Giấy phép kinh doanh :</strong> {data?.license}
                </Typography>
                <Typography color="#fff">
                    <strong>Mã số thuế :</strong> {data?.taxcode}
                </Typography>
                <Typography color="#fff">
                    <strong>Cấp ngày :</strong> {data?.taxdate}
                </Typography>
                <Typography color="#fff">
                    <strong>Nơi cấp :</strong> {data?.taxcom}
                </Typography>
            </Stack>
        </>
    )
}