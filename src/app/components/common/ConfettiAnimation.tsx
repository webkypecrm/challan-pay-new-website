import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import confettiLoader from "../../../../public/json/confetti.json";

// Define props type
interface ConfettiAnimationProps {
  isPledge: boolean;
}

const ConfettiAnimation: React.FC<ConfettiAnimationProps> = ({ isPledge }) => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (isPledge) {
      setPlay(true);
      const timer = setTimeout(() => setPlay(false), 3000); // stop after 3s
      return () => clearTimeout(timer);
    }
  }, [isPledge]);

  if (!play) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      <Lottie
        animationData={confettiLoader}
        loop={false}
        className="w-[400px] h-[400px] max-w-[500px] max-h-[500px] lg:w-[400px] lg:h-[350px] 
         lg:translate-x-[-230px] lg:translate-y-[50px]"
      />
    </div>
  );
};

export default ConfettiAnimation;
