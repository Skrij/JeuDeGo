//Taille du goban (3 constantes)
const CGOBAN_SMALL = 9;
const CGOBAN_MEDIUM = 13;
const CGOBAN_LARGE = 19;

/** Classe de gestion du plateau du jeu de Go (Goban).
*/
function CGoban()
{
  this.Size = CGOBAN_SMALL;
  this.Empty = true;
  this.Grid = new Array();

  //Initialisation de la grille vide par défaut 9x9
  for( var i = 0 ; i < this.Size ; i++)
  {
    this.Grid[i] = new Array();
    for(var j = 0 ; j < this.Size ; j++)
    {
      this.Grid[i][j] = ' ';
    }
  }
}

/** La méthode définit la taille du goban et réinitialise la grille avec la taille voulue
  
  \param [in] {string} iSize Taille du goban (3 valeurs CGOBAN_SMALL ; CGOBAN_MEDIUM ; CGOBAN_LARGE)
  
  \return
  La méthode ne retourne pas de valeur.
*/
CGoban.prototype.SetSize = function(iSize) 
{
  this.Size = iSize;
  this.Empty = true;
  this.Grid = new Array();
  
  //Initialisation de la grille vide
  for( var i = 0 ; i < this.Size ; i++)
  {
    this.Grid[i] = new Array();
    for(var j = 0 ; j < this.Size ; j++)
    {
      this.Grid[i][j] = ' ';
    }
  }
}

/** La méthode initialise le jeu après chargement de la sauvegarde.
  La méthode récupère la position des pierres noires et blanches sur le jeu.

  \param [in] {string} iStonesPosition  Positions des pierres sur le jeu.

  \return
  La méthode ne retourne pas de valeur.

  \note
  Avec la positions des pierres nous connaissons la taille du plateau (9x9, 13x13 ou 19x19).
*/
CGoban.prototype.InitGame = function(iStonesPosition)
{
  this.Empty = false;
}

/** La méthode affiche le goban
  \return
  La méthode ne retourne pas de valeur.

*/
CGoban.prototype.Display = function()
{
  var parent;
  var htmlGrille;
  var htmlLigne;
  var htmlCellule;
  var widthDiv;
  var heightDiv;
  var ObjSize;

  // 1- Définir les tailles 
  switch(this.Size){
    case CGOBAN_SMALL : 
      widthDiv = 332;
      heightDiv = 316;
      break;

    case CGOBAN_MEDIUM : 
      widthDiv = 464;
      heightDiv = 440;
      break;

    case CGOBAN_LARGE : 
      widthDiv = 662;
      heightDiv = 626;
      break;
  }

  // 2- remove la table dans la div
  parent = document.getElementById("goban");
  htmlGrille = document.getElementById("tab");
  if (htmlGrille != null)
  {
    parent.removeChild(htmlGrille);
  }
  
  // 3- réécrire complètement la table

  parent = document.getElementById("goban");
  parent.style.background = "url(./images/goban-"+this.Size+".png)"
  parent.style.height = heightDiv+"px";
  parent.style.width = widthDiv+"px";
  htmlGrille = document.createElement("table");
  htmlGrille.style.paddingTop = "17px";
  htmlGrille.style.marginLeft = "18px";
  htmlGrille.setAttribute("id","tab");
   
  //ObjSize = 50;
  parent.appendChild(htmlGrille);

  for (var i = 0; i < this.Size; i++) 
  {
    htmlLigne = document.createElement("tr");
    
    for (var j = 0; j < this.Size; j++) 
    {
      htmlCellule = document.createElement("td");

      if (this.Grid[i][j] == "n")
      {
        htmlCellule.setAttribute("class","black");
      }
      else if (this.Grid[i][j] == "b")
      {
        htmlCellule.setAttribute("class","white");
      }
      /*else
      {
        htmlCellule.setAttribute("class","empty");
      }*/
      
      
      htmlCellule.setAttribute("onclick","OnStonePosition(this, "+i+", "+j+")");
      ObjSize = 33;
      htmlCellule.style.width = ObjSize+"px";
      ObjSize = 31;
      htmlCellule.style.height = ObjSize+"px";
      htmlCellule.style.padding = "0 px";
      htmlLigne.appendChild(htmlCellule);
    }
    htmlGrille.appendChild(htmlLigne);
  }
}

/** Fonction vérifie si l'intersection est vide.

  \param [in] {int} iLine  Numéro de la ligne (débute à 0).
  \param [in] {int} iColumn  Numéro de la colonne (débute à 0).

  \return
  La fonction retourne true si l'intersection et vide sinon false.
*/
CGoban.prototype.CrossingIsEmpty = function(iLine, iColumn)
{
  var valret = true;
  if(this.Grid[iLine][iColumn] == " ")
  {
    valret = true;
  }
  else
  {
    valret = false;
  }
  return valret;
}

/** Fonction autorise la position d’une pierre ainsi que l’état de vie et de mort des pierres du plateau 

  \param [in] {string} iPlayer  Le joueur en cours.
  \param [in] {obj} iObjTD  Cellute dans le tableau.
  \param [in] {int} iLine  Numéro de la ligne (débute à 0).
  \param [in] {int} iColumn  Numéro de la colonne (débute à 0).

  \return
  La fonction ne retourne pas de valeur.
*/
CGoban.prototype.StonePosition = function(iPlayer,iObjTD, iLine, iColumn)
{
  // Mettre à jour la grille et l'affichage
  if(this.Grid[iLine][iColumn] == " ")
  {
    if(iPlayer == 'n')
    {
      this.Grid[iLine][iColumn] = "n";
      iObjTD.className = "black";
    }
    else
    {
      this.Grid[iLine][iColumn] = "b";
      iObjTD.className = "white";
    }
  }
}