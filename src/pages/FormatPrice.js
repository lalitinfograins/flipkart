const formatPrice = (price, decimalPlaces = 2) => {
    return `${Number(price).toFixed(decimalPlaces)}`;
  };
  
  export default formatPrice;