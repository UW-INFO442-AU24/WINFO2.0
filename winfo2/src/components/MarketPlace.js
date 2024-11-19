import React, { useState } from 'react';
import NavBar from './NavBar'; 

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all'); 
  const [cart, setCart] = useState([]); 
  const [userPoints, setUserPoints] = useState(50);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

    // Calculate total points spent based on the items in the cart
    const totalPointsSpent = cart.reduce((total, item) => total + item.points, 0);

    // Calculate the remaining points the user has
    const remainingPoints = userPoints - totalPointsSpent;

  const items = [
    { id: 1, name: 'Cow Costume', category: 'all', image: '/img/cow.png', points: 100 },
    { id: 2, name: 'Purple Sneakers', category: 'shoes', image: '/img/purple.png', points: 12 },
    { id: 3, name: 'Star Tank', category: 'tops', image: '/img/tank.png', points: 10 },
    { id: 4, name: 'Platform High Heels', category: 'shoes', image: '/img/platform.png', points: 12 },
    { id: 5, name: 'White Trench Coat', category: 'coats', image: '/img/trench.png', points: 18 }, 
    { id: 6, name: 'Miami Off-shoulder Top', category: 'tops', image: '/img/miami.png', points: 10 },
    { id: 7, name: 'Blue Denim Skirt', category: 'bottoms', image: '/img/denimSkirt.png', points: 12 }, 
    { id: 8, name: 'Green Camo Skirt', category: 'bottoms', image: '/img/camoSkirt.png', points: 12 }, 
    { id: 9, name: 'Fluffy Brown Boots', category: 'shoes', image: '/img/fluffyBoots.png', points: 15 },
    { id: 10, name: 'Black Sunglasses', category: 'accessories', image: '/img/sunglasses.png', points: 8 }, 
    { id: 11, name: 'Red Hat', category: 'accessories', image: '/img/redCap.png', points: 10 }, 
    { id: 12, name: 'Gold Necklace', category: 'accessories', image: '/img/necklace.png', points: 9 },
    { id: 13, name: 'Light Wash Jeans', category: 'bottoms', image: '/img/lightWash.png', points: 15 },
    { id: 14, name: 'Orange T-shirt', category: 'tops', image: '/img/shirt.png', points: 12}
  ];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <NavBar/>
      <h1>Marketplace</h1>
      <header className="shop-header">
        <h2>Category</h2>

        <div className="cart-container">
          <img className="cart-icon" src="/img/cart.png" alt="Shopping Cart" />
          <span className="cart-count">{cart.length}</span> {/* Display number of items in cart */}
        </div>

        <div className="user-points">
          <h3>Avaliable Points: {userPoints}</h3> {/* Display the user's total points */}
          <h4>Points Remaining: {remainingPoints}</h4> {/* Display remaining points after cart total */}
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for items..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button">Search</button>
        </div>
      </header>

      <div className="main-content">
        <div className="categories">
          <p className="category-filter" onClick={() => handleCategoryClick('all')}>
            All Items
          </p>
          <p className="category-filter" onClick={() => handleCategoryClick('tops')}>
            Tops
          </p>
          <p className="category-filter" onClick={() => handleCategoryClick('bottoms')}>
            Bottoms
          </p>
          <p className="category-filter" onClick={() => handleCategoryClick('coats')}>
            Coats
          </p>
          <p className="category-filter" onClick={() => handleCategoryClick('shoes')}>
            Shoes
          </p>
          <p className="category-filter" onClick={() => handleCategoryClick('accessories')}>
            Accessories
          </p>
        </div>

        <div className="items-page">
          <div className="items-wrapper">
            <h2>Clothing</h2>
            <ul className="items-displayed">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <li key={item.id} className="item" data-category={item.category}>
                    <img className="purchase-item" src={item.image} alt={item.name} />
                    <span className="item-name">{item.name}</span>
                    <span className="item-points">{item.points}</span>
                    <button onClick={() => handleAddToCart(item)}>+</button> {/* Add to cart button */}
                  </li>
                ))
              ) : (
                <li>No items found</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;

