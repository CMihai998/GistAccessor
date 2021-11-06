# GistAccessor
The aim of the project is to be able to access public Gists from Github by providing a username.

The gists will be presented in a table, from the entire data retrieved, only a few tags will be actually displayed in order not to clutter the screen. (More fields can be easily added).

What gets displayed:
- ID - unique id of the gist
- Comments - count of the comments to the current gist
- Created at - date of creation
- Updated at - date of latest changes
- Forked by - list of last three users that forked the project (picture + username)
- File type - list of files addressed in gist (name + tag/badge)

By hovering over the files presented in the last column, the selected file will be presented in a bigger view to let the user know that there are more details available; by pressing on the file, a new tab will be opened where the file content will be displayed.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
