'use client';

export default function Header() {
    return (
        <header class="flex justify-between items-center px-4 py-6 bg-customColor-dark">
            <div> 

                <img src="logo.png" className="w-28" alt="logo" />
            </div>
            <div className="flex gap-10 p-3">
                <nav>
                    <ul class="flex gap-10 text-lg font-medium">
                        <li className="text-customColor-white hover:text-customColor-light">
                            <a href="/">Accueil</a>
                        </li>
                        <li className="text-customColor-white hover:text-customColor-light">
                            <a href="/galerie">Galerie</a>
                        </li>
                        <li className="text-customColor-white hover:text-customColor-light">
                            <a href="/tarifs">Tarifs</a>
                        </li>
                        <li className="text-customColor-white hover:text-customColor-light">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}