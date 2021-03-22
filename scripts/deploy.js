const ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export',
  {
    branch: 'master',
    repo: "https://github.com/ivulovic/mamacitafood.git",
    user: {
      name: 'ivulovic',
      email: 'ivn.vulovic@gmail.com'
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)