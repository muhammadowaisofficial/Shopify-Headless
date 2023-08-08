import AboutSec from "@/components/Home/AboutSec";
import Banner from "@/components/Home/Banner";
import BestProduct from "@/components/Home/BestProduct";
import BlogSec from "@/components/Home/BlogSec";
import ContactSec from "@/components/Home/ContactSec";
import FutureProducts from "@/components/Home/FutureProducts";
import { GetQuoteSec } from "@/components/Home/GetQuoteSec";
import OverviewSec from "@/components/Home/OverviewSec";
import { getCollectionByHandle } from "@/lib/storefront/getCollections"

export default function Home() {
  return (
    <>
    <Banner />
    <BestProduct />
    <AboutSec />
    <GetQuoteSec />
    <OverviewSec />
    <BlogSec />
    <FutureProducts />
    <ContactSec />
    </>
  )
}
