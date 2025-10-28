import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);

        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            inquiryType: '',
            message: ''
          });
          setSubmitted(false);
        }, 5000);
      }, 1000);
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '(734) 555-IRON (4766)',
      link: 'tel:7345554766'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'info@ironcorefitness.com',
      link: 'mailto:info@ironcorefitness.com'
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      value: '789 Fitness Blvd, Livonia, MI 48150',
      link: 'https://maps.google.com/?q=789+Fitness+Blvd+Livonia+MI+48150'
    },
    {
      icon: ClockIcon,
      title: 'Hours',
      value: 'Mon-Fri: 5AM-11PM | Sat-Sun: 6AM-9PM',
      subValue: '24/7 Access for Elite Members'
    }
  ];

  const faqs = [
    {
      question: 'Do you offer free trials?',
      answer: 'Yes! We offer a complimentary 7-day trial pass for first-time visitors. This gives you full access to our gym facilities and group classes.'
    },
    {
      question: 'What should I bring for my first visit?',
      answer: 'Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide lockers, but you may want to bring a lock.'
    },
    {
      question: 'Are personal training sessions included in membership?',
      answer: 'Personal training sessions are included with Premium and Elite memberships. Basic and Standard members can purchase sessions separately.'
    },
    {
      question: 'Can I freeze my membership?',
      answer: 'Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel. Contact us for details.'
    },
    {
      question: 'What COVID-19 safety measures do you have?',
      answer: 'We maintain enhanced cleaning protocols, provide hand sanitizer stations throughout the facility, ensure proper ventilation, and follow all local health guidelines.'
    },
    {
      question: 'Do you have parking available?',
      answer: 'Yes, we have a large free parking lot available for all members and visitors with over 100 spaces.'
    }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ironcorefitness', color: 'hover:text-blue-600' },
    { name: 'Instagram', url: 'https://instagram.com/ironcorefitness', color: 'hover:text-pink-600' },
    { name: 'Twitter', url: 'https://twitter.com/ironcorefitness', color: 'hover:text-blue-400' },
    { name: 'YouTube', url: 'https://youtube.com/ironcorefitness', color: 'hover:text-red-600' }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Have questions? We're here to help you start your fitness journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 md:py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center hover:scale-105 transition-transform"
              >
                <info.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-heading font-bold text-lg mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-700 hover:text-primary transition-colors block"
                    target={info.title === 'Address' ? '_blank' : undefined}
                    rel={info.title === 'Address' ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-700">{info.value}</p>
                )}
                {info.subValue && (
                  <p className="text-sm text-gray-600 mt-2">{info.subValue}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-8 md:py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary-50 border-2 border-secondary-500 rounded-lg p-8 text-center"
                >
                  <CheckCircleIcon className="w-16 h-16 mx-auto mb-4 text-secondary-500" />
                  <h3 className="text-2xl font-heading font-bold text-secondary-700 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-700">
                    Thank you for contacting us. We'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="(734) 555-0123"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.inquiryType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select an option</option>
                      <option value="general">General Inquiry</option>
                      <option value="trial">Free Trial Request</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="membership">Membership Information</option>
                      <option value="classes">Class Schedule</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.inquiryType && (
                      <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us how we can help you..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-lg py-4 transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed rounded-lg text-white font-semibold'
                        : 'btn btn-primary'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6 lg:space-y-8"
            >
              {/* Map Placeholder */}
              <div className="card overflow-hidden">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-64 md:h-80 flex items-center justify-center relative">
                  <iframe
                    title="IronCore Fitness Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.123456789!2d-83.352634!3d42.368889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDIyJzA4LjAiTiA4M8KwMjEnMDkuNSJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </div>

              {/* Social Media Links */}
              <div className="card p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-heading font-bold mb-3 sm:mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Stay connected and get fitness tips, class updates, and special offers!
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-700 ${social.color} transition-colors text-sm sm:text-base font-semibold`}
                      aria-label={social.name}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="card p-4 sm:p-6 bg-gradient-to-br from-primary to-primary-700 text-white">
                <h3 className="text-lg sm:text-xl font-heading font-bold mb-3 sm:mb-4">Ready to Start?</h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                  Join over 5,000 members who have transformed their lives at IronCore Fitness!
                </p>
                <ul className="space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-center text-sm sm:text-base">
                    <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent flex-shrink-0" />
                    <span>No signup fees</span>
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent flex-shrink-0" />
                    <span>Cancel anytime</span>
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent flex-shrink-0" />
                    <span>Free 7-day trial</span>
                  </li>
                </ul>
                <Link to="/memberships" className="btn bg-white text-primary hover:bg-gray-100 w-full text-center text-sm sm:text-base">
                  View Memberships
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about IronCore Fitness
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="font-heading font-bold text-lg text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 text-lg">
              Still have questions?{' '}
              <a href="tel:7345554766" className="text-primary hover:text-primary-700 font-semibold">
                Call us at (734) 555-IRON
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
