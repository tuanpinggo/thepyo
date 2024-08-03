import { BootstrapInput } from "@/components/ui/bootstrapInput";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";
import theme from "@/theme/default";
import { useFormik } from "formik";
import { searchFormValidation } from "@/components/form/validation";
import { useRouter } from "next/router";

export default function SearchBox(){

    const router = useRouter()

    const formik = useFormik({
        initialValues: {keyword: ""},
        validationSchema: searchFormValidation,
        onSubmit: (values) => {
            router.push(`/search?keyword=${values.keyword}`)
        }
    })

    return(
        <Box display={{xs: 'none', lg: 'flex'}} component={"form"} onSubmit={formik.handleSubmit}>
            <BootstrapInput 
                placeholder="TỪ KHÓA TÌM KIẾM" 
                id="keyword" 
                name="keyword"
                value={formik.values.keyword}
                onChange={formik.handleChange}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton type="submit" onClick={formik.handleSubmit}>
                            <IconSearch size={20} color={theme.palette.primary.main}/>
                        </IconButton>
                    </InputAdornment>}
            />
        </Box>
    )
}