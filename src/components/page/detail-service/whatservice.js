import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function WhatService(){
    return(
        <Box id="whatis">
            <Typography variant="h2" component={"h2"} color={"primary.main"}>
                Stroke Rehabilitation - lorem ipsum là gì?
            </Typography>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Image
                src="/demothumb.jpg"
                width={800}
                height={450}
                alt=""
                className="thumbnail"
            />
        </Box>
    )
}