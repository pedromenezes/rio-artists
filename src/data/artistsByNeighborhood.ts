export interface Artist {
    nome: string;
    id: string;
}

export interface ArtistNeighborhood {
    bairro: string;
    artistas: Artist[];
}

export const artistsByNeighborhood: ArtistNeighborhood[] = [
  { "bairro": "Barra da Tijuca", "artistas": [
    { "nome": "Anitta", "id": "7FNnA9vBm6EKceENgCGRMb" }
  ]},
  { "bairro": "Botafogo", "artistas": [
    { "nome": "Beth Carvalho", "id": "56TkPi7rpmU8jTpkcK7FY3" } 
  ]},
  { "bairro": "Catete", "artistas": [
    { "nome": "Cartola", "id": "0RSWHhBUwW7lhCqXqxKxWN" },
    { "nome": "Chico Buarque", "id": "6tOsSffQQIXmK8TqsDck8t" } 
  ]},
  { "bairro": "Cidade de Deus", "artistas": [
    { "nome": "MV Bill", "id": "4oE4ASN8auDhoW9vsXp3VJ" } 
  ]},
  { "bairro": "Copacabana", "artistas": [
    { "nome": "Paula Toller", "id": "5BQveHScm6btG6jfbxwyfs" }, 
    { "nome": "Carmen Miranda", "id": "7iSJhi05cFvFylzw921y3H" } 
  ]},
  { "bairro": "Estácio", "artistas": [
    { "nome": "Luiz Melodia", "id": "1zZjt7cDeeJSLWZYK34r7W" } 
  ]},
  { "bairro": "Gamboa", "artistas": [
    { "nome": "Donga", "id": "0Sm0cjLo4DiVoprCYbiKzc" }
  ]},
  { "bairro": "Gávea", "artistas": [
    { "nome": "Vinicius de Moraes", "id": "5HlnN6xF2MD87KhGRmCRTd" } 
  ]},
  { "bairro": "Glória", "artistas": [
    { "nome": "Filipe Ret", "id": "7gJN8W0589FisSYJS17K54" } 
  ]},
  { "bairro": "Honório Gurgel", "artistas": [
    { "nome": "Anitta", "id": "7FNnA9vBm6EKceENgCGRMb" }
  ]},
  { "bairro": "Ipanema", "artistas": [
    { "nome": "Vinicius de Moraes", "id": "5HlnN6xF2MD87KhGRmCRTd" }, 
    { "nome": "Tom Jobim", "id": "3pO5VjZ4wOHCMBXOvbMISG" } 
  ]},
  { "bairro": "Irajá", "artistas": [
    { "nome": "Zeca Pagodinho", "id": "3qZ2n5keOAat1SoF6bHwmb" } 
  ]},
  { "bairro": "Laranjeiras", "artistas": [
    { "nome": "Heitor Villa-Lobos", "id": "01UzgUtDa2NqWuvUjrrl3p" } 
  ]},
  { "bairro": "Leblon", "artistas": [
    { "nome": "Cazuza", "id": "1PwOU6fFbmaGkK3wkbb8fU" }
  ]},
  { "bairro": "Madureira", "artistas": [
    { "nome": "Leci Brandão", "id": "5iiQvuDCnlXoK8iAhydW0u" },
    { "nome": "Arlindo Cruz", "id": "096an3uS6ZaK2XySae6SqP" }
  ]},
  { "bairro": "Mangueira", "artistas": [
    { "nome": "Nelson Sargento", "id": "0Ij2lGitwYszblscnFtglL" }, 
    { "nome": "Jamelão", "id": "4PirWL5JYf8HerMVvmwuD0" }
  ]},
  { "bairro": "Osvaldo Cruz", "artistas": [
    { "nome": "Monarco", "id": "0Aqcba7AHmDUp7UeAQbEDm" },
    { "nome": "Tia Surica", "id": "7aSYRWqbMKGDQXsfjBnYTh" }, 
    { "nome": "Clara Nunes", "id": "6UKz2oYWzE0ZBnciztCown" } 
  ]},
  { "bairro": "Padre Miguel", "artistas": [
    { "nome": "Dudu Nobre", "id": "4Mw0vJsDXTZF7kn7EsdNoD" }, 
    { "nome": "Jorge Aragão", "id": "2cAooeeHKk2UvzUgIxpS0y" } 
  ]},
  { "bairro": "Piedade", "artistas": [
    { "nome": "Pixinguinha", "id": "0pMRwfwerzk1N0cUov351R" }
  ]},
  { "bairro": "Quintino Bocaiúva", "artistas": [
    { "nome": "Tim Maia", "id": "0jOs0wnXCu1bGGP7kh5uIu" } 
  ]},
  { "bairro": "Realengo", "artistas": [
    { "nome": "Mumuzinho", "id": "34dfPo3Zi55yM6oV46q4y7" }
  ]},
  { "bairro": "Tijuca", "artistas": [
    { "nome": "Marisa Monte", "id": "0rSTXALHu0EKAawPLBdODH" }, 
    { "nome": "Tom Jobim", "id": "3pO5VjZ4wOHCMBXOvbMISG" }, 
    { "nome": "Mr. Catra", "id": "1mXaaMbQM3IYuhNWaZdFuE" } 
  ]},
  { "bairro": "Urca", "artistas": [
    { "nome": "Roberto Carlos", "id": "7fAKtXSdNInWAIf0jVUz65" }, 
    { "nome": "Renato Russo", "id": "3QLc39WR4dQAN1SgierGgE" } 
  ]},
  { "bairro": "Vidigal", "artistas": [
    { "nome": "Seu Jorge", "id": "0i1s9WcIu0PrUvHzALgofo" } 
  ]},
  { "bairro": "Vila Isabel", "artistas": [
    { "nome": "Noel Rosa", "id": "2rF7JpzIpgWtpVMuPouhIl" }, 
    { "nome": "Martinho da Vila", "id": "6rM2yY0GnVcOHMU5GD3y9E" } 
  ]}
]; 