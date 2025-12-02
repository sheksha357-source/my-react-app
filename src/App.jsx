import { useState ,useMemo} from 'react';
import Child from './Child';

function App() {
  const [count, setCount] = useState(0);
  const [next, setNext] = useState(0);

  const handleClick = () => {
    console.log("Function executed");
  };
const getMulitpy=()=>useMemo(()=>{
    console.log("calllingS")
  return count*10;
},[count])
  return (
    <>
      <h1>Without useCallback</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>Count: {count}</p>
      {getMulitpy()}<br/>
          <button onClick={() => setNext(next + 1)}>Increase Count</button>
          <p>next : {next}</p>

      <p>substraction </p>


    </>
  );
}

export default App;
