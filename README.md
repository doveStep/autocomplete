# Search Financial Institutions

---
Frontend client that enables users to search for a financial institution by name, or click 'Go!' to see the full list.
Keyboard commands are not supported (in the interest of time), but a user can click on an autocomplete suggestion. 
Limit of 10 suggestions displayed at a time. Duplicate search suggestions and duplicate search results are not displayed.

Technologies: Angular 1.6, ES6, and Bootstrap.
Used http://fountainjs.io/doc/usage/ to generate project.

My general approach was to avoid reinventing the wheel. 

Autocomplete implementation utilizes: 
* Dropdown directive: https://github.com/angular-ui/bootstrap/tree/master/src/dropdown
* Filter: https://docs.angularjs.org/api/ng/filter/filter

## Limitations

Bootstrap enables horizontal scrolling on small screens for tables. In the interest of time, I did not
go the extra mile to better accomodate small screens. This is a pretty major flaw since just hitting 'Go!' can yield hundreds of results.

The console logs a warning saying angular is loaded twice. 
I left it like that in the interest of time. To fix it, I'd need to update webpack and many more dependencies.

## Setup

```sh
 $ npm install -g node
 $ npm install -g gulp
 $ npm install
 ```
 
 ## Compile and Test
 ```sh
 $ cd <path to code>
 $ gulp build
 $ guilp test
```

## Run locally
 ```sh
 $ cd <path to code>
 $ gulp serve
```
