import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Importar el hook de i18next
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  const { t } = useTranslation(); // Usar el hook para traducciones

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>{t('tech.sectionSubText')}</p>
        <h2 className={styles.sectionHeadTextLight}>{t('tech.sectionHeadText')}</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
