import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default function Banner() {
  return (
    <Card className="bg-white rounded-2xl px-2 py-4 shadow-sm border border-gray-200 my-10">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
        {/* Left text */}
        <p className="text-sm md:text-base font-bold text-black text-center md:text-left">
          We make managing multiple vehicles and challans completely stress-free
        </p>

        {/* WhatsApp Button */}
        <Button
          variant="outline"
          className="flex items-center h-10 gap-2 rounded-md bg-secondary text-green-600 hover:bg-green-50 justify-center"
        >
          <MessageCircle className="h-4 w-4" />
          Contact us on WhatsApp
        </Button>
      </div>
    </Card>
  );
}
