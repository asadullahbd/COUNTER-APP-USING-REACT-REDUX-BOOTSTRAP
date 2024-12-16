import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setCustom } from "../../redux/state/counter/counterSlice";

const Counter = () => {
    const myNumber = useRef()
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="card">
            <div className="card-header bg-secondary">
                <h4 className="text-white">My Counter App</h4>
            </div>
            <div className="card-body">
                <h1>{count}</h1>
                <div className="mt-4">
                    <button
                        onClick={() => {
                            dispatch(increment());
                        }}
                        className="btn btn-success"
                    >
                        Increase
                    </button>
                    <button
                        onClick={() => {
                            dispatch(decrement());
                        }}
                        className="btn btn-danger mx-2"
                    >
                        Decrease
                    </button>
                </div>
                <div className="mt-4">
                    <input ref={myNumber} type="number" className="form-control w-50 my-2" />
                    <button
                        onClick={() => {
                            dispatch(setCustom(Number(myNumber.current.value)));
                        }}
                        className="btn btn-dark w-50 my-2"
                    >
                        Set Custom
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
