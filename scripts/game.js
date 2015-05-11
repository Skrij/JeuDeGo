// Déclaration des variables globales
var globPlayersHouse = 1;
var globGoGame = new CGoGame();


/** La fonction traite le passage à la "page" des joueurs ou du jeu.
 
  \return
  La fonction ne retourne pas de valeur.
*/
function GoToPlayers()
{
	// Vérifier s'il existe une partie sauvegardée
	if (globGoGame.Save.LastGameExist() == true)
	{
	  // Demander si le joueur souhaite continuer cette partie
    if (window.confirm("Une partie est déjà en cours. Souhaitez-vous la reprendre ?") == true)
    {
      // Masquer la "page" d'introduction et afficher le jeu
      document.getElementById("introduction").style.display = "none";
      document.getElementById("game").style.display = "";

  	  // Récuperer les données de la partie
      globGoGame.Save.GetData();

      globGoGame.Goban.InitGame(globGoGame.Save.Lines);
      globGoGame.NextPlayer = globGoGame.Save.NextPlayer;

  	  // Relancer la partie
  	  globGoGame.Play();
    }
    else
    {
      // Masquer la "page" d'introduction et afficher les joueurs
      document.getElementById("introduction").style.display = "none";
      document.getElementById("players").style.display = "";
    }
	}
	else
	{
    // Masquer la "page" d'introduction et afficher les joueurs
    document.getElementById("introduction").style.display = "none";
    document.getElementById("players").style.display = "";
	}
}

/** La fonction traite le passage à la "page" des maisons.

  \param [in] {int} iPlayersNumber  Nombre de joueurs.

  \return
  La fonction ne retourne pas de valeur.
*/
function GoToHouse(iPlayersNumber)
{
  // Mettre à jour le nombre de joueurs
  globGoGame.SetPlayersNumber(parseInt(iPlayersNumber));

  // Masquer la "page" des joueurs et afficher les maisons
  document.getElementById("players").style.display = "none";
  document.getElementById("house").style.display = "";
}

/** Fonction de gestion des maisons et passage au jeu
  La fonction lance le jeu.

  \param [in] {int} iHouseNumber  Numéro de la maison.

  \return
  La fonction ne retourne pas de valeur.
*/
function OnSelectHouse(iHouseNumber)
{
  //Vérifier le nombre de passage dans la fonction pour associer la maison au joueur 
  if(globPlayersHouse == 1)
  {
    //Mise à jour de la maison du joueur 
    globGoGame.SetPlayerHouse(globPlayersHouse, iHouseNumber);

    //On incrémente le compteur de passage pour passer au joueur 2
    globPlayersHouse = globPlayersHouse+1;
  }
  else if(globPlayersHouse == 2)
  {
    //Mise à jour de la maison du joueur 
    globGoGame.SetPlayerHouse(globPlayersHouse, iHouseNumber);


    //On repasse le compteur à 1
    globPlayersHouse = 1;
    
    //On demande au joueur s'il souhaite jouer avec des handicaps
    if(window.confirm("Souhaitez-vous jouer avec des handicaps ?") == true)
    {
      //Mettre a jour la partie avec les handicaps
      globGoGame.Handicaps = true;
    }

    // Masquer la "page" des maisons et afficher le jeu
    document.getElementById("house").style.display = "none";
    document.getElementById("game").style.display = "";

    // Lancer la nouvelle partie
    globGoGame.Play();
  }

}

/** Fonction autorise la position d’une pierre ainsi que l’état de vie et de mort des pierres du plateau 

  \param [in] {obj} iObjTD  Cellute dans le tableau.
  \param [in] {int} iLine  Numéro de la ligne (débute à 0).
  \param [in] {int} iColumn  Numéro de la colonne (débute à 0).

  \return
  La fonction ne retourne pas de valeur.
*/
function OnStonePosition(iObjTD, iLine, iColumn)
{
  var NextPlayer = globGoGame.NextPlayer;
  
  //Vérifier si l’intersection est vide
  if(globGoGame.Goban.CrossingIsEmpty(iLine, iColumn) == true)
  {
    globGoGame.Goban.StonePosition(NextPlayer, iObjTD, iLine, iColumn);

    if(globGoGame.NextPlayer == 'n')
    {
      globGoGame.NextPlayer = 'b';
    }
    else
    {
      globGoGame.NextPlayer = 'n';
    }
  }
  else
  {
    window.alert("L'intersection est déjà prise.");
  }
}


/** Fonction de sauvegarde de la partie en cours.

  \return
  La fonction ne retourne pas de valeur.
*/
function SaveGame()
{
  // Sauvegarder la partie en cours
  globGoGame.Save.SaveData();
}

function fadeOut(id, speed)
{
    var s = document.getElementById(id).style;
 
    s.opacity = 1;
 
    (function fade() {(s.opacity-=.1)<.1?s.display="none":setTimeout(fade,speed)})();
 
}