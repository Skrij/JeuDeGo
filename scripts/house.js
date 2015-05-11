/** Classe de gestion d'une maison dans le jeu de go.

  \param [in] {string} iHouseName Nom associé à la maison. Note : le nom de la maison correspond au nom du ficher image associé?

*/
function CHouse(iHouseName)
{
  // Chemin de l'image
  this.ImgPath = "../images/"+iHouseName+".jpg";
}
