import ScrollReveal from './ScrollReveal';

const TimelineItem = ({ item, index }) => (
  <ScrollReveal delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
    <div className="relative pl-8 pb-8 border-l-2 border-gray-800 last:border-l-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-2 border-[#0d1117]" />
      <p className="text-xs font-mono text-gray-500 mb-1">{item.year}</p>
      <h4 className="text-base font-semibold text-gray-100">{item.title}</h4>
      <p className="text-sm text-primary-400 mb-2">{item.institution}</p>
      <p className="text-sm text-gray-400">{item.description}</p>
    </div>
  </ScrollReveal>
);

export default TimelineItem;
