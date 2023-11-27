<p align="center">
  <a href="https://github.com/Libertech-FR/CODE_OF_CONDUCT" target="blank"><img src="https://cdn-icons-png.flaticon.com/512/5807/5807715.png" width="200" alt="Teaket Logo" /></a>
</p>
<p align="center">Retrouvez ici toutes nos règles de travail du code !</p>
<p align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/libertech-fr/CODE_OF_CONDUCT">
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/libertech-fr/CODE_OF_CONDUCT">
</p>
<br>

# Code de conduite
## Introduction
Ce code de conduite a pour but de vous aider à comprendre comment nous travaillons et comment vous pouvez nous aider à améliorer le projet. Il est important de le lire et de le comprendre avant de contribuer au projet.

## Pourquoi ce code de conduite ?
Ce code de conduite a été créé pour définir les règles de travail du code. Il est important de le lire et de le comprendre avant de contribuer au projet.


## Particularités liés aux langages
- [NodeJS](./nodejs/README.md)

## Règles
### (1) Suivre la structure du projet
La structure du projet est généralement lié au langage et au framework utilisé. Il est important de respecter cette structure pour que le projet soit facilement compréhensible par tous les développeurs. La structure proposé par le framework lui même est la plus approprié car la documentation du framework lui même sert de base pour nos projets.

#### (1.1) Utilisation des variables d'environnement
Les variables d'environnement sont importantes pour que le code soit facilement compréhensible par tous les développeurs. Il est important d'utiliser les variables d'environnement pour que le code soit facilement compréhensible par tous les développeurs.

#### (1.2) Structure des dossiers de production
Toutes les dépendances au code ainsi que le code lui même doivent se trouver dans le dossier `/data` du conteneur ou de la machine virtuelle.

### (2) Respecter les règles de nommage
Le nommage est important pour que le code soit facilement compréhensible par tous les développeurs. Il est important de respecter les règles de nommage pour que le code soit facilement compréhensible par tous les développeurs.

Voir [styleguide](https://google.github.io/styleguide/tsguide.html)

**!!! ATTENTION !!!**
Le type de TypeScript **any** est un super et un sous-type de tous les autres types et permet de déréférencer toutes les propriétés. En tant que tel, **any** c'est dangereux - il peut masquer de graves erreurs de programmation et son utilisation mine l'intérêt d'avoir des types statiques en premier lieu.

### (3) Réaliser des tests
Les tests sont importants pour que le code soit facilement compréhensible par tous les développeurs. Il est important de réaliser des tests pour que le code soit facilement compréhensible par tous les développeurs.

### (4) Convention de commits
#### Pourquoi utiliser Commits Conventionnels
- Générer automatiquement des CHANGELOGs.
- Déterminer automatiquement un changement de version sémantique (en fonction des types de commits inclus).
- Communiquer la nature des changements aux membres de l’équipe, au public et aux autres parties prenantes.
- Déclencher des processus de génération et de publication.
- Faciliter la contribution des personnes à vos projets en leur permettant d’explorer un historique de commit plus structuré.
  

#### Principe de base
Le commit contient les éléments structurels suivants, permettant de communiquer à l’intention des consommateurs de votre API :

- **fix** un commit de type **fix** corrige un bogue dans le code (cela est en corrélation avec PATCH en gestion sémantique de versions).
- **feat**: un commit de type **feat** introduit une nouvelle fonctionnalité dans le code (cela est en corrélation avec MINOR en gestion sémantique de versions).
- **BREAKING CHANGE**: un commit qui contient dans son pied le mot-clé **BREAKING CHANGE**:, ou dont le type/étendue est suffixé d’un !, introduit une rupture de compatibilité dans l’API (cela est en corrélation avec MAJOR en gestion sémantique de versions). Un **BREAKING CHANGE** peut faire partie des commits de n’importe quel type.
- Les types autre que **fix**: et **feat**: sont autorisés; par exemple, [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (basé sur [the Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) recommande **build:**, **chore:**, **ci:**, **docs:**, **style:**, **refactor:**, **perf:**, **test:**, etc.
- Les pieds autres que **BREAKING CHANGE**: <description> peuvent être fournis et suivre une convention similaire à [git trailer format](https://git-scm.com/docs/git-interpret-trailers).
- Les types supplémentaires ne sont pas prescrits par la spécification de Commits Conventionnels et n’ont aucun effet implicite dans la gestion des versions sémantiques (à moins qu’ils ne comportent un **BREAKING CHANGE**). Une étendue peut être fournie au type d’un commit pour fournir des informations contextuelles supplémentaires. Elle est indiquée entre parenthèses, par exemple, **feat(parser)**: add the ability to parse arrays.

Voir [conventionalcommits](https://www.conventionalcommits.org/fr/v1.0.0/).

### (5) Convention de nommage des versions
Étant donné un numéro de version MAJEUR.MINEUR.PATCH, il faut incrémenter :

le numéro de version MAJEUR quand il y a des changements non rétrocompatibles,
le numéro de version MINEUR quand il y a des ajouts de fonctionnalités rétrocompatibles,
le numéro de version de PATCH quand il y a des corrections d’anomalies rétrocompatibles.
Des libellés supplémentaires peuvent être ajoutés pour les versions de pré-livraison et pour des méta-données de construction sous forme d’extension du format MAJEURE.MINEURE.PATCH.

Voir [semver](http://semver.org/lang/fr/).

### (6) 

<p align="center">
    <img height="300" src="./12working-jobs.png" alt="Asterix 12 working jobs">
</p>
