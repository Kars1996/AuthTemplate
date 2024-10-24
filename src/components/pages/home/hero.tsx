export default function Hero() {
    return (
        <section className="relative">
            {/* Illustration behind hero content */}
            <div
                className="-z-1 pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 transform"
                aria-hidden="true"
            >
                <svg
                    width="1360"
                    height="578"
                    viewBox="0 0 1360 578"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="100%"
                            id="illustration-01"
                        >
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Hero content */}
                <div className="pb-12 pt-32 md:pb-20 md:pt-40">
                    {/* Section header */}
                    <div className="pb-12 text-center md:pb-16">
                        <h1
                            className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl"
                            data-aos="zoom-y-out"
                        >
                            Make your website{" "}
                            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                                wonderful
                            </span>
                        </h1>
                        <div className="mx-auto max-w-3xl">
                            <p
                                className="mb-8 text-xl text-gray-600"
                                data-aos="zoom-y-out"
                                data-aos-delay="150"
                            >
                                Our landing page template works on all devices,
                                so you only have to set it up once, and get
                                beautiful results forever.
                            </p>
                            <div
                                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                                data-aos="zoom-y-out"
                                data-aos-delay="300"
                            >
                                <div>
                                    <a
                                        className="btn mb-4 w-full bg-blue-600 text-white hover:bg-blue-700 sm:mb-0 sm:w-auto"
                                        href="#0"
                                    >
                                        Start free trial
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="btn w-full bg-gray-900 text-white hover:bg-gray-800 sm:ml-4 sm:w-auto"
                                        href="#0"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
