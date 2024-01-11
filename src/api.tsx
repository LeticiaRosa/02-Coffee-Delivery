import { v4 as uuidv4 } from 'uuid'
import expressoTradicional from './assets/Coffees/expresso-tradicional.png'
import expressoAmericano from './assets/Coffees/expresso-americano.png'
import expressoCremoso from './assets/Coffees/expresso-cremoso.png'
import expressoGelado from './assets/Coffees/expresso-gelado.png'
import cafeComLeite from './assets/Coffees/café-com-leite.png'
import latte from './assets/Coffees/latte.png'
import capuccino from './assets/Coffees/capuccino.png'
import macchiato from './assets/Coffees/macchiato.png'
import mocaccino from './assets/Coffees/mocaccino.png'
import chocolateQuente from './assets/Coffees/chocolate-quente.png'
import cubano from './assets/Coffees/cubano.png'
import havaiano from './assets/Coffees/havaiano.png'
import arabe from './assets/Coffees/arabe.png'
import irlandes from './assets/Coffees/irlandes.png'

interface Coffee {
  id: string
  name: string
  description: string
  tags: string[]
  image: string
  price: number
  quantity: number
}

export const coffees: Coffee[] = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    image: expressoTradicional,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    image: expressoAmericano,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    image: expressoCremoso,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    image: expressoGelado,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    image: cafeComLeite,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    image: latte,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    image: capuccino,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    image: macchiato,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    image: mocaccino,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    image: chocolateQuente,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    image: cubano,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    image: havaiano,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    image: arabe,
    price: 9.9 * 100,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    image: irlandes,
    price: 9.9 * 100,
    quantity: 1,
  },
]
