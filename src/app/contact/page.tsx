import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import banner from "../../../public/helper/banner-gal.jpg";

export default function Acasa() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="container">
                <Image src={banner} alt="banner gal" width={1280} height={170} />
            </div>
            <div className="container flex flex-col flex-grow sm:flex-row bg-white">
                <main className="flex-1 p-6 bg-white border-b sm:border-b-0 sm:border-r">
                    <h1 className="text-2xl font-bold mb-4">Contact</h1>
                    <p>Adresa:</p>
                    <p>1. Str Podgoriilor, nr 1, Medgidia</p>
                    <p>2. Str 1 Decembrie 1918, nr. 32, Tortoman</p>
                    <br/>
                    <p>Program de lucru: luni – vineri 9-17</p>
                    <br/>
                    <p>Telefon; 0762286145, 0723185714</p>
                    <br/>
                    <p>E-MAIL: galmedg@yahoo.com, livadariu_g@yahoo.com</p>
                    <br/>
                    <p>www.galdc.ro</p>
                    <br/>
                    <p>social media: linkedin.com/in/galdc-medgidia-009542341</p>
                </main>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}