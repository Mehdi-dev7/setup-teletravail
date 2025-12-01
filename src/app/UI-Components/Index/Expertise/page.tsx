"use client";

import Image from "next/image";
import expertise1 from "@public/expertise-1.jpg";
import expertise2 from "@public/expertise-2.jpg";
import expertise3 from "@public/expertise-3.jpg";
import expertise4 from "@public/expertise-4.jpg";


const ExpertiseData = [
  {
    id: "1",
    title: "Renovation and relmodeling",
    desc: "Eget odin non ac mi.",
    image: expertise1,
  }
]

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
              <div key={idx} className="expertise-card" style={{ marginTop:`${idx * 40}px`}}>
                <div className="expertise-image">
                  <Image src={item.image} alt={item.title} className="w-full h-full rounde-2xl"/>
                </div>
                <div className="expertise-info my-5">
                  <h1 className="text-3xl CalSans text-white border-b border-gray-500/50"></h1>
                </div>
              </div>
            ))
              }
          </div>
				</div>
			</div>
		</>
	);
}
