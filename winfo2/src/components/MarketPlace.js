import React, { useState } from 'react';
import NavBar from './NavBar'; // Assuming NavBar is always visible

const Marketplace = ({ userPoints, setUserPoints }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all'); 
  const [cart, setCart] = useState([]); 
  const [addedItem, setAddedItem] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    { id: 14, name: 'Orange T-shirt', category: 'tops', image: '/img/shirt.png', points: 12 }
  ];

  // Handle Search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle Category Filter
  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  // Add item to cart
  const handleAddToCart = (item) => {
    const totalPointsSpent = cart.reduce((total, item) => total + item.points, 0);
    if (userPoints - totalPointsSpent - item.points >= 0) {
      setCart(prevCart => [...prevCart, item]);
      setAddedItem(item.name);
      setTimeout(() => setAddedItem(null), 2000);
    } else {
      alert("Not enough points!");
    }
  };

  // Remove item from cart
  const handleRemoveFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  // Handle Checkout
  const handleCheckout = () => {
    const totalPointsSpent = cart.reduce((total, item) => total + item.points, 0);
    if (totalPointsSpent <= userPoints) {
      setUserPoints(userPoints - totalPointsSpent); // Decrease the user's points
      setCart([]); // Clear the cart after checkout
      alert('Checkout successful!');
    } else {
      alert("You don't have enough points to checkout.");
    }
    setIsCartOpen(false); // Close cart modal after checkout
  };

  // Calculate the total points spent and remaining points
  const totalPointsSpent = cart.reduce((total, item) => total + item.points, 0);
  const remainingPoints = userPoints - totalPointsSpent;

  // Filter items based on search and category
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <NavBar />
      <h1>Marketplace</h1>

      <header className="shop-header">
        <div className="cart-container" onClick={() => setIsCartOpen(true)}>
          <img className="cart-icon" src="/img/cart.png" alt="Shopping Cart" />
          <span className="cart-count">{cart.length}</span>
        </div>

        <div className="user-points">
          <h3>Available Points: {userPoints}</h3>
          <h4>Points Remaining: {remainingPoints}</h4>
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for items..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button" onClick={() => setSearchQuery('')}>Search</button>
        </div>
      </header>

      {addedItem && <div className="added-notification">{addedItem} added to cart!</div>}

      <div className="main-content">
        <div className="categories">
          {['all', 'tops', 'bottoms', 'coats', 'shoes', 'accessories'].map(category => (
            <p
              key={category}
              className={`category-filter ${categoryFilter === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </p>
          ))}
        </div>

        <div className="items-page">
          <div className="items-wrapper">
            <ul className="items-displayed">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <li key={item.id} className="item" data-category={item.category}>
                    <img className="purchase-item" src={item.image} alt={`Image of ${item.name}`} />
                    <span className="item-name">{item.name}</span>
                    <span className="item-points">{item.points} points</span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      disabled={remainingPoints < item.points}
                    >
                      +
                    </button>
                  </li>
                ))
              ) : (
                <li>No items found</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="cart-modal-overlay">
          <div className="cart-modal">
            <h2>Shopping Cart</h2>
            <ul>
              {cart.length > 0 ? (
                cart.map(item => (
                  <li key={item.id}>
                    <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                    <span className="item-name">{item.name}</span>
                    <span className="cart-points">{item.points} points</span>
                    <button 
                      className="remove-item" 
                      onClick={() => handleRemoveFromCart(item.id)}>
                      X
                    </button>
                  </li>
                ))
              ) : (
                <li>Your cart is empty</li>
              )}
            </ul>
            <div className="cart-total">
              <h3>Total: {totalPointsSpent} points</h3>
              <h4>Remaining Points: {remainingPoints}</h4>
            </div>
            <button onClick={handleCheckout} disabled={totalPointsSpent === 0}>
              Checkout
            </button>
            <button onClick={() => setIsCartOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
