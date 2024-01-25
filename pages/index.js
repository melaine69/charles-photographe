
import Header from '../components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Link from 'next/link';
//import config from "/admin/config"


const Home = () => {


return (
  <>
  <Head>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

  </Head>
    <div className="flex flex-col font-sans antialiased">
      <Header />
      <div className="relative mx-auto">
        <img className=" w-full object-cover" src="/assets/profil.jpg" alt="image profil" />

        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-customColor-white lg:text-4xl font-bold drop-shadow-xl italic">Charles CANTLIN - Photographe</h2>
        </div>
      </div>
      <button
        className="mx-auto bg-customColor-dark text-customColor-white font-bold rounded my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        Découvrez mon univers
      </button>
    </div>
    <div className="mx-auto max-w-7xl text-center text-customColor-light text-2xl font-medium italic p-20">
      <p>Bienvenue dans l'univers captivant de la photographie, où chaque cliché raconte une histoire unique, figeant le temps pour l'éternité.</p>
    </div>

    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      <section className="grid md:grid-cols-2 gap-10 mb-20 p-5 rounded-3xl">
        <div>
          <h2 class="text-2xl text-customColor-dark font-bold">Quels sont les coulisses ?</h2>

          <p className="font-medium text-justify">
            <br />
            Avant la séance photo, tout commence par une phase cruciale de planification. Je prend le temps de discuter avec vous pour comprendre vos attentes, vos préférences et le message que vous souhaitez transmettre à travers les photos. Cette étape permet d'établir un concept solide qui servira de guide tout au long de la séance. Des détails logistiques tels que le choix du lieu, l'heure de la séance, les accessoires éventuels et d'autres aspects pratiques sont minutieusement planifiés.

            <br />

            <br />En post-production, le travail artistique du photographe se poursuit. Chaque photo est minutieusement examinée et perfectionnée, que ce soit par le biais de corrections de couleurs, d'ajustements de contraste ou de retouches fines. Les images obtenues sont ainsi sublimées, mettant en lumière le talent et la créativité du photographe tout en donnant vie à la vision initiale discutée lors de la planification.</p>
          <button
            className="mt-10 bg-customColor-dark text-customColor-white font-bold rounded my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <Link href="/contact">
              Contact
            </Link>

          </button>
        </div>
        <img src="assets/coulisse.jpg" size="100" className="rounded w-full h-full object-cover" alt="portrait" />
      </section>

      <section className="grid md:grid-cols-2 pt-20 gap-10 mb-20 p-5 rounded-3xl">
        <img src="assets/studio.jpg" className="rounded w-full h-full object-cover" alt="portrait" />

        <div>
          <h2 className="text-2xl text-customColor-dark font-bold">Comment se déroule une séance photo ?</h2>
          <p className="font-medium text-justify">
            <br />Lors du déroulement d'une séance photo, le lieu choisi revêt une importance cruciale, que ce soit en extérieur, en studio ou à domicile. <br /><br />Dans le cadre d'une séance en extérieur, le photographe et son équipe se rendent sur le site préalablement sélectionné en fonction des besoins du client et du style recherché. La lumière naturelle, les décors variés et l'atmosphère extérieure offrent une toile de fond unique, créant des opportunités uniques pour capturer des moments authentiques.

            <br /><br />Dans le cadre d'une séance en studio, l'environnement contrôlé permet au photographe de manipuler la lumière de manière précise, offrant une palette créative illimitée. Les fonds personnalisables, les accessoires et l'équipement professionnel contribuent à créer des images nettes et élégantes, mettant en valeur le sujet de manière artistique.

            <br /><br />Quant à une séance à domicile, elle offre une dimension personnelle et intime. Je collabore étroitement avec vous pour intégrer des éléments significatifs de votre espace personnel dans les photographies. Cette approche crée une atmosphère chaleureuse et familière, capturant des moments uniques et authentiques.</p>
          <button
            className="mt-10 bg-customColor-dark text-customColor-white font-bold rounded my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <Link href="/tarifs">
              Toutes les prestations
            </Link>

          </button>
        </div>

      </section>
    </div>


    <Footer />

  </>
)
}




export default Home;
