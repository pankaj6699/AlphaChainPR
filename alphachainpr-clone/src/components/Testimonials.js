import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      company: 'NebulaSwap',
      companyType: 'DeFi Protocol',
      text: 'AlphaChainPR took our vision and turned it into a compelling Web3 narrative that resonates. From crafting crisp messaging for our token launch to securing tier-one media coverage, they delivered results—fast. Our community grew 300% in just 60 days!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Growth',
      company: 'CryptoVault',
      companyType: 'NFT Marketplace',
      text: 'The team at AlphaChainPR doesn\'t just execute campaigns—they become strategic partners. Their influencer network and community management expertise helped us build a loyal following of 50K+ active users. Highly recommend!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Dr. Amanda Foster',
      role: 'CTO',
      company: 'BlockHealth',
      companyType: 'Healthcare Blockchain',
      text: 'Working with AlphaChainPR was a game-changer for our healthcare blockchain project. They helped us navigate complex regulatory messaging and positioned us as thought leaders in the space. Professional, strategic, and results-driven.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      name: 'David Kim',
      role: 'Co-Founder',
      company: 'MetaGaming Guild',
      companyType: 'Play-to-Earn Platform',
      text: 'From our gaming token launch to building our Discord community of 100K+ members, AlphaChainPR delivered beyond expectations. Their understanding of gaming culture and Web3 mechanics is unmatched in the industry.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'GreenChain Solutions',
      companyType: 'Sustainability Platform',
      text: 'AlphaChainPR helped us bridge traditional sustainability with blockchain technology. Their content creation and SEO strategies positioned us as innovators in green finance. The results speak for themselves—200% organic growth!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      name: 'Alex Petrov',
      role: 'Founder',
      company: 'DeFiYield Protocol',
      companyType: 'Yield Farming Platform',
      text: 'The ROI on our partnership with AlphaChainPR has been incredible. They don\'t just create hype—they create lasting value. Our TVL increased by 400% and we secured partnerships with major DeFi protocols. Worth every penny!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 text-blue-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Client Success Stories
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Trusted by
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. See how we've helped Web3 projects achieve extraordinary growth
              and build thriving communities across the blockchain ecosystem.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 border border-gray-100"
              >
                {/* Gradient Top Border */}
                <div className={`h-1 bg-gradient-to-r ${testimonial.gradient} w-full rounded-t-3xl`}></div>

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-9.57a.5.5 0 01.485.378l.271 1.086a.5.5 0 01-.485.622c-3.707 0-6.254 2.302-6.254 7.01v.438c0 .498.5.872.986.937l.943.156a.5.5 0 01.448.497v1.5a.5.5 0 01-.448.497l-.943.156c-.486.065-.986.439-.986.937v3.234a.5.5 0 01-.5.5h-.5zM7.983 21v-7.391c0-5.704 3.731-9.57 8.983-9.57a.5.5 0 01.485.378l.271 1.086a.5.5 0 01-.485.622c-3.707 0-6.254 2.302-6.254 7.01v.438c0 .498.5.872.986.937l.943.156a.5.5 0 01.448.497v1.5a.5.5 0 01-.448.497l-.943.156c-.486.065-.986.439-.986.937v3.234a.5.5 0 01-.5.5h-.5z"/>
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    {testimonial.rating}.0 Rating
                  </span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      {testimonial.company} • {testimonial.companyType}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-3xl`}></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                150+
              </div>
              <div className="text-gray-600 font-medium">Projects Launched</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                400%
              </div>
              <div className="text-gray-600 font-medium">Average Growth</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-4">
                  Join Our Success Stories
                </h3>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                  Ready to transform your Web3 project into the next big success story? Let's discuss your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="flex items-center">
                      Start Your Success Story
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </span>
                  </button>
                  <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
