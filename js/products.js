let message = ' ';
let products = [
{
  name: 'Gold Balloon Trio',
  price: '$8',
  src: '<img src = "../images/goldballoontrio.jpg" class="style-image" width="144px">'
},
{
  name: 'Red Heart',
  price: '$8',
  src: '<img src = "../images/redheart.jpg" class="style-image" width="144px">'
},
{
  name: 'Gold Heel',
  price: '$8',
  src: '<img src = "../images/goldheel.jpg" class="style-image" width="144px">'
},
{
  name: 'Single Red Balloon',
  price: '$8',
  src: '<img src = "../images/redsingleballoon.jpg" class="style-image" width="144px">'
},
{
  name: 'Hello',
  price: '$8',
  src: '<img src = "../images/hello.jpg" class="style-image" width="144px">'
},
{
  name: 'Gold Heart',
  price: '$8',
  src: '<img src = "../images/goldheart.jpg" class="style-image" width="144px">'
}
]


function formatItem() {
  for(let i=0; i<products.length; i+=1) {
    product = products[i];
    let list = document.getElementById('style-list');
    let item = document.createElement('li');
    item.setAttribute('class', 'list-item');
    item.innerHTML = product.src + '<h3>' + product.name + '</h3>' + '<h4>' + product.price + '</h4>';
    list.appendChild(item);
  }
}
formatItem();




