import { motion } from 'framer-motion';

const SkillCard = ({ icon: Icon, name, color }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#161b22] border border-gray-800
               hover:shadow-lg hover:border-primary-400 transition-shadow duration-300 cursor-default"
  >
    <Icon className={`text-4xl md:text-5xl ${color}`} />
    <span className="text-xs font-mono font-medium text-gray-400">{name}</span>
  </motion.div>
);

export default SkillCard;
