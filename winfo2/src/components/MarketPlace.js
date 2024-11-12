import React, { useState } from 'react';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all'); // To track selected category

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const items = [
    { id: 1, name: 'Cow Costume', category: 'all', image: '/img/cow.png' },
    { id: 2, name: 'Purple Sneakers', category: 'shoes', image: '/img/purple.png' },
    { id: 3, name: 'Star Tank', category: 'tops', image: '/img/tank.png' },
    { id: 4, name: 'Platform High Heels', category: 'shoes', image: '/img/platform.png' },
    { id: 5, name: 'White Trench Coat', category: 'coats', image: '/img/trench.png' }, 
    { id: 6, name: 'Miami Off-shoulder Top', category: 'tops', image: '/img/miami.png' },
    { id: 7, name: 'Blue Denim Skirt', category: 'bottoms', image: '/img/denimSkirt.png' }, 
    { id: 8, name: 'Green Camo Skirt', category: 'bottoms', image: '/img/camoSkirt.png' }, 
    { id: 9, name: 'Fluffy Brown Boots', category: 'shoes', image: '/img/fluffyBoots.png' },
    { id: 10, name: 'Black Sunglasses', category: 'accessories', image: '/img/sunglasses.png' }, 
    { id: 11, name: 'Red Hat', category: 'accessories', image: '/img/redCap.png' }, 
    { id: 12, name: 'Gold Necklace', category: 'accessories', image: '/img/necklace.png' },
    { id: 13, name: 'Light Wash Jeans', category: 'bottoms', image: '/img/lightWash.png' },
    { id: 14, name: 'Orange T-shirt', category: 'tops', image: '/img/shirt.png' }
  ];

  // Filter items based on search query and category filter
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1>Marketplace</h1>
      <header className="shop-header">
        <h2>Category</h2>

        <div className="cart-container">
          <img className="cart-icon" src="/img/cart.png" alt="Shopping Cart" />
          <span className="cart-count">0</span>
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
