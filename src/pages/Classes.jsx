import { motion } from 'framer-motion';
import { ClockIcon, FireIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Classes = () => {
  const classes = [
    {
      name: 'HIIT Blast',
      description: 'High-Intensity Interval Training for maximum calorie burn and endurance building',
      duration: '45 min',
      intensity: 'High',
      instructor: 'Sarah Martinez',
      image: '🔥',
      maxParticipants: 20,
      schedule: ['Mon 6:00 AM', 'Wed 6:00 AM', 'Fri 6:00 AM'],
    },
    {
      name: 'Power Yoga',
      description: 'Dynamic flow combining strength, flexibility, and mindfulness',
      duration: '60 min',
      intensity: 'Medium',
      instructor: 'Maya Chen',
      image: '🧘',
      maxParticipants: 25,
      schedule: ['Tue 7:00 AM', 'Thu 7:00 AM', 'Sat 9:00 AM'],
    },
    {
      name: 'Spin Class',
      description: 'High-energy indoor cycling with motivating music and challenging intervals',
      duration: '50 min',
      intensity: 'High',
      instructor: 'Mike Thompson',
      image: '🚴',
      maxParticipants: 30,
      schedule: ['Mon 5:30 PM', 'Wed 5:30 PM', 'Fri 5:30 PM'],
    },
    {
      name: 'CrossFit WOD',
      description: 'Constantly varied functional movements performed at high intensity',
      duration: '60 min',
      intensity: 'Very High',
      instructor: 'Jake Morrison',
      image: '⚡',
      maxParticipants: 15,
      schedule: ['Mon 7:00 PM', 'Tue 7:00 PM', 'Thu 7:00 PM'],
    },
    {
      name: 'Boxing Bootcamp',
      description: 'Punch your way to fitness with boxing techniques and conditioning',
      duration: '55 min',
      intensity: 'High',
      instructor: 'Carlos Rivera',
      image: '🥊',
      maxParticipants: 18,
      schedule: ['Tue 6:00 PM', 'Thu 6:00 PM', 'Sat 10:00 AM'],
    },
    {
      name: 'Zumba Party',
      description: 'Dance fitness party with Latin and international music',
      duration: '50 min',
      intensity: 'Medium',
      instructor: 'Isabella Garcia',
      image: '💃',
      maxParticipants: 30,
      schedule: ['Mon 6:30 PM', 'Wed 6:30 PM', 'Fri 6:30 PM'],
    },
    {
      name: 'Strength & Conditioning',
      description: 'Build muscle and power with compound movements and progressive overload',
      duration: '60 min',
      intensity: 'High',
      instructor: 'David Lee',
      image: '💪',
      maxParticipants: 20,
      schedule: ['Tue 5:00 PM', 'Thu 5:00 PM', 'Sat 11:00 AM'],
    },
    {
      name: 'Pilates Core',
      description: 'Low-impact workout focusing on core strength, flexibility, and posture',
      duration: '45 min',
      intensity: 'Low',
      instructor: 'Emma Wilson',
      image: '🌟',
      maxParticipants: 20,
      schedule: ['Mon 9:00 AM', 'Wed 9:00 AM', 'Fri 9:00 AM'],
    },
  ];

  const weekSchedule = [
    {
      day: 'Monday',
      sessions: [
        { time: '6:00 AM', class: 'HIIT Blast', instructor: 'Sarah Martinez' },
        { time: '9:00 AM', class: 'Pilates Core', instructor: 'Emma Wilson' },
        { time: '5:30 PM', class: 'Spin Class', instructor: 'Mike Thompson' },
        { time: '6:30 PM', class: 'Zumba Party', instructor: 'Isabella Garcia' },
        { time: '7:00 PM', class: 'CrossFit WOD', instructor: 'Jake Morrison' },
      ],
    },
    {
      day: 'Tuesday',
      sessions: [
        { time: '7:00 AM', class: 'Power Yoga', instructor: 'Maya Chen' },
        { time: '5:00 PM', class: 'Strength & Conditioning', instructor: 'David Lee' },
        { time: '6:00 PM', class: 'Boxing Bootcamp', instructor: 'Carlos Rivera' },
        { time: '7:00 PM', class: 'CrossFit WOD', instructor: 'Jake Morrison' },
      ],
    },
    {
      day: 'Wednesday',
      sessions: [
        { time: '6:00 AM', class: 'HIIT Blast', instructor: 'Sarah Martinez' },
        { time: '9:00 AM', class: 'Pilates Core', instructor: 'Emma Wilson' },
        { time: '5:30 PM', class: 'Spin Class', instructor: 'Mike Thompson' },
        { time: '6:30 PM', class: 'Zumba Party', instructor: 'Isabella Garcia' },
      ],
    },
    {
      day: 'Thursday',
      sessions: [
        { time: '7:00 AM', class: 'Power Yoga', instructor: 'Maya Chen' },
        { time: '5:00 PM', class: 'Strength & Conditioning', instructor: 'David Lee' },
        { time: '6:00 PM', class: 'Boxing Bootcamp', instructor: 'Carlos Rivera' },
        { time: '7:00 PM', class: 'CrossFit WOD', instructor: 'Jake Morrison' },
      ],
    },
    {
      day: 'Friday',
      sessions: [
        { time: '6:00 AM', class: 'HIIT Blast', instructor: 'Sarah Martinez' },
        { time: '9:00 AM', class: 'Pilates Core', instructor: 'Emma Wilson' },
        { time: '5:30 PM', class: 'Spin Class', instructor: 'Mike Thompson' },
        { time: '6:30 PM', class: 'Zumba Party', instructor: 'Isabella Garcia' },
      ],
    },
    {
      day: 'Saturday',
      sessions: [
        { time: '9:00 AM', class: 'Power Yoga', instructor: 'Maya Chen' },
        { time: '10:00 AM', class: 'Boxing Bootcamp', instructor: 'Carlos Rivera' },
        { time: '11:00 AM', class: 'Strength & Conditioning', instructor: 'David Lee' },
      ],
    },
    {
      day: 'Sunday',
      sessions: [
        { time: '9:00 AM', class: 'Recovery Yoga', instructor: 'Maya Chen' },
        { time: '10:00 AM', class: 'Stretch & Mobility', instructor: 'Emma Wilson' },
      ],
    },
  ];

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 'Low':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Very High':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
              Group Fitness Classes
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Expert-led classes designed to challenge and inspire you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Class Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Class Offerings</h2>
            <p className="section-subtitle">
              From high-intensity workouts to mindful movement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 hover:scale-105 transition-transform"
              >
                <div className="text-6xl mb-4 text-center">{classItem.image}</div>

                <h3 className="text-xl font-heading font-bold mb-2 text-center">
                  {classItem.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 text-center">
                  {classItem.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <ClockIcon className="w-4 h-4 mr-2 text-primary" />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FireIcon className="w-4 h-4 mr-2 text-primary" />
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getIntensityColor(classItem.intensity)}`}>
                      {classItem.intensity} Intensity
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <UserGroupIcon className="w-4 h-4 mr-2 text-primary" />
                    <span>Max {classItem.maxParticipants} people</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Instructor: {classItem.instructor}
                  </p>
                  <div className="text-xs text-gray-600">
                    {classItem.schedule.map((time, idx) => (
                      <div key={idx}>{time}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Weekly Schedule</h2>
            <p className="section-subtitle">
              Plan your week with our comprehensive class timetable
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {weekSchedule.map((daySchedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
                  {daySchedule.day}
                </h3>
                <div className="space-y-3">
                  {daySchedule.sessions.map((session, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{session.class}</p>
                        <p className="text-sm text-gray-600">{session.instructor}</p>
                      </div>
                      <div className="text-primary font-bold">{session.time}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Take Group Classes?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Guidance',
                description: 'Certified instructors ensure proper form and technique',
                icon: '👨‍🏫',
              },
              {
                title: 'Motivation & Energy',
                description: 'Group atmosphere pushes you to work harder',
                icon: '⚡',
              },
              {
                title: 'Variety & Fun',
                description: 'Different classes keep workouts exciting',
                icon: '🎉',
              },
              {
                title: 'Community',
                description: 'Build friendships with like-minded people',
                icon: '🤝',
              },
              {
                title: 'Accountability',
                description: 'Scheduled classes help you stay consistent',
                icon: '📅',
              },
              {
                title: 'Cost Effective',
                description: 'Included in all memberships above Basic',
                icon: '💰',
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
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Ready to Join a Class?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your first class free with our 7-day trial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/memberships" className="btn btn-accent text-lg px-8">
                View Memberships
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
