import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ name, description, image, repo, demo, index, tags }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
      className="relative h-[420px] rounded-[24px] overflow-hidden cursor-pointer card-shadow group">

      <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px] transition-transform duration-500 group-hover:scale-105"
      />

      {/* Info siempre visible abajo */}
      <div className="absolute bottom-0 p-6 w-full flex flex-col bg-[rgba(20,20,20,0.7)] rounded-b-[24px] z-20
        sm:translate-y-[60%] sm:group-hover:translate-y-0 transition-transform duration-500">

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-[11px] font-poppins ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>

        <h2 className="font-bold text-[22px] text-timberWolf uppercase font-beckman leading-tight">
          {name}
        </h2>

        <p className="text-silver text-[12px] leading-[18px] font-poppins tracking-[0.5px] mt-1 line-clamp-3">
          {t(description)}
        </p>

        <div className="flex items-center gap-3 mt-4">
          <button
            className="live-demo flex justify-between items-center gap-1
              text-[13px] text-timberWolf font-bold font-beckman
              py-2 pl-2 pr-3 rounded-[10px] glassmorphism
              hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
            onClick={() => window.open(demo, '_blank')}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('.btn-icon').setAttribute('src', pineappleHover);
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('.btn-icon').setAttribute('src', pineapple);
            }}>
            <img src={pineapple} alt="pineapple" className="btn-icon w-[26px] h-[26px] object-contain" />
            VER DEMO
          </button>

          {repo && (
            <div
              onClick={() => window.open(repo, '_blank')}
              className="bg-night w-10 h-10 rounded-full flex justify-center items-center cursor-pointer opacity-90 hover:opacity-100">
              <img src={github} alt="source code" className="w-4/5 h-4/5 object-contain" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t('projects.subtitle')}</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>{t('projects.title')}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          {t('projects.description')}
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className={`${styles.innerWidth} mx-auto`}>
        <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
