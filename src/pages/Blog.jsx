import { motion } from 'framer-motion';
import { useState } from 'react';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus(''), 3000);
    }
  };

  const categories = ['All', 'Workouts', 'Nutrition', 'Recovery', 'Mindset', 'Training Tips'];

  const articles = [
    {
      title: '5 HIIT Workouts You Can Do Anywhere',
      category: 'Workouts',
      author: 'Sarah Martinez',
      date: 'Oct 20, 2025',
      readTime: '5 min read',
      excerpt: 'No gym? No problem! These high-intensity interval training workouts require zero equipment and can be done in your living room, hotel, or park.',
      image: '🔥',
      tags: ['HIIT', 'Home Workouts', 'Beginner Friendly'],
    },
    {
      title: 'The Complete Guide to Protein: How Much Do You Really Need?',
      category: 'Nutrition',
      author: 'David Lee',
      date: 'Oct 18, 2025',
      readTime: '8 min read',
      excerpt: 'Confused about protein intake? This comprehensive guide breaks down protein requirements for different fitness goals, including muscle building and fat loss.',
      image: '🥩',
      tags: ['Protein', 'Nutrition', 'Muscle Building'],
    },
    {
      title: 'Why Rest Days Are Just As Important As Training Days',
      category: 'Recovery',
      author: 'Emma Wilson',
      date: 'Oct 15, 2025',
      readTime: '6 min read',
      excerpt: 'Learn why recovery is crucial for progress and how to optimize your rest days for maximum gains. Includes active recovery strategies and sleep tips.',
      image: '😴',
      tags: ['Recovery', 'Rest Days', 'Sleep'],
    },
    {
      title: 'Building Mental Toughness: Lessons From Elite Athletes',
      category: 'Mindset',
      author: 'Jake Morrison',
      date: 'Oct 12, 2025',
      readTime: '7 min read',
      excerpt: 'Mental strength is just as important as physical strength. Discover strategies elite athletes use to push through challenges and achieve their goals.',
      image: '🧠',
      tags: ['Mindset', 'Motivation', 'Mental Health'],
    },
    {
      title: 'Meal Prep 101: Save Time and Stay On Track',
      category: 'Nutrition',
      author: 'Carlos Rivera',
      date: 'Oct 10, 2025',
      readTime: '10 min read',
      excerpt: 'Master the art of meal prepping with this beginner-friendly guide. Includes recipes, storage tips, and weekly meal prep strategies.',
      image: '🍱',
      tags: ['Meal Prep', 'Nutrition', 'Time Management'],
    },
    {
      title: 'The Truth About Progressive Overload',
      category: 'Training Tips',
      author: 'Mike Thompson',
      date: 'Oct 8, 2025',
      readTime: '6 min read',
      excerpt: 'Understanding progressive overload is key to continuous gains. Learn how to properly apply this principle to your training for consistent progress.',
      image: '📈',
      tags: ['Strength Training', 'Progressive Overload', 'Advanced'],
    },
    {
      title: 'Yoga for Athletes: Improve Flexibility and Performance',
      category: 'Recovery',
      author: 'Maya Chen',
      date: 'Oct 5, 2025',
      readTime: '7 min read',
      excerpt: 'Discover how incorporating yoga into your training routine can enhance athletic performance, prevent injuries, and improve recovery.',
      image: '🧘',
      tags: ['Yoga', 'Flexibility', 'Injury Prevention'],
    },
    {
      title: 'CrossFit Benchmark Workouts: Test Your Fitness Level',
      category: 'Workouts',
      author: 'Jake Morrison',
      date: 'Oct 3, 2025',
      readTime: '9 min read',
      excerpt: 'A complete guide to CrossFit\'s most famous benchmark workouts including Fran, Murph, and Cindy. Learn what they test and how to tackle them.',
      image: '⚡',
      tags: ['CrossFit', 'Benchmarks', 'WOD'],
    },
  ];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

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
              Fitness Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Expert advice on training, nutrition, and wellness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 sticky top-0 z-40 shadow-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-12">
                <div className="text-9xl">{articles[0].image}</div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="bg-accent text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    Featured Article
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {articles[0].excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-2 text-primary" />
                    {articles[0].author}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2 text-primary" />
                    {articles[0].date}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-2 text-primary" />
                    {articles[0].readTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {articles[0].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-50 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="btn btn-primary w-fit">
                  Read Full Article
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-gray-600">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden group hover:scale-105 transition-transform cursor-pointer"
              >
                {/* Article Image/Icon */}
                <div className="bg-gradient-to-br from-primary to-secondary h-48 flex items-center justify-center">
                  <div className="text-8xl">{article.image}</div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-secondary-50 text-secondary-700 text-xs font-bold rounded-full">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <UserIcon className="w-3 h-3 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="text-primary font-semibold text-sm hover:underline">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">📧</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest fitness tips, workout ideas, and nutrition advice delivered to your inbox weekly
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-accent outline-none"
                required
              />
              <button
                type="submit"
                className="btn btn-accent px-8 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            {subscribeStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent text-sm mt-4 font-semibold"
              >
                ✓ Successfully subscribed! Check your email for confirmation.
              </motion.p>
            )}
            {!subscribeStatus && (
              <p className="text-sm text-gray-400 mt-4">
                Join 5,000+ fitness enthusiasts. Unsubscribe anytime.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Popular Topics</h2>
            <p className="section-subtitle">
              Explore articles by topic
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Strength Training', icon: '💪', count: 24 },
              { name: 'Weight Loss', icon: '📉', count: 18 },
              { name: 'Nutrition', icon: '🥗', count: 32 },
              { name: 'Cardio', icon: '🏃', count: 15 },
              { name: 'Yoga', icon: '🧘', count: 12 },
              { name: 'Recovery', icon: '😴', count: 16 },
            ].map((topic, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card p-6 text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-2">{topic.icon}</div>
                <p className="font-semibold text-sm mb-1">{topic.name}</p>
                <p className="text-xs text-gray-600">{topic.count} articles</p>
              </motion.button>
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
              Turn Knowledge Into Action
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to apply what you've learned? Join IronCore and get personalized guidance from our expert trainers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-accent text-lg px-8">
                Start Free Trial
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                Talk to a Trainer
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
