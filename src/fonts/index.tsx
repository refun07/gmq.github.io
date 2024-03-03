import { Manrope, Outfit  } from 'next/font/google'

const manrope = Manrope({
  weight: ['200', '300','400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
})
const outfit = Outfit({
  weight: ['200', '300','400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
})


export { manrope, outfit }