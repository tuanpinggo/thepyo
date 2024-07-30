import { Box, Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ServiceGrid() {

    const router = useRouter()

    return (
        <Card className="card-service">
            <CardContent className="card-service-content">
                <Link href="/dich-vu-tham-my/nien-rang-su">
                    <Typography component={"h2"} variant='h2' color="#fff" gutterBottom>
                        Stroke Rehabilitation
                    </Typography>
                </Link>
                <Typography color="#fff" variant='body2'>
                    I enjoy getting to know my patients and building meaningful relationships. I understand that each person is unique and that they have diverse cultural backgrounds
                </Typography>
                <Button 
                    variant='contained' 
                    className='btn' 
                    size='small'
                    startIcon={<IconArrowNarrowRight />}
                    onClick={()=>router.push(`/dich-vu-tham-my/nien-rang-su`)}
                >
                    Xem chi tiết
                </Button>
            </CardContent>
            <Box className="thumbnail">
                <Image
                    src="/demothumb.jpg"
                    alt='thumbnail service'
                    fill={true}
                />
            </Box>
        </Card>
    )
}