const capitalizeFirstLetter = (string) => {
    return string.slice(0, 1).toUpperCase().concat(string.slice(1, string.length));
  };
  module.exports = capitalizeFirstLetter;