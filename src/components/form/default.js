import { LoadingButton } from '@mui/lab';
import { Box, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { IconCalendarClock } from '@tabler/icons-react';

import theme from '@/theme/default';

export default function FormContract() {
    return (
        <Stack spacing={2}>
            <Stack direction={"row"} alignItems={"center"} spacing={2} pl={{xs: 0, lg: 1}}>
                <IconCalendarClock color={theme.palette.primary.main}/>
                <Typography variant='h2' component={"h2"} fontWeight={700} fontSize={20} color={"primary.main"}>
                    ĐẶT LỊCH HẸN TƯ VẤN
                </Typography>
            </Stack>
            <Grid container spacing={2}>
                <Grid xs={12} lg={6}>
                    <TextField
                        id="fullname"
                        name="fullname"
                        fullWidth
                        placeholder='Họ tên'
                    />
                </Grid>
                <Grid xs={12} lg={6}>
                    <TextField
                        id="tel"
                        name="tel"
                        fullWidth
                        placeholder='Số điện thoại'
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{p: 0}}>
                <Grid xs={12} lg={6}>
                    <FormControl fullWidth>
                        <Select
                            labelId="region-label"
                            id="region"
                            value={0}
                        >
                            <MenuItem value={0}>Khu vực</MenuItem>
                            <MenuItem value={"miền bắc"}>Miền Bắc</MenuItem>
                            <MenuItem value={"miền trung"}>Miễn Trung</MenuItem>
                            <MenuItem value={"miền nam"}>Miễn Nam</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={12} lg={6}>
                    <FormControl fullWidth>
                        <Select
                            labelId="region-label"
                            id="region"
                            value={0}
                        >
                            <MenuItem value={0}>Dịch vụ</MenuItem>
                            <MenuItem value={"miền bắc"}>Miền Bắc</MenuItem>
                            <MenuItem value={"miền trung"}>Miễn Trung</MenuItem>
                            <MenuItem value={"miền nam"}>Miễn Nam</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Typography variant='h3' component={"h3"} fontSize={17} fontWeight={700} color="primary.main" pl={1}>
                Lựa chọn khung giờ tư vấn
            </Typography>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <Stack 
                    direction={{xs: "column", lg: "row"}} 
                    alignItems={{xs: "flex-start", lg: "center"}} 
                    spacing={{xs:1,lg:5}}
                >
                    <FormControlLabel value="female" control={<Radio />} label="TỪ 8H ĐẾN 10H" />
                    <FormControlLabel value="male" control={<Radio />} label="TỪ 10H ĐẾN 12H" />
                    <FormControlLabel value="other" control={<Radio />} label="TỪ 14H ĐẾN 16H" />
                </Stack>
            </RadioGroup>
            <LoadingButton variant='contained' color='primary' size='large' py={4}>
                Đặt lịch hẹn
            </LoadingButton>
            <Typography variant='body2' textAlign={"center"} fontWeight={300} color="#555">
                (*) The Pyo cam kết bảo mật thông tin khách hàng. Chúng tôi chỉ sử dụng thông tin do khách hàng cung cấp với mục đích tư vấn dịch vụ Quý khách đăng ký
            </Typography>
        </Stack>
    )
}