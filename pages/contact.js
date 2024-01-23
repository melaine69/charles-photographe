import Header from "../components/Header"
import Footer from "@/components/Footer"
import Form from "@/components/Form"

export default function Contact() {
    return (
        <>
        <Header/>
        <div className="flex-1">
            <div className="flex justify-center text-customColor-light text-xl p-10  font-medium">
                <h1>Pour toutes demandes et réservations, <br/>Veuillez remplir le formulaire ci-dessous...</h1>
            </div>
            <Form/>
            </div>
        <Footer/>
       
        
        </>
    )
}