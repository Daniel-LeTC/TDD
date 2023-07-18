const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Nhập vào đây để tìm sản phẩm">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Tủ</a></li>
            <li class="link-item"><a href="#" class="link">Hộp nhựa</a></li>
            <li class="link-item"><a href="#" class="link">Bộ thau, rổ</a></li>
            <li class="link-item"><a href="#" class="link">Bàn, ghế</a></li>
            <li class="link-item"><a href="#" class="link">Hàng công nghiệp</a></li>
        </ul>
    `;
}

createNav();