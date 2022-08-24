class Project {
  static create(options) { return new Project(options) }
  constructor(options) {
    const {
      name,
      description,
      repoUrl = null,
      deployedUrl = null,
      imageUrl = null,
      packages = [],
      skills = [],
      collaborative = false,
      labels = []
    } = options
    try {
      if (!name) throw Error('Project name required')
      if (!description) throw Error('Project description required')
    } catch (error) {
      console.log(error.message, options)
    }
    this.name = name
    this.description = description
    this.repoUrl = repoUrl
    this.deployedUrl = deployedUrl
    this.imageUrl = imageUrl
    this.packages = packages
    this.skills = skills
    this.collaborative = collaborative
  }

  get slug() { return this.name.toLowerCase().replace(/ /g, '-') }
}

const projects = [
  Project.create({
    name: 'Team Dashboard',
    description: 'A CLI tool to generate an HTML dashboard for your team'
  }),
  Project.create({
    name: 'E-Commerce Backend',
    description: 'An Express server to manage Products, Categories, and Tags in a MySQL database'
  }),
  Project.create({
    name: 'Text Me Maybe',
    repoUrl: 'https://github.com/codewizard-dt/text-me-maybe'
  }),
  Project.create({
    name: 'Regex Tutorial',
  }),
  Project.create({
    name: 'Thought Cloud',
  }),
  Project.create({
    name: 'Weather Dashboard',
  }),
  Project.create({
    name: 'City Comp',
    description: 'A tool to help compare costs of living for over 8000 cities in the world',
    deployedUrl: 'https://codewizard-dt.github.io/city-cost-comparison/',
    repoUrl: 'https://github.com/codewizard-dt/city-cost-comparison',
    collaborative: true
  }),
  Project.create({
    name: 'Getting Up RPG',
    description: 'An existential adventure about getting to your Zoom class in the morning',
    repoUrl: 'https://github.com/codewizard-dt/getting-up-rpg',
    deployedUrl: 'https://getting-up-rpg.herokuapp.com/',
    collaborative: true
  }),
]

export default projects