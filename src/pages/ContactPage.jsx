import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import SocialLinks from '../components/SocialLinks';
import { CONTACT } from '../constants';

const ContactPage = () => (
  <PageTransition>
    <SEO
      title="Contact"
      path="/contact"
      description="Get in touch with Rabin Babu Pyakurel. Based in Gaurighat, Kathmandu. Available for collaboration and opportunities."
    />

    <div className="py-10 sm:py-16">
      <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together?" />

      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          <ScrollReveal delay={0}>
            <motion.a
              href={`mailto:${CONTACT.email}`}
              whileHover={{ y: -5 }}
              className="block p-5 sm:p-6 bg-[#161b22] rounded-xl border border-gray-800 text-center hover:shadow-lg transition-shadow"
              aria-label="Send email"
            >
              <FaEnvelope className="mx-auto text-2xl text-primary-400 mb-3" />
              <p className="text-sm font-medium text-gray-100">Email</p>
              <p className="text-xs text-gray-400 mt-1 break-all">{CONTACT.email}</p>
            </motion.a>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.a
              href={`tel:${CONTACT.phoneNo.replace(/\s/g, '')}`}
              whileHover={{ y: -5 }}
              className="block p-5 sm:p-6 bg-[#161b22] rounded-xl border border-gray-800 text-center hover:shadow-lg transition-shadow"
              aria-label="Call phone"
            >
              <FaPhone className="mx-auto text-2xl text-primary-400 mb-3" />
              <p className="text-sm font-medium text-gray-100">Phone</p>
              <p className="text-xs text-gray-400 mt-1">{CONTACT.phoneNo}</p>
            </motion.a>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ y: -5 }}
              className="p-5 sm:p-6 bg-[#161b22] rounded-xl border border-gray-800 text-center hover:shadow-lg transition-shadow"
            >
              <FaMapMarkerAlt className="mx-auto text-2xl text-primary-400 mb-3" />
              <p className="text-sm font-medium text-gray-100">Location</p>
              <p className="text-xs text-gray-400 mt-1">{CONTACT.address}</p>
            </motion.div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="text-center">
            <p className="text-gray-400 mb-4">Find me on social media</p>
            <div className="flex justify-center">
              <SocialLinks size="text-2xl sm:text-3xl" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </PageTransition>
);

export default ContactPage;
