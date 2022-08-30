

class Project {
  static create(options) { return new Project(options) }
  constructor(options) {
    const {
      name,
      description,
      projectType,
      repoUrl = null,
      deployedUrl = null,
      demoUrl = null,
      cardImageUrl = null,
      pageImageUrl = null,
      pageImageStyle = { backgroundSize: 'cover' },
      packages,
      apis,
      skills,
      collaborative = false,
    } = options
    try {
      if (!name) throw Error('Project name missing')
      if (!description) throw Error('Project description missing')
      if (!projectType) throw Error('Project projectType missing')
    } catch (error) {
      console.error(error.message, options)
    }
    this.name = name
    this.description = description
    this.projectType = projectType
    this.repoUrl = repoUrl
    this.deployedUrl = deployedUrl
    this.demoUrl = demoUrl
    this.cardImageUrl = cardImageUrl
    this.cardImagePos = options.cardImagePos
    this.pageImageUrl = pageImageUrl
    this.pageImageStyle = pageImageStyle
    this.packages = packages
    this.apis = apis
    this.skills = skills
    this.collaborative = collaborative

  }

  get slug() { return this.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z-]/g, '') }
  get host() {
    if (this.deployedUrl) {
      let match = this.deployedUrl.match(/(github|heroku|npm)/)
      if (!match) return null
      let host = match[0]
      if (host) return host[0].toUpperCase() + host.slice(1)
    }
    return null
  }
}

const projects = [
  {
    name: 'React Form Handler Package',
    description: `A published npm package providing a custom hook for form handling. Providing name attributes is the bare minimum to render a beautiful form with built-in submit, response, and error handlers. Based on React and Semantic-UI, it is highly customizable and requires very little setup.`,
    projectType: 'package',
    repoUrl: 'https://github.com/codewizard-dt/use-form-hook',
    deployedUrl: 'https://www.npmjs.com/package/@codewizard-dt/use-form-hook',
    cardImageUrl: '/images/use-form-hook-contain.png',
    pageImageStyle: { backgroundSize: 'contain' },
    packages: ['React', 'Semantic UI', 'Storybook', 'Rollup', 'Webpack', 'Lodash', 'Typescript'],
    skills: ['Form Validation', 'Type definitions', 'Testing', 'Package bundling', 'Package publishing'],
  },
  {
    name: 'HTML Dashboard Generator',
    description: 'A CLI tool that gathers user input and generates an HTML dashboard. Users can enter information for Managers, Engineers, and Interns which is subsequently displayed as cards on the dashboard',
    projectType: 'command line',
    repoUrl: 'https://github.com/codewizard-dt/team-dash-generator',
    demoUrl: 'https://drive.google.com/file/d/1KIdfNCp1l66WatObcvk10h9CovQNAzz9/view?usp=sharing',
    cardImageUrl: '/images/team-dash-30x.gif',
    pageImageUrl: '/images/team-dash-10x.gif',
    packages: ['Inquirer', 'Jest', 'Lodash', 'Validator'],
    skills: ['Command line scripts', 'Unit testing'],
  },
  {
    name: 'E-Commerce Backend',
    description: 'An Express server using Sequelize ORM to manage Products, Categories, and Product Tags, using RESTful API routes for MySQL CRUD operations',
    projectType: 'back end',
    repoUrl: 'https://github.com/codewizard-dt/e-commerce-orm-back end',
    demoUrl: 'https://drive.google.com/file/d/1AyjUarVAmr_jwiv7Ttbu0q6_UiHei-2_/view?usp=sharing',
    cardImageUrl: '/images/e-commerce-orm-10x.gif',
    packages: ['Express', 'MySQL', 'Sequelize', 'Insomnia'],
    skills: ['RESTful routes', 'Database management', 'Relational databases', 'Pivot tables', 'API testing']
  },
  {
    name: 'Text Me Maybe',
    description: 'This single-page code editor uses a service worker, is an installable PWA, and persists data via localStorage and IndexedDB. Code is stylized using CodeMirror.',
    projectType: 'full stack',
    repoUrl: 'https://github.com/codewizard-dt/text-me-maybe',
    deployedUrl: 'https://text-me-dt.herokuapp.com/',
    cardImageUrl: '/images/text-me-maybe.png',
    packages: ['Express', 'Webpack', 'Babel', 'Workbox', 'IDB'],
    skills: ['Webpack configuration', 'Single page applications (SPA)', 'Progressive web apps (PWA)'],
    apis: ['IndexedDB']
  },
  {
    name: 'Email Regex Tutorial',
    description: 'A github gist that breaks down a regex pattern for emails. Each regex component is highlighted and its purpose discussed. Variations on the regex are also included.',
    projectType: 'gist',
    repoUrl: 'https://gist.github.com/codewizard-dt/2259499c1a0058f1a0074cf2460035af',
    cardImageUrl: '/images/regex.png',
    cardImagePos: 'left center',
    skills: ['Communication', 'Sharing knowledge', 'Github gists', 'Regex patterns']
  },
  {
    name: 'Thought Cloud',
    description: `Thought Cloud is an Express server with a RESTful API that allows users to post their "thoughts" and give their "reactions" to other people's thoughts.`,
    projectType: 'back end',
    repoUrl: 'https://github.com/codewizard-dt/thought-cloud',
    cardImageUrl: '/images/thought-cloud-10x.gif',
    packages: ['Express', 'MongoDB', 'Mongoose', 'Faker'],
    skills: ['RESTful routes', 'NoSQL database models', 'Database administration'],
  },
  {
    name: 'Weather Everywhere',
    description: 'View current weather and five-day forecast for any place on Earth. Recent searches are cached using localStorage.',
    projectType: 'front end',
    repoUrl: 'https://github.com/codewizard-dt/open-weather-dashboard',
    deployedUrl: 'https://codewizard-dt.github.io/open-weather-dashboard/',
    cardImageUrl: '/images/weather.png',
    cardImagePos: 'center top',
    pageImageStyle: { backgroundSize: 'contain' },
    packages: ['jQuery', 'Bootstrap', 'Moment'],
    skills: ['API calls', 'Integrating multiple APIs', 'HTML templates'],
    apis: ['GeoDB Cities API', 'OpenWeather One Call API']
  },
  {
    name: 'City Comp',
    description: 'Cost of living comparison tool that integrates three APIs, allowing a user to search for over 8000 global cities and view cost of living information.',
    projectType: 'front end',
    deployedUrl: 'https://codewizard-dt.github.io/city-cost-comparison/',
    repoUrl: 'https://github.com/codewizard-dt/city-cost-comparison',
    cardImageUrl: '/images/city-comp.jpg',
    collaborative: true,
    skills: ['Asynchronous API calls', 'Responsive design', 'Data caching'],
    packages: ['Materialize', 'jQuery'],
    apis: ['GeoDb Cities API', 'Cost of Living and Prices API', 'Local Storage', 'Google Fonts']
  },
  {
    name: 'Getting Up RPG',
    description: 'Ugh.. Monday morning. Better get up! Your character begins in bed and faces a series of randomized existential dilemmas with uncertain outcomes on their way to the home office. Make it on time for your Zoom meeting!',
    projectType: 'full stack',
    repoUrl: 'https://github.com/codewizard-dt/getting-up-rpg',
    deployedUrl: 'https://getting-up-rpg.herokuapp.com/',
    cardImageUrl: '/images/getting-up.png',
    collaborative: true,
    packages: ['Sequelize', 'Luxon', 'Express', 'MySQL', 'Handlebars'],
    skills: ['Database models', 'Database seeds', 'HTML templates', 'RESTful routes'],
    apis: ['MediaDevices Web API'],
  },
]

export const typeMap = {}
for (let { projectType } of projects) {
  if (typeMap[projectType]) typeMap[projectType]++
  else typeMap[projectType] = 1
}


export default projects.map(project => Project.create(project))