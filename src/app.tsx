import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState<number>(0);

  return <>
    <div>{count}</div>
    <button onClick={() => setCount(count + 1)}>up</button>
  </>
}
export default App;
