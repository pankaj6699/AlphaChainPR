import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { APP_CONFIG } from '../config/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white shadow-2xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-full blur-3xl"></div>

      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="flex justify-between items-center py-6 lg:py-8">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent tracking-wide">
              AlphaChain<span className="text-white">PR</span>
            </h1>
          </div>

          {/* Desktop Navigation - Centered with flex-1 */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4 xl:mx-12">
            <div className="flex items-center space-x-3 xl:space-x-5">
              <Link to="/" className="relative group font-medium text-white/90 hover:text-white transition-all duration-300 px-3 py-2 text-sm xl:text-base">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link to="/about" className="relative group font-medium text-white/90 hover:text-white transition-all duration-300 px-3 py-2 text-sm xl:text-base">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link to="/services" className="relative group font-medium text-white/90 hover:text-white transition-all duration-300 px-3 py-2 text-sm xl:text-base">
                Services
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link to="/portfolio" className="relative group font-medium text-white/90 hover:text-white transition-all duration-300 px-3 py-2 text-sm xl:text-base">
                Portfolio
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link to="/contact" className="relative group font-medium text-white/90 hover:text-white transition-all duration-300 px-3 py-2 text-sm xl:text-base">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>
          </nav>

          {/* Right Side - Contact (icon-only) & Social */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-5 flex-shrink-0">
            {/* Compact phone icon button */}
            <a
              href={`tel:${APP_CONFIG.contact.phone}`}
              className="w-9 h-9 xl:w-10 xl:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-blue-400/60 transition-all duration-300 group"
              aria-label="Call us"
            >
              <svg
                className="w-4 h-4 xl:w-5 xl:h-5 text-white/80 group-hover:text-blue-400 group-hover:scale-110 transition-transform duration-200"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 xl:space-x-3 pr-8">
              <a href="https://twitter.com/alphachainpr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 xl:w-10 xl:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 group">
                <svg className="w-4 h-4 xl:w-5 xl:h-5 text-white/80 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/alphachainpr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 xl:w-10 xl:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 group">
                <svg className="w-4 h-4 xl:w-5 xl:h-5 text-white/80 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://t.me/alphachainpr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 xl:w-10 xl:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 group">
                <svg className="w-4 h-4 xl:w-5 xl:h-5 text-white/80 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-8 pt-6 border-t border-white/20 animate-fade-in-up">
            <nav className="flex flex-col space-y-4 mb-6">
              <Link to="/" className="block py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="block py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium" onClick={closeMenu}>About</Link>
              <Link to="/services" className="block py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium" onClick={closeMenu}>Services</Link>
              <Link to="/portfolio" className="block py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium" onClick={closeMenu}>Portfolio</Link>
              <Link to="/contact" className="block py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium" onClick={closeMenu}>Contact</Link>
            </nav>

            {/* Mobile Contact Info & Social */}
            <div className="pt-6 border-t border-white/20 space-y-4">
              <div className="px-4">
                <h4 className="text-white font-semibold mb-3">Contact Us</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span className="text-white/90">{APP_CONFIG.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span className="text-white/90">{APP_CONFIG.contact.email}</span>
                  </div>
                </div>
              </div>

              {/* Mobile Social Media */}
              <div className="px-4">
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex items-center space-x-3">
                  <a href={APP_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300">
                    <svg className="w-5 h-5 text-white/80 hover:text-blue-400 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href={APP_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300">
                    <svg className="w-5 h-5 text-white/80 hover:text-blue-500 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={APP_CONFIG.social.telegram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300">
                    <svg className="w-5 h-5 text-white/80 hover:text-blue-400 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
