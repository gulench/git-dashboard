require('dashboard/core');
//- require('dashboard/github_data_source');

Dashboard.RepositoriesController = Ember.ArrayController.extend({
  sortProperties: 'full_name'.w(),

  loadWatchedRepositories: function(username) {
    this.get('dataSource').watchedRepositories(username, this, 'addObjects');
  }
});
