import Header from "../components/Header"
import Footer from "../components/Footer"


export default function Tarifs() {
    return (
        <>
            <Header />
        
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="text-customColor-light inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
                            Toutes les prestations
                        </p>
                    </div>
                </div>
                <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
                    <div className="flex flex-col transition duration-300 rounded shadow-sm hover:shadow">
                        <div className="relative w-full h-48">
                            <img
                                src="assets/portrait.jpg"
                                className="object-cover w-full h-full rounded-t"
                                alt="Plan"
                            />
                        </div>
                        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                            <div>
                                <div className="text-lg font-semibold">Juste pour moi</div>
                                <div className="mt-2 space-y-3">
                                    <div className="text-gray-700">Séance individuelle</div>
                                    <div className="text-gray-700">Extérieur ou Intérieur au choix</div>
                                </div>
                                <div className="mt-1 mb-4 mr-1 text-xl font-bold sm:text-4xl">
                                    130€
                                </div>
                            </div>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center w-full h-12 text-customColor-white font-bold rounded my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-customColor-dark"
                            >
                                Réserver
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col transition duration-300 rounded shadow-sm hover:shadow">
                        <div className="relative w-full h-48">
                            <img
                                src="assets/kouple.jpg"
                                className="object-cover w-full h-full rounded-t"
                                alt="Plan"
                            />
                        </div>
                        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                            <div>
                                <div className="text-lg font-semibold">Pour deux</div>
                                <div className="mt-2 space-y-3">
                                <div className="text-gray-700">Séance en binôme</div>
                                <div className="text-gray-700">Extérieur ou Intérieur au choix</div>
                            </div>
                                <div className="mt-1 mb-4 mr-1 text-xl font-bold sm:text-4xl">
                                    195€
                                </div>
                            </div>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center w-full h-12 text-customColor-white font-bold rounded my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-customColor-dark"
                            >
                                Réserver
                            </a>
                        </div>
                    </div>


                    <div className="flex flex-col transition duration-300 rounded shadow-sm hover:shadow">
                        <div className="relative w-full h-48">
                            <img
                                src="assets/family.jpg"
                                className="object-cover w-full h-full rounded-t"
                                alt="Plan"
                            />
                        </div>
                        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                            <div>
                                <div className="text-lg font-semibold">Famille</div>
                                <div className="mt-2 space-y-3">
                                <div className="text-gray-700">Séance pour 4 personnes</div>
                                <div className="text-gray-700">Extérieur ou Intérieur au choix</div>
                                <div className="text-gray-700">30€ en supplément par personne, sauf pour les bambins de - 2 ans </div>
                            </div>
                                <div className="mt-1 mb-4 mr-1 text-xl font-bold sm:text-4xl">
                                    220€
                                </div>
                            </div>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center w-full h-12 text-customColor-white font-bold rounded my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-customColor-dark"
                            >
                                Réserver
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col transition duration-300 rounded shadow-sm hover:shadow">
                        <div className="relative w-full h-48">
                            <img
                                src="assets/pregnant.jpg"
                                className="object-cover w-full h-full rounded-t"
                                alt="Plan"
                            />
                        </div>
                        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                            <div>
                                <div className="text-lg font-semibold">Il était une fois</div>
                                <div className="mt-2 space-y-3">
                                <div className="text-gray-700">Séance individuelle de grossesse ou en couple</div>
                                <div className="text-gray-700">À votre domicile, en extérieur ou au studio au choix</div>
                            </div>
                                <div className="mt-1 mb-4 mr-1 text-xl font-bold sm:text-4xl">
                                    160€
                                </div>
                            </div>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center w-full h-12 text-customColor-white font-bold rounded my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-customColor-dark"
                            >
                                Réserver
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col transition duration-300 rounded shadow-sm hover:shadow">
                        <div className="relative w-full h-48">
                            <img
                                src="assets/bb.jpg"
                                className="object-cover w-full h-full rounded-t"
                                alt="bebe"
                            />
                        </div>
                        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                            <div>
                                <div className="text-lg font-semibold">Mon bébé</div>
                                <div className="mt-2 space-y-3">
                                <div className="text-gray-700">Séance individuelle d'enfant jusqu'à 3 ans</div>
                                <div className="text-gray-700">À votre domicile</div>
                            </div>
                                <div className="mt-1 mb-4 mr-1 text-xl font-bold sm:text-4xl">
                                    100€
                                </div>
                            </div>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center w-full h-12 text-customColor-white font-bold rounded my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-customColor-dark"
                            >
                                Réserver
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col transition duration-300 rounded shadow-sm hover:shadow">
                        <div className="relative w-full h-48">
                            <img
                                src="assets/mariage-quatre.jpg"
                                className="object-cover w-full h-full rounded-t"
                                alt="Plan"
                            />
                        </div>
                        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                            <div>
                                <div className="text-lg font-semibold">J'immortalise l'évènement</div>
                                <div className="mt-2 space-y-3">
                                <div className="text-gray-700">100% personnalisable</div>
                                <div className="text-gray-700">Prestation de mariage / baptême</div>
                            </div>
                                <div className="mt-1 mb-4 mr-1 text-xl font-bold sm:text-4xl">
                                    Sur devis 
                                </div>
                            </div>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center w-full h-12 text-customColor-white font-bold rounded my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-customColor-dark"
                            >
                                Réserver
                            </a>
                        </div>
                    </div>
                  
                </div>
            </div>
            <Footer />
        </>
    )
}