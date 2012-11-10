require('dashboard/core');
require('dashboard/model');

Dashboard.Router = Ember.Router.extend({
  //- enableLogging: true,

  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',
      connectOutlets: function(router) {
        router.transitionTo('user', {
          username: 'pangratz'
        });
      }
    }),

    user: Ember.Route.extend({
      route: '/:username',
      connectOutlets: function(router, context) {
        var store = router.get('store');

        var watchedRepositories = store.findQuery(Dashboard.Repository, {
          username: context.username,
          type: 'watched'
        });

        var repositoriesController = router.get('repositoriesController');
        repositoriesController.set('content', watchedRepositories);

        router.get('applicationController').connectOutlet('repositories');
      }
    })
  })
});
