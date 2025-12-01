"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import moengage from "@moengage/web-sdk";

const schema = z.object({
  vehicleType: z.string().min(1, "Please select a vehicle type"),
  vehicleNumber: z
    .string()
    .min(1, "Vehicle number is required")
    .regex(/^[A-Z0-9]+$/, "Only uppercase letters and numbers allowed"),
  terms: z.boolean().refine((val) => val === true, "You must accept terms"),
});

type FormData = z.infer<typeof schema>;

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      vehicleType: "",
      vehicleNumber: "",
      terms: false,
    },
  });

  const onSubmit = (data: FormData) => {
    moengage.track_event("vehicleSelection", {
      vehicleType: data.vehicleType,
      vehicleNumber: data.vehicleNumber,
      eventPage: "https://www.challanpay.in/",
    });
    const encoded = encodeURIComponent(JSON.stringify(data));

    // Navigate first
    router.push(`/challan-status-login?data=${encoded}`);

    // Only set sessionStorage in browser
    if (typeof window !== "undefined") {
      sessionStorage.setItem("vehicleNo", data.vehicleNumber);
    }
  };

  // Dynamic cards array
  const cards = [
    {
      id: "private",
      title: "Private",
      image: "/Images/car-black.webp",
      image1: "/Images/car.svg",
    },
    {
      id: "private-two-wheeler",
      title: "Two-Wheeler",
      image: "/Images/bike-black.webp",
      image1: "/Images/bike.svg",
    },
    {
      id: "electric",
      title: "Electric",
      image: "/Images/electric-black.webp",
      image1: "/Images/electric.svg",
    },
    {
      id: "commercial",
      title: "Commercial",
      image: "/Images/truck-black.webp",
      image1: "/Images/truck.svg",
    },
  ];

  useEffect(() => {
    if (pathname === "/") {
      if (typeof window !== "undefined") {
        // Example: remove only specific items
        sessionStorage.removeItem("selectedChallans");
        sessionStorage.removeItem("challanDetail");
        sessionStorage.removeItem("paymentEngagementData");
        sessionStorage.removeItem("challanDetail");
        sessionStorage.removeItem("userInfo");
      }
    }
  }, [pathname]);

  useEffect(() => {
    // Clear sessionStorage when the component mounts
    sessionStorage.clear();
  }, []);

  return (
    <form id="challan-check" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col lg:flex-row gap-4 justify-center lg:gap-30">
        {/* Left Section */}
        <div className="flex flex-col  w-full lg:w-1/3 gap-6">
          <div className="text-xl font-bold lg:text-center">
            Select Vehicle Type*
          </div>

          <Controller
            control={control}
            name="vehicleType"
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="w-full grid grid-cols-2 sm:grid-cols-2 gap-4 justify-items-center"
              >
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col justify-center items-center gap-1"
                  >
                    {/* Hidden radio (still functional) */}
                    <RadioGroupItem
                      value={card.id}
                      id={card.id}
                      className="hidden"
                    />

                    {/* Label will trigger the radio when clicked */}
                    <Label
                      htmlFor={card.id}
                      className="w-full cursor-pointer flex flex-col items-center"
                    >
                      <Card
                        className={`relative border rounded-full w-[120px] h-[120px] lg:rounded-full lg:w-[120px] lg:h-[120px] sm:w-[200px] sm:h-[180px] flex flex-col items-center justify-center transition ${
                          field.value === card.id
                            ? "border-cyan-600 bg-cyan-50"
                            : "border-gray-200"
                        }`}
                      >
                        <CardContent className="flex flex-col items-center justify-center gap-1 p-2">
                          <div className="w-25 h-30 relative">
                            {/* {field.value === card.id ? (
                              <img
                                src={card.image1}
                                alt={card.title}
                                className="object-scale-down rounded-md "
                              />
                            ) : (
                              <img
                                src={card.image}
                                alt={card.title}
                                className={`object-scale-down rounded-md ${
                                  card.title === "Private" ? "m-auto mt-10" : ""
                                }  `}
                              />
                            )} */}
                            <img
                              src={card.image1}
                              alt={card.title}
                              className={`object-scale-down rounded-md m-auto mt-8 ${
                                field.value === card.id
                                  ? "icon-cyan"
                                  : "icon-black"
                              }`}
                            />
                          </div>
                        </CardContent>
                      </Card>

                      <span
                        className={`font-medium text-center text-sm sm:text-base ${"text-black"}`}
                      >
                        {card.title}
                      </span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          />

          {errors.vehicleType && (
            <p className="text-red-500 text-sm">{errors.vehicleType.message}</p>
          )}
        </div>

        {/* Right Section */}
        <div className="w-full mt-2 lg:w-1/3 flex flex-col justify-center gap-4 lg:mt-0">
          <div className="text-xl font-bold lg:text-left">
            Enter Vehicle Number
          </div>

          <Input
            placeholder="Enter Vehicle Number"
            className="w-full h-12 rounded-md border bg-white"
            {...register("vehicleNumber", {
              onChange: (e) => {
                e.target.value = e.target.value.toUpperCase();
              },
            })}
          />
          {errors.vehicleNumber && (
            <p className="text-red-500 text-sm">
              {errors.vehicleNumber.message}
            </p>
          )}

          <p className="text-base font-normal text-sm md:text-base max-w-md  md:mx-0">
            Enter your vehicle registration number without spaces
          </p>
          <div className="flex items-start gap-3">
            <Controller
              control={control}
              name="terms"
              render={({ field }) => (
                <Checkbox
                  id="terms-2"
                  className="mt-1 data-[state=checked]:bg-cyan-600 data-[state=checked]:border-cyan-600"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <div className="grid gap-2">
              <p className="text-muted-foreground text-sm">
                I agree to the{" "}
                <Link href="/terms-and-condition" className="text-blue-600">
                  Terms & Conditions{" "}
                </Link>
                and the{" "}
                <Link href="/privacy-policy" className="text-blue-600">
                  Privacy Policy
                </Link>
                , and authorize ChallanPay to fetch my vehicle registration and
                challan details from the Government database.
              </p>
              {errors.terms && (
                <p className="text-red-500 text-sm">{errors.terms.message}</p>
              )}
            </div>
          </div>

          <Button
            className="w-full bg-[#F04B50] tex-sm font-medium rounded-md sm:w-auto "
            type="submit"
          >
            Check Challan Status
          </Button>
        </div>
      </div>
    </form>
  );
}
