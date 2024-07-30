import { Stack, Typography } from "@mui/material";
import DefaultThumbnail from "./defaultThumbnail";
import ThePyoChip from "../ui/chip";
import MetaPost from "../meta/post";

export default function PostList(){
    return(
        <Stack 
            direction={{
                xs: "column",
                lg: "row"
            }} 
            gap={{xs: 2, lg: 5}} 
            alignItems={"center"}
        >
            <DefaultThumbnail />
            <Stack gap={2}>
                <Stack>
                    <ThePyoChip label="Tin tức" />
                </Stack>
                <Typography variant="h2" component={"h2"}>
                    Inclusive Marketing: Why and How Does it Work?
                </Typography>
                <Typography>Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent.</Typography>
                <MetaPost />
            </Stack>
        </Stack>
    )
}