/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.APP_URL || 'http://localhost',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				disallow: '*',
			},
		],
	},
}
