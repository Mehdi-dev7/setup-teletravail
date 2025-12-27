"use client";

import Link from "next/link";
import ProjectsData from "../../../../JsonData/Projects.json";
import { useParams } from "next/navigation";
import Image from "next/image";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Gallery1 from "../../../../../public/gallery-1.jpg"
import Gallery2 from "../../../../../public/gallery-2.jpg"
import Gallery3 from "../../../../../public/gallery-3.jpg"
import Gallery4 from "../../../../../public/gallery-4.jpg"
import Gallery5 from "../../../../../public/gallery-5.jpg"
import Gallery6 from "../../../../../public/gallery-6.jpg"

export default function ProjectDetails() {
	const { id } = useParams();
	const project = ProjectsData.find((p) => p.id === Number(id));

	const DetailsInfo = [
		{
			id: 1,
			title: "Open Living Room",
			pere: "Creating open-plan living areas to enhance the flow and connection between indoor and outdooor spaces.",
		},
		{
			id: 2,
			title: "Modern Kitchen Design",
			pere: "Incorporating sleek, minimalist designs with high-quality materials and state-of-the-art appliances.",
		},
		{
			id: 3,
			title: "Smart Home Integration",
			pere: "Implementing smart home technologies for lighting, climate control, and security systems.",
		},
		{
			id: 4,
			title: "Sustainable Materials",
			pere: "Using eco-friendly and sustainable materials to reduce environmental impact.",
		},
		{
			id: 5,
			title: "Customized Furniture",
			pere: "Designing bespoke furniture pieces that fit the unique needs and style of the client.",
		},
	];

	if (!project) {
		return (
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-5xl md:text-6xl GolosText mt-15">
					Project not found
				</h1>
				<div className="flex items-center gap-5 mt-3">
					<Link
						href="/UI-Components/Projects"
						className="hover:text-(--prim) transition-all duration-300 mt-5 border border-gray-300 px-4 py-2 rounded hover:bg-white"
					>
						Back to Projects
					</Link>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-6xl md:text-8xl GolosText mt-15">
					Projects Details
				</h1>
				<div className="flex items-center text-xl mt-3">
					<Link
						href="/"
						className="hover:text-(--prim) transition-all duration-300"
					>
						Home
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<Link
						href="/UI-Components/Projects"
						className="hover:text-(--prim) transition-all duration-300"
					>
						Projects
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<h2 className="GolosText text-white">{project.title}</h2>
				</div>
			</div>

			{/* Project details content */}
			<div className="px[8%] lg:px-[12%] py-20">
				<h2 className="CalSans text-5xl md:text-7xl">{project.title}</h2>
				<div className="mt-10 border-b border-gray-300 pb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
					<div className="flex flex-col items-start">
						<h2 className="CalSans text-gray-400 tracking-wider">Architect:</h2>
						<h3 className="GolosText text-xl">Themelexus</h3>
					</div>
					<div className="flex flex-col items-start">
						<h2 className="CalSans text-gray-400 tracking-wider">
							Project Type:
						</h2>
						<h3 className="GolosText text-xl flex flex-wrap">
							{project.tags.map((tag, idx) => (
								<div key={idx} className="flex">
									{tag}
								</div>
							))}
						</h3>
					</div>
					<div className="flex flex-col items-start">
						<h2 className="CalSans text-gray-400 tracking-wider">Client:</h2>
						<h3 className="GolosText text-xl">David Oswald</h3>
					</div>
					<div className="flex flex-col items-start">
						<h2 className="CalSans text-gray-400 tracking-wider">Terms:</h2>
						<h3 className="GolosText text-xl">6 Month</h3>
					</div>
					<div className="flex flex-col items-start">
						<h2 className="CalSans text-gray-400 tracking-wider">Strategy:</h2>
						<h3 className="GolosText text-xl">Minimalistic</h3>
					</div>
					<div className="flex flex-col items-start">
						<h2 className="CalSans text-gray-400 tracking-wider">Date:</h2>
						<h3 className="GolosText text-xl">{project.date}</h3>
					</div>
				</div>
				<div className="project-det-img mt-10 w-full h-[500px] md:h-[700px] rounded-2xl overflow-hidden">
					<Image
						src={project.image}
						alt={project.title}
						width={800}
						height={400}
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Project Info */}
				<div className="mt-10">
					<h2 className="CalSans text-5xl md:text-7xl">Design in Details</h2>
					<p className="GolosText text-gray-500 mt-5">
						Considering the physical, mental, and emotional aspects of design,
						we focus on creating user experiences that are both functional and
						aesthetically pleasing.Creating a seamless and engaging experience
						for users is our primary goal.By definition, interior design is a
						multi-disciplinary field that involves the planning, design, and
						decoration of interior spaces.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-5 mt-5">
						{DetailsInfo.map((info, index) => (
							<div key={index} className="flex gap-2">
								<i className="bi bi-check-circle-fill text-(--prim)"></i>
								<p className="GolosText text-gray-500">
									<span className="font-bold text-black">{info.title}:</span>{" "}
									{info.pere}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="mt-10 border border-gray-200 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					<div className="p-10 border border-gray-200 flex flex-col justify-center items-center">
						<h2 className="text-5xl tracking-wider GolosText font-bold">
							(
							<CountUp start={0} end={30} duration={8} enableScrollSpy />
							M2)
						</h2>
						<h2 className="GolosText text-xl mt-2">bedroom</h2>
					</div>
					<div className="p-10 border border-gray-200 flex flex-col justify-center items-center">
						<h2 className="text-5xl tracking-wider GolosText font-bold">
							(
							<CountUp start={0} end={22} duration={8} enableScrollSpy />
							M2)
						</h2>
						<h2 className="GolosText text-xl mt-2">bathroom</h2>
					</div>
					<div className="p-10 border border-gray-200 flex flex-col justify-center items-center">
						<h2 className="text-5xl tracking-wider GolosText font-bold">
							(
							<CountUp start={0} end={29} duration={8} enableScrollSpy />
							M2)
						</h2>
						<h2 className="GolosText text-xl mt-2">workspace</h2>
					</div>
					<div className="p-10 border border-gray-200 flex flex-col justify-center items-center">
						<h2 className="text-5xl tracking-wider GolosText font-bold">
							(
							<CountUp start={0} end={12} duration={8} enableScrollSpy />
							M2)
						</h2>
						<h2 className="GolosText text-xl mt-2">kitchen area</h2>
					</div>
				</div>
				<div className="mt-10">
					<h2 className="CalSans text-5xl md:text-7xl">Incredible Result</h2>
					<p className="text-gray-500 GolosText mt-5">Establing multi-sensory experiences,
						we aim to create spaces that not only look good but also feel good. These rooms and spaces
						are designed to evoke specific emotions and moods, enhancing the overall user experience. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nam fugit? Hic blanditiis magnam animi delectus, quae omnis harum mollitia, asperiores quia repellat veniam atque facere exercitationem? Obcaecati, voluptatibus a?
					</p>
				</div>
			</div>

			{/* Project Gallery */}
			<div className="project-gallery">
				<Swiper></Swiper>
			</div>
		</>
	);
}
