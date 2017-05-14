Pebble Client
=============

Ce plugin est une application [Pebble](https://www.pebble.com) pour le framework [Avatar](https://github.com/Spikharpax/Avatar-Serveur)

![GitHub Logo](/logo/Pebble.jpg)


## Initialisation
- Dézippez le fichier `Avatar-Plugin-Pebble-Master.zip` dans un répertoire temporaire
- Connectez-vous sur [CoudPebble](https://cloudpebble.net) avec votre compte Pebble
- Dans la section "Projets", cliquez sur "Importer"
- Entrez "Avatar Client" comme nom de projet
- Sélectionnez le fichier zip "Pebble/Avatar_client.zip"
- Cliquez sur "Importer"


## Personnalisation
Après avoir créé le project sur le CloudPebble, vous devez ajouter l'adresse IP du Serveur Avatar.

- Cliquez sur le projet "Avatar Client"
- Dans le menu et la liste des fichiers, cliquez sur le fichier app.js
- Déplacez-vous sur la ligne 222 et remplacez IP:PORT par l'adresse et le port du serveur Avatar
- Répétez l'opération sur les lignes 257 et 298


## Installation sur la montre Peeble
- Dans le menu CloudPebble, cliquez sur "Compilation"
- Cliquez sur "PHONE"
- Choisissez la compilation en fonction de votre modèle de montre
	- Vous pouvez cliquer sur "Paramètres" dans le menu CloudPebble pour avoir le détail des types de compilation.
	- A savoir que ce client a été conçu pour une compilation "Basalt" et pour montre Pebble Time.
	- Si vous avez un modèle de montre différent, vous devrez refaire les images pour qu'elles soient conformes à l'écran d'affichage de la montre (aucune autre action n'est requise).
- Préparez votre montre à recevoir l'application
	- Sur votre téléphone, ouvrez l'application Pebble
	- Allez dans les paramètres -> Développeur
	- Activez le mode développeur
	- Activez les connexions développeur
		- L'état doit être "A l'écoute"
- Revenez sur votre projet CloudPebble
- Dans le menu, cliquez sur le fichier app.js
- Dans la fenêtre du fichier, à droite, cliquez sur l'icône "Enregister, Compiler, Installer et Lancer"
- L'application se compile et s'installe sur votre montre Pebble

N'oubliez pas d'arrêter le mode développeur après l'installation sur votre montre.


## Installation du plugin peeble
- Copiez le répertoire `pebble` dans le répertoire `Avatar-Serveur/plugins`

Relancez Avatar Serveur



## Fonctionnalités

Pour parfaire l'installation de l'application sur votre montre, vous pouvez activer une option de raccourcis et ainsi activer le client Avatar Pebble directement sur un clic long d'une touche de la montre , par exemple la touche haute.

Ensuite, comme décrit plus haut, 3 touches sont actives:
- La touche **Haute** active le mode écoute du client courant, cette action est identique au mot-clé que vous avez défini (ex: "Sarah"). Utile par exemple si il y a beaucoup de bruit dans la pièce. Dictez ensuite la règle avec le microphone de la pièce.
- La touche **Milieu** est un menu dans lequel vous pouvez exécuter plusieurs actions
	- **Actions sur le client:**
		- **Annule l'écoute:** Si un faux positif a déclenché l'écoute d'Avatar, vous pouvez l'intérrompre
		- **Démarre l'écoute:** Identique à la touche Haute mais dans le menu
		- **Mute Sarah:** Coupe l'écoute d'Avatar client pour la pièce courante. Utile pour ne pas être dérangé.
		- **UnMute Sarah:** Remet l'écoute d'Avatar client pour la pièce courante.
		- **Mute speaker:** Coupe l'enceinte du PC de l'Avatar client pour la pièce courante.
		- **UnMute speaker:** Remet l'enceinte du PC de l'Avatar client pour la pièce courante.
		- **Volume par défaut:** Remet le volume par défaut de l'enceinte du PC de l'Avatar client pour la pièce courante.
		- **Augmente légèrement:** Monte le volume de l'enceinte du PC de l'Avatar client pour la pièce courante par palier de 2%.
		- **Augmente beaucoup:** Monte le volume de l'enceinte du PC de l'Avatar client pour la pièce courante par palier de 10%.
		- **Baisse légèrement:** Baisse le volume de l'enceinte du PC de l'Avatar client pour la pièce courante par palier de 2%.
		- **Baisse beaucoup:** Baisse le volume de l'enceinte du PC de l'Avatar client pour la pièce courante par palier de 10%.
	- **Actions sur la Freebox Révolution:**	
		- **Baisse le son:** Baisse le son de la Freebox par palier de 5
		- **Monte le son:** Monte le son de la Freebox par palier de 5
		- **Mute/Unmute:** Coupe/Remet le son de la Freebox
	- **Actions sur le Player Sonos:**
		- **Volume minimum:** Règle le volume du player à 15
		- **Volume moyen:** Règle le volume du player à 45
		- **Volume fort:** Règle le volume du player à 70
		- **Pause:** Met la musique en pause
		- **Lecture:** Démarre la lecture
		- **Next:** Passe à la musique suivante
- La touche **Basse** active le mode écoute Pebble
	- Utilisez le micro interne de la montre
	- Dictez une règle qui sera traitée par le SpeechToText Pebble, elle sera ensuite envoyée vers le serveur Avatar et exécutée comme avec un client réel.
	
		
**Important**
- Cette application a été développée pour utiliser la variable "Avatar.currentRoom" (voir la documentation d'Avatar). Cette variable positionne le client courant et est idéalement définie par des capteurs de présence dans chaque pièce et une action d'une box domotique qui la met à jour. Ainsi, la montre envoie toujours l'action dans la pièce courante.
	- Bien sûr, on pourrait imaginer d'autres possibilités, comme par exemple, avoir un menu dans la montre avec des noms de pièces et une action associée qui exécute la mise à jour de cette variable (a exécuter avant de passer une action) et ainsi se passer de capteurs de présence.
- A savoir aussi que si vous n'avez qu'un seul client Avatar, la montre enverra ses actions vers ce client unique automatiquement.
- L'application fonctionne aussi avec des clients virtuels (voir la documentation Avatar). Ainsi, vous pouvez l'utiliser comme client Avatar pour passer des règles ou des actions dans des pièces qui n'ont pas de client réel.
- Les actions Freebox et Sonos nécessitent les plugins associés (disponibles sur mon GitHub)


## Versions

Version 1.0 - 10/06/2015
- Version Released