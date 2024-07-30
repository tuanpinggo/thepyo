import ShareSocial from "@/components/meta/share";
import { Stack, Typography } from "@mui/material";
import { IconCalendarWeek } from "@tabler/icons-react";

export default function DetailPostMeta() {
    return (
        <Stack
            my={3}
            py={2}
            sx={{
                borderTop: '1px solid #eee',
                borderBottom: '1px solid #eee'
            }}
            direction={{
                xs: "column",
                lg: "row"
            }}
            justifyContent={{
                xs: "flex-start",
                lg: "space-between"
            }}
            alignItems={{
                xs: "flex-start",
                lg: "center"
            }}
            spacing={2}
        >
            <Stack direction={"row"} gap={1} alignItems={"center"}>
                <IconCalendarWeek size={14} color="#888" />
                <Typography variant="body2">Ngày 01 tháng 07 năm 2024</Typography>
            </Stack>

            <Stack direction={"row"} gap={1} alignItems={"center"}>
                <Typography variant="body2">Chia sẻ</Typography>
                <ShareSocial />
            </Stack>
        </Stack>
    )
}