/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://noteworthydjs.com',
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: './out',

  // Exclude pages that shouldn't be indexed
  exclude: [
    '/contact/thank-you',
    '/privacy-policy',
    '/terms-and-conditions',
    '/join-the-team',
    '/song-lists',
    '/song-lists/*',
  ],

  // Set priorities for key pages
  transform: async (config, path) => {
    // High priority pages
    const highPriority = ['/', '/services/dj-mc', '/photo-booth', '/locations']
    const mediumPriority = [
      '/awards', '/faqs', '/testimonials', '/vendors',
      '/services/lighting', '/add-ons', '/team',
      '/photo-booth/photo-books', '/photo-booth/backdrops',
      '/photo-booth/add-ons', '/photo-booth/prints/2x6', '/photo-booth/prints/4x6',
    ]

    let priority = 0.6
    let changefreq = 'monthly'

    if (highPriority.includes(path)) {
      priority = 1.0
      changefreq = 'weekly'
    } else if (mediumPriority.some(p => path.startsWith(p))) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path.startsWith('/locations/')) {
      // Individual location pages — good for local SEO
      priority = 0.9
      changefreq = 'monthly'
    } else if (path.startsWith('/awards/')) {
      // Individual press release pages
      priority = 0.5
      changefreq = 'yearly'
    } else if (path.startsWith('/team/')) {
      priority = 0.5
      changefreq = 'yearly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/contact/thank-you',
          '/privacy-policy',
          '/terms-and-conditions',
        ],
      },
    ],
    additionalSitemaps: [],
  },
}
