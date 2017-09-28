const Sequelize = require('sequelize');
let db = new Sequelize('postgres://localhost:5432/anotherwikistack', { logging: false });
const marked = require('marked');

let Page = db.define('page', {
  title: {
    type: Sequelize.STRING
  },
  urlTitle: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

let User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

module.exports = {
  Page: Page,
  User: User,
  db: db
};