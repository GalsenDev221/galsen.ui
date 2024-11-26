# Guide de Contribution

Merci de votre intérêt pour contribuer à **Galsen UI** !

Voici les étapes à suivre pour ajouter des composants :

## Étape 1 : Comment faire pour contribuer

1. **[Fork le projet](https://github.com/GalsenDev221/galsen.ui)**.

2. **Clonez votre fork**.

3. **Créez une branche pour votre fonctionnalité**.

4. **Commitez vos changements et poussez vos modifications**.

5. **Créez une pull request vers la branche dev**.

6. **Attendez que la pull request soit mergé**.

## Étape 2 : Créer un fichier `.mdx`

1. Accédez au dossier `src/components`.
2. Créez un fichier nommé `galsen-ui-nom-du-fichier.mdx` en respectant le format suivant :

   ```mdx
   ---
   title: 
   emoji: 
   
   title: 
   description: 
   components:
     1:
       title:  
   ---

   # Nom Components

   <RenderHTMLFiles
     components={components}
     files={files}
     componentSlug={componentSlug}
   />
   ```

   - **title** : Le titre du composant.
   - **emoji** : Un emoji représentatif du composant.
   - **components** : Une liste des variantes du composant avec leur titre respectif.

## Étape 3 : Créer un dossier pour les variantes

1. Accédez au dossier `public/components`.
2. Créez un dossier avec le même nom que le fichier `.mdx` créé précédemment dans `src/components`.
3. Dans ce dossier, créez des fichiers pour chaque variante du composant. Les noms de fichiers doivent être des nombres, en commençant par **1** (ex. `1.html`, `2.html`).
