import { menu } from "@/theme/menu"
import { Stack, Typography } from "@mui/material"
import Link from "next/link"

export default function MainNav({data}){
    return(
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={3} display={{xs: 'none', lg: 'flex'}}>
            {data?.main?.map((item,key) =>
                <Link href={item.link} key={key}>
                    <Typography variant="body2" fontSize={{xs: 14, xl: 15}} fontWeight={500} className="navitem" textTransform={"uppercase"}>
                        {item.label}
                    </Typography>
                </Link>
            )}
        </Stack>
    )
}