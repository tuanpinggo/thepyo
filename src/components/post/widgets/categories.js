import { Stack, Typography } from "@mui/material";
import { IconFolder } from "@tabler/icons-react";

export default function CategoryWidget(){

    return(
        <Stack p={3} sx={{border: '1px solid #ccc'}} borderRadius={3} spacing={3}>
            <Typography variant="h2" component={"h2"} color={"primary.main"}>
                Danh mục
            </Typography>

            <Stack spacing={2}>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <IconFolder size={16} color="#888" />
                    <Typography fontWeight={500}>Tin tức</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <IconFolder size={16} color="#888" />
                    <Typography fontWeight={500}>Báo chí nói về The Pyo</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <IconFolder size={16} color="#888" />
                    <Typography fontWeight={500}>Khuyến mại</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <IconFolder size={16} color="#888" />
                    <Typography fontWeight={500}>Thông báo khách hàng</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}