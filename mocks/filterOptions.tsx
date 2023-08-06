import {
  FaPizzaSlice,
  FaIceCream,
  FaUtensils,
  FaStore,
  FaHamburger,
} from 'react-icons/fa'

export const filterOptions = [
  { label: 'Todos', 
    icon: <FaUtensils className="w-6 h-6" />, 
    value: 'todos' 
  },
  {
    label: 'Pizza',
    icon: <FaPizzaSlice className="w-6 h-6" />,
    value: 'pizza',
  },
  {
    label: 'Waffles',
    icon: <FaIceCream className="w-6 h-6" />,
    value: 'waffles',
  },
  {
    label: 'Hamburguesas',
    icon: <FaHamburger className="w-6 h-6" />,
    value: 'burgers',
  },
  {
    label: 'Sushi',
    icon: <FaIceCream className="w-6 h-6" />,
    value: 'sushi',
  },
  {
    label: 'Minimarket',
    icon: <FaStore className="w-6 h-6" />,
    value: 'minimarket',
  },
]
