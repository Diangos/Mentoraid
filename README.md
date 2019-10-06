# Mentoraid

This project is meant as a launchpad for people receiving mentorship from me (and in the future, hopefully, others).
As such, there are a few code guidelines to follow.

### Code style guide
Rules here will be added as needed.

##### General
* Even though rules are meant to be broken, you need to understand the rules before you know when and why to break them
    * That being said, if your mentor tells you to break a rule or a guideline, always ask for an explanation
    * Conventions and rules are only useful as long as they don't hinder more than they help
* This project uses 4 spaces for indentation. Use 4 spaces to keep consistency and help keep git merges as hassle free as possible.
    * Other projects might use tabs (usually equivalent to 4 spaces) or 2 spaces, in which case, for those projects, be sure to follow that project's conventions.

##### HTML
* IDs and classes must be `camelCase` (unless imported from an external library)
* Try and use html5 tags where appropriate (header, footer, main, aside, nav)

##### JS / TS
* If you find that you used the same or *very* similar code in two spots you should try to extract that code into a component, service or a function.
    * **D**on't **R**epeat **Y**ourself (**DRY**) 
___
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
