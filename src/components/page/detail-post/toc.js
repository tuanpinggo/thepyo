import { Stack, Typography } from "@mui/material";

export default function TOC(){
    return(
        <Stack bgcolor={"#F2F2F2"} p={3} borderRadius={3} className="toc">
            <Typography variant="h2" component={"h2"} mb={3}>
                DANH MỤC NỘI DUNG
            </Typography>
            <ol>
                <li>Nam condimentum varius justo</li>
                <li>
                    Faucibus nullam luctus felis pretium donec
                    <ul>
                        <li>Tincidunt veni tellus orci aenean consectetuer</li>
                        <li>Tincidunt veni tellus orci aenean consectetuer</li>
                    </ul>
                </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
            </ol>
        </Stack>
    )
}