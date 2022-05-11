import Bar from '../components/Bar';
import { languages, tools } from '../data';

import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';

const resume = () => {
  return (
    <motion.div
      className='px-6 py-2'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {/* education & exp */}
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>
              Computer Science Engineering
            </h5>
            <p className='font-semibold'>VSSUT, Burla, Odisha (2014-2018)</p>
            <p className='my-3'>
              I have completed my B.Tech. in Computer Science Engineering on
              2018.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Application Developer</h5>
            <p className='font-semibold'>
              IBM/Kyndryl India (May&rsquo;2021-Apr&rsquo;2022)
            </p>
            <p className='my-3'>
              I was working as a Full stack application developer.
              Working with automation team to provide a better way user can
              access automation scripts.
            </p>
          </div>
        </motion.div>
      </div>

      {/* languages & tools */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
          <div className='my-2'>
            {languages.map((language) => (
              <Bar key={language.name} data={language} />
            ))}
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
          <div className='my-2'>
            {tools.map((tool) => (
              <Bar key={tool.name} data={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
