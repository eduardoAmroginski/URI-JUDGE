id, quantidade = map(lambda x:float(x),input().split(" "))

cardapio = [
  {
    'id': 1,
    'especificacao': "Cachorro Quente",
    'preco': "R$ 4.00",
  },
  {
    'id': 2,
    'especificacao': "X-Salada",
    'preco': "R$ 4.50",
  },
  {
    'id': 3,
    'especificacao': "X-Bacon",
    'preco': "R$ 5.00",
  },
  {
    'id': 4,
    'especificacao': "Torrada Simples",
    'preco': "R$ 2.00",
  },
  {
    'id': 5,
    'especificacao': "Refrigerante",
    'preco': "R$ 1.50",
  },
]

def busca_lanche(id):
    for lanche in cardapio:
        if lanche['id'] == id:
            return lanche

def get_preco_lanche(id):
    return float(busca_lanche(id)['preco'].replace("R$ ", ""))

def calcula_comanda(id, quantidade):
    preco_lanche = get_preco_lanche(id)
    return float(quantidade * preco_lanche)


print("Total: R$ {:.2f}".format(calcula_comanda(id, quantidade)))