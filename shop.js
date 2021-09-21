const displayLocalStorage = () => {
    const cart = getCart()
    for(const name in cart){
        displayProductName(name)
    }
}

const addItem = () => {
    
    const nameField = document.getElementById('product-name')
    const name = nameField.value
    displayProductName(name)
    addProductToCart(name)

    nameField.value = ''

    const priceField = document.getElementById('product-price')
    const priceName = priceField.value
    displayProductName(priceName)
    addProductToCart(priceName)

    priceField.value = ''
}

const displayProductName = name => {
    const ul = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = name
    ul.appendChild(li)
    
}

const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {}
    }
    return cartObj
}

const addProductToCart = name => {
    const cart = getCart()
    cart[name] = 1
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

displayLocalStorage()
