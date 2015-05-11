/** Classe principale du jeu de Go.
    Page où coder le jeu
*/
function CGoGame()
{
  // Gestion du plateau du jeu
  this.Goban = new CGoban();

  // Gestion de la sauvegarde et de restauration d'une partie
  this.Save = new CSave();

  //Nombre de joueur
  this.PlayersNumber = 2;

  // Le prochain Joueur 'n' ou 'b' 
  this.NextPlayer = 'n';

  /*tableau des joueurs qui reprend les informations sur les joueurs
  Par convention le joueur 0 est celui qui commence (pierres noires)*/
  this.Players = Array ();
  this.Players[0] = new CPlayer ();
  this.Players[1] = new CPlayer ();

  //tableau de maisons
  this.Houses = Array ();
  this.Houses[0] = new CHouse("Targarien");
  this.Houses[1] = new CHouse("Baratheon");
  this.Houses[2] = new CHouse("Lannister");
  this.Houses[3] = new CHouse("Stark");

  //Partie avec les handicaps
  this.Handicaps = false;
}

/** La méthode met à jour le nombre de joueur

  \param [in] {int} iPlayersNumber Le nombre de joueurs Maximum 2

  \return
  La méthode ne retourne pas de valeur.
*/
CGoGame.prototype.SetPlayersNumber = function(iPlayersNumber)
{
  //Mise à jour du nb de joueurs 
  this.PlayersNumber = iPlayersNumber;
  //Si on a 1 joueur, le 2eme joueur est une IA
  if(this.PlayersNumber == 1)
  {
    this.Players[1].IA = true;
  }
}

/** La méthode met à jour la maison du joueur

  \param [in] {int} iPlayersNumber Le numéro du joueur 1 ou 2
  \param [in] {int} iHouseNumber Le numéro de la maison choisie entre 1 et 4
  \return
  La méthode ne retourne pas de valeur.
*/
CGoGame.prototype.SetPlayerHouse = function(iPlayersNumber, iHouseNumber)
{
  this.Players[iPlayersNumber-1].SetHouse(this.Houses[iHouseNumber-1]);
}


/** La méthode lance le jeu.

  \return
  La méthode ne retourne pas de valeur.
*/
CGoGame.prototype.Play = function()
{
  //Afficher la partie (plateau, scores, joueurs, maisons)
  this.Goban.Display();

  //Gestion des handicaps
}
