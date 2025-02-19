import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import banner from "../../../public/helper/banner-gal.jpg";
import harta from "../../../public/teritoriul-microregiunii/harta-microregiunii.png";
import Link from "next/link";

export default function Acasa() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="container">
                <Image src={banner} alt="banner gal" width={1280} height={170} />
            </div>
            <div className="container flex flex-col flex-grow sm:flex-row bg-white">
                <main className="flex-1 p-6 bg-white border-b sm:border-b-0 sm:border-r">
                    <h1 className="text-2xl font-bold mb-4">Teritoriul microregiunii</h1>
                    <ul className="list-none list-inside">
                        <li>1. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/1-comuna-aliman.pdf">COMUNA ALIMAN</Link></li>
                        <li>2. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/2-comuna-ciocarlia.pdf">COMUNA CIOCIRLIA</Link></li>
                        <li>3. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/3-comuna-crucea.pdf">COMUNA CRUCEA</Link></li>
                        <li>4. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/4-comuna-garliciu.pdf">COMUNA GARLICIU</Link></li>
                        <li>5. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/5-comuna-ghindaresti.pdf">COMUNA GHINDARESTI</Link></li>
                        <li>6. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/6-comuna-horia.pdf">COMUNA HORIA</Link></li>
                        <li>7. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/7-comuna-mircea-voda.pdf">COMUNA MIRCEA VODA</Link></li>
                        <li>8. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/8-comuna-pestera.pdf">COMUNA PESTERA</Link></li>
                        <li>9. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/9-comuna-rasova.pdf">COMUNA RASOVA</Link></li>
                        <li>10. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/10-comuna-saligny.pdf">COMUNA SALIGNY</Link></li>
                        <li>11. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/11-comuna-saraiu.pdf">COMUNA SARAIU</Link></li>
                        <li>12. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/12-comuna-seimeni.pdf">COMUNA SEIMENI</Link></li>
                        <li>13. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/13-comuna-topalu.pdf">COMUNA TOPALU</Link></li>
                        <li>14. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/14-comuna-tortoman.pdf">COMUNA TORTOMAN</Link></li>
                        <li>15. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/15-comuna-ciobanu.pdf">COMUNA CIOBANU</Link></li>
                        <li>16. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/16-oras-harsova.pdf">ORAS HIRSOVA</Link></li>
                        <li>17. <Link className="text-blue-600 underline hover:text-blue-800" href="/teritoriul-microregiunii/17-comuna-casimcea.pdf">COMUNA CASIMCEA</Link></li>
                    </ul>
                    <br/>
                    <Image src={harta} alt="harta gal" width={628} height={748}/>
                </main>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}