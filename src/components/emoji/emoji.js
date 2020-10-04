import React from "react";

const Emoji = ({ label, symbol, className }) => {
  return (
    <span className={`emoji  ${className}`} role="img" aria-label={label && ""}>
      {symbol}
    </span>
  );
};

export default Emoji;
