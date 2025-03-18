import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import banner from "../../../../public/helper/banner-gal.jpg";
import panou from "../../../../public/media/materiale-publicitare/panou.jpg";
import rollup from "../../../../public/media/materiale-publicitare/rollup.jpg";

import unu from "../../../../public/media/materiale-publicitare/altele/01-tortoman-sediu-gal.jpg";
import doi from "../../../../public/media/materiale-publicitare/altele/02-tortoman-program.jpg";
import trei from "../../../../public/media/materiale-publicitare/altele/ALIMAN.jpg";
import patru from "../../../../public/media/materiale-publicitare/altele/CIOCIRLIA.jpg";
import cinci from "../../../../public/media/materiale-publicitare/altele/PESTEREA.jpg";
import sase from "../../../../public/media/materiale-publicitare/altele/RASOVA.jpg";
import sapte from "../../../../public/media/materiale-publicitare/altele/SEIMENI.jpg";
import opt from "../../../../public/media/materiale-publicitare/altele/TOPALU.jpg";
import noua from "../../../../public/media/materiale-publicitare/altele/TORTOMAN.jpg";

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
                    <h1 className="text-2xl font-bold mb-4">Materiale publicitare</h1>
                    <Image src={panou} alt="panou" width={943} height={641}/>
                    <Image src={rollup} alt="rollup" width={943} height={1257}/>

                    <Image src={unu} alt="sediu"/>
                    <Image src={doi} alt="program"/>
                    <Image src={trei} alt="aliman"/>
                    <Image src={patru} alt="ciocarlia"/>
                    <Image src={cinci} alt="pesterea"/>
                    <Image src={sase} alt="rasova"/>
                    <Image src={sapte} alt="seimeni"/>
                    <Image src={opt} alt="topalu"/>
                    <Image src={noua} alt="tortoman"/>

                    <h2 className="text-xl font-bold mt-4">Afise</h2>
                    <ul className="list-none list-inside">
                        <li>1. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/aliman.pdf">COMUNA ALIMAN</Link></li>
                        <li>2. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/ciocirlia.pdf">COMUNA CIOCIRLIA</Link></li>
                        <li>3. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/crucea.pdf">COMUNA CRUCEA</Link></li>
                        <li>4. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/garliciu.pdf">COMUNA GARLICIU</Link></li>
                        <li>5. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/ghindaresti.pdf">COMUNA GHINDARESTI</Link></li>
                        <li>6. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/horia.pdf">COMUNA HORIA</Link></li>
                        <li>7. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/mircea-voda.pdf">COMUNA MIRCEA VODA</Link></li>
                        <li>8. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/pestera.pdf">COMUNA PESTERA</Link></li>
                        <li>9. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/rasova.pdf">COMUNA RASOVA</Link></li>
                        <li>10. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/saligny.pdf">COMUNA SALIGNY</Link></li>
                        <li>11. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/saraiu.pdf">COMUNA SARAIU</Link></li>
                        <li>12. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/seimeni.pdf">COMUNA SEIMENI</Link></li>
                        <li>13. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/topalu.pdf">COMUNA TOPALU</Link></li>
                        <li>14. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/tortoman.pdf">COMUNA TORTOMAN</Link></li>
                        <li>15. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/ciobanu.pdf">COMUNA CIOBANU</Link></li>
                        <li>16. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/harsova.pdf">ORAS HIRSOVA</Link></li>
                        <li>17. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/materiale-publicitare/afise/casimcea.pdf">COMUNA CASIMCEA</Link></li>
                    </ul>
                </main>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}