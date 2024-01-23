import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-customColor-dark ">


            <div className="mx-auto text-center p-3">

                <ul className="flex items-center gap-10 mx-auto max-w-2xl justify-center p-5 ">
                    <li className="text-customColor-white hover:text-customColor-light">
                        <Link href="#">
                            <img src="/assets/facebook.png" alt="iconfacebook"/>
                        </Link>
                    </li>
                    <span className="h-4 w-px bg-customColor-white"></span>
                    <li className="text-customColor-white hover:text-customColor-light">
                        <Link href="#">
                            <img src="/assets/instagram.png" alt="iconinstagram"/>
                        </Link>
                    </li>
                </ul>

                <div className="text-customColor-white">
                    <p>Copyright {new Date().getFullYear()} . All rights reserved.</p>
                    <p>France</p>
                </div>

            </div>
        </footer>
    )

}