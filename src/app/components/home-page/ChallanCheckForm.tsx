"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

// Zod schema
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
  const [selected, setSelected] = useState<string>("");
  const router = useRouter();

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
    router.push("/challan-status-login");
  };

  // Dynamic cards array
  const cards = [
    { id: "car", title: "Private", image: "/Images/car.png" },
    { id: "bike", title: "Two - Wheelar", image: "/Images/bike.png" },
    { id: "truck", title: "Electric", image: "/Images/electric.png" },
    { id: "bus", title: "Commercial", image: "/Images/truck.png" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col lg:flex-row gap-4 justify-center ">
        {/* Left Section */}
        <div className="flex flex-col lg:items-start w-full lg:w-1/3 gap-6">
          <div className="text-xl font-bold lg:text-left">
            Select Vehicle Type
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
                  <Card
                    key={card.id}
                    className={`relative cursor-pointer border rounded-2xl w-[140px] h-[120px] sm:w-[200px] sm:h-[180px] flex flex-col items-center justify-center transition ${
                      field.value === card.id
                        ? "border-gray-100 bg-cyan-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="absolute top-2 right-2">
                      <RadioGroupItem
                        value={card.id}
                        id={card.id}
                        className="h-5 w-5 border rounded-full data-[state=checked]:bg-cyan-600 data-[state=checked]:border-cyan-600 flex items-center justify-center"
                      />
                    </div>

                    <CardContent className="flex flex-col items-center justify-center gap-1 p-2">
                      <div className="w-16 h-16 relative">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="object-scale-down rounded-md"
                        />
                      </div>
                      <Label
                        htmlFor={card.id}
                        className={`font-medium cursor-pointer text-center text-sm sm:text-base ${
                          field.value === card.id
                            ? "text-cyan-600"
                            : "text-black"
                        }`}
                      >
                        {card.title}
                      </Label>
                    </CardContent>
                  </Card>
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
            placeholder="eg. UP32MM1113"
            className="w-full h-9 rounded-md border bg-white"
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

          <p className="text-base font-normal text-sm md:text-base max-w-md mx-auto md:mx-0">
            Enter your vehicle registration number without spaces
          </p>

          <Button className="w-full bg-cyan-600 sm:w-auto" type="submit">
            Check Challan Status
          </Button>

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
                I agree to the terms, conditions and the privacy policy, and
                authorize ChallanPay to fetch my vehicle registration and
                challan details from the Government database.
              </p>
              {errors.terms && (
                <p className="text-red-500 text-sm">{errors.terms.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
