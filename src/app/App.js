class AppController {
  constructor($http, $filter) {
    this.$http = $http;

    this.updateSearchInput = selectedName => {
      this.searchInput = selectedName;
    };

    this.updateSearchResults = (banks, searchInput) => {
      const filteredBanks = $filter('filter')(banks, searchInput);
      if (filteredBanks.length) {
        if (searchInput) {
          this.searchResults = filteredBanks;
        } else {
          this.searchResults = this.banks;
        }
      } else {
        this.searchResults = [];
      }
    };

    (() => {
      return $http.get('./app/products.json'); // mock server response
    })()
      .then(response => {
        this.banks = response.data.products;
      });
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
