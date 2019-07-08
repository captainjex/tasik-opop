import { batikItems, anyamanItems } from './kerajinanItems'

export const indexMenus = [
  { path: 'kerajinan', name: 'Kerajinan', icon: 'fas fa-shopping-bag', color: '#d64550' },
  { path: 'makanan', name: 'Makanan', icon: 'fas fa-utensils', color: '#ffc09f' },
  { path: 'fashion', name: 'Fashion', icon: 'fas fa-tshirt', color: '#77cbb9' },
  { path: 'wisata', name: 'Wisata', icon: 'fas fa-street-view', color: '#6369d1' },
  { path: 'buku', name: 'Buku', icon: 'fas fa-book-open', color: '#f76f8e' }
]

export const events = [
  {
    id: 1,
    img: 'https://user-images.githubusercontent.com/21119252/60812506-d4a43b80-a1bb-11e9-82f9-aae37f68d592.jpg',
    name: 'Tasik Wedding Festival',
    date: 'Sat, 31 Aug @ 10.00',
    price: 'GRATIS'
  },
  {
    id: 2,
    img: 'https://user-images.githubusercontent.com/21119252/60812899-c0ad0980-a1bc-11e9-86d0-f0721fb5d528.jpg',
    name: 'NGULISIK (Nguriling Kota Tasik)',
    date: 'Sat, 31 Aug @ 10.00',
    price: 'GRATIS'
  },
  {
    id: 3,
    img: 'https://user-images.githubusercontent.com/21119252/60812918-c6a2ea80-a1bc-11e9-963f-bd5d17a2233b.jpg',
    name: 'Kelas Komunikasi Miracle',
    date: 'Sat, 31 Aug @ 10.00',
    price: 'GRATIS'
  },
  {
    id: 4,
    img: 'https://user-images.githubusercontent.com/21119252/60812936-d3274300-a1bc-11e9-88bc-21bd9d79761a.jpg',
    name: 'TOF (Tasik Oktober Festival)',
    date: 'Sat, 31 Aug @ 10.00',
    price: 'GRATIS'
  },
  {
    id: 5,
    img: 'https://user-images.githubusercontent.com/21119252/60812942-d7536080-a1bc-11e9-8f1b-bb3d9b36645c.jpg',
    name: 'Kuliner Pasar Mambo',
    date: 'Sat, 31 Aug @ 10.00',
    price: 'GRATIS'
  },
  {
    id: 6,
    img: 'https://user-images.githubusercontent.com/21119252/60812952-dc181480-a1bc-11e9-8830-22da98bab8ab.jpg',
    name: 'KOLECER (Kota Literasi Cerdas)',
    date: 'Sat, 31 Aug @ 10.00',
    price: 'GRATIS'
  }
]

export const kerajinans = [
  { name: 'Anyaman Mendong', path: 'anyaman', items: anyamanItems },
  { name: 'Batik', path: 'batik', items: batikItems },
  { name: 'Kelom Gelis', path: 'anyaman', items: anyamanItems },
  { name: 'Meubel', path: 'anyaman', items: anyamanItems },
  { name: 'Sulaman', path: 'anyaman', items: anyamanItems },
  { name: 'Anyam Bambu', path: 'anyaman', items: anyamanItems }
]
