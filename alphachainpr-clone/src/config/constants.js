// Centralized configuration for AlphaChainPR

export const APP_CONFIG = {
  // App Information
  name: 'AlphaChainPR',
  tagline: 'Web3 Marketing Excellence',
  description: 'Leading Web3 marketing agency helping blockchain projects achieve explosive growth through strategic PR, advertising, and community building.',
  
  // Contact Information
  contact: {
    phone: process.env.REACT_APP_CONTACT_PHONE || '+1 (555) 123-4567',
    email: process.env.REACT_APP_CONTACT_EMAIL || 'hello@alphachainpr.com',
    address: '123 Blockchain Ave, Crypto City, CA 90210'
  },
  
  // Social Media Links
  social: {
    twitter: process.env.REACT_APP_TWITTER_URL || 'https://twitter.com/alphachainpr',
    linkedin: process.env.REACT_APP_LINKEDIN_URL || 'https://linkedin.com/company/alphachainpr',
    discord: process.env.REACT_APP_DISCORD_URL || 'https://discord.gg/alphachainpr',
    telegram: process.env.REACT_APP_TELEGRAM_URL || 'https://t.me/alphachainpr'
  },
  
  // API Endpoints
  api: {
    baseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api',
    contactForm: process.env.REACT_APP_CONTACT_FORM_ENDPOINT,
    newsletter: process.env.REACT_APP_NEWSLETTER_ENDPOINT
  },
  
  // Analytics Configuration
  analytics: {
    enabled: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
    googleAnalyticsId: process.env.REACT_APP_GA_TRACKING_ID,
    facebookPixelId: process.env.REACT_APP_FACEBOOK_PIXEL_ID,
    hotjarId: process.env.REACT_APP_HOTJAR_ID
  },
  
  // Feature Flags
  features: {
    analytics: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
    chatWidget: process.env.REACT_APP_ENABLE_CHAT_WIDGET === 'true',
    newsletter: process.env.REACT_APP_ENABLE_NEWSLETTER !== 'false'
  },
  
  // Navigation Routes
  routes: {
    home: '/',
    about: '/about',
    services: '/services',
    portfolio: '/portfolio',
    contact: '/contact',
    blog: '/blog'
  },
  
  // SEO Configuration
  seo: {
    defaultTitle: 'AlphaChainPR - Web3 Marketing Excellence | Blockchain PR & Growth Agency',
    defaultDescription: 'Transform your Web3 vision into reality with strategic marketing, PR, and community building. Trusted by 150+ blockchain projects.',
    keywords: [
      'Web3 marketing',
      'blockchain PR', 
      'crypto advertising',
      'DeFi marketing',
      'NFT marketing',
      'community building',
      'influencer marketing',
      'token launch',
      'blockchain growth'
    ],
    author: 'AlphaChainPR',
    siteUrl: process.env.REACT_APP_SITE_URL || 'https://alphachainpr.com'
  }
};

export const SERVICES_DATA = [
  {
    id: 1,
    title: 'Strategic PR & Media Outreach',
    description: 'Get featured in top crypto publications and build credibility through strategic media placements.',
    icon: '📰',
    gradient: 'from-blue-500 to-purple-500',
    features: ['Press Release Distribution', 'Media Relations', 'Thought Leadership', 'Crisis Management']
  },
  {
    id: 2,
    title: 'Performance Advertising',
    description: 'Drive targeted traffic and conversions with data-driven advertising campaigns across crypto platforms.',
    icon: '📈',
    gradient: 'from-purple-500 to-indigo-500',
    features: ['Google Ads', 'Social Media Ads', 'Retargeting', 'Conversion Optimization']
  },
  {
    id: 3,
    title: 'Community Building & Management',
    description: 'Build and nurture engaged communities across Discord, Telegram, and social platforms.',
    icon: '👥',
    gradient: 'from-indigo-500 to-cyan-500',
    features: ['Discord Management', 'Telegram Growth', 'Community Moderation', 'Engagement Campaigns']
  },
  {
    id: 4,
    title: 'Influencer Marketing & KOL Partnerships',
    description: 'Partner with influential voices in the crypto space to amplify your message and reach.',
    icon: '🌟',
    gradient: 'from-cyan-500 to-blue-500',
    features: ['KOL Identification', 'Partnership Management', 'Campaign Coordination', 'ROI Tracking']
  },
  {
    id: 5,
    title: 'Content Creation & Thought Leadership',
    description: 'Create compelling content that establishes your project as an industry leader.',
    icon: '✍️',
    gradient: 'from-blue-500 to-purple-500',
    features: ['Blog Content', 'White Papers', 'Video Content', 'Infographics']
  },
  {
    id: 6,
    title: 'Guest Posting & SEO Growth',
    description: 'Publish authoritative articles on high-domain platforms to boost visibility and credibility.',
    icon: '🔍',
    gradient: 'from-orange-500 to-yellow-500',
    features: ['SEO Optimization', 'Guest Articles', 'Link Building', 'Keyword Research']
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'DeFi Protocol X',
    companyType: 'DeFi',
    text: 'AlphaChainPR helped us achieve a 400% increase in community engagement within 3 months. Their strategic approach to Web3 marketing is unmatched.',
    rating: 5,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Founder',
    company: 'NFT Marketplace',
    companyType: 'NFT',
    text: 'The team at AlphaChainPR understands the crypto space deeply. They helped us launch our NFT project with incredible results.',
    rating: 5,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Marketing Director',
    company: 'Gaming Token',
    companyType: 'Gaming',
    text: 'Working with AlphaChainPR was a game-changer for our token launch. Their expertise in community building is exceptional.',
    rating: 5,
    gradient: 'from-indigo-500 to-cyan-500'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CTO',
    company: 'Layer 2 Solution',
    companyType: 'Infrastructure',
    text: 'AlphaChainPR delivered beyond our expectations. Their data-driven approach helped us reach the right audience and achieve our goals.',
    rating: 5,
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'COO',
    company: 'Enterprise Blockchain',
    companyType: 'Enterprise',
    text: 'The strategic guidance from AlphaChainPR helped us navigate the complex Web3 landscape. Highly recommended for any serious project.',
    rating: 5,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    id: 6,
    name: 'James Taylor',
    role: 'Project Lead',
    company: 'DeFi Yield Farm',
    companyType: 'DeFi',
    text: 'Outstanding service and results! AlphaChainPR helped us build a thriving community and secure major partnerships.',
    rating: 5,
    gradient: 'from-purple-500 to-indigo-500'
  }
];

export const STATS_DATA = [
  { value: '150+', label: 'Projects Launched', gradient: 'from-blue-400 to-purple-400' },
  { value: '$2B+', label: 'Media Reach', gradient: 'from-purple-400 to-indigo-400' },
  { value: '50M+', label: 'Community Members', gradient: 'from-indigo-400 to-cyan-400' },
  { value: '98%', label: 'Success Rate', gradient: 'from-cyan-400 to-blue-400' }
];
