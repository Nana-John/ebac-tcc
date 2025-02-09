declare interface CardapioItem {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

declare type FoodInfos = {
  id: number
  titulo: string
  destacado: boolean
  capa: string
  tipo: string
  avaliacao: number
  descricao: string
  cardapio: CardapioItem[]
}

declare type CartItem = {
  id: number
  nome: string
  preco: number
  foto: string
}
