require('dashboard/core');
require('dashboard/github_data_source');

Dashboard.Store = DS.Store.extend({
  revision: 7,
  adapter: Dashboard.GitHubDataSource.create()
});
