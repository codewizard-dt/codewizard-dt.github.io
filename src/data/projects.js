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
      imageUrl = null,
      packages = [],
      skills = [],
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
    this.imageUrl = imageUrl
    this.packages = packages
    this.skills = skills
    this.collaborative = collaborative
    this.imagePos = options.imagePos
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
    imageUrl: '/images/use-form-hook-contain.png'
  },
  {
    name: 'Team Dashboard',
    description: 'A CLI tool that gathers user input and generates an HTML dashboard. Users can enter information for Managers, Engineers, and Interns which is subsequently displayed as cards on the dashboard',
    projectType: 'command line',
    repoUrl: 'https://github.com/codewizard-dt/team-dash-generator',
    demoUrl: 'https://drive.google.com/file/d/1KIdfNCp1l66WatObcvk10h9CovQNAzz9/view?usp=sharing',
    imageUrl: '/images/team-dash-30x.gif'
  },
  {
    name: 'E-Commerce Backend',
    description: 'An Express server using Sequelize ORM to manage Products, Categories, and Product Tags, using RESTful API routes for MySQL CRUD operations',
    projectType: 'server',
    repoUrl: 'https://github.com/codewizard-dt/e-commerce-orm-backend',
    demoUrl: 'https://drive.google.com/file/d/1AyjUarVAmr_jwiv7Ttbu0q6_UiHei-2_/view?usp=sharing',
    imageUrl: '/images/e-commerce-orm-10x.gif'
  },
  {
    name: 'Text Me Maybe',
    description: 'This single-page code editor uses a service worker, is an installable PWA, and persists data via localStorage and IndexedDB. Code is stylized using CodeMirror.',
    projectType: 'app',
    repoUrl: 'https://github.com/codewizard-dt/text-me-maybe',
    deployedUrl: 'https://text-me-dt.herokuapp.com/',
    imageUrl: '/images/text-me-maybe.png'
  },
  {
    name: 'Email Regex Tutorial',
    description: 'A github gist that breaks down a regex pattern for emails. Each regex component is highlighted and its purpose discussed. Variations on the regex are also included.',
    projectType: 'gist',
    repoUrl: 'https://gist.github.com/codewizard-dt/2259499c1a0058f1a0074cf2460035af',
    imageUrl: '/images/regex.png',
    imagePos: 'left center'
  },
  {
    name: 'Thought Cloud',
    description: `Thought Cloud is an Express server with a RESTful API that allows users to post their "thoughts" and give their "reactions" to other people's thoughts.`,
    projectType: 'server',
    repoUrl: 'https://github.com/codewizard-dt/thought-cloud',
    imageUrl: '/images/thought-cloud-10x.gif'
  },
  {
    name: 'Weather Everywhere',
    description: 'View current weather and five-day forecast for any place on Earth. Recent searches are cached using localStorage.',
    projectType: 'web page',
    repoUrl: 'https://github.com/codewizard-dt/open-weather-dashboard',
    deployedUrl: 'https://codewizard-dt.github.io/open-weather-dashboard/',
    imageUrl: '/images/weather.png',
    imagePos: 'center top'
  },
  {
    name: 'City Comp',
    description: 'Cost of living comparison tool that integrates three APIs, allowing a user to search for over 8000 global cities and view cost of living information.',
    projectType: 'web page',
    deployedUrl: 'https://codewizard-dt.github.io/city-cost-comparison/',
    repoUrl: 'https://github.com/codewizard-dt/city-cost-comparison',
    imageUrl: '/images/city-comp.jpg',
    collaborative: true
  },
  {
    name: 'Getting Up RPG',
    description: 'Ugh.. Monday morning. Better get up! Your character begins in bed and faces a series of randomized existential dilemmas with uncertain outcomes on their way to the home office. Make it on time for your Zoom meeting!',
    projectType: 'server, web page',
    repoUrl: 'https://github.com/codewizard-dt/getting-up-rpg',
    deployedUrl: 'https://getting-up-rpg.herokuapp.com/',
    imageUrl: '/images/getting-up.png',
    collaborative: true
  },
]

export default projects.map(project => Project.create(project))