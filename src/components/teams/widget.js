import { Box, Button, Stack, Typography } from "@mui/material";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";

export default function OurTeamWidget({
    title = "THẠC SỸ - BÁC SỸ KIM JUN",
    description = "10 năm kinh nghiệm chuyên sâu vùng kín",
    thumbnail = "/bsy.jpg"
}) {
    return (
        <Stack p={3} bgcolor="#f2f2f2" borderRadius={2} justifyContent={"center"} alignItems={"center"} spacing={2}>
            <Stack justifyContent={"center"} alignItems={"center"} spacing={0.5}>
                <Typography variant="h3" component={'h3'} fontSize={22} fontWeight={700} textTransform={"uppercase"} color="primary.main">
                    {title}
                </Typography>
                <Typography fontSize={15}>{description}</Typography>
            </Stack>
            <Box className="hover-img">
                <figure>
                    <Image
                        src={thumbnail}
                        width={320}
                        height={320}
                        alt={title}
                    />
                </figure>
            </Box>

            <Box>
                <Button variant="contained" startIcon={<IconArrowNarrowRight />} size="small">
                    Xem thêm về bác sỹ
                </Button>
            </Box>
        </Stack>
    )
}