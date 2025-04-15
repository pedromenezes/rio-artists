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
    { "nome": "Beth Carvalho", "id": "56TkPi7rpmU8jTpkcK7FY3" },
    { "nome": "Paulinho da Viola", "id": "0t2xdTxRXnffsmpMamH8Ls" },
    { "nome": "Dona Ivone Lara", "id": "6Q1U3z1hge970f3QhrPKcW" },
  ]},
  { "bairro": "Campo Grande", "artistas": [
    { "nome": "Cássia Eller", "id": "10naVTwNjE50daQVrN0bXh" }
  ]},
  { "bairro": "Olaria", "artistas": [
    { "nome": "Grupo Fundo de Quintal", "id": "1WkZvxuA4zCcFF9GChK6Vr" }
  ]},
  { "bairro": "Grajaú", "artistas": [
    { "nome": "Aldir Blanc", "id": "2vxB3dcYKpHO5eQfYetGxT" }
  ]},
  { "bairro": "Jardim Botânico", "artistas": [
    { "nome": "Tom Jobim", "id": "3pO5VjZ4wOHCMBXOvbMISG" }
  ]},
  { "bairro": "Bonsucesso", "artistas": [
    { "nome": "Naldo Benny", "id": "4xnFkvb5Pk259qAXQ6yrYU" }
  ]},
  { "bairro": "Catete", "artistas": [
    { "nome": "Cartola", "id": "0RSWHhBUwW7lhCqXqxKxWN" },
    { "nome": "Chico Buarque", "id": "6tOsSffQQIXmK8TqsDck8t" } 
  ]},
  { "bairro": "Cosme Velho", "artistas": [
    { "nome": "Cássia Eller", "id": "10naVTwNjE50daQVrN0bXh" }
  ]},
  { "bairro": "Encantado", "artistas": [
    { "nome": "Aracy de Almeida", "id": "4dUyAH3f2lQ4QCXrUtJ778" },
  ]},
  { "bairro": "Cidade de Deus", "artistas": [
    { "nome": "MV Bill", "id": "4oE4ASN8auDhoW9vsXp3VJ" } 
  ]},
  { "bairro": "Copacabana", "artistas": [
    { "nome": "Paula Toller", "id": "5BQveHScm6btG6jfbxwyfs" }, 
    { "nome": "Carmen Miranda", "id": "7iSJhi05cFvFylzw921y3H" } 
  ]},
  { "bairro": "Estácio", "artistas": [
    { "nome": "Luiz Melodia", "id": "1zZjt7cDeeJSLWZYK34r7W" },
    { "nome": "Gonzaguinha", "id": "1LOFaxDBvn3YuvarTldGAe" }
  ]},
  { "bairro": "Gamboa", "artistas": [
    { "nome": "Donga", "id": "0Sm0cjLo4DiVoprCYbiKzc" },
    { "nome": "Mariene de Castro", "id": "2MaqyTrc7HzuYvLnvfhxIN" }
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
  { "bairro": "Rio Comprido", "artistas": [
    { "nome": "Jorge Ben Jor", "id": "5JYtpnUKxAzXfHEYpOeeit" }
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
  { "bairro": "Andaraí", "artistas": [
    { "nome": "Marcelo D2", "id": "1vEN3d3dJbmdHQpXD6AIkL" }
  ]},
  { "bairro": "Madureira", "artistas": [
    { "nome": "Leci Brandão", "id": "5iiQvuDCnlXoK8iAhydW0u" },
    { "nome": "Arlindo Cruz", "id": "096an3uS6ZaK2XySae6SqP" },
    { "nome": "Jorge Ben Jor", "id": "5JYtpnUKxAzXfHEYpOeeit" },
  ]},
  { "bairro": "Santa Teresa", "artistas": [
    { "nome": "Gilberto Gil", "id": "7oEkUINVIj1Nr3Wnj8tzqr" },
    { "nome": "Seu Jorge", "id": "0i1s9WcIu0PrUvHzALgofo" },
    { "nome": "Noel Rosa", "id": "2rF7JpzIpgWtpVMuPouhIl" }, 
  ] },
  { "bairro": "Mangueira", "artistas": [
    { "nome": "Nelson Sargento", "id": "0Ij2lGitwYszblscnFtglL" }, 
    { "nome": "Jamelão", "id": "4PirWL5JYf8HerMVvmwuD0" }
  ]},
  { "bairro": "Taquara", "artistas": [
    { "nome": "Grupo Molejo", "id": "7yl05GUXqcUA3mfpowr1fe" }
  ]},
  { "bairro": "Jacarepaguá", "artistas": [
    { "nome": "Lexa", "id": "0jTDeBJQr3unrK29LklnAv" }
  ]},
  { "bairro": "Pilares", "artistas": [
    { "nome": "Xande de Pilares", "id": "4IQKOXNGjuRRe0WgOm5YfB" },
    { "nome": "Sandra de Sá", "id": "5Rxz1EE4Jj08mu40vlrqHv" }
  ]},
  { "bairro": "Oswaldo Cruz", "artistas": [
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
  { "bairro": "Engenho de Dentro", "artistas": [
    { "nome": "Orlando Silva", "id": "46AzVWfokm2ERmQCQlY0kh" }
  ]},
  { "bairro": "Engenho Novo", "artistas": [
    { "nome": "Marcelo Falcão", "id": "4r6d4drhz83kHCRVJnzgdr" }
  ]},
  { "bairro": "Tijuca", "artistas": [
    { "nome": "Marisa Monte", "id": "0rSTXALHu0EKAawPLBdODH" }, 
    { "nome": "Tom Jobim", "id": "3pO5VjZ4wOHCMBXOvbMISG" }, 
    { "nome": "Mr. Catra", "id": "1mXaaMbQM3IYuhNWaZdFuE" },
    { "nome": "Xande de Pilares", "id": "4IQKOXNGjuRRe0WgOm5YfB" },
    { "nome": "Erasmo Carlos", "id": "6cHQUDAPGKRE2NbVjBlOcz" },
    { "nome": "Aldir Blanc", "id": "2vxB3dcYKpHO5eQfYetGxT" }
  ]},
  { "bairro": "Flamengo", "artistas": [
    { "nome": "Dolores Duran", "id": "2YnroLXUOoX1HtgamkHugp" }
  ]},
  { "bairro": "Saúde", "artistas": [
    { "nome": "Dolores Duran", "id": "2YnroLXUOoX1HtgamkHugp" }
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