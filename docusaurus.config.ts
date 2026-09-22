import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Furkan Beyazit',
  tagline: 'MLOps & Computer Vision Engineer',
  favicon: 'img/favicon.svg',

  future: {v4: true},

  url: 'https://furkanbeyazit.github.io',
  baseUrl: '/',
  organizationName: 'FurkanBeyazit',
  projectName: 'furkanbeyazit.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Fira+Code:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Source+Code+Pro:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap',
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: {label: 'EN', htmlLang: 'en'},
      ko: {label: 'KR', htmlLang: 'ko'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'furkan.dev',
      items: [
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://github.com/FurkanBeyazit', label: 'GitHub', position: 'right'},
        {href: 'https://www.linkedin.com/in/furkanbyagiz/', label: 'LinkedIn', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Yagiz Furkan Beyazit`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
