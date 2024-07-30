import ThePyoIcon from "@/components/ui/icon";
import { Box, Stack, Typography } from "@mui/material";

export default function WidgetService(){
    return(
        <Box className="widget-service" height={"100%"}>
            <Stack direction={"row"} alignItems={"center"} spacing={2} position={"sticky"} top={0}>
                <ThePyoIcon />
                <Typography variant="h3" component={"h3"} color={"primary.main"} fontWeight={700}>
                    DỊCH VỤ LIÊN QUAN
                </Typography>
            </Stack>
        </Box>
    )
}