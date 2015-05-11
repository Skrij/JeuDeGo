/** Classe de sauvegarde et de restauration d'une partie du jeu de Go.
*/
function CSave()
{
  // Données sauvegardées
  // Les positions des pierres dans le jeu
  this.Lines = '';

  // Le prochain joueur à jouer
  this.NextPlayer = 'n';
  
}

/** La méthode vérifie si une partie est déjà enregistrée.

  \return
  La méthode retourne true si une partie précédente est enregistrée, sinon false.
*/
CSave.prototype.LastGameExist = function()
{
  var valret = false;

  return valret;
}

/** La méthode récupère les données sauvegardées de la partie précédente.
  La méthode lit le fichier de sauvegarde "partie.txt" et met à jour les propriétés Lines et NextPlayer.

  \return
  La méthode ne retourne pas de valeur.
*/
CSave.prototype.GetData = function()
{
}

/** La méthode sauvegarde les données de la partie en cours.
  La méthode écrit les données de la partie en cours dans le fichier de sauvegarde "partie.txt".

  \return
  La méthode ne retourne pas de valeur.
  \note
  Si le fichier "partie.txt" contient déjà des données, ces dernières sont écrasées.
*/
CSave.prototype.SaveData = function()
{
  // Sauvegarder les données
  // Signaler que les données ont bien été sauvegardées
  alert('La partie a bien été sauvegardée.');
}
