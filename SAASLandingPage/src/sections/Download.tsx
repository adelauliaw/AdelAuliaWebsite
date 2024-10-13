import { Element } from "react-scroll";
import { links, logos } from "../constants/index.tsx";
import { Marker } from "../components/Marker.tsx";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-22 pt-14 max-lg:pb-14 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-140 max-xl:flex-180 max-lg:flex256 max-md:flex-100">
              <div className="mb-1">
                <h3>The Project about AI Will coming soon!</h3>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Download;
