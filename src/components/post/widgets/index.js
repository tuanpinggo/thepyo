import { Stack } from "@mui/material";
import CategoryWidget from "./categories";
import TagWidget from "./tags";

export default function Widget(){
    return(
        <Stack gap={2}>
            <CategoryWidget />
            <TagWidget />
        </Stack>
    )
}