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
                    <h1 className="text-2xl font-bold mb-4">Implementarea SDL prin LEADER</h1>
                    <h2 className="text-xl font-bold">Programul LEADER</h2>
                    <p>Programul LEADER reprezintă o abordare care oferă noi oportunităţi de dezvoltare rurală punând bazele identificării nevoilor locale, întăririi capacităţii de dezvoltare şi implementării strategiilor locale de dezvoltare în vederea conservării patrimoniului rural şi cultural, dezvoltării mediului economic şi îmbunătăţirii abilităţilor organizatorice ale comunităţilor locale. Schimbările din sectorul agricol, ca rezultat al reformei Politicii Agricole Comune, creşterea cererii consumatorilor, presiunile asupra mediului înconjurător, răspândirea rapidă a noilor tehnologii, îmbătrânirea populaţiei şi depopularea rurală sunt numai o parte din  factorii care afectează zona rurală şi care solicită implementarea unui program orientat spre construirea de parteneriate public-private şi valorificarea resurselor locale (fizice, umane şi financiare) pentru elaborarea şi punerea în practică a unor strategii de dezvoltare locală.</p>
                    <h3 className="text-lg font-bold mt-4">Scurt istoric</h3>
                    <p>La nivel european, necesitatea Programului LEADER a apărut în 1990, când, programele publice pentru dezvoltare rurală din multe ţări erau limitate, în ceea ce priveşte obiectivul intervenţiilor lor, fiind administrate într-un mod tradiţional de sus în jos (de la nivel central spre cel local). În perioada 1991-1994 la nivel comunitar s-a derulat LEADER I, „Faza de iniţiere”, în cadrul căreia au fost constituite 217 Grupuri Locale de Acţiune (GAL).  În cadrul LEADER II (1994-1999), Faza de generalizare, s-au format 1000 GAL-uri.  În cadrul LEADER (2000-2006), Faza de consolidare, au fost selectate 896 GAL-uri, în zonele rurale din toate statele membre.</p>
                    <h3 className="text-lg font-bold mt-4">Caracteristicile Programului LEADER</h3>
                    <p>Programul LEADER se bazează pe combinarea a 7 caracteristici, astfel:</p>
                    <ul className="list-disc list-inside">
                        <li>abordare teritorială (utilizarea eficientă a resurselor locale din cadrul unei zone teritoriale specifice, desfăşurarea de activităţi integrate şi crearea unei viziuni comune),</li>
                        <li>abordare partenerială (realizarea unui parteneriat public-privat interesat în dezvoltarea zonei, denumit Grup de Acţiune Locală),</li>
                        <li>abordare de jos în sus (participarea activă a populaţiei locale la planificarea, luarea deciziilor şi implementarea strategiilor necesare dezvoltării zonei), </li>
                        <li>abordarea integrată şi multisectorială a strategiilor bazate pe interacţiunea partenerilor din toate sectoarele economiei locale, pentru a planifica şi pune în comun problemele din mediul rural,</li>
                        <li>accent deosebit pe inovaţie şi experimentare (căutarea de răspunsuri noi la problemele existente ale dezvoltării rurale),</li>
                        <li>implementarea proiectelor de cooperare,</li>
                        <li>interconectarea parteneriatelor locale.</li>
                    </ul>
                    <h3 className="text-lg font-bold mt-4">Cine sunt beneficiarii Programului LEADER?</h3>
                    <p>Beneficiarii Programului LEADER sunt Grupurile de Acţiune Locală (GAL) care îşi desfăşoară activitatea pe un teritoriu rural, cu o populaţie cuprinsă între 10.000 – 100.000 locuitori şi densitatea de maximum 150 de locuitori pe km2.</p>
                    <p>Grupurile de Acţiune Locală reprezintă parteneriate constituite din diverşi reprezentanţi ai sectorului socio-economic din teritoriul respectiv. La nivel de decizie, partenerii sociali şi economici şi reprezentanţii societăţii civile, precum agricultorii, femeile, tinerii din spaţiul rural şi asociaţiile  acestora trebuie să reprezinte cel puţin 50% din parteneriatul local.</p>
                    <p>În statele membre, GAL-urile au diferite structuri legale: asociaţii non-profit, asociaţii/fundaţii, autorităţi locale sau regionale, societăţi comerciale, cooperative.</p>
                    <p>GAL-urile reprezintă interesele locuitorilor şi comunităţii rurale – motorul de funcţiune al Programului LEADER.</p>
                    <p>GAL-urile elaborează o strategie de dezvoltare rurală locală integrată şi sunt responsabile de implementarea acesteia.</p>
                    <p>Astfel, GAL-urile aleg proiectele care vor fi finanţate în cadrul strategiei. De asemenea, pot selecta proiecte de cooperare.</p>
                    <p>Criterii de identificare a teritoriilor LEADER</p>
                    <ul className="list-disc list-inside">
                        <li>Dimensiune redusă</li>
                        <li>Caracter rural</li>
                        <li>Omogenitate</li>
                        <li>Resurse suficiente</li>
                        <li>Densitate redusă a populaţiei (maxim 150 locuitori/ km2)</li>
                        <li>Identitate locală</li>
                        <li>Populaţie între 10.000 – 100.000 locuitori</li>
                    </ul>
                    <h3 className="text-lg font-bold mt-4">Avantaje ale Programului LEADER</h3>
                    <ul className="list-disc list-inside">
                        <li>Răspunde nevoilor locale specifice;</li>
                        <li>Valorifică resursele locale;</li>
                        <li>Mobilizează actorii locali, reprezentanţi ai populaţiei rurale, de a se preocupa şi de a prelua controlul dezvoltării zonelor rurale prin întocmirea de strategii axate pe problemele identificate în comunităţile lor;</li>
                        <li>Oferă zonelor rurale posibilitatea de colaborare  cu alte teritorii pentru schimb şi transfer de experienţă prin crearea de reţele;</li>
                        <li>Prin caracterul său descentralizat, integrat şi de jos în sus este esenţial pentru dezvoltarea echilibrată teritorială.</li>
                    </ul>
                    <h3 className="text-lg font-bold mt-4">Scopul Programului LEADER</h3>
                    <ul className="list-disc list-inside">
                        <li>Construirea capacităţii locale de parteneriat, animare şi dobândirea de aptitudini pentru mobilizarea potenţialului local;</li>
                        <li>Promovarea parteneriatelor public-private. LEADER va continua să deţină un rol important în încurajarea abordărilor inovative ale dezvoltării rurale şi în reunirea pe aceeaşi scenă a sectoarelor privat şi public;</li>
                        <li>Promovarea cooperării şi inovaţiei;</li>
                        <li>Îmbunătăţirea guvernării locale. LEADER favorizează dezvoltarea abordărilor inovative asigurând legătura între agricultură, silvicultură şi economia locală şi contribuind astfel la diversificarea bazei economice şi întărirea structurii socio-economice a zonelor rurale.</li>
                    </ul>
                    <h3 className="text-lg font-bold mt-4">Acoperire geografică</h3>
                    <p>Sunt eligibile teritoriile (zonele) rurale si orasele mici cu populatie de sub 20000 de locuitori care dispun de suficiente resurse umane, financiare şi economice pentru sprijinirea unei strategii de dezvoltare viabilă.  De asemenea, teritoriile (zonele) eligibile sunt acele teritorii care, în conformitate cu definiţia OECD, sunt clasificate drept rurale. Definiţia OECD are la bază acea parte a populaţiei  care locuieşte în comune (cu mai puţin de 150 locuitori/km2). Această definiţie este unica recunoscută pe plan internaţional referitor la spaţiul rural.</p>
                
                    <br />
                    <p><b>Programul LEADER se finanţează</b> prin Programul Naţional de Dezvoltare Rurală, implementat de Agenţia pentru Finanţarea Investiţiilor Rurale, din subordinea Ministerului Agriculturii şi Dezvoltării Rurale. PNDR este finanţat de Uniunea Europeană şi Guvernul României prin Fondul European Agricol pentru Dezvoltare Rurală (FEADR).</p>
                </main>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}