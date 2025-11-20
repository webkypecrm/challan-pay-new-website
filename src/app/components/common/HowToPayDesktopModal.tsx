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
    image: "/howtopayimage/step1.png",
    title: "Step 1: Select Your Challans To Pay",
    description:
      "View all your pending challans, select the ones you want to resolve, and proceed in a single tap.",
  },
  {
    image: "/howtopayimage/step2.png",
    title: "Step 2: Click Proceed Get Rewards",
    description:
      "Unlock personalized offers and rewards tailored to your selected challans.",
  },
  {
    image: "/howtopayimage/step3.png",
    title: "Step 3: Pay & Resolve with Rewards",
    description:
      "Complete payment securely using your preferred method and enjoy your rewards!",
  },
  {
    image: "/howtopayimage/step4.png",
    title: "Step 4: Track Your Challan Status",
    description:
      "Monitor the progress of your payments in real time and get instant resolution updates.",
  },
];

export function HowToPayDesktopModal({
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
