// gitprofile.config.js

const config = {
  github: {
    username: 'jameskip', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [
        'jameskip',
        'qa-interview-jameskip',
        'material-ui-front-end-starter-pack',
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'jameskip',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'jameskip',
    // dev: 'arifszn',
    stackoverflow: '', // format: userid/username
    website: 'https://jmekip.com',
    phone: '',
    email: 'jameskip@me.com',
  },
  // resume: {
  //   fileUrl:
  //     'https://docs.google.com/document/d/12qbyWOAc-K3GTLUcBlQXpWLcuC-Xu2-gdsL3_TpnQ7A/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  // },
  skills: [
    'TypeScript',
    'Playwright',
    'Test Automation',
    'Selenium',
    'MySQL',
    'Git',
    'Docker',
    'Jenkins',
    'AWS',
    'React',
    'Node',
    'BrowserStack',
    'Cypress',
    'CircleCI',
    'JavaScript',
    'DevTools',
  ],
  music: {
    url: 'https://open.spotify.com/playlist/6GiH4L7Cvqfwfl7qfaHjmx?si=ed9d7e7e67794ec1',
  },
  experiences: [
    {
      company: 'Vetspire',
      position: 'Software Development Engineer In Test',
      from: 'March 2024',
      to: 'Present',
      companyLink: 'https://vetspire.com',
    },
    {
      company: 'Bolt',
      position: 'Software Development Engineer In Test',
      from: 'October 2021',
      to: 'April 2023',
      companyLink: 'https://bolt.com',
    },
    {
      company: 'ThriveHive',
      position: 'QA Engineer',
      from: 'June 2019',
      to: 'December 2020',
      companyLink: 'https://localiq.com/',
    },
    {
      company: 'YETI',
      position: 'QA Engineer',
      from: 'July 2017',
      to: 'May 2019',
      companyLink: 'https://yeti.com/',
    },
  ],
  certifications: [
    {
      name: 'Certified Scrum Master',
      year: 'September 2020',
      link: 'http://bcert.me/sfincsanf',
    },
    {
      name: 'Google Mobile Sites',
      year: 'May 2017',
      link: 'https://goo.gl/3m5XLB',
    },
  ],
  education: [
    {
      institution: 'Hack Reactor',
      degree: 'Software Engineering Immersive',
      from: '2016',
      to: '2017',
    },
    {
      institution: 'San Antonio College',
      degree: 'A.A.S. Computer Science',
      from: '2010',
      to: '2012',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Represent',
      description:
        "A front end to ProPublica's Congress API. Built to help understand your representatives voting history and positions.",
      imageUrl:
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      link: 'https://github.com/jameskip/represent',
    },
    {
      title: 'Pretzel News',
      description:
        'Pretzel uses algorithms to track trending web searches, allowing it to provide unbiased and unfiltered news based on what people are truly interested in, rather than just following the news cycle.',
      imageUrl:
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      link: 'https://github.com/jameskip/pretzel-native',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'jameskip', // to hide blog section, keep it empty
    limit: 8, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-HCHM0NX2TM', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made in Austin, Texas. 🤠`,
};

export default config;
