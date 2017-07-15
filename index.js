import angular from 'angular';

import {App} from './app/App';

import './index.scss';

angular
  .module('app', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.filters'])
  .component('app', App);
