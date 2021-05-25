import { dejaSaisis } from "./dejaSaisis";

describe('dejaSaisis function', () => {
  it('should console.log with correct values', () => {
    // pour espionner un objet,
    // il faut avoir accès à sa référence, plusieurs possibilités :
    // - variable globale (ex: console, localStorage, document)
    // - un objet exporté (import agit comme un singleton)
    // - avec un conteneur d'injection de dépendance (l'injecteur d'angular)

    spyOn(console, 'log').and.stub();

    dejaSaisis([1, 2, 3]);

    // vérifier que console.log ait été appelé
    expect(console.log).toHaveBeenCalledWith('Vous avez déjà saisi : 1 | 2 | 3')
  });
});
