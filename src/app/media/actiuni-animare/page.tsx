import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import banner from "../../../../public/helper/banner-gal.jpg";
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
                    <h1 className="text-2xl font-bold mb-4">Actiuni animare</h1>
                    <h2 className="text-xl font-bold mb-4">Anunturi - trimestrul 2 - anul 1</h2>
                    <ul className="list-none list-inside">
                        <li>1. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-aliman.pdf">COMUNA ALIMAN</Link></li>
                        <li>2. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-ciocirlia.pdf">COMUNA CIOCIRLIA</Link></li>
                        <li>3. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-crucea.pdf">COMUNA CRUCEA</Link></li>
                        <li>4. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-garliciu.pdf">COMUNA GARLICIU</Link></li>
                        <li>5. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-ghindaresti.pdf">COMUNA GHINDARESTI</Link></li>
                        <li>6. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-horia.pdf">COMUNA HORIA</Link></li>
                        <li>7. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-mircea-voda.pdf">COMUNA MIRCEA VODA</Link></li>
                        <li>8. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-pestera.pdf">COMUNA PESTERA</Link></li>
                        <li>9. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-rasova.pdf">COMUNA RASOVA</Link></li>
                        <li>10. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-saligny.pdf">COMUNA SALIGNY</Link></li>
                        <li>11. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-saraiu.pdf">COMUNA SARAIU</Link></li>
                        <li>12. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-seimeni.pdf">COMUNA SEIMENI</Link></li>
                        <li>13. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-topalu.pdf">COMUNA TOPALU</Link></li>
                        <li>14. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-tortoman.pdf">COMUNA TORTOMAN</Link></li>
                        <li>15. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-ciobanu.pdf">COMUNA CIOBANU</Link></li>
                        <li>16. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-harsova.pdf">ORAS HIRSOVA</Link></li>
                        <li>17. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-2/anunt-casimcea.pdf">COMUNA CASIMCEA</Link></li>
                    </ul>
                </main>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}