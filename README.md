Installation

API: 
  
  Nest steps into `api` directory:  `cd Code/api`

  1) Install Ruby -v 2.3.0 (Installed via RVM https://rvm.io/)
  `rvm install 2.3.0`
    
  2) Use MySQL (my version is 5.7.18)

  3) PDF generator wkhtmltopdf (https://wkhtmltopdf.org/), installation example for Mac OS:
  `brew install Caskroom/cask/wkhtmltopdf`

  4) Run `bundle` to install gems (run `gem install bundler`)

  5) Creating mysql database configuration `cp config/database.yml.example config/database.yml`
  Change it to the one you use.  

  6) Prepare database: `rake db:create && rake db:migrate && rake db:seed`

CLIENT: 
  
  Nest steps into `client` directory:  `cd Code/client`

  1) Node.js -v 6.9.4 (Installed via NVM https://github.com/creationix/nvm)
  `nvm install 6.9.4`
  
  2) `brew install yarn` (https://yarnpkg.com/lang/en/docs/install/ If not installed yet)
  
  3) `yarn` (installing all packages)


START:

  To starting both applications in one console we will use a 'foreman' gem 
  
  1) `cd Code`

  2) `rvm use 2.3.0 && gem install foreman`

  3) `foreman start`

  4) Open in browser 'http://localhost:4000/', administrator email: admin@crossover.com  password: admin

  It uses Procfile, which have simple content:

  api: cd api && rails s -p3000
  client: cd client && yarn start

TESTS:

  1) `cd Code/api`

  2) To execute tests `rspec spec`
  
  3) Open in browser: `Code/api/coverage/index.html` to view the current test coverage level

LINTERS:

  API:

    1) `cd Code/api`

    2) To execute Rubocop: `rubocop`

  CLIENT:

    1) `cd Code/client`
    
    2) To execute ES linter: `yarn run lint`
    
    3) To execute Flow: `yarn run flow`
    
    4) To execute CSS linter: `yarn run stylint`

Github:

https://github.com/lxkuz/redux-basis branch: crossover

https://github.com/lxkuz/rails5-api-basis branch: crossover
