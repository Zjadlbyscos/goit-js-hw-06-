const elemByItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${elemByItems.length}`);

elemByItems.forEach (item =>{
  // Znajdujemy nagłówek h2 wewnątrz elementu li.item
  console.log(`Category: ${item.querySelector('h2').textContent}`)
  console.log(`Elements; ${item.querySelectorAll('li').length}`)
})
