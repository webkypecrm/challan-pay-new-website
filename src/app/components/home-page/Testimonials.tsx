"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";

interface Testimonial {
  name: string;
  description: string;
  location: string;
  amountSaved: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dweep",
    description:
      "“Challan dekh ke tension ho gayi thi, par is service ne process bahut simple bana diya. Kahi bhaagne ki zarurat hi nahi padi.”",
    location: "Two-Wheeler Owner · Delhi",
    amountSaved: 2300,
    photo: "/photo/Polish_20250530_112449084.jpg",
  },
  {
    name: "Tina",
    description:
      "“WhatsApp pe link aaya, maine details check ki aur turant payment ho gaya. Pehle kabhi itna smooth nahi laga challan bharna.”",
    location: "Two-Wheeler Owner • Jaipur",
    amountSaved: 1700,
    photo: "/photo/Polish_20250530_112728906.jpg",
  },
  {
    name: "Khushi",
    description:
      "“Is platform ne sirf challan nahi bhara, sahi time pe reminder bhi bheja. Helpful laga mujhe.”",
    location: "Two-Wheeler Owner • Gurugram",
    amountSaved: 2000,
    photo: "/photo/Polish_20250530_112931018.jpg",
  },
  {
    name: "Raj Mahawar",
    description:
      "“I wasn’t sure how to deal with a pending traffic challan, but this service made it hassle-free. Everything was sorted in minutes!”",
    location: "Two-Wheeler Owner • Chandigarh",
    amountSaved: 1100,
    photo: "/photo/Polish_20250530_113141965.jpg",
  },
  {
    name: "Zia",
    description:
      "“Got a message, clicked the link, paid the fine. It was surprisingly smooth. Save me a trip to the curt.”",
    location: "Two-Wheeler Owner • Lucknow",
    amountSaved: 1300,
    photo: "/photo/Polish_20250530_113046363.jpg",
  },
  {
    name: "Rakesh Yadav",
    description:
      "“Mere challan court ke the, par yahaan se easily resolve ho gaye bina kisi lawyer ke. Kaafi helpful service hai.”",
    location: "Two-Wheeler Owner • Faridabad",
    amountSaved: 2600,
    photo: "/photo/Polish_20250703_134343472.jpg",
  },
  {
    name: "Rashmi Sharma",
    description:
      "“Pehle socha online challan bharna risky hoga, par yahaan process clear tha aur har step pe update milta raha.”",
    location: "Two-Wheeler Owner • Delhi",
    amountSaved: 1500,
    photo: "/photo/Polish_20250704_123805883.jpg",
  },
  {
    name: "Pooja",
    description:
      "“Their WhatsApp support actually responds fast. Got my doubts cleared and fine paid without a headache.”",
    location: "Two-Wheeler Owner • Bengaluru",
    amountSaved: 2100,
    photo: "/photo/Polish_20250703_134415045.jpg",
  },
  {
    name: "Sanya  Kapoor",
    description:
      "“I travel a lot for work and missed a few challans. This platform helped me clear them all in one go.”",
    location: "Two-Wheeler Owner • Hyderabad",
    amountSaved: 2000,
    photo: "/photo/Polish_20250703_134446374.jpg",
  },
  {
    name: "Karan",
    description:
      "“I had multiple pending challans and was worried about deadlines, but this service cleared them all smoothly in one go.”",
    location: "Two-Wheeler Owner • Mumbai",
    amountSaved: 2000,
    photo: "/photo/karan.png",
  },
  {
    name: "Anjali Sharma",
    description:
      "“The step-by-step updates made me feel confident about the process. Honestly, the easiest challan payment I have done.”",
    location: "Two-Wheeler Owner • Ahmedabad",
    amountSaved: 2000,
    photo: "/photo/anjali.png",
  },
  {
    name: "Rohit Mehra",
    description:
      "“I did not expect WhatsApp support to be this responsive. Got my query solved instantly and payment done without delay.”",
    location: "Two-Wheeler Owner • Bengaluru",
    amountSaved: 2000,
    photo: "/photo/rohit.png",
  },
  {
    name: "Meena",
    description:
      "“WhatsApp pe link aaya, maine click karke payment kar diya. Bilkul court jaane ki tension hi nahi rahi.”",
    location: "Two-Wheeler Owner • Varanasi",
    amountSaved: 2000,
    photo: "/photo/meena.png",
  },
  {
    name: "Arjun Patel",
    description:
      "“Bahut simple aur transparent process tha. Reminder time pe mil gaya, warna late fees deni padti.”",
    location: "Two-Wheeler Owner • Bhopal",
    amountSaved: 2000,
    photo: "/photo/arjun.png",
  },
  {
    name: "Sameer Khanna",
    description:
      "“Clearing my traffic fines was always stressful, but this platform made it completely hassle-free. Quick, reliable, and easy!”",
    location: "Two-Wheeler Owner • Hyderabad",
    amountSaved: 2000,
    photo: "/photo/sameer.png",
  },
];

const Testimonials: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [emblaApi, setEmblaApi] = React.useState<EmblaCarouselType | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="bg-[#31AB76] text-white py-4 px-2 mt-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        Real Stories, Real <br />
        <span> Savings</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <Carousel
          className="w-full max-w-xs"
          setApi={setEmblaApi} // 👈 connect carousel API
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-white text-black rounded-lg shadow-lg w-auto h-70 p-5 flex flex-col border-b-4 border-yellow-500">
                  <div className="flex flex-row justify-between">
                    <div>
                      {" "}
                      <p className="text-md font-bold text-[#2A9164]">
                        ₹{testimonial.amountSaved}
                      </p>
                      <p className="text-xs  mb-2">Saved</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1 mt-2">
                        {/* Add star ratings for testimonials */}
                        {[...Array(5)].map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            className="text-yellow-500"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 12l-3.09 1.63.59-3.44L2 6.76l3.53-.29L8 3l1.47 3.47L13 6.76l-3.5 3.43.59 3.44L8 12z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-black mb-6 justify-start">
                    {testimonial.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    {/* Rounded photo */}
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width={48} // equals w-12
                      height={48} // equals h-12
                      className="rounded-full object-cover"
                    />

                    {/* Name + Location on right side */}
                    <div className="flex flex-col">
                      <span className="font-semibold text-black">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-900 text-xs">
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
        <div className="flex justify-center  gap-2">
          {scrollSnaps.map((_, idx) => {
            // Default color = gray
            let dotColor = "bg-gray-100";

            // If dot is within the active "window" of 3
            const offset = idx - selectedIndex;
            if (offset >= 0 && offset < 3) {
              if (offset === 0) {
                dotColor = "bg-green-500";
              } else if (offset === 1) {
                dotColor = "bg-yellow-400";
              } else if (offset === 2) {
                dotColor = "bg-red-500"; // active
              }
            }

            return (
              <button
                key={idx}
                onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${dotColor}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
