import { useSelector, useDispatch } from "react-redux";
import { plus, minus } from "./store";

function App() {
  const sum = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

    return (
    <div >
      <p>Value: {sum}</p>
      <button onClick={() => dispatch(plus())}>+</button>
      <button onClick={() => dispatch(minus())}>-</button>
    </div>
  );
}

export default App;