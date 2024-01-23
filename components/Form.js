export default function Form() {
    return (
        <>
            <div class="flex items-center justify-center p-12">

                <div class="mx-auto w-full max-w-[550px]">
                    <form action="https://formspree.io/f/xwkgvvkp"
                        method="POST">
                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="name"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Nom / prénom
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        
    
                        </div>
                        <div class="mb-5">
                            <label
                                for="email"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                min="0"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                for="email"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                placeholder="Je souhaite réserver une prestation 'Juste pour moi'"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="date"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="time"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Heure
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        id="time"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>

                    
                        <div>
                            <button
                                class="mx-auto lg:mx-0 bg-customColor-dark text-customColor-white font-bold rounded my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                                type="submit"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}