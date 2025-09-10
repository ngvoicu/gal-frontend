import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import banner from "../../../../public/helper/banner-gal.jpg";
import Link from "next/link";

export default function ApeluriSelectie() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="container">
                <Image src={banner} alt="banner gal" width={1280} height={170} />
            </div>
            <div className="container flex flex-col flex-grow sm:flex-row bg-white">
                <main className="flex-1 p-6 bg-white border-b sm:border-b-0 sm:border-r">
                    <h1 className="text-2xl font-bold mb-4">Apeluri selectie</h1>
                    <Link className="text-blue-600 underline hover:text-blue-800" href="/media/documente-apel strat - up 01.zip" target="_blank">documente-apel strat - up 01</Link>
                </main>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}