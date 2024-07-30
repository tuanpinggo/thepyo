import Grid from '@mui/material/Unstable_Grid2';
import FooterWidget1 from './col1';
import FooterWidget2 from './col2';
import FooterWidget3 from './col3';
import FooterWidget4 from './col4';

export default function FooterWidget({data}) {
    return (
        <Grid container spacing={5}>
            <Grid xs={12} lg={3.5}>
                <FooterWidget1 data={data}/>
            </Grid>
            <Grid xs={12} lg={4.5}>
                <FooterWidget2 data={data}/>
            </Grid>
            <Grid xs={12} lg={2}>
                <FooterWidget3 data={data}/>
            </Grid>
            <Grid xs={12} lg={2}>
                <FooterWidget4 data={data}/>
            </Grid>
        </Grid>
    )
}