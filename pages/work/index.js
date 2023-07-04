import { WorkSlider, Bulb, Circles } from "../../components";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 flex py-36 items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden" className="h2 xl:mt-12">My work <span className="text-accent">.</span></motion.h2>
            <motion.p variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden" className="mb-4 max-w-[400px] mx-auto lg:mx-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolorum voluptatibus rem architecto et quibusdam saepe reiciendis. Adipisci ut, sit inventore pariatur, itaque ab porro quaerat velit incidunt repellendus mollitia.</motion.p>
          </div>
          {/* slider */}
          <motion.div variants={fadeIn('down', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden" className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
