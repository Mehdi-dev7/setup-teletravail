"use client";

import Image from "next/image";
import expertise1 from "@public/expertise1.jpg";
import expertise2 from "@public/expertise2.jpg";
import expertise3 from "@public/expertise3.jpg";
import expertise4 from "@public/expertise4.jpg";
import expertiseSlide1 from "@public/banner-slide-1.jpg";
import expertiseSlide2 from "@public/banner-slide-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ExpertiseData = [
	{
		id: "1",
		title: "Renovation and relmodeling",
		desc: "Eget odin non ac mi.",
		image: expertise1,
	},
	{
		id: "2",
		title: "Custom design consultation",
		desc: "Lorem ipsum dolor sit amet consectetur.",
		image: expertise2,
	},
	{
		id: "3",
		title: "Space planning and layout",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		image: expertise3,
	},
	{
		id: "4",
		title: "3D design visualization",
		desc: "Eget odin non ac mi.",
		image: expertise4,
	},
];

export default function Expertise() {
	return (
		<>
			<div className="expertise bg-[#241c18] ">
				<div className="px-[8%] lg:px-[12%] md:py-50 pt-10 md:pb-[25%] relative">
					<div className="flex flex-col gap-10">
						<div className="w-full pt-8">
							<span className="rounded-full text-white title-span border border-gray-400 px-6 GolosText uppercase font-bold py-1">
								Our Expertise
							</span>
						</div>
						<div className="w-full lg:w-2/3">
							<h1 className="CalSans text-white text-4xl md:text-7xl">
								{" "}
								Curating the perfect{" "}
								<span className="text-(--prim)">pieces to complete</span> your
								space
							</h1>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
						{ExpertiseData.map((item, idx) => (
							<div
								key={idx}
								className="expertise-card"
								style={{ marginTop: `${idx * 40}px` }}
							>
								<div className="expertise-image">
									<Image
										src={item.image}
										alt={item.title}
										className="w-full h-full rounded-2xl"
									/>
								</div>
								<div className="expertise-info my-5">
									<h1 className="text-3xl CalSans text-white border-b border-gray-500/50 pb-5 w-full lg:w-[80%]">
										{item.title}
									</h1>
									<p className="text-gray-400 mt-3">{item.desc}</p>
								</div>
							</div>
						))}
					</div>
					<div className="expertise-slider">
						<Swiper
							slidesPerView={1}
							spaceBetween={0}
							loop={true}
							autoplay={{
								delay: 1500,
							}}
							modules={[Autoplay]}
							speed={2000}
						>
              <SwiperSlide>
                <Image src={expertiseSlide1} alt="expertiseSlide1" className="w-full h-full object-cover"/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={expertiseSlide2} alt="expertiseSlide2" className="w-full h-full object-cover"/>
              </SwiperSlide>
            </Swiper>
					</div>
				</div>
			</div>
		</>
	);
}
