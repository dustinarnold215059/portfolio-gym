import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IC</span>
              </div>
              <div>
                <h3 className="font-heading text-xl">IronCore Fitness</h3>
                <p className="text-sm text-gray-400">Forge Your Strength</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your life with our state-of-the-art facilities, expert trainers, and supportive community.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <span className="text-lg">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <span className="text-lg">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <span className="text-lg">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/memberships" className="text-gray-400 hover:text-accent transition-colors">
                  Memberships
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-accent transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="text-gray-400 hover:text-accent transition-colors">
                  Personal Trainers
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-400 hover:text-accent transition-colors">
                  Our Facilities
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Nutrition Coaching</li>
              <li>Athletic Performance</li>
              <li>Recovery Services</li>
              <li>Virtual Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  789 Fitness Blvd<br />
                  Livonia, MI 48150
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-400 text-sm">(734) 555-IRON (4766)</span>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@ironcorefitness.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <ClockIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Mon-Fri: 5AM - 11PM</p>
                  <p>Sat-Sun: 6AM - 9PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} IronCore Fitness. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
