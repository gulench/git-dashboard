require('dashboard/core');
require('dashboard/github_data_source');

Dashboard.Router = Ember.Router.extend({
  //- enableLogging: true,

  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',
      connectOutlets: function(router) {
        var dataSource = Dashboard.GitHubDataSource.create();

        var repositoriesController = router.get('repositoriesController');
        repositoriesController.set('dataSource', dataSource);
        repositoriesController.set('content', []);
        repositoriesController.loadWatchedRepositories('pagratz');

        Ember.View.create({
          templateName: 'repositories',
          controller: repositoriesController
        }).append();
      }
    })
  })
});
