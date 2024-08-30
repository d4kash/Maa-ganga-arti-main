// // components/AboutUsLocalisation.js
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useTranslation } from 'react-i18next';

// const AboutUsLocalisation = () => {
//   const { t } = useTranslation('common');

//   return (
//     <section className="flex flex-col md:flex-row items-center justify-center my-10 px-5">
//       <motion.div
//         className="md:w-1/2"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl font-bold text-center md:text-left mb-5">
//           {t('aboutUs.title')}
//         </h2>
//         <p className="text-lg leading-relaxed text-center md:text-left">
//           {t('aboutUs.content')}
//         </p>
//       </motion.div>

//       <motion.div
//         className="md:w-1/2"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Image
//           src="/assets/jayamala_with_aarti.webp"
//           alt="Ganga Aarti"
//           width={500}
//           height={300}
//           className="rounded-lg shadow-lg"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default AboutUsLocalisation;
