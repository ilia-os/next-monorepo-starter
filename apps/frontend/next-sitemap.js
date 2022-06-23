/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEX_PUBLIC_APP_URL || 'http://localhost',
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
