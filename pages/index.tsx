import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';

const index = () => {
  return (
    <motion.div
      className='flex flex-col flex-grow px-6 pt-1'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <h5 className='my-3 font-medium'>
        I am a Full-stack Web Developer having 3+ years of experience currently
        working at Kyndryl India formerly IBM GTS and I have worked on
        multiple applications devloping from scratch to production ready. I have
        completed by B.Tech. in Computer Science Engineering(CSE) from VSSUT,
        Burla, Odisha.
      </h5>
      <div
        className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className='my-3 text-xl font-semibold tracking-wide'>
          What I&rsquo;m Good At
        </h6>
        <motion.div
          className='grid gap-6 my-3 md:grid-cols-1'
          variants={stagger}
          initial='initial'
          animate='animate'
        >
          {services.map(service => (
            <motion.div
              variants={fadeInUp}
              key={service.title}
              className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1'
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
