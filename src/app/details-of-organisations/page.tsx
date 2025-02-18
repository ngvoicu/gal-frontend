import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import banner from "../../../public/helper/banner-gal.jpg";

export default function DetailsOfOrgansations() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="container">
                <Image src={banner} alt="banner gal" width={1280} height={170} />
            </div>
            <div className="container flex flex-col flex-grow sm:flex-row bg-white">
                <main className="flex-1 p-6 bg-white border-b sm:border-b-0 sm:border-r">
                    <h1 className="text-2xl font-bold mb-4">Details of organisations</h1>

                    <h2 className="text-xl font-bold">D.2 Partner Organisation</h2>
                    <table className="table mb-4">
                        <thead>
                            <tr>
                                <th>Information</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>PIC - ID</td><td>936824837</td></tr>
                            <tr><td>Organisation ID</td><td>E10029768</td></tr>
                            <tr><td>Full legal name (National Language)</td><td>GRUPUL DE ACTIUNE LOCALA DOBROGEA CENTRALA</td></tr>
                            <tr><td>Full legal name (Latin characters)</td><td>LOCAL ACTION GROUP DOBROGEA CENTRALA</td></tr>
                            <tr><td>Acronym</td><td>GALDC</td></tr>
                            <tr><td>National ID</td><td>304377892</td></tr>
                            <tr><td>Department (if applicable)</td><td></td></tr>
                            <tr><td>Address</td><td>Str Decebal nr 35</td></tr>
                            <tr><td>Country</td><td>Romania</td></tr>
                            <tr><td>Region</td><td>RO02</td></tr>
                            <tr><td>P.O. Box</td><td>905600</td></tr>
                            <tr><td>CEDEX</td><td></td></tr>
                            <tr><td>City</td><td>Medgidia</td></tr>
                            <tr><td>Website</td><td><a href="http://www.galdc.ro">www.galdc.ro</a></td></tr>
                            <tr><td>Email</td><td><a href="mailto:galmedg@yahoo.com">galmedg@yahoo.com</a>, <a href="mailto:livadariu_g@yahoo.com">livadariu_g@yahoo.com</a></td></tr>
                            <tr><td>Telephone 1</td><td>0040762286145</td></tr>
                            <tr><td>Telephone 2</td><td>0040723185714</td></tr>
                            <tr><td>Fax</td><td>-</td></tr>
                        </tbody>
                    </table>

                    <h2 className="text-xl font-bold">D.2.1 Profile</h2>
                    <table className="table mb-4">
                        <tbody>
                            <tr><td>Type of Organisation</td><td>Legal NGO</td></tr>
                            <tr><td>Is the partner organisation a public body?</td><td></td></tr>
                            <tr><td>Is the partner organisation a non-profit?</td><td>X</td></tr>
                        </tbody>
                    </table>



                    <h2 className="text-xl font-bold">Presentation of Partner Organisation</h2>
                    <p>Local Action Group Dobrogea Centrala is a public-private associative group which operates in accordance with EC Regulation 1303/2013 Article 34. GALDC brings together 17 rural communities located in the south-east of Romania in Constanta and Tulcea counties. LAGDC provide some of the resources necessary to enable local partners to direct and actively engage in the local development of their area, through a community-led local development (CLLD).</p>
                    <p>Local Action Group Dobrogea Centrala operates as territorial management unit at subregional level for National Rural Development Plan 2023-2027, LAGDC financing projects under European development priorities identified in UE Regulation 2021/2115. </p>

                    <p>ACTIONS</p>
                    <ul>
                        <li>1. Environmental sustainability</li>
                        <li>2. Investments in the field of health.</li>
                        <li>3. Operations with an economic purpose whose direct beneficiaries are women.</li>
                        <li>4. Operations with an economic purpose whose direct beneficiaries are people past retirement age.</li>
                        <li>5. Smart agriculture, smart farming and smart tourism.</li>
                        <li>6. Specific vocational education</li>
                    </ul>
                    <p>Through its activities, LAGDC influence local political environment in actions attending the economic development of the territory. This approach is performed by mobilizing local and county education sector and by organization of continuing education courses and counseling sessions for rural communities members.</p>
                    <p>Awareness local population to attend courses is done through organization of local meetings and events. LAGDC experts are responsible of professional events in the territory and are bearers of messages that role in educating its population to participate at local decision, social life and rural economic development. Through these events, courses and counseling sessions are formed core competencies, specific technical and social skills.</p>
                    <p>LAGDC experts monitors personal evolution of grant holders by observing the participation in training courses, professional events for personal satisfaction, economic and social increase of communities and transferability of good practices.</p>
                    <p>LAG Dobrogea Centrala staff is part of the National Committee for monitoring the implementation of the PNS (National Strategic Plan) and is a founding member of the National Network for Rural Development.</p>
                    <p>In its territorial approach LAGDC relies on the expertise of 18 persons specialized in education, agriculture, environment, rural and urban economy, management and managing European projects, local and regional governance.</p>
                    <p className="mb-4">All LAGDC experts hold certificates attesting trainer for adults, assessor professional competence, provide didactic and pedagogical experience. LAG Central Dobrogea is a member of the European Network of Local Action Groups and the National Federation of Local Action Groups.</p>

                    <table className="table mb-4">
                        <tbody>
                            <tr><td colSpan={4}>Have you participated in a European Union granted project in the 3 years preceeding this apprlication? ( no need to write your projects before 2016)</td></tr>
                            <tr><td colSpan={2}>YES</td><td>YES/NO</td></tr>
                            <tr><td>EU PROGRAMME</td><td>YEAR</td><td>Project Identification Number</td><td>Applicant – Beneficiary Organisation</td></tr>
                            <tr><td>FEADR</td><td>2016 -2020</td><td>C19400163011621418292</td><td>GAL Dobrogea Centrala</td></tr>
                            <tr><td>FEADR</td><td>2023-2027</td><td>C19100000012321400017</td><td>GAL Dobrogea Centrala</td></tr>
                            <tr><td>ERASMUS +</td><td>2016-2019</td><td>2016-1-IE01-KA202-016898</td><td>Limeric Institut for Technologies</td></tr>
                            <tr><td>EUROPA 2020</td><td>2017-2022</td><td>COASTAL 773782</td><td>Valmese Instelling</td></tr>
                        </tbody>
                    </table>

                    <h2 className="text-xl font-bold">D2.3 Legal Representative</h2>
                    <p>Important:- Please also provide a one-side A4 letter (with institutional stamp) from the Legal Representative that acknowledges their interest in becoming a partner. Please scan and email.</p>
                    <table className="table mb-4">
                        <tbody>
                            <tr><td>Title</td><td>Manager</td></tr>
                            <tr><td>Gender</td><td>MDM</td></tr>
                            <tr><td>First Name</td><td>GABRIELA</td></tr>
                            <tr><td>Family Name</td><td>LIVADARIU</td></tr>
                            <tr><td>Department</td><td>MANAGEMENT AND COORDONATION</td></tr>
                            <tr><td>Position</td><td>MANAGER</td></tr>
                            <tr><td>Email</td><td>Livadariu_g@yahoo.com</td></tr>
                            <tr><td>Telephone</td><td>0040762286145</td></tr>
                            <tr><td>Address</td><td>Str Victoriei, nr 10</td></tr>
                            <tr><td>Country</td><td>ROMANIA</td></tr>
                            <tr><td>Region</td><td>RO02</td></tr>
                            <tr><td>P.O. Box</td><td></td></tr>
                            <tr><td>CEDEX</td><td></td></tr>
                            <tr><td>City</td><td>MEDGIDIA</td></tr>
                            <tr><td>Website</td><td>www.galdc.ro</td></tr>
                        </tbody>
                    </table>
                </main>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}