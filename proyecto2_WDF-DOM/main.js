import './style.css'

const products = [
  {
    name: 'Lenovo IdeaPad Slim 3 15IAH8 Intel Core i5-12450H/16GB/1TB SSD/15.6"',
    price: 599,
    stars: 4.7,
    reviews: 87,
    seller: 'Lenovo',
    image:
      'https://img.pccomponentes.com/articles/1080/10803445/1686-lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-1tb-ssd-156.jpg'
  },
  {
    name: 'ASUS ExpertBook B1 B1502CBA-EJ0469X Intel Core i5-1235U/8GB/256GB SSD/15.6"',
    price: 559,
    stars: 4.2,
    reviews: 13,
    seller: 'ASUS',
    image:
      'https://img.pccomponentes.com/articles/1070/10706379/1173-asus-expertbook-b1-b1502cba-ej0469x-intel-core-i5-1235u-8gb-256gb-ssd-156.jpg'
  },
  {
    name: 'ASUS VivoBook 15 F1502ZA-EJ1302 Intel Core i5-1235U/16GB/512GB SSD/15.6"',
    price: 689,
    stars: 4.2,
    reviews: 177,
    seller: 'ASUS',
    image:
      'https://img.pccomponentes.com/articles/1073/10736944/1266-asus-vivobook-15-f1502za-ej1302-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'HP 255 G9 AMD Athlon 3020e/8GB/512GB SSD/15.6"',
    price: 299,
    stars: 4.1,
    reviews: 78,
    seller: 'HP',
    image:
      'https://img.pccomponentes.com/articles/1067/10674903/1670-hp-255-g9-amd-athlon-3020e-8gb-512gb-ssd-156.jpg'
  },
  {
    name: 'HP 15-fd0076ns Intel Core i5-1335U/16GB/512GB SSD/15.6"',
    price: 589,
    stars: 4.5,
    reviews: 172,
    seller: 'HP',
    image:
      'https://img.pccomponentes.com/articles/1073/10733266/1752-hp-15-fd0076ns-intel-core-i5-1335u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'Acer Aspire 3 A315-510P-306F Intel Core i3-N305/8GB/512GB SSD/15.6"',
    price: 379,
    stars: 4.5,
    reviews: 89,
    seller: 'Acer',
    image:
      'https://img.pccomponentes.com/articles/1071/10719810/1513-acer-aspire-3-a315-510p-306f-intel-core-i3-n305-8gb-512gb-ssd-156.jpg'
  },
  {
    name: 'Lenovo IdeaPad Slim 3 15IAH8 Intel Core i5-12450H/16GB/512GB SSD/15.6"',
    price: 469,
    stars: 4.5,
    reviews: 303,
    seller: 'Lenovo',
    image:
      'https://img.pccomponentes.com/articles/1079/10797786/1581-lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'Acer Nitro V 15 ANV15-51-51PQ Intel Core i5-13420H/16GB/1TB SSD/RTX 3050/15.6"',
    price: 759,
    stars: 4.6,
    reviews: 175,
    seller: 'Acer',
    image:
      'https://img.pccomponentes.com/articles/1079/10792747/1824-acer-nitro-v-15-anv15-51-51pq-intel-core-i5-13420h-16gb-1tb-ssd-rtx-3050-156-review.jpg'
  },
  {
    name: 'Dell Vostro 3520 Intel Core i5-1235U/16GB/512GB SSD/15.6"',
    price: 649,
    stars: 4.1,
    reviews: 13,
    seller: 'Dell',
    image:
      'https://img.pccomponentes.com/articles/1079/10791958/1178-dell-vostro-3520-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'ASUS Vivobook Go E1504FA-NJ311W AMD Ryzen 5 7520U/16GB/512GB SSD/15.6"',
    price: 749,
    stars: 4.2,
    reviews: 79,
    seller: 'ASUS',
    image:
      'https://img.pccomponentes.com/articles/1075/10756041/1947-asus-vivobook-go-e1504fa-nj311w-amd-ryzen-5-7520u-16gb-512gb-ssd-radeon-610m-156.jpg'
  }
]

let vendors = []
//? Funcion para pintar los productos con sus propiedades en el div de productos
const pintarproductos = (param) => {
  param.forEach((product) => {
    const div = document.createElement('div')
    div.classList.add('divproduct')
    const sectprod = document.querySelector('.products')
    //? image, name, price, stars, reviews, seller
    let productoHTML = `
  <img class=productimage src=${product.image} >
  <p>${product.name}</p>
  <p class=price>${product.price}€<p>
  <p class=stars>Rating: ${product.stars} ⭐️<p>
  <p class=reviews>${product.reviews} reviews<p>
  <p class=seller>Vendido por: ${product.seller}<p>
  `
    div.innerHTML += productoHTML
    sectprod.appendChild(div)

    vendors.push(product.seller)
  })
}
//? Se llama a la función con el array inicial
pintarproductos(products)

//? Filtrando el array de sellers para tener un listado único y no se repitan las opciones
const uniquevendors = vendors.filter((valor, indice, array) => {
  return array.indexOf(valor) === indice
})

//? Creando las opciones de seller en el select
for (const vendor of uniquevendors.sort()) {
  const filtervendor = document.querySelector('#filtrovendor')
  const option = document.createElement('option')
  option.value = vendor
  option.innerText = vendor
  filtervendor.appendChild(option)
}
//? Variable para array de productos filtrados
let productfiltrado = []

//? Funcion para incluir en el array los productos seleccionados, que elimina el HTML del div de productos y llama a la funcion pintar con el array filtrado, dejandolo limpio nuevamente para próximo filtro.
const showselected = () => {
  let vendorshow = select.value

  for (let i = 0; i < products.length; i++) {
    if (vendorshow === products[i].seller) {
      productfiltrado.push(products[i])
    }
  }
  if (vendorshow === 'All products') {
    productfiltrado = products
  }
  const section = document.querySelector('.products')
  section.innerHTML = ''
  pintarproductos(productfiltrado)
  productfiltrado = []
}

//? Escuchador de evento para saber cuando se haya filtrado por vendedor
const select = document.querySelector('#filtrovendor')
select.addEventListener('change', showselected)

//? Funcion para filtrar por precio
let productbudget = []
const showbudget = () => {
  const valorinput = budget.value
  for (let i = 0; i < products.length; i++) {
    if (products[i].price <= valorinput) {
      productbudget.push(products[i])
    }
  }
  const section = document.querySelector('.products')
  section.innerHTML = ''
  pintarproductos(productbudget)
  productbudget = []
}

//? Segundo filtro por precio
const boton = document.querySelector('.budgetbutton')
const budget = document.querySelector('.budgetinput')
boton.addEventListener('click', showbudget)

//? Limpiar filtros
const limpiafiltro = () => {
  const section = document.querySelector('.products')
  section.innerHTML = ''
  pintarproductos(products)
  budget.value = ''
  select.value = ''
}
const limpia = document.querySelector('.limpia')
limpia.addEventListener('click', limpiafiltro)
