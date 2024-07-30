import { BootstrapInput } from "@/components/ui/bootstrapInput";
import { Box, InputAdornment } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";
import theme from "@/theme/default";

export default function SearchBox(){
    return(
        <Box display={{xs: 'none', lg: 'flex'}}>
            <BootstrapInput 
                placeholder="TỪ KHÓA TÌM KIẾM" 
                id="search" 
                startAdornment={
                    <InputAdornment position="start">
                        <IconSearch size={20} color={theme.palette.primary.main}/>
                    </InputAdornment>}
            />
        </Box>
    )
}