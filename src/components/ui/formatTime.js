import { formatDistance } from "date-fns";
import { vi } from 'date-fns/locale';

export default function FormatTime({
    time = "2024-07-01 18:12:40.171469"
}){
    return(
        <>
            {formatDistance(time, new Date(), {
                addSuffix: true,
                locale: vi
            })}
        </>
    )
}