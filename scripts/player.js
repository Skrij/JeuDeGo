/** Classe de gestion d'un joueur dans le jeu de go.
  \param [in] {string} iHouseName Nom associé à la maison. Note : le nom de la maison correspond au nom du ficher image associé?

*/
function CPlayer()
{
  //Maison qu'a choisi le joueur
  this.House;

  //Signal si le joueur est une IA ou non 
  this.IA = false;

  //Vérifier si le joueur a passé son tour.
  this.Passed = false;
}

/*
  La méthode met à jour la maison du joueur 
*/
CPlayer.prototype.SetHouse = function (iHouse)
{
  this.House = iHouse
}