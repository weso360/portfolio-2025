export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tooltip: string;
  technologies: string[];
  features: string[];
  impact: string[];
  position: [number, number, number];
  color: string;
  glowColor: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'living-word',
    title: 'Living Word Platform',
    subtitle: 'Full-Stack Bible Community Platform',
    description: 'Enterprise-grade Bible platform with church communities, live studies, and AI-powered contextual resources. Built as production-ready SaaS with multi-tenant architecture.',
    tooltip: 'Enterprise Bible platform with live studies, church management, and AI contextual resources',
    technologies: ['NestJS', 'GraphQL', 'PostgreSQL', 'Neo4j', 'Redis', 'OpenSearch', 'Flutter', 'AWS', 'Terraform', 'Zoom SDK'],
    features: [
      'Neo4j-powered Scripture Knowledge Graph with contextual resources',
      'Live Study Co-View Sync with <150ms latency during Zoom sessions',
      'Multi-tenant church management with custom branding and RBAC',
      'Cross-platform Flutter apps with offline-first architecture',
      'Clean architecture with SOLID principles, microservices-ready'
    ],
    impact: [
      '25,000+ LOC',
      '300+ API endpoints',
      '99.9% uptime SLA'
    ],
    position: [-4, 1, -2],
    color: '#6366f1',
    glowColor: '#818cf8'
  },
  {
    id: 'humyn',
    title: 'Humyn',
    subtitle: 'AI Text Humanization Platform',
    description: 'Full-stack SaaS that transforms AI-generated text into natural, human-like content with multiple tone options and freemium business model.',
    tooltip: 'AI SaaS platform that humanizes machine-generated text with ethical transparency',
    technologies: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'GPT-3.5', 'Vercel', 'JWT'],
    features: [
      'Multiple tone options: Conversational, Professional, Empathetic, Humorous',
      'Freemium model with Stripe subscription management',
      'Real-time text transformation with progress feedback',
      'Google OAuth integration and usage tracking',
      'Serverless Vercel Functions with auto-scaling',
      'Content filtering and audit logging for compliance'
    ],
    impact: [
      'Serverless architecture',
      'Real-time processing',
      'Payment integration'
    ],
    position: [4, -1, -2],
    color: '#8b5cf6',
    glowColor: '#a855f7',
    liveUrl: 'https://humyn.uk'
  },
  {
    id: 'solana-dex',
    title: 'Solana DEX Momentum Autotrader',
    subtitle: 'Automated Trading System',
    description: 'Production-ready automated trading system combining technical analysis with social sentiment to execute high-probability momentum trades on Solana DEX.',
    tooltip: 'Automated Solana trading system with technical analysis and social sentiment monitoring',
    technologies: ['TypeScript', 'Solana Web3.js', 'Jupiter API', 'Prisma', 'Prometheus', 'Grafana', 'Docker', 'WebSocket'],
    features: [
      'Multi-factor signal generation: Technical (40%), Social (35%), Fundamental (25%)',
      'Three trading strategies: Fresh Launch, Breakout Retest, Volume Surge',
      'Comprehensive risk management with R-multiple framework',
      'Real-time social sentiment analysis across Twitter, Telegram, Reddit',
      'Safety validation: honeypot detection, LP verification, holder analysis',
      'Performance tracking with Sharpe ratio and drawdown monitoring'
    ],
    impact: [
      'Multi-strategy execution',
      'Risk-controlled trading',
      'Real-time monitoring'
    ],
    position: [-2, -2, 1],
    color: '#06b6d4',
    glowColor: '#0891b2'
  },
  {
    id: 'ai-calling',
    title: 'AI Calling Software',
    subtitle: 'Enterprise Customer Service Automation',
    description: 'Comprehensive AI-powered calling system automating customer service and appointment booking with natural language processing and real-time analytics.',
    tooltip: 'Enterprise AI calling platform with voice automation and appointment booking',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'GPT-4', 'ElevenLabs', 'Deepgram', 'Twilio', 'Docker', 'PM2'],
    features: [
      'Intelligent voice AI with natural conversation capabilities',
      'Automated appointment booking with Google Calendar integration',
      'Real-time call monitoring and sentiment analysis',
      'Microservices architecture with API gateway pattern',
      'WebSocket connections for live call monitoring',
      'Comprehensive analytics and CRM system'
    ],
    impact: [
      '24/7 automation',
      'Improved conversions',
      'Scalable architecture'
    ],
    position: [3, 2, -3],
    color: '#10b981',
    glowColor: '#34d399'
  },
  {
    id: 'aivora',
    title: 'AIVORA',
    subtitle: 'AI Lead Generation Website',
    description: 'Comprehensive marketing website for AI automation company with 22+ pages, SEO optimization, and integrated contact systems.',
    tooltip: 'Full-stack marketing website for AI lead generation with modern design and optimization',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind v4', 'Framer Motion', 'shadcn/ui', 'Resend', 'Vercel'],
    features: [
      '22+ fully functional pages with dynamic routing',
      'Server-side rendering with static generation',
      'Working contact forms with Resend email integration',
      'SEO optimization: sitemap, structured data, meta tags',
      'Dark mode support with theme persistence',
      'WCAG 2.1 AA compliant responsive design'
    ],
    impact: [
      '100% route success',
      'Sub-200kB bundle',
      'Production ready'
    ],
    position: [-3, -1, 3],
    color: '#f59e0b',
    glowColor: '#fbbf24',
    liveUrl: 'https://aivora.uk'
  },
  {
    id: 'content-ideation',
    title: 'AI Content Ideation Platform',
    subtitle: 'Real-Time Trend Analysis System',
    description: 'Real-time trend analysis platform that transforms trending topics across social media into niche-specific, platform-optimized content ideas using AI.',
    tooltip: 'AI-powered content generation from real-time social media trend analysis',
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Supabase', 'Redis', 'GPT-3.5', 'Puppeteer', 'Cheerio'],
    features: [
      'Multi-platform trend scraping: Twitter, Reddit, TikTok, Instagram',
      'Velocity-based scoring algorithm for trend momentum analysis',
      'AI content generation with platform-specific optimization',
      '15-minute caching strategy with request deduplication',
      'Interactive dashboard with trend visualization',
      'Exportable results with hooks, captions, and hashtags'
    ],
    impact: [
      'Sub-5s response time',
      '40% engagement uplift',
      '99% uptime'
    ],
    position: [2, 1, 2],
    color: '#ec4899',
    glowColor: '#f472b6',
    liveUrl: 'https://idea-app.com'
  }
];

export const skills = {
  'Languages & Frameworks': [
    'TypeScript', 'JavaScript', 'Dart', 'SQL', 'Python', 'GraphQL', 
    'React', 'Next.js', 'NestJS', 'Flutter', 'Express', 'Node.js'
  ],
  'Databases & Storage': [
    'PostgreSQL', 'MongoDB', 'Neo4j', 'Redis', 'Supabase', 'OpenSearch',
    'Prisma', 'Mongoose', 'SQLite'
  ],
  'AI & ML': [
    'OpenAI GPT-3.5/4', 'ElevenLabs TTS', 'Deepgram STT', 'Prompt Engineering', 
    'Sentiment Analysis', 'NLP', 'Trend Analysis'
  ],
  'Cloud & DevOps': [
    'AWS (ECS, RDS, S3)', 'Terraform', 'Docker', 'GitHub Actions', 'Vercel', 
    'Prometheus', 'Grafana', 'PM2'
  ],
  'APIs & Integrations': [
    'REST APIs', 'WebSocket', 'Twilio', 'Stripe', 'Google APIs', 
    'Zoom SDK', 'Jupiter API', 'Solana Web3.js'
  ],
  'Security & Auth': [
    'JWT', 'OAuth2', 'Auth0', 'bcrypt', 'Rate Limiting', 'GDPR', 'RBAC'
  ],
  'Frontend & Design': [
    'TailwindCSS', 'shadcn/ui', 'Framer Motion', 'GSAP', 
    'Three.js', 'WebGL', 'Responsive Design'
  ],
  'Testing & Quality': [
    'Jest', 'Playwright', 'Detox', 'ESLint', 'TypeScript', 'Zod Validation'
  ]
};