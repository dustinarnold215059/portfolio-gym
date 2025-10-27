import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Facilities = () => {
  const facilities = [
    {
      name: 'Strength Training Zone',
      description: 'Premium free weights, power racks, and specialized strength equipment',
      features: ['Olympic platforms', 'Dumbbells up to 150lbs', 'Power racks', 'Specialty bars'],
      icon: '🏋️',
      size: '3,000 sq ft',
    },
    {
      name: 'Cardio Center',
      description: 'State-of-the-art cardio machines with entertainment systems',
      features: ['Treadmills', 'Ellipticals', 'Rowing machines', 'Stair climbers', 'Bikes'],
      icon: '🏃',
      size: '2,500 sq ft',
    },
    {
      name: 'Functional Training Area',
      description: 'Open space for dynamic movements and functional fitness',
      features: ['Turf area', 'Battle ropes', 'TRX stations', 'Plyometric boxes', 'Sleds'],
      icon: '⚡',
      size: '2,000 sq ft',
    },
    {
      name: 'Group Exercise Studios',
      description: 'Two dedicated studios for yoga, spin, and group classes',
      features: ['Premium sound systems', 'Sprung floors', '30+ bikes', 'Yoga props'],
      icon: '👥',
      size: '1,800 sq ft each',
    },
    {
      name: 'CrossFit Box',
      description: 'Dedicated space for Olympic lifting and CrossFit workouts',
      features: ['Lifting platforms', 'Bumper plates', 'Assault bikes', 'Pull-up rigs'],
      icon: '💪',
      size: '2,500 sq ft',
    },
    {
      name: 'Boxing Ring',
      description: 'Full-size boxing ring and heavy bag area',
      features: ['Competition ring', 'Heavy bags', 'Speed bags', 'Training area'],
      icon: '🥊',
      size: '1,500 sq ft',
    },
    {
      name: 'Recovery Zone',
      description: 'Dedicated space for stretching, mobility, and recovery',
      features: ['Foam rollers', 'Massage guns', 'Stretch area', 'Sauna', 'Steam room'],
      icon: '🧘',
      size: '1,000 sq ft',
    },
    {
      name: 'Locker Rooms',
      description: 'Spacious, clean facilities with premium amenities',
      features: ['Day lockers', 'Showers', 'Towel service (Premium+)', 'Grooming stations'],
      icon: '🚿',
      size: '1,200 sq ft each',
    },
  ];

  const equipment = [
    { category: 'Cardio', items: ['25 Treadmills', '15 Ellipticals', '10 Bikes', '8 Rowers', '5 Stair Climbers'] },
    { category: 'Strength', items: ['Full dumbbell set', '8 Power racks', '6 Bench stations', 'Cable machines', 'Smith machines'] },
    { category: 'Functional', items: ['Kettlebells', 'Medicine balls', 'Battle ropes', 'TRX systems', 'Resistance bands'] },
    { category: 'Specialized', items: ['Assault bikes', 'Ski ergs', 'Sleds', 'Tires', 'Prowlers'] },
  ];

  const amenities = [
    { name: 'Free WiFi', icon: '📶', description: 'High-speed internet throughout' },
    { name: 'Parking', icon: '🅿️', description: 'Free parking for all members' },
    { name: 'Towel Service', icon: '🧺', description: 'Premium & Elite members' },
    { name: 'Showers', icon: '🚿', description: 'Clean, private facilities' },
    { name: 'Lockers', icon: '🔒', description: 'Day-use and rental available' },
    { name: 'Water Stations', icon: '💧', description: 'Stay hydrated' },
    { name: 'Juice Bar', icon: '🥤', description: 'Smoothies & supplements' },
    { name: 'Pro Shop', icon: '🛍️', description: 'Apparel & accessories' },
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
              World-Class Facilities
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              15,000+ square feet of premium fitness space and equipment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Spaces</h2>
            <p className="section-subtitle">
              Dedicated zones for every type of workout
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 hover:scale-105 transition-transform"
              >
                <div className="text-6xl mb-4 text-center">{facility.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-2 text-center">
                  {facility.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  {facility.description}
                </p>
                <div className="text-xs text-center text-primary font-semibold mb-4">
                  {facility.size}
                </div>
                <ul className="space-y-1">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center">
                      <span className="text-secondary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Premium Equipment</h2>
            <p className="section-subtitle">
              Top-tier brands and the latest fitness technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-accent mr-2">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Equipment from industry leaders including:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-500 font-semibold">
              <span>Life Fitness</span>
              <span>•</span>
              <span>Rogue</span>
              <span>•</span>
              <span>Hammer Strength</span>
              <span>•</span>
              <span>Concept2</span>
              <span>•</span>
              <span>Assault Fitness</span>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Member Amenities</h2>
            <p className="section-subtitle">
              Everything you need for a great workout experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="text-5xl mb-3">{amenity.icon}</div>
                <h3 className="font-heading font-bold mb-1">{amenity.name}</h3>
                <p className="text-xs text-gray-600">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Take a Virtual Tour
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Explore our 15,000 sq ft facility from the comfort of your home. See our equipment,
                spaces, and amenities in stunning detail.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-accent text-2xl mr-4">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">360° Views</h4>
                    <p className="text-gray-400 text-sm">Navigate through every zone</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-accent text-2xl mr-4">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">Equipment Close-ups</h4>
                    <p className="text-gray-400 text-sm">See our premium gear up close</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-accent text-2xl mr-4">✓</span>
                  <div>
                    <h4 className="font-bold mb-1">Measure Spaces</h4>
                    <p className="text-gray-400 text-sm">Get a true sense of our size</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 text-center"
            >
              <div className="text-8xl mb-6">🏢</div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Virtual Tour Coming Soon
              </h3>
              <p className="text-gray-400 mb-6">
                Or better yet, schedule an in-person tour with one of our team members
              </p>
              <Link to="/contact" className="btn btn-accent inline-block">
                Schedule In-Person Tour
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Visit Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">
                Hours of Operation
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-semibold">Monday - Friday</span>
                  <span className="text-primary font-bold">5:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-semibold">Saturday - Sunday</span>
                  <span className="text-primary font-bold">6:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold">Holidays</span>
                  <span className="text-gray-600">Reduced hours</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent-50 rounded-lg text-center">
                <p className="text-sm font-semibold text-gray-700">
                  24/7 Access Available for Elite Members
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">
                Location
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="font-semibold text-lg mb-2">IronCore Fitness</p>
                  <p className="text-gray-600">789 Fitness Blvd</p>
                  <p className="text-gray-600">Livonia, MI 48150</p>
                </div>
                <div className="border-t pt-4 space-y-2">
                  <div className="flex items-center justify-center">
                    <span className="font-semibold mr-2">Phone:</span>
                    <span className="text-primary">(734) 555-4766</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="font-semibold mr-2">Email:</span>
                    <span className="text-primary">info@ironcorefitness.com</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center btn btn-primary"
                  >
                    Get Directions
                  </Link>
                </div>
              </div>
            </motion.div>
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
              Experience IronCore Fitness
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              See why our members love training at Livonia's premier fitness facility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-accent text-lg px-8">
                Schedule a Tour
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

export default Facilities;
