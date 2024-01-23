import Header from "../components/Header"
import Footer from "@/components/Footer"
import React, { useState } from "react";
import { photoData } from "@/photoData";
import ButtonsFilters from "@/components/ButtonsFilters";
import Card from "../components/Card";

export default function Galerie() {
    const [item, setItem] = useState(photoData);

    const menuItems = [...new Set(photoData.map((Val) => Val.category))];

    const filterItem = (curcat) => {
        const newItem = photoData.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };
    return (
        <>
            <Header />
            <div>
                <p className="flex justify-center text-customColor-light text-2xl p-10  font-medium italic">
                    Capturez l'instant, révélez l'éternité : la magie d'une image, le talent d'un regard.
                </p>

            </div>

            <div>
                <ButtonsFilters
                    filterItem={filterItem}
                    setItem={setItem}
                    menuItems={menuItems} />

                <Card item={item} />
            </div>
      


            <section className="p-10">

                <div className="text-customColor-white">space</div>
            </section>

            <Footer />
        </>
    )
}
