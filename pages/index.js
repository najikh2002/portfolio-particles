import Image from "next/image";
import { ParticlesContainer, ProjectsBtn, Avatar } from "../components";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
        {/* text */}
        <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black">
          <div className="text-center flex flex-col justify-center lg:text-left lg:items-start items-center h-full container mx-auto">
            {/* title */}
            <motion.h1 
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"  
              className="h1">
            Transforming Ideas <br /> Into 
            <span className="text-accent"> Digital Reality</span>
            </motion.h1>
            {/* subtitle */} 
            <motion.p 
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"  
              className="max-w-sm max-auto xl:mx-0 mb-10 xl:mb-16">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur incidunt, deserunt debitis nobis sunt excepturi quisquam veniam, autem ad nemo ipsum corrupti in. Officia, dolorum. Quos soluta quasi deserunt voluptatum.
            </motion.p>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden" 
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* image */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg img */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0" />
          {/* particles */}
          <ParticlesContainer />
          {/* avatar img */}
          <motion.div 
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: 'easeInOut' }}  
              className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"> 
            <Avatar />
          </motion.div>
        </div>
    </div>
  );
};

export default Home;
