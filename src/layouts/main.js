import Footer from "./main/footer";
import Header from "./main/header";

export default function MainLayout({config, children}){
    return(
        <>
            <Header data={config}/>
            {children}
            <Footer data={config}/>
        </>
    )
}