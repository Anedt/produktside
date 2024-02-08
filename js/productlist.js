fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //console.log(data)
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log("product");
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldout");
  }
  copy.querySelector(".subtle").textContent = product.articletype;
  copy.querySelector(".price span").textContent = product.price;
  if (product.discount) {
    copy.querySelector("article").classList.add("discounted");
  }
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  document.querySelector("main").appendChild(copy);
}

/*  <article class="smallProduct">
            <img src="img/1163.webp" alt="Sahara" />
            <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
            <p class="subtle">Tshirts</p>
            <p class="price">DKK 895</p>
            <div class="discounted">
              <p>Now DKK</p>
              <p>-30%</p>
            </div>
            <a href="product.html">Read more</a>
          </article> */
