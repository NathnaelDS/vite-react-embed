import React, { useState } from "react";

function What() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <p>What now?!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default What;
