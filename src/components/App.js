import React, { useEffect, useState } from "react";
import '../styles/App.css';

function App(){

  let [count, setCount] = useState(0)

  return (
    <div class="ball">
      <h1 class="count" ondoubleclick={() =>{ alert("cant edit it")}}>{count}</h1>
      <button class='increment-button' onclick={() => setCount(count + 1)}> Increment</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
