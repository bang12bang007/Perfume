const storedProducts = JSON.parse(localStorage.getItem('products'));
const listProduct = document.querySelector('.js-list-product');
const pagination = document.querySelector('.js-pagination-container');

const products = storedProducts;
let per = 12;
let totalProduct = products.length;
let numberPage = Math.ceil(totalProduct/per);
let min = 0, max = per;
let index = 1;

function renderPagination() {
    var html = '<li onclick="prevPage()"><i class="fa-solid fa-chevron-left"></i></li>';                    
    for(var i = 1; i <= numberPage; i++) {
        html += `<li class="pagination-items" onclick="updatePage(${i})">${i}</li>`
    }
    html += '<li onclick="nextPage()"><i class="fa-solid fa-chevron-right"></i></li>';
    pagination.innerHTML = html;
}
renderPagination();

const paginationItems = document.querySelectorAll('.pagination-items');
paginationItems[0].classList.add('active_pagination')

function renderProducts() {
    const html = products.map((value, index) => {
        if(index >=min && index < max) {
            return `
            <div class="col c-6 m-6 l-4">
                <div class="product">
                    <span class="product__label">New</span>
                    <div class="product__img-link">
                        <a href="#" class="product__img">
                            <img src="${value.img}" alt="">
                        </a>
                        <div class="product__action">
                            <a href=""><i class="fa-regular fa-heart"></i></a>
                            <span><i class="fa-solid fa-magnifying-glass"></i></span>
                            <span onclick="addCart(${value.id}, 1)"><i class="fa-solid fa-bag-shopping"></i></span>
                        </div>
                    </div>
                    <div class="product__content">
                        <h3 class="product__name">${value.name}</h3>
                        <div class="product__rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <p class="product__price">
                            <span class="product__price--old">$${value.old_price}</span>
                            <span class="product__price--new">$${value.current_price}</span>
                        </p>
                    </div>
                </div>
            </div>
            `
        }
    })
    listProduct.innerHTML = html.join('');
}

renderProducts()

function updatePage(i) {
    index = i
    min = 0, max = per
    let minTemp = max*index - (min+per)
    let maxTemp = max*index - min
    min = minTemp;
    max = maxTemp;
    renderProducts()
    for(const paginationItem of paginationItems) {
        if(paginationItem == paginationItems[index-1]){
            paginationItems[index-1].classList.add('active_pagination')
        }else {
            paginationItem.classList.remove('active_pagination')
        }
    }
    window.scroll({
        top: 100,
        behavior: "smooth",
      }); 
}

function nextPage() {
    if(index < numberPage) {
        index++;
    }
    updatePage(index);
}

function prevPage() {
    if(index > 1) {
        index--;
    }
    updatePage(index);
}
