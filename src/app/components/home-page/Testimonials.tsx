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
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dweep",
    description:
      "“Challan dekh ke tension ho gayi thi, par is service ne process bahut simple bana diya. Kahi bhaagne ki zarurat hi nahi padi.”",
    location: "Two-Wheeler Owner · Delhi",
    amountSaved: 2300,
    photo: "/photo/dweep.jpg",
  },
  {
    name: "Tina",
    description:
      "“WhatsApp pe link aaya, maine details check ki aur turant payment ho gaya. Pehle kabhi itna smooth nahi laga challan bharna.”",
    location: "Car Owner • Jaipur",
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
      "“Got a message, clicked the link, paid the fine. It was surprisingly smooth. Save me a trip to the court”",
    location: "Car Owner • Lucknow",
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
    location: "Car Owner • Delhi",
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
    location: "Car Owner • Mumbai",
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
    location: "Car Owner • Varanasi",
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
    Autoplay({
      delay: 3000, // 3 seconds between slides
      stopOnInteraction: false, // keep autoplay even after manual scroll
      stopOnMouseEnter: true, // pause on hover (optional)
    })
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
    <div className="bg-[#31AB76] text-white py-4 px-2 mt-6 rounded-lg ">
      <h2 className="text-2xl text-center mb-4 lg:text-4xl font-broken lg:text-4xl text-[#ffff] uppercase lg:py-6">
        <span className="block lg:inline lg:font-broken">
          Real Stories, Real
        </span>
        <span className="block lg:inline lg:font-broken"> Savings</span>
      </h2>

      <div className="flex flex-wrap justify-center   lg:justify-center gap-6 ">
        <Carousel
          className="w-full max-w-[1100px] mx-auto" // ✅ Ensures enough width for 4 cards
          setApi={setEmblaApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="flex">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/4 flex justify-center" // 👈 ensures 4 per slide
              >
                <div className="bg-white text-black rounded-2xl shadow-md w-[90%] lg:w-[100%] p-5 flex flex-col border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  {/* Profile Section */}
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover border border-gray-300"
                    />
                    <div>
                      <p className="font-semibold text-black text-[16px]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role ? `${testimonial.role} • ` : ""}
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Saved + Rating Section */}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-lg font-semibold text-[#2A9164]">
                        ₹{testimonial.amountSaved}
                      </p>
                      <p className="text-xs font-semibold text-black">Saved</p>
                    </div>

                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className={`${
                            starIndex < 5
                              ? "text-yellow-400 drop-shadow-[0_0_5px_rgba(255,215,0,0.8)]"
                              : "text-yellow-300 opacity-80"
                          }`}
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 12l-3.09 1.63.59-3.44L2 6.76l3.53-.29L8 3l1.47 3.47L13 6.76l-3.5 3.43.59 3.44L8 12z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-black leading-relaxed">
                    {testimonial.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, idx) => {
          // Determine the "window" of 3 dots centered around the current slide
          const windowStart = Math.max(0, selectedIndex - 1);
          const windowEnd = Math.min(scrollSnaps.length, windowStart + 3);

          // Only render dots that are in the current visible window of 3
          if (idx < windowStart || idx >= windowEnd) return null;

          // Middle (active) one = yellow, others = gray
          const middleIndex = windowStart + 1;
          const dotColor =
            idx === middleIndex ? "bg-yellow-400" : "bg-gray-300";

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
  );
};

export default Testimonials;
