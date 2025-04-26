// export default function Square() {
//   return <button className="square">1</button>;
// }

import { useState } from "react";

//This is the same function but instead uses props to get values passed from the parent
//Note the value is passed as the text value for our button. Its similar to a function argument getting passed as a parameter
export default function Square() {
  //We will use useState to make sure Square remembers which box was clicked
  //You must import at the top of the file

  //Because we set the value to null, there can be no props that are used in App.js

  const [value, setValue] = useState(null);

  //we can establish events within the component function like so
  function handleClick() {
    setValue("X");
  }

  return (
    //Then add them to the JSX code like so
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
