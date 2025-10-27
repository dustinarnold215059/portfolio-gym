import { motion } from 'framer-motion';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Memberships = () => {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      description: 'Perfect for getting started',
      features: [
        { name: 'Access to gym floor', included: true },
        { name: 'Free fitness assessment', included: true },
        { name: 'Locker room access', included: true },
        { name: 'WiFi access', included: true },
        { name: 'Group classes', included: false },
        { name: 'Personal training', included: false },
        { name: 'Sauna & steam room', included: false },
        { name: 'Guest privileges', included: false },
      ],
      color: 'gray',
      popular: false,
    },
    {
      name: 'Standard',
      price: 49,
      description: 'Most popular choice',
      features: [
        { name: 'Access to gym floor', included: true },
        { name: 'Free fitness assessment', included: true },
        { name: 'Locker room access', included: true },
        { name: 'WiFi access', included: true },
        { name: 'Unlimited group classes', included: true },
        { name: '2 PT sessions/month', included: true },
        { name: 'Sauna & steam room', included: true },
        { name: 'Guest privileges', included: false },
      ],
      color: 'primary',
      popular: true,
    },
    {
      name: 'Premium',
      price: 79,
      description: 'For serious athletes',
      features: [
        { name: 'Access to gym floor', included: true },
        { name: 'Free fitness assessment', included: true },
        { name: 'Locker room access', included: true },
        { name: 'WiFi access', included: true },
        { name: 'Unlimited group classes', included: true },
        { name: '4 PT sessions/month', included: true },
        { name: 'Sauna & steam room', included: true },
        { name: '2 guest passes/month', included: true },
      ],
      color: 'secondary',
      popular: false,
    },
    {
      name: 'Elite',
      price: 99,
      description: 'Ultimate fitness experience',
      features: [
        { name: 'Access to gym floor', included: true },
        { name: 'Priority booking', included: true },
        { name: 'Locker room & towel service', included: true },
        { name: 'WiFi & charging stations', included: true },
        { name: 'Unlimited group classes', included: true },
        { name: 'Unlimited personal training', included: true },
        { name: 'All amenities included', included: true },
        { name: 'Unlimited guest passes', included: true },
      ],
      color: 'accent',
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-600 to-secondary-600 text-white pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
              Choose Your Path to Fitness
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Flexible membership plans designed to fit your goals and lifestyle
            </p>
            <div className="inline-block bg-accent text-gray-900 px-6 py-3 rounded-full font-semibold text-lg">
              Get 7 Days Free Trial - No Credit Card Required
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-heading font-bold">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all transform hover:scale-105 mb-8 ${
                      plan.popular
                        ? 'bg-primary text-white hover:bg-primary-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Start Free Trial
                  </Link>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        {feature.included ? (
                          <CheckIcon className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XMarkIcon className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={
                            feature.included ? 'text-gray-700' : 'text-gray-400'
                          }
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">All Memberships Include</h2>
            <p className="section-subtitle">
              Every member gets access to these amazing benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'State-of-the-Art Equipment',
                description: 'Top-tier cardio and strength training equipment maintained to perfection',
                icon: '💪',
              },
              {
                title: 'Flexible Hours',
                description: 'Open early mornings to late nights, 7 days a week for your convenience',
                icon: '⏰',
              },
              {
                title: 'Expert Support',
                description: 'Certified trainers available to answer questions and provide guidance',
                icon: '👨‍🏫',
              },
              {
                title: 'Clean Facilities',
                description: 'Professionally cleaned multiple times daily for your safety and comfort',
                icon: '✨',
              },
              {
                title: 'Community Events',
                description: 'Monthly challenges, workshops, and social events to keep you motivated',
                icon: '🎉',
              },
              {
                title: 'Member App',
                description: 'Track workouts, book classes, and connect with the community',
                icon: '📱',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Can I cancel my membership anytime?',
                answer: 'Yes! All memberships are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.',
              },
              {
                question: 'Do you offer student or senior discounts?',
                answer: 'Yes, we offer 15% off for students with valid ID and seniors (65+). Ask at the front desk for details.',
              },
              {
                question: 'Can I freeze my membership?',
                answer: 'Members can freeze their membership for up to 3 months per year for medical reasons or extended travel.',
              },
              {
                question: 'Is there a joining fee?',
                answer: 'No joining fees during promotional periods. Check with our team for current offers.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-lg font-heading font-bold mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your 7-day free trial today. No credit card required. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-accent text-lg px-8">
                Start Free Trial
              </Link>
              <Link
                to="/facilities"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8"
              >
                Tour Our Facility
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Memberships;
