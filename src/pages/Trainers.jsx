import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Trainers = () => {
  const trainers = [
    {
      name: 'Sarah Martinez',
      title: 'Lead HIIT Specialist',
      specialties: ['HIIT', 'Weight Loss', 'Functional Training'],
      certifications: ['NASM-CPT', 'CrossFit Level 2', 'Nutrition Coach'],
      experience: '8 years',
      bio: 'Sarah is passionate about helping clients achieve their fitness goals through high-intensity training. Her energetic approach and attention to form ensure safe, effective workouts.',
      image: '👩',
      achievements: ['Trained 500+ clients', 'Former competitive CrossFit athlete'],
    },
    {
      name: 'Mike Thompson',
      title: 'Cycling & Endurance Coach',
      specialties: ['Indoor Cycling', 'Endurance Training', 'Cardio'],
      certifications: ['ACE-CPT', 'Indoor Cycling Instructor', 'Triathlon Coach'],
      experience: '10 years',
      bio: 'Mike brings the energy and motivation needed to push through challenging spin sessions. His background in competitive cycling helps clients reach new performance levels.',
      image: '👨',
      achievements: ['Completed 5 Ironman races', '1000+ spin classes taught'],
    },
    {
      name: 'Maya Chen',
      title: 'Yoga & Mindfulness Expert',
      specialties: ['Yoga', 'Pilates', 'Flexibility', 'Meditation'],
      certifications: ['RYT-500', 'Pilates Instructor', 'Mindfulness Coach'],
      experience: '12 years',
      bio: 'Maya combines traditional yoga philosophy with modern fitness science. She helps clients build strength, flexibility, and inner peace through mindful movement.',
      image: '👩',
      achievements: ['Trained in India and Bali', '10,000+ teaching hours'],
    },
    {
      name: 'Jake Morrison',
      title: 'CrossFit & Strength Coach',
      specialties: ['CrossFit', 'Olympic Lifting', 'Strength Training'],
      certifications: ['CrossFit Level 3', 'USAW Sports Performance', 'NSCA-CSCS'],
      experience: '9 years',
      bio: 'Jake specializes in building functional strength and power. His coaching style focuses on proper technique and progressive overload to maximize results safely.',
      image: '👨',
      achievements: ['Regional CrossFit competitor', 'State powerlifting champion'],
    },
    {
      name: 'Carlos Rivera',
      title: 'Boxing & Combat Sports',
      specialties: ['Boxing', 'Kickboxing', 'Combat Conditioning'],
      certifications: ['USA Boxing Coach', 'Kettlebell Specialist', 'CPT'],
      experience: '15 years',
      bio: 'Former professional boxer Carlos brings authentic boxing technique and conditioning to every session. Learn real skills while getting an incredible workout.',
      image: '👨',
      achievements: ['Pro boxing record 24-3', 'Golden Gloves champion'],
    },
    {
      name: 'Isabella Garcia',
      title: 'Dance Fitness & Zumba',
      specialties: ['Zumba', 'Dance Fitness', 'Group Classes'],
      certifications: ['Zumba Master Instructor', 'Dance Fitness Certified'],
      experience: '7 years',
      bio: 'Isabella makes fitness feel like a party! Her infectious energy and dance background create classes that are both fun and effective for all fitness levels.',
      image: '👩',
      achievements: ['Choreographed 200+ routines', 'International workshop presenter'],
    },
    {
      name: 'David Lee',
      title: 'Strength & Conditioning',
      specialties: ['Bodybuilding', 'Strength Training', 'Athletic Performance'],
      certifications: ['NSCA-CSCS', 'Precision Nutrition L1', 'FMS'],
      experience: '11 years',
      bio: 'David specializes in building muscle, strength, and athletic performance. His scientific approach to programming delivers measurable results.',
      image: '👨',
      achievements: ['Former college strength coach', 'Published fitness author'],
    },
    {
      name: 'Emma Wilson',
      title: 'Pilates & Corrective Exercise',
      specialties: ['Pilates', 'Posture Correction', 'Injury Prevention'],
      certifications: ['PMA-CPT', 'NASM-CES', 'Physical Therapy Aide'],
      experience: '6 years',
      bio: 'Emma focuses on proper alignment, core strength, and injury prevention. Perfect for those recovering from injuries or looking to improve movement quality.',
      image: '👩',
      achievements: ['Helped 300+ clients recover from injury', 'Posture specialist'],
    },
  ];

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
              Meet Our Expert Trainers
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Certified professionals dedicated to your success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 group hover:scale-105 transition-transform"
              >
                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-6xl">
                    {trainer.image}
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-heading font-bold mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-primary font-semibold">{trainer.title}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {trainer.experience} experience
                  </p>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {trainer.bio}
                </p>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-50 text-primary text-xs font-medium rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">
                    Certifications:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary-50 text-secondary-700 text-xs font-medium rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">
                    Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {trainer.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-accent mr-2">★</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className="block w-full text-center btn btn-primary"
                >
                  Book a Session
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Personal Training */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Personal Training?</h2>
            <p className="section-subtitle">
              Personalized coaching for faster, safer results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Customized Programs',
                description: 'Workouts tailored to your specific goals, fitness level, and limitations',
                icon: '📋',
              },
              {
                title: 'Expert Guidance',
                description: 'Learn proper form and technique to maximize results and prevent injury',
                icon: '🎯',
              },
              {
                title: 'Accountability',
                description: 'Stay motivated with scheduled sessions and progress tracking',
                icon: '📈',
              },
              {
                title: 'Faster Results',
                description: 'Achieve your goals more efficiently with professional programming',
                icon: '⚡',
              },
              {
                title: 'Nutrition Support',
                description: 'Many trainers offer nutrition guidance to complement your training',
                icon: '🥗',
              },
              {
                title: 'Injury Prevention',
                description: 'Safe progression and proper mechanics reduce injury risk',
                icon: '🛡️',
              },
              {
                title: 'Variety',
                description: 'Keep workouts fresh and challenging with expert programming',
                icon: '🔄',
              },
              {
                title: 'Support & Motivation',
                description: 'Your trainer is your biggest cheerleader and supporter',
                icon: '💪',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-heading font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Personal Training Packages</h2>
            <p className="section-subtitle">
              Flexible options to fit your schedule and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                sessions: '4 sessions',
                price: '$240',
                perSession: '$60/session',
                features: ['1 month validity', 'Goal setting session', 'Progress tracking'],
              },
              {
                name: 'Committed',
                sessions: '8 sessions',
                price: '$440',
                perSession: '$55/session',
                features: ['2 months validity', 'Nutrition consultation', 'Workout plan', 'Progress tracking'],
                popular: true,
              },
              {
                name: 'Dedicated',
                sessions: '16 sessions',
                price: '$800',
                perSession: '$50/session',
                features: ['3 months validity', 'Full nutrition plan', 'Custom workout program', 'Weekly check-ins', 'Priority scheduling'],
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card p-6 ${
                  pkg.popular ? 'ring-4 ring-primary' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-heading font-bold text-center mb-2">
                  {pkg.name}
                </h3>
                <p className="text-center text-gray-600 mb-4">{pkg.sessions}</p>
                <div className="text-center mb-2">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                </div>
                <p className="text-center text-sm text-gray-600 mb-6">
                  {pkg.perSession}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-secondary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'btn btn-primary'
                      : 'btn btn-outline'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            All packages include a free fitness assessment and goal-setting session
          </p>
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
              Ready to Work with a Pro?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule a complimentary consultation to meet your trainer and discuss your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-accent text-lg px-8">
                Book Free Consultation
              </Link>
              <Link
                to="/memberships"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8"
              >
                View Memberships
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
