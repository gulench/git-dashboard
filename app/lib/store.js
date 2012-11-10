require('dashboard/core');
require('dashboard/github_adapter');

Dashboard.Store = DS.Store.extend({
  revision: 7,
  adapter: Dashboard.GitHubAdapter.create()
});
