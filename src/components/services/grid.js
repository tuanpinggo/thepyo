import { Box, Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { imageCdn } from '../ui/imaWithCdn';

export default function ServiceGrid({item}) {

    const router = useRouter()

    return (
        <Card className="card-service">
            <CardContent className="card-service-content">
                <Link href={`/dich-vu-tham-my/${item?.slu}`}>
                    <Typography component={"h2"} variant='h2' color="#fff" gutterBottom>
                        {item?.title}
                    </Typography>
                </Link>
                <Typography color="#fff" variant='body2'>
                    {item?.description}   
                </Typography>
                <Button 
                    variant='contained' 
                    className='btn' 
                    size='small'
                    startIcon={<IconArrowNarrowRight />}
                    onClick={()=>router.push(`/dich-vu-tham-my/${item?.slu}`)}
                >
                    Xem chi tiết
                </Button>
            </CardContent>
            <Box className="thumbnail">
                <Image
                    src={imageCdn(item?.thumbnail?.data?.attributes?.url)}
                    alt='thumbnail service'
                    fill={true}
                />
            </Box>
        </Card>
    )
}