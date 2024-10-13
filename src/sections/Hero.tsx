import { Element, Link as LinkScroll } from 'react-scroll';
import Button from '../components/Button.tsx';

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">Adel Aulia</div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Full Stack Developer
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10  text-p4">
              I am a dedicated professional seeking opportunities to learn and
              grow. My strong analytical skills and self-confidence allow me to
              excel in any field. I aim to use my knowledge and expertise to
              positively impact others and create value.
            </p>
            <LinkScroll to="experience" offset={-100} spy smooth>
              <Button
                icon="/images/zap.svg"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/adelauliaw/',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                My Experience
              </Button>
            </LinkScroll>
          </div>

          <div className="absolute top-1/2 left-[calc(90%-230px)] w-[430px] pointer-events-none transform -translate-y-1/2 hero-img_res">
            <img
              src="/About.PNG"
              className="size-430 max-lg:h-auto"
              alt="hero"
            />
            {/* <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>  */}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
