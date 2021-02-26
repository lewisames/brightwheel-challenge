# Brightwheel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1. This simple SPA will hit GitHub's REST API and fetch a list of the 100 most starred repos. Each Repo can be clicked through to see recent commits.

To help with rate-limiting for unauthenticated API calls to GitHub's APIs, the repos page is cached after first load and saved in memory for the duration of the session.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
