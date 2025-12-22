"use client";


import Image from "next/image";
import faqBanner from "@public/faq-banner.jpg";
import { useState } from "react";



const faqData = [
  {
    id: "01",
    question: "What interior design services do you offer?",
    answer: "Our interior design cover everything"
  },
  {
    id: "02",
    question: "What services do you offer?",
    answer: "Our interior design cover everything"
  },
  {
    id: "03",
    question: "What is your design process?",
    answer: "Our interior design cover everything"
  },
  {
    id: "04",
    question: "How do you establish your design frees?",
    answer: "Our interior design cover everything"
  },
  {
    id: "05",
    question: "Will i need planning permission for my project?",
    answer: "Our interior design cover everything"
  }
]


export default function Faqs() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  }



	return (
		<>
			<div className="px-[8%] lg:px-[12%] py-30">
				<div className="flex flex-col lg:flex-row gap-10">
					<div className="w-full lg:w-1/3 title pt-8">
						<span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold py-1">
							Popular Queries
						</span>
					</div>
					<div className="w-full lg:w-2/3">
						<h1 className="CalSans text-7xl md:text-6xl mb-5">
							{" "}
							Quick and clear{" "}
							<span className="text-(--prim)">Answers To Your Key</span>{" "}
							services
						</h1>
					</div>
				</div>
        <div className="flex flex-col lg:flex-row gap-8 py-10">
          <div className="w-full lg:w-1/1">
            <div className="space-y-4 w-full">
              {faqData.map((item, index) => (
                <div key={index} className={`overflow-hidden py-2 transition-all duration-300 border-b border-gray-300 cursor-pointer ${openIndex === index ? '' : ''}`}>

                  <button className="w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer" onClick={() => toggle(index)}>
                    <div className="faq-heading flex items-center gap-5">
                      <h3 className="text-3xl font-semibold text-(--prim)">{item.id}</h3>
                      <span className="text-2xl md:text-3xl GolosText font-semibold text-gray-800">{item.question}</span>
                    </div>

                    {openIndex === index ? (
                      <i className="bi bi-dash text-(--prim) text-3xl transition-all duration-300"></i>
                    ) : (
                      <i className="bi bi-plus text-(--prim) text-3xl transition-all duration-300"></i>
                    )}
                    </button>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[300px] opacity-100 py-3' : 'max-h-0 opacity-0 py-0'}`}><p className="GolosText text-gray-700 px-7">{item.answer}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
			</div>
		</>
	);
}
