import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, reset} from "./counterSlice.jsx";


const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    function handleIncrement() {
        dispatch(increment());
    }

    function handleDecrement() {
        dispatch(decrement());
    }

    function handleReset() {
        dispatch(reset())
    }

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={ () => handleDecrement()}>-</button>
                <button onClick={ () => handleIncrement()}>+</button>
                <button onClick={ () => handleReset()}>reset</button>
            </div>
        </div>
    )
}

export default Counter;