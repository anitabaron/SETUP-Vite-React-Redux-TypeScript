import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { increment, decrement } from "./redux/counterSlice";
import { JSX } from "react";

const App = (): JSX.Element => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
};

export default App;
