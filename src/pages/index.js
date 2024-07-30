import AboutUsSection from "@/components/page/homepage/aboutus";
import CallToAction from "@/components/page/homepage/calltoaction";
import HanhTrinh from "@/components/page/homepage/hanhTrinh";
import News from "@/components/page/homepage/news";
import ServiceSection from "@/components/page/homepage/services";
import SlideSection from "@/components/page/homepage/slides";
import OurTeam from "@/components/page/homepage/team";
import WhyChooseUs from "@/components/page/homepage/whyChooseUs";
import MainLayout from "@/layouts/main";
import { globalConfig } from "@/theme/config";

export default function Home({homePageData,config,slides,posts}) {
  return (
    <MainLayout config={config}>
      <SlideSection slides={slides}/>
      <AboutUsSection data={homePageData?.attributes}/>
      <ServiceSection data={homePageData?.attributes}/>
      <CallToAction data={homePageData?.attributes}/>
      <OurTeam data={homePageData?.attributes}/>
      <WhyChooseUs data={homePageData?.attributes}/>
      {/* <HanhTrinh /> */}
      <News datas={posts?.data}/>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const url1 = `${globalConfig.api_url}/config?populate=*`
  const url2 = `${globalConfig.api_url}/slides?populate=*`
  const url3 = `${globalConfig.api_url}/home-page?populate=*`
  const url4 = `${globalConfig.api_url}/posts?populate=*&?filters[categories][operator]=1`
  
  const getConfig = await fetch(url1)
  const getSlides = await fetch(url2)
  const getHomePage = await fetch(url3)
  const getPosts = await fetch(url4)

  const configResponse = await getConfig.json()
  const slideResponse = await getSlides.json()
  const homePageResponse = await getHomePage.json()
  const postResponse = await getPosts.json()

  const config = configResponse?.data?.attributes
  const slides = slideResponse?.data
  const homePageData = homePageResponse?.data
 
  return {
    props: {
      config,
      slides,
      homePageData,
      posts:postResponse
    },
    revalidate: globalConfig.revalidateTime,
  }
}