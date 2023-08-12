const config = require('./project.js');

let projectName = (!process.env.PROJECT_NAME || process.env.PROJECT_NAME.length === 0 ? 'all' : process.env.PROJECT_NAME);
console.log('process.env.PROJECT_NAME', process.env.PROJECT_NAME);
console.log('projectName', projectName);

module.exports = {
  ...config[projectName],
  lintOnSave: false,
  // publicPath: './'  // 相对路径
}
