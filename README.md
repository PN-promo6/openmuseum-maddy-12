# :classical_building: OpenMuseum TP n°2

## Installation et lancement du projet
1. Clôner le projet depuis **votre repository** Github Classroom
2. Ouvrir le dossier dans un terminal
3. Faire la commande `npm install` pour installer les dépendances
4. Lancer le projet avec `ng serve --open`

## Rappels : consignes TP n°1

- Les données des musées doivent être contenues dans un service : `MuseumListService`
- Elles doivent s'afficher dans le component `SingleMuseumComponent`, qui est inclu dans `MuseumListComponent`

## Consigne TP n°2

### Objectif : préparer le terrain pour un futur site répertoriant les musées des Bouches du Rhône et permettant d’en ajouter un nouveau

Le futur site aura 3 pages, et donc 3 routes :
- **Page d’accueil →** affiche la liste de tous les musées . *Route : `/`*
- **Ajouter un musée →** contiendra un formulaire, avec des champs adaptés pour ajouter un musée. *Route `/add`*
  - L’UI du formulaire doit être correcte (Boostrap au minimum)
  - La fonctionnalité d’ajout sera faite + tard dans le cours
- **Afficher un musée →** permettra de voir le détail d’un seul musée
  - Créer une route temporaire `/singleMuseum`
  - Qui affichera le component `singleMuseum` sans données, en attendant le prochain TP
  - Cette page sera similaire à la page d'accueil → reproduire sur cette page le design d'un musée de la page d'accueil qui devra être similaire à ça :
  ![Screen singleMuseum](https://i.ibb.co/5x1ZRRP/tp-2-angular.jpg)

---

# Angular Readme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

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
