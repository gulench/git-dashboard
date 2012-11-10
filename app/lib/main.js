require('dashboard/core');
// require('dashboard/store');
require('dashboard/github_data_source');
//require('dashboard/router');
require('dashboard/controllers');
require('dashboard/views');

Dashboard.gitHubDataSource = Dashboard.GitHubDataSource.create();

Dashboard.set('repositoriesController', Dashboard.RepositoriesController.create({
  content: [],
  dataSourceBinding: 'Dashboard.gitHubDataSource'
}));
Dashboard.get('repositoriesController').loadWatchedRepositories('pangratz');

Ember.View.create({
  templateName: 'repositories',
  controllerBinding: 'Dashboard.repositoriesController'
}).append();

//Dashboard.initialize();
