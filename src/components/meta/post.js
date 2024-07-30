import { Box, Stack, Typography } from "@mui/material";
import { IconCalendarWeek } from "@tabler/icons-react";
import ShareSocial from "./share";

export default function MetaPost(){
    return(
        <Stack 
            direction={"row"} 
            gap={2} 
            alignItems={"center"}
            justifyContent={{
                xs: 'space-between',
                lg: 'flex-start'
            }}
        >
            <Stack direction={"row"} gap={1} alignItems={"center"}>
                <IconCalendarWeek size={14} color="#888" />
                <Typography variant="body2">01/07/2024</Typography>
            </Stack>
            <Box sx={{width: "1px", height: "13px", bgcolor: '#888'}} />
            <Stack direction={"row"} gap={1} alignItems={"center"}>
                <Typography variant="body2">Chia sẻ</Typography>
                <ShareSocial />
            </Stack>
        </Stack>
    )
}