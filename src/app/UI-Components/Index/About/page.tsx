"use client";

import Image from "next/image";
import AboutImg1 from "@public/About-1.jpg";
import AboutImg2 from "@public/assets/About/about-2.jpg";
import AboutImg3 from "@public/assets/About/about-3.jpg";

export default function About() {
	return (
		<>
			<div className="px-[8%] lg:px-[12%] py-20 about">
				<div className="flex flex-col lg:flex-row gap-10">
					<div className="w-full lg:w-1/3 title pt-8">
						<span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
							About Tele-Travail
						</span>
					</div>
					<div className="w-full lg:w-2/3">
						<h1 className="CalSans text-4xl md:text-7xl">
							{" "}
							We Shape{" "}
							<span className="text-(--prim)">
								Interior Designs, Crafting
							</span>{" "}
							Timeless and Inspiring Spaces
						</h1>
					</div>
				</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
          <div className="about-image">
            <Image src={AboutImg1} alt="About-img" className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5"/>
          </div>
        </div>
			</div>
		</>
	);
}
