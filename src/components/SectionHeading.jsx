import ScrollReveal from './ScrollReveal';

const SectionHeading = ({ title, subtitle }) => (
  <ScrollReveal>
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-100 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 bg-primary-500 rounded-full" />
    </div>
  </ScrollReveal>
);

export default SectionHeading;
