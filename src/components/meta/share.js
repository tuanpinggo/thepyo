import { Tooltip } from '@mui/material'
import { IconBrandFacebook, IconBrandTelegram, IconBrandTwitter, IconBrandWhatsapp, IconMail } from '@tabler/icons-react'
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    EmailShareButton
} from 'next-share'

export default function ShareSocial(){
    return(
        <>
            
            <FacebookShareButton
                url={'https://github.com/next-share'}
                quote={'next-share is a social share buttons for your next React apps.'}
                hashtag={'#nextshare'}
            >
                <Tooltip title="Chia sẻ bài viết trên facebook">
                    <IconBrandFacebook size={18} color="#666"/>
                </Tooltip>
            </FacebookShareButton>

            <TwitterShareButton
                url={'https://github.com/next-share'}
                title={'next-share is a social share buttons for your next React apps.'}
            >
                <Tooltip title="Chia sẻ bài viết trên Twitter"><IconBrandTwitter size={18} color="#666"/></Tooltip>
            </TwitterShareButton>

            <TelegramShareButton
                url={'https://github.com/next-share'}
                title={'next-share is a social share buttons for your next React apps.'}              
            >
                <Tooltip title="Chia sẻ bài viết trên Telegram"><IconBrandTelegram size={18} color="#666"/></Tooltip>
            </TelegramShareButton>

            <WhatsappShareButton
                url={'https://github.com/next-share'}
                title={'next-share is a social share buttons for your next React apps.'}
                separator=":: "
            >
                <Tooltip title="Chia sẻ bài viết trên Whatsapp"><IconBrandWhatsapp size={18} color="#666"/></Tooltip>
            </WhatsappShareButton>

            <EmailShareButton
                url={'https://github.com/next-share'}
                subject={'Next Share'}
                body="body"
            >
                <Tooltip title="Gửi email bài viết cho bạn bè"><IconMail size={18} color="#666"/></Tooltip>
            </EmailShareButton>
        </>
    )
}