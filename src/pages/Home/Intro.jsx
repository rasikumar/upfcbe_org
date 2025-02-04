import { ScrollParallax } from "react-just-parallax";
import { MiniCards } from "../../components/MiniCards";
import { gurujiwalk } from "../../assets";
import { GiEnergise } from "react-icons/gi";
import { BiBody, BiBuilding } from "react-icons/bi";
import { FaHeading } from "react-icons/fa6";
import { RiFeedbackFill } from "react-icons/ri";
import { SiMinds } from "react-icons/si";
import MotionSection from "../../components/MotionSection";

const Intro = () => {
  return (
    <div className="w-full bg-gradient-to-l to-upfhoneydew from-upfmelon m-auto">
      <div className="flex items-center justify-between max-w-[100rem] m-auto">
        <div>
          <ScrollParallax className="flex">
            <div className="flex flex-col gap-4">
              <MotionSection>
                <MiniCards
                  title="Re-Engergize"
                  description="The art of re-energy is generate from the soul sound of confident that will be energy."
                  icons={GiEnergise}
                />
              </MotionSection>
              <MotionSection></MotionSection>
              <MotionSection>
                <MiniCards
                  title="Strength Building"
                  description="Positive energy spreeds all over the UPF planet and you could easily built your strength."
                  icons={BiBuilding}
                />
              </MotionSection>
              <MotionSection>
                <MiniCards
                  title="Stress Relief"
                  description="Inner peace and stay away from the negative and The way of life is stress free."
                  icons={FaHeading}
                />
              </MotionSection>
            </div>
          </ScrollParallax>
        </div>
        <div>
          <img src={gurujiwalk} />
        </div>
        <div className="relative">
          <ScrollParallax>
            <div className="flex flex-col gap-4">
              <MotionSection>
                <MiniCards
                  title="Relax & Refresh"
                  description="The UPF planet has mixed attitude people life style, you will forget the stress and stay relax."
                  icons={RiFeedbackFill}
                />
              </MotionSection>
              <MotionSection>
                <MiniCards
                  title="Beauty of Body"
                  description="The automatic system of our body has extraordinary power and we should be peace"
                  icons={BiBody}
                />
              </MotionSection>
              <MotionSection>
                <MiniCards
                  title="Mind & Soul"
                  description="Doing things is not for survival also you mind the discipline and dignity are peaceful mind."
                  icons={SiMinds}
                />
              </MotionSection>
            </div>
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Intro;
