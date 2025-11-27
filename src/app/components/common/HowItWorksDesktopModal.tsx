import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { XIcon } from "lucide-react";

const steps = [
  {
    image: "/how-contest-works/step1.png",
    title: "Step 1: Choose Contest and Make Payment ",
    description:
      "Complete your challan payment securely to initiate the process.",
  },
  {
    image: "/how-contest-works/step2.png",
    title: "Step 2: We Contest on Your Behalf",
    description: "Our team reviews your case and files the contest for you.",
  },
  {
    image: "/how-contest-works/step3.png",
    title: "Step 3: Track Your Case Status",
    description: "Monitor real-time updates and stay informed at every stage.",
  },
  {
    image: "/how-contest-works/step4.png",
    title: "Step 4: Receive Up to 100% Waiver",
    description:
      "Based on eligibility, you can get a partial or full waiver on your challan amount.",
  },
];

export function HowItWorksDesktopModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  // carousel states
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % steps.length;
        api.scrollTo(next); // scroll carousel
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[480px] p-4 rounded-[16px]">
        <DialogClose asChild>
          <button className=" absolute -top-8 right-55 rounded-full bg-black/50 w-6 h-6 flex justify-center items-center text-white font-bold hover:bg-black z-50">
            <XIcon size={14} />
          </button>
        </DialogClose>
        <div className="w-full max-w-md mx-auto py-6 pt-0 pb-0">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent>
              {steps.map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="pt-0 ">
                    <CardContent className="p-0 space-y-3 ">
                      {/* Image */}
                      <Image
                        src={item.image}
                        alt="step-image"
                        width={500}
                        height={300}
                        className="w-full h-auto object-contain"
                      />

                      {/* Title */}
                      <div className="text-xl font-bold text-[#0891B2]">
                        {item.title}
                      </div>

                      {/* Description */}
                      <div className="text-sm text-black">
                        {item.description}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center mt-4 gap-1 ">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-cyan-500 scale-110"
                    : "bg-cyan-200 opacity-60"
                }`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
