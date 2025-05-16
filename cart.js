let cart = [];

  const cartCount = document.getElementById('cart-count');
  const cartDropdown = document.getElementById('cart-dropdown');

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      const price = parseFloat(btn.getAttribute('data-price'));
      const img = btn.getAttribute('data-img');

      cart.push({ name, price, img });
      updateCartDropdown();
    });
  });

  function updateCartDropdown() {
    cartDropdown.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
      cartDropdown.innerHTML = '<li class="text-muted small">Cart is empty</li>';
      cartCount.textContent = '0';
      return;
    }

    cart.forEach((item, index) => {
      total += item.price;
      const li = document.createElement('li');
      li.className = 'd-flex align-items-center justify-content-between mb-2';

      li.innerHTML = `
        <img src="${item.img}" class="cart-img me-2 rounded">
        <div class="flex-grow-1 small">
          <strong>${item.name}</strong><br>$${item.price.toFixed(2)}
        </div>
        <button class="btn btn-sm btn-danger ms-2" onclick="removeFromCart(${index})">×</button>
      `;
      cartDropdown.appendChild(li);
    });

    const totalLi = document.createElement('li');
    totalLi.className = 'dropdown-item text-end fw-bold mt-2 border-top pt-2';
    totalLi.textContent = `Total: $${total.toFixed(2)}`;
    cartDropdown.appendChild(totalLi);

    cartCount.textContent = cart.length;
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDropdown();
  }