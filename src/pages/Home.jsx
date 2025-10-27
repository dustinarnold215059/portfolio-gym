import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  FireIcon,
  HeartIcon,
  TrophyIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const programs = [
    {
      icon: <BoltIcon className="w-12 h-12" />,
      title: 'Strength Training',
      description: 'Build muscle and power with our comprehensive strength programs',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <FireIcon className="w-12 h-12" />,
      title: 'HIIT Workouts',
      description: 'High-intensity interval training for maximum calorie burn',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <HeartIcon className="w-12 h-12" />,
      title: 'Cardio Fitness',
      description: 'Improve endurance and cardiovascular health',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <TrophyIcon className="w-12 h-12" />,
      title: 'Athletic Performance',
      description: 'Sport-specific training to enhance your game',
      color: 'from-yellow-500 to-amber-600'
    }
  ];

  const transformations = [
    { name: 'Sarah M.', result: '45 lbs lost', time: '6 months', image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400' },
    { name: 'Mike R.', result: '30 lbs muscle gain', time: '8 months', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400' },
    { name: 'Jessica L.', result: 'Marathon Ready', time: '4 months', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400' }
  ];

  const facilities = [
    { name: 'Cardio Zone', description: 'State-of-the-art treadmills, bikes, and rowers' },
    { name: 'Free Weights', description: 'Complete dumbbell and barbell area' },
    { name: 'Group Studio', description: 'Spacious room for group classes' },
    { name: 'Recovery Area', description: 'Stretching zone and massage chairs' }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      role: 'Member since 2022',
      text: 'IronCore transformed my life. The trainers are knowledgeable, facilities are top-notch, and the community is incredibly supportive.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Premium Member',
      text: 'Best gym investment I ever made. The variety of classes keeps me motivated and the results speak for themselves.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Elite Member',
      text: 'From beginner to athlete, IronCore has been with me every step. The personalized attention makes all the difference.',
      rating: 5
    }
  ];

  const stats = [
    { number: '5000+', label: 'Active Members' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '100+', label: 'Weekly Classes' },
    { number: '15+', label: 'Years Excellence' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="gradient-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-shadow"
          >
            Transform Your Life at<br />
            <span className="text-accent">IronCore Fitness</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-shadow"
          >
            Forge Your Strength. Transform Your Life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn btn-accent text-lg px-8 py-4">
              Start Free Trial
            </Link>
            <Link to="/memberships" className="btn btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
              View Memberships
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">
              Comprehensive training programs designed for your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center group hover:-translate-y-2 transition-transform"
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Success Transformations</h2>
            <p className="section-subtitle">
              Real people. Real results. Real inspiration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {transformations.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{person.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-primary">{person.result}</span>
                    <span className="text-gray-600">in {person.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/success-stories" className="btn btn-primary">
              View All Success Stories
              <ArrowRightIcon className="w-5 h-5 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                World-Class <span className="text-accent">Facilities</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Train in comfort with our state-of-the-art equipment and premium amenities.
              </p>
              <ul className="space-y-4">
                {facilities.map((facility, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">{facility.name}</h4>
                      <p className="text-gray-400">{facility.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/facilities" className="btn btn-accent mt-8 inline-block">
                Tour Our Facility
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-full min-h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800"
                alt="Gym Facility"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Popular Classes</h2>
            <p className="section-subtitle">
              Join our high-energy group classes led by expert instructors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'HIIT Bootcamp', time: 'Mon, Wed, Fri - 6:00 AM', intensity: 'High', instructor: 'Mike Torres' },
              { name: 'Power Yoga', time: 'Tue, Thu - 7:00 PM', intensity: 'Medium', instructor: 'Sarah Chen' },
              { name: 'Spin Class', time: 'Daily - 5:30 PM', intensity: 'High', instructor: 'Alex Rivera' }
            ].map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-2xl font-heading font-bold mb-3">{classItem.name}</h3>
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="w-5 h-5 text-primary" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FireIcon className="w-5 h-5 text-primary" />
                    <span>Intensity: {classItem.intensity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserGroupIcon className="w-5 h-5 text-primary" />
                    <span>with {classItem.instructor}</span>
                  </div>
                </div>
                <button className="btn btn-outline w-full">Book Class</button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/classes" className="btn btn-primary">
              View Full Schedule
              <ArrowRightIcon className="w-5 h-5 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-white">What Our Members Say</h2>
            <p className="section-subtitle text-gray-100">
              Join thousands of satisfied members achieving their fitness goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-200">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join IronCore Fitness today and get your first week free. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-accent text-lg px-8 py-4">
                Claim Free Week
              </Link>
              <Link to="/memberships" className="btn btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
                Compare Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
