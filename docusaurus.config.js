/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MA Tools',
  tagline: 'a feature rich libray to allow operators to take advantage of LUA easily.',
  url: 'https://lightyourway.github.io',
  baseUrl: '/ma-tools/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LightYourWay', // Usually your GitHub org/user name.
  projectName: 'ma-tools', // Usually your repo name.
  themeConfig: {
		colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
		},
    navbar: {
      title: 'MA Tools',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/LightYourWay/ma-tools',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/LightYourWay/ma-tools',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lukas Runge Veranstaltungstechnik`,
    },
		prism: {
			additionalLanguages: ["lua"],
			theme: require("prism-react-renderer/themes/github"),
			darkTheme: require("prism-react-renderer/themes/vsDark"),
		},
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
					sidebarPath: require.resolve("./sidebars.json"),
					editUrl: "https://github.com/LightYourWay/ma-tools/edit/source/",
			},
        theme: {
          customCss: require.resolve('./src/custom.scss'),
        },
      },
    ],
  ],
	plugins: [require.resolve("./docusaurus-plugin")],
};
