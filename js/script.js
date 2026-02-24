/* --- 1. DỮ LIỆU SẢN PHẨM (ĐÃ FIX TOÀN BỘ LINK ẢNH CHẾT & THÊM THAM SỐ CHỐNG LỖI) --- */
const PRODUCTS = [
    // --- GIÀY (SHOES) ---
    { id: 1, name: "Giày Oxford Da", price: 1800000, category: "shoes", sub_cat: "da", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Sneaker Sport Red", price: 3500000, category: "shoes", sub_cat: "thethao", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" },
    { id: 11, name: "Chelsea Boot Tan", price: 2100000, category: "shoes", sub_cat: "boot", img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=500&q=80" },
    { id: 13, name: "Nike Air Force 1", price: 2800000, category: "shoes", sub_cat: "thethao", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80" },
    { id: 14, name: "Derby Classic Black", price: 1950000, category: "shoes", sub_cat: "da", img: "https://images.unsplash.com/photo-1533867617858-e7b97e0605df?auto=format&fit=crop&w=500&q=80" },
    { id: 15, name: "Timberland Boot", price: 4200000, category: "shoes", sub_cat: "boot", img: "https://images.unsplash.com/photo-1520639888713-785118eb6367?auto=format&fit=crop&w=500&q=80" },
    { id: 26, name: "Sneaker White Basic", price: 1200000, category: "shoes", sub_cat: "thethao", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=80" },
    { id: 27, name: "Loafers Da Lộn", price: 2400000, category: "shoes", sub_cat: "da", img: "https://images.unsplash.com/photo-1559563458-52c695297ce4?auto=format&fit=crop&w=500&q=80" },
    { id: 28, name: "Jordan High Blue", price: 5600000, category: "shoes", sub_cat: "thethao", img: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=500&q=80" },
    { id: 29, name: "Dr. Martens 1460", price: 4500000, category: "shoes", sub_cat: "boot", img: "https://images.unsplash.com/photo-1627918536102-12501d514a60?auto=format&fit=crop&w=500&q=80" },
    { id: 30, name: "Giày Lười Công Sở", price: 1500000, category: "shoes", sub_cat: "da", img: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?auto=format&fit=crop&w=500&q=80" },
    { id: 31, name: "Running Shoes Grey", price: 2100000, category: "shoes", sub_cat: "thethao", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=500&q=80" },
    { id: 32, name: "Converse High Top", price: 1800000, category: "shoes", sub_cat: "thethao", img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=500&q=80" },
    { id: 33, name: "Chukka Boot Brown", price: 3200000, category: "shoes", sub_cat: "boot", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80" },
    { id: 34, name: "Giày Tây Monk Strap", price: 2900000, category: "shoes", sub_cat: "da", img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=500&q=80" },

    // --- ÁO (SHIRT) ---
    { id: 7, name: "Áo Vest Luxury", price: 2500000, category: "shirt", sub_cat: "vest", img: "https://images.unsplash.com/photo-1594932224491-99439299ba8a?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Áo Polo Basic Black", price: 300000, category: "shirt", sub_cat: "polo", img: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&w=500&q=80" },
    { id: 12, name: "Sơ Mi Trắng Slim", price: 550000, category: "shirt", sub_cat: "somi", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80" },
    { id: 16, name: "Áo Thun Đen Trơn", price: 250000, category: "shirt", sub_cat: "polo", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80" },
    { id: 17, name: "Comple Doanh Nhân", price: 5500000, category: "shirt", sub_cat: "vest", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80" },
    { id: 18, name: "Sơ Mi Xanh Oxford", price: 600000, category: "shirt", sub_cat: "somi", img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=500&q=80" },
    { id: 35, name: "Áo Vest Caro", price: 3200000, category: "shirt", sub_cat: "vest", img: "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?auto=format&fit=crop&w=500&q=80" },
    { id: 36, name: "Polo Trắng Classic", price: 350000, category: "shirt", sub_cat: "polo", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=500&q=80" },
    { id: 37, name: "Sơ Mi Denim", price: 750000, category: "shirt", sub_cat: "somi", img: "https://images.unsplash.com/photo-1574653755230-22c6680a3736?auto=format&fit=crop&w=500&q=80" },
    { id: 38, name: "Áo Thun In Hình", price: 280000, category: "shirt", sub_cat: "polo", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80" },
    { id: 39, name: "Blazer Xám Tro", price: 1800000, category: "shirt", sub_cat: "vest", img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=500&q=80" },
    { id: 40, name: "Sơ Mi Ngắn Tay", price: 450000, category: "shirt", sub_cat: "somi", img: "https://images.unsplash.com/photo-1598961942613-359f8d64d843?auto=format&fit=crop&w=500&q=80" },
    { id: 41, name: "Áo Len Cổ Lọ", price: 650000, category: "shirt", sub_cat: "polo", img: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&w=500&q=80" },
    { id: 42, name: "Vest Đen Tuyển", price: 4500000, category: "shirt", sub_cat: "vest", img: "https://images.unsplash.com/photo-1593030761757-71bd90dbe3e4?auto=format&fit=crop&w=500&q=80" },
    { id: 43, name: "Sơ Mi Flannel", price: 500000, category: "shirt", sub_cat: "somi", img: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&w=500&q=80" },

    // --- QUẦN (PANTS) ---
    { id: 5, name: "Quần Jean Slim Blue", price: 450000, category: "pants", sub_cat: "jean", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Quần Âu Cao Cấp", price: 600000, category: "pants", sub_cat: "au", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=500&q=80" },
    { id: 19, name: "Jean Rách Gối", price: 550000, category: "pants", sub_cat: "jean", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80" },
    { id: 20, name: "Quần Kaki Be", price: 480000, category: "pants", sub_cat: "au", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=80" },
    { id: 21, name: "Quần Short Hè", price: 350000, category: "pants", sub_cat: "jean", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=500&q=80" },
    { id: 44, name: "Quần Jogger Đen", price: 400000, category: "pants", sub_cat: "jean", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=500&q=80" },
    { id: 45, name: "Quần Tây Xám", price: 700000, category: "pants", sub_cat: "au", img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=500&q=80" },
    { id: 46, name: "Jean Đen Basic", price: 500000, category: "pants", sub_cat: "jean", img: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=500&q=80" },
    { id: 47, name: "Quần Chinos Navy", price: 550000, category: "pants", sub_cat: "au", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=500&q=80" },
    { id: 48, name: "Quần Cargo Túi Hộp", price: 650000, category: "pants", sub_cat: "jean", img: "https://images.unsplash.com/photo-1517445312582-64c912003b74?auto=format&fit=crop&w=500&q=80" },
    { id: 49, name: "Quần Short Kaki", price: 300000, category: "pants", sub_cat: "au", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=500&q=80" },
    { id: 50, name: "Jean Skinny Fit", price: 480000, category: "pants", sub_cat: "jean", img: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?auto=format&fit=crop&w=500&q=80" },

    // --- ĐỒNG HỒ (WATCH) ---
    { id: 1, name: "Rolex Submariner", price: 25000000, category: "watch", sub_cat: "luxury", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Casio Vintage", price: 1200000, category: "watch", sub_cat: "classic", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=500&q=80" },
    { id: 24, name: "Apple Watch S9", price: 8500000, category: "watch", sub_cat: "smart", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80" },
    { id: 51, name: "Omega Seamaster", price: 32000000, category: "watch", sub_cat: "luxury", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=500&q=80" },
    { id: 52, name: "Seiko 5 Sport", price: 4500000, category: "watch", sub_cat: "classic", img: "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?auto=format&fit=crop&w=500&q=80" },
    { id: 53, name: "Samsung Galaxy Watch", price: 5500000, category: "watch", sub_cat: "smart", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80" },
    { id: 54, name: "Hublot Big Bang", price: 450000000, category: "watch", sub_cat: "luxury", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=500&q=80" },
    { id: 55, name: "Fossil Leather", price: 3200000, category: "watch", sub_cat: "classic", img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80" },
    { id: 56, name: "Garmin Fenix 7", price: 15000000, category: "watch", sub_cat: "smart", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=500&q=80" },
    { id: 57, name: "Patek Philippe", price: 900000000, category: "watch", sub_cat: "luxury", img: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=500&q=80" },

    // --- PHỤ KIỆN (ACCESSORY) ---
    { id: 9, name: "Kính Rayban Aviator", price: 3900000, category: "accessory", sub_cat: "kinh", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80" },
    { id: 10, name: "Ví Da Nam Brown", price: 550000, category: "accessory", sub_cat: "vi", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80" },
    { id: 22, name: "Thắt Lưng Da", price: 890000, category: "accessory", sub_cat: "thatlung", img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=500&q=80" },
    { id: 23, name: "Mũ Fedora", price: 320000, category: "accessory", sub_cat: "mu", img: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=500&q=80" },
    { id: 25, name: "Túi Xách Da Công Sở", price: 1500000, category: "accessory", sub_cat: "vi", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80" },
    { id: 58, name: "Kính Mát Wayfarer", price: 1200000, category: "accessory", sub_cat: "kinh", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80" },
    { id: 59, name: "Ví Cầm Tay Clutch", price: 950000, category: "accessory", sub_cat: "vi", img: "https://images.unsplash.com/photo-1618677833481-e3946a02ff27?auto=format&fit=crop&w=500&q=80" },
    { id: 60, name: "Thắt Lưng Cá Sấu", price: 2500000, category: "accessory", sub_cat: "thatlung", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80" },
    { id: 61, name: "Mũ Lưỡi Trai", price: 250000, category: "accessory", sub_cat: "mu", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80" },
    { id: 62, name: "Cà Vạt Lụa", price: 450000, category: "accessory", sub_cat: "thatlung", img: "https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=500&q=80" },
    { id: 63, name: "Balo Da Nam", price: 1800000, category: "accessory", sub_cat: "vi", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80" },
    { id: 64, name: "Khăn Len Mùa Đông", price: 300000, category: "accessory", sub_cat: "mu", img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=500&q=80" }
];
/* --- 2. AUTHENTICATION --- */
function registerUser() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;
    const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

    if (!user) return alert("Vui lòng nhập tên tài khoản!");
    if (!passRegex.test(pass)) return alert("Mật khẩu yếu! Cần 8 ký tự, 1 hoa, 1 ký tự đặc biệt.");

    let users = JSON.parse(localStorage.getItem('db_users')) || [];
    if (users.some(u => u.username === user)) {
        alert("Tài khoản đã tồn tại!");
        return window.location.href = 'login.html';
    }

    users.push({ username: user, password: pass });
    localStorage.setItem('db_users', JSON.stringify(users));
    alert("Đăng ký thành công!");
    window.location.replace('login.html');
}

function loginUser() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;
    if (!user) return alert("Nhập tên tài khoản!");

    let users = JSON.parse(localStorage.getItem('db_users')) || [];
    let foundUser = users.find(u => u.username === user);

    if (!foundUser) {
        alert("Tài khoản chưa tồn tại!");
        return window.location.href = 'register.html';
    }

    if (foundUser.password === pass) {
        localStorage.setItem('currentUser', JSON.stringify(foundUser));
        window.location.replace('index.html');
    } else {
        alert("Sai mật khẩu!");
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.replace('index.html');
}

/* --- 3. UI & RENDER --- */
function updateHeader() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const commonLinks = `<a href="index.html">Trang chủ</a> <a href="about.html">Giới thiệu</a>`;

    if (currentUser) {
        const cart = JSON.parse(localStorage.getItem(`cart_${currentUser.username}`)) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        nav.innerHTML = `${commonLinks} <span style="color:var(--gold); margin-left:15px">| Chào, ${currentUser.username}</span> <a href="cart.html">Giỏ hàng (${totalItems})</a> <button onclick="logout()" style="color:#ff4757; font-weight:bold; margin-left:10px">Đăng xuất</button>`;
    } else {
        nav.innerHTML = `${commonLinks} <a href="login.html" style="margin-left:15px">Đăng nhập</a> <a href="register.html" class="btn-gold">Đăng ký</a>`;
    }
}

/* HÀM RENDER CHUNG (Dùng cho Trang chủ) */
function renderProducts(category = 'all') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    let filtered = PRODUCTS;
    
    if (category !== 'all') {
        filtered = PRODUCTS.filter(p => p.category === category);
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column:1/-1;">Chưa có sản phẩm nào.</p>';
        return;
    }
    // Ở trang chủ, chúng ta có thể giới hạn hiển thị nếu danh sách quá dài
    // Nhưng bạn muốn "thêm nhiều", nên mình sẽ hiện hết hoặc hiện 20 cái đầu
    drawGrid(filtered, grid);
}

/* HÀM RENDER TRANG CON VỚI BỘ LỌC */
function renderPageWithFilter(mainCategory, subFilter = 'all') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    let filtered;
    
    // Nếu là trang Phụ kiện (accessories.html), lấy cả 'accessory' và 'watch'
    if (mainCategory === 'accessory_page') {
        filtered = PRODUCTS.filter(p => p.category === 'accessory' || p.category === 'watch');
    } else {
        filtered = PRODUCTS.filter(p => p.category === mainCategory);
    }
    
    if (subFilter !== 'all') {
        filtered = filtered.filter(p => p.sub_cat === subFilter);
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align:center; color:white; width:100%">Không tìm thấy sản phẩm phù hợp.</p>';
    } else {
        drawGrid(filtered, grid);
    }
}


/* Hàm vẽ HTML sản phẩm */
function drawGrid(items, gridElement) {
    gridElement.innerHTML = items.map(p => `
        <div class="card">
            <img src="${p.img}" onerror="this.onerror=null; this.src='https://placehold.co/500x500/1e1e1e/d4af37?text=Luxury+Shop'">
            <h3>${p.name}</h3>
            <p class="price">${p.price.toLocaleString()} đ</p>
            <div class="qty-control">
                <label>SL:</label>
                <input type="number" id="qty-${p.id}" class="qty-input" value="1" min="1">
            </div>
            <button class="btn-primary" onclick="addToCart(${p.id})">Thêm vào giỏ</button>
        </div>
    `).join('');
}

/* --- 4. GIỎ HÀNG --- */
function addToCart(id) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) return alert("Bạn cần đăng nhập!"), window.location.replace('login.html');

    const qtyInput = document.getElementById(`qty-${id}`);
    const quantity = parseInt(qtyInput.value);
    if (quantity < 1) return alert("Số lượng phải >= 1");

    let cartKey = `cart_${user.username}`;
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) existingItem.quantity += quantity;
    else cart.push({ ...PRODUCTS.find(p => p.id === id), quantity: quantity });

    localStorage.setItem(cartKey, JSON.stringify(cart));
    alert(`Đã thêm ${quantity} sản phẩm vào giỏ!`);
    updateHeader();
}

function renderCartItems() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const body = document.getElementById('cart-body');
    if (!user || !body) return;
    const cart = JSON.parse(localStorage.getItem(`cart_${user.username}`)) || [];
    if (cart.length === 0) {
        body.innerHTML = '<tr><td colspan="5" style="text-align:center">Giỏ hàng trống</td></tr>';
        document.getElementById('total-price').innerText = "0 đ";
        return;
    }
    body.innerHTML = cart.map((item, idx) => `
        <tr>
            <td style="text-align:left">${item.name}</td>
            <td>${item.price.toLocaleString()} đ</td>
            <td><button class="btn-qty" onclick="updateQty(${idx}, -1)">-</button><span style="margin:0 10px">${item.quantity}</span><button class="btn-qty" onclick="updateQty(${idx}, 1)">+</button></td>
            <td>${(item.price * item.quantity).toLocaleString()} đ</td>
            <td><button onclick="removeItem(${idx})" style="color:red; background:none; border:none; cursor:pointer">Xóa</button></td>
        </tr>
    `).join('');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('total-price').innerText = total.toLocaleString() + " đ";
}

function updateQty(index, change) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    let cartKey = `cart_${user.username}`;
    let cart = JSON.parse(localStorage.getItem(cartKey));
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        if(confirm("Xóa sản phẩm này?")) cart.splice(index, 1);
        else cart[index].quantity = 1;
    }
    localStorage.setItem(cartKey, JSON.stringify(cart));
    renderCartItems(); updateHeader();
}
function removeItem(idx) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    let cartKey = `cart_${user.username}`;
    let cart = JSON.parse(localStorage.getItem(cartKey));
    cart.splice(idx, 1);
    localStorage.setItem(cartKey, JSON.stringify(cart));
    renderCartItems(); updateHeader();
}
function processPayment() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    alert("Thanh toán thành công!");
    localStorage.removeItem(`cart_${user.username}`);
    window.location.replace('index.html');
}
function scrollToProducts() {
    const section = document.getElementById('product-grid');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}