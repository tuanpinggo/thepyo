import { Stack, Typography } from "@mui/material";
import Link from "next/link";

const menu = [
    {href: '/', label: 'Về chúng tôi'},
    {href: '/dich-vu-tham-my', label: 'Sản phẩm - dịch vụ'},
    {href: '/danh-muc/tin-tuc', label: 'Tin tức - khuyến mại'},
    {href: '/lien-he', label: 'Liên hệ'},
]

export default function FooterWidget3(){
    return(
        <>
            <Typography variant="h2" component={"h2"} color="#fff" mb={3}>
                THÔNG TIN
            </Typography>
            <Stack gap={1}>
                {menu.map((item,key) =>
                    <Link href={item.href} key={key}>
                        <Typography color="#fff">
                            {item.label}
                        </Typography>
                    </Link>
                )}
            </Stack>
        </>
    )
}