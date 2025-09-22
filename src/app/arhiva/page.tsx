import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import banner from "../../../public/helper/banner-gal.jpg";
import Link from "next/link";

export default function Arhiva() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="container">
                <Image src={banner} alt="banner gal" width={1280} height={170} />
            </div>
            <div className="container flex flex-col flex-grow sm:flex-row bg-white">
                <main className="flex-1 p-6 bg-white border-b sm:border-b-0 sm:border-r">
                    <h1 className="text-2xl font-bold mb-4">Arhiva</h1>
                    <h2 className="text-2xl font-bold mb-4">Calendar apeluri selectie</h2>
                    <ul className="list-none list-inside">
                        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/media/calendar-estimativ-DR-36-AN-1.jpg" target="_blank">calendar-estimativ-DR-36-AN-1</Link></li>
                        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/media/calendar-AM-estimativ-an-1-trim-III-2025.pdf" target="_blank">calendar-AM-estimativ-an-1-trim-III-2025</Link></li>
                        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/media/calendar-AM-estimativ-an-1-trim-IV-2025.pdf" target="_blank">calendar-AM-estimativ-an-1-trim-IV-2025</Link></li>
                    </ul>
                    
                    <Link className="text-blue-600 underline hover:text-blue-800" href="/media/calendar-trim-3_2.pdf" target="_blank">Calendar reactualizat</Link>

                    <h2 className="text-xl font-bold mb-4">EVENIMENT DE ANIMARE A TERITORIULUI TRIM III COMUNA SARAIU</h2>
                    <ul className="list-none list-inside mb-4">
                        <li>1. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/afis-saraiu-trim-3.pdf">Afis comuna Saraiu</Link></li>
                    </ul>
                    <h2 className="text-xl font-bold mb-4">Anunturi - trimestrul al III-lea - reactualizate - anul 1</h2>
                    <ul className="list-none list-inside">
                        <li>1. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-aliman.pdf">COMUNA ALIMAN</Link></li>
                        <li>2. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-ciocirlia.pdf">COMUNA CIOCIRLIA</Link></li>
                        <li>3. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-crucea.pdf">COMUNA CRUCEA</Link></li>
                        <li>4. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-garliciu.pdf">COMUNA GARLICIU</Link></li>
                        <li>5. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-ghindaresti.pdf">COMUNA GHINDARESTI</Link></li>
                        <li>6. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-horia.pdf">COMUNA HORIA</Link></li>
                        <li>7. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-mircea-voda.pdf">COMUNA MIRCEA VODA</Link></li>
                        <li>8. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-pestera.pdf">COMUNA PESTERA</Link></li>
                        <li>9. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-rasova.pdf">COMUNA RASOVA</Link></li>
                        <li>10. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-saligny.pdf">COMUNA SALIGNY</Link></li>
                        <li>11. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-saraiu.pdf">COMUNA SARAIU</Link></li>
                        <li>12. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-seimeni.pdf">COMUNA SEIMENI</Link></li>
                        <li>13. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-topalu.pdf">COMUNA TOPALU</Link></li>
                        <li>14. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-tortoman.pdf">COMUNA TORTOMAN</Link></li>
                        <li>15. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-ciobanu.pdf">COMUNA CIOBANU</Link></li>
                        <li>16. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-harsova.pdf">ORAS HIRSOVA</Link></li>
                        <li>17. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3-reactualizat/anunt-casimcea.pdf">COMUNA CASIMCEA</Link></li>
                    </ul>

                    <h2 className="text-xl font-bold mb-4">Anunturi - trimestrul al III-lea - anul 1</h2>
                    <ul className="list-none list-inside">
                        <li>1. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-aliman.pdf">COMUNA ALIMAN</Link></li>
                        <li>2. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-ciocirlia.pdf">COMUNA CIOCIRLIA</Link></li>
                        <li>3. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-crucea.pdf">COMUNA CRUCEA</Link></li>
                        <li>4. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-garliciu.pdf">COMUNA GARLICIU</Link></li>
                        <li>5. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-ghindaresti.pdf">COMUNA GHINDARESTI</Link></li>
                        <li>6. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-horia.pdf">COMUNA HORIA</Link></li>
                        <li>7. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-mircea-voda.pdf">COMUNA MIRCEA VODA</Link></li>
                        <li>8. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-pestera.pdf">COMUNA PESTERA</Link></li>
                        <li>9. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-rasova.pdf">COMUNA RASOVA</Link></li>
                        <li>10. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-saligny.pdf">COMUNA SALIGNY</Link></li>
                        <li>11. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-saraiu.pdf">COMUNA SARAIU</Link></li>
                        <li>12. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-seimeni.pdf">COMUNA SEIMENI</Link></li>
                        <li>13. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-topalu.pdf">COMUNA TOPALU</Link></li>
                        <li>14. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-tortoman.pdf">COMUNA TORTOMAN</Link></li>
                        <li>15. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-ciobanu.pdf">COMUNA CIOBANU</Link></li>
                        <li>16. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-harsova.pdf">ORAS HIRSOVA</Link></li>
                        <li>17. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi-an-1-sem-3/anunt-casimcea.pdf">COMUNA CASIMCEA</Link></li>
                    </ul>
                    <h2 className="text-xl font-bold mb-4">CALENDAR AN 1 TRIMESTRUL 3</h2>
                    <Link className="text-blue-600 underline hover:text-blue-800" href="/media/calendar-trim-3.pdf">Calendar</Link>
                    <h2 className="text-xl font-bold mb-4">CALENDAR AN 1 TRIMESTRUL 2</h2>
                    <Link className="text-blue-600 underline hover:text-blue-800" href="/media/calendar-trim-2.pdf">Calendar</Link>
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
                    <br />
                    <hr />
                    <br />
                    <h2 className="text-xl font-bold mb-4">CALENDAR AN 1 TRIMESTRUL 1</h2>
                    <Link className="text-blue-600 underline hover:text-blue-800" href="/media/calendar.pdf">Calendar</Link>
                    <h2 className="text-xl font-bold mb-4 mt-4">ARHIVA ANUNTURI AN 1 TRIMESTRUL 1</h2>
                    <ul className="list-none list-inside">
                        <li>1. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-aliman.pdf">COMUNA ALIMAN</Link></li>
                        <li>2. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-ciocirlia.pdf">COMUNA CIOCIRLIA</Link></li>
                        <li>3. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-crucea.pdf">COMUNA CRUCEA</Link></li>
                        <li>4. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-garliciu.pdf">COMUNA GARLICIU</Link></li>
                        <li>5. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-ghindaresti.pdf">COMUNA GHINDARESTI</Link></li>
                        <li>6. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-horia.pdf">COMUNA HORIA</Link></li>
                        <li>7. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-mircea-voda.pdf">COMUNA MIRCEA VODA</Link></li>
                        <li>8. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-pestera.pdf">COMUNA PESTERA</Link></li>
                        <li>9. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-rasova.pdf">COMUNA RASOVA</Link></li>
                        <li>10. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-saligny.pdf">COMUNA SALIGNY</Link></li>
                        <li>11. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-saraiu.pdf">COMUNA SARAIU</Link></li>
                        <li>12. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-seimeni.pdf">COMUNA SEIMENI</Link></li>
                        <li>13. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-topalu.pdf">COMUNA TOPALU</Link></li>
                        <li>14. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-tortoman.pdf">COMUNA TORTOMAN</Link></li>
                        <li>15. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-ciobanu.pdf">COMUNA CIOBANU</Link></li>
                        <li>16. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-harsova.pdf">ORAS HIRSOVA</Link></li>
                        <li>17. <Link className="text-blue-600 underline hover:text-blue-800" href="/media/actiuni-animare/anunturi/anunt-casimcea.pdf">COMUNA CASIMCEA</Link></li>
                    </ul>
                </main>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}