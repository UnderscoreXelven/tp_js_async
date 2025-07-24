# TP JavaScript - Mission Livraison (Asynchrone)

## Objectif

Création d'une mini-application JavaScript qui simule les étapes de livraison d'un colis.

Chaque étape (préparation, expédition, livraison) sera affichée à l’écran avec une barre de progression et des messages dynamiques.


### 1. Structure HTML de base

Vous devez créer une interface HTML simple composée :
- d'un bouton **"Lancer la mission"**
- de trois sections (préparation, expédition, livraison), chacune avec :
  - un message de statut
  - une barre de progression (`<progress>`)
- d'un message final de résultat

> Si besoin, une structure HTML de départ vous sera fournie.

---

### 2. Fonction d'attente

Créez une fonction `attendre(ms)` qui retourne une Promesse résolue après `ms` millisecondes, en utilisant `setTimeout`.

```js
function attendre(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

```

---

### 3. Animer une étape

Créez une fonction `animerProgress(id, duree)` qui :

- sélectionne une barre de progression via son `id`
- incrémente sa valeur de 0 à 100 en fonction du temps passé (`duree`)
- résout une Promesse une fois la barre terminée

Vous pouvez utiliser `setInterval` pour cette animation.

---

### 4. Fonction principale `lancerMission`

Créez une fonction `async` appelée `lancerMission()` qui :

- Anime successivement les trois étapes dans cet ordre :
    1. Préparation (2 secondes)
    2. Expédition (1,5 seconde)
    3. Livraison (2,5 secondes)
- Affiche un message de confirmation dans chaque étape après la progression
- Affiche un message final de succès à la fin

---

### 5. Intégration au bouton

Ajoutez un écouteur d’événement sur le bouton pour lancer la mission quand on clique.

```
document.getElementById("launch").addEventListener("click", lancerMission);

```

---

## Bonus (facultatif)

- Ajouter une courte pause entre les étapes avec `await attendre(...)`
- Ajouter une probabilité d'échec à une étape (ex : 10% de chance de rejet)
- Réinitialiser l'interface si on relance une mission
- Ajouter un compteur du temps total

---

## Contraintes

- Aucune bibliothèque externe (pas de jQuery, ni de fetch/axios)
- Le code doit être lisible, commenté et modulaire
- Utilisez exclusivement `async/await` pour la logique asynchrone

---

## Livrables

- Un fichier HTML avec la structure de l'interface
- Un fichier JS avec la logique complète
- Une démonstration fonctionnelle en local dans votre navigateur