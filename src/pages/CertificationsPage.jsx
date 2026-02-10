import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import CertCard from '../components/CertCard';
import { CERTIFICATIONS } from '../constants';

const CertificationsPage = () => (
  <PageTransition>
    <SEO
      title="Certifications"
      path="/certifications"
      description="Professional certifications and credentials earned by Rabin Babu Pyakurel in frontend development and data science."
    />

    <div className="py-10 sm:py-16">
      <SectionHeading
        title="Certifications"
        subtitle="Professional credentials and achievements"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
        {CERTIFICATIONS.map((cert, index) => (
          <CertCard key={cert.title} cert={cert} index={index} />
        ))}
      </div>
    </div>
  </PageTransition>
);

export default CertificationsPage;
