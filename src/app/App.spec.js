import angular from 'angular';
import 'angular-mocks';
import {App} from './App';

describe('SearchFinancialInstituations component', () => {
  beforeEach(() => {
    angular
      .module('app', ['app/App.html', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.filters'])
      .component('app', App);
    angular.mock.module('app');
  });

  const mockBanks = [
    {name: 'Wells Fargo Bank'},
    {name: 'Bank of Wellmeaning'},
    {name: 'Fishy Bank',
      url: 'www.wellsfargoreally.com'},
    {name: 'Happy Credit Union',
      url: 'www.happycreditunion.com'}
  ];

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    const element = $compile('<app></app>')($scope);
    $scope.$digest();
    const textInput = element.find('input');
    expect(textInput.attr('type')).toEqual('text');
  }));

  it('should update searchInput', angular.mock.inject($componentController => {
    const randomName = 'randomName';
    const component = $componentController('app', {});
    expect(component.searchInput).toBeFalsy();
    component.updateSearchInput(randomName);
    expect(component.searchInput).toEqual(randomName);
  }));

  it('should set searchResults to empty array', angular.mock.inject($componentController => {
    const searchInput = 'notfound';
    const component = $componentController('app', {});
    const banks = mockBanks;
    expect(component.searchResults).toEqual(undefined);
    component.updateSearchResults(banks, searchInput);
    expect(component.searchResults).toEqual([]);
  }));

  it('should set searchResults to unfiltered results', angular.mock.inject($componentController => {
    const searchInput = '';
    const component = $componentController('app', {});
    expect(component.searchResults).toEqual(undefined);
    expect(mockBanks.length).toEqual(4);
    component.updateSearchResults(mockBanks, searchInput);
    expect(component.searchResults).toEqual(mockBanks);
  }));

  it('should set searchResults to filtered results', angular.mock.inject($componentController => {
    const expectedResults = [
      {name: 'Wells Fargo Bank'},
      {name: 'Bank of Wellmeaning'},
      {name: 'Fishy Bank',
        url: 'www.wellsfargoreally.com'}
    ];
    const searchInput = 'Well';
    const component = $componentController('app', {});
    const banks = mockBanks;
    expect(component.searchResults).toEqual(undefined);
    expect(banks.length).toEqual(3);
    component.updateSearchResults(banks, searchInput);
    expect(component.searchResults.sort()).toEqual(expectedResults.sort());
  }));
});
