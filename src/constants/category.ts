import { ICategory } from '@interfaces/category'

import ImgFrios from '@assets/category/frios.png'
import ImgBebidas from '@assets/category/bebidas.png'
import ImgAcougue from '@assets/category/acougue.png'
import ImgHortifruti from '@assets/category/hortifruti.png'
import ImgLimpeza from '@assets/category/limpeza.png'

export const CATEGORYS_LIST: ICategory[] = [
  { id: '1', name: 'Frios e laticínios', image: ImgFrios },
  { id: '2', name: 'Bebidas', image: ImgBebidas },
  { id: '3', name: 'Açougue', image: ImgAcougue },
  { id: '4', name: 'Hortifrúti', image: ImgHortifruti },
  { id: '5', name: 'Higiene e limpeza', image: ImgLimpeza },
]
