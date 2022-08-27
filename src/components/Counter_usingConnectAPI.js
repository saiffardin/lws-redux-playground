import React from 'react';
import {connect} from 'react-redux';
import {actionDecrement, actionIncrement} from '../redux/counter/actions';

const Counter_usingConnectAPI = ({countState, incrementDispatch, decrementDispatch}) => {

    return (
        <div>
            <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <div className="text-2xl font-semibold">{countState}</div>
                <div className="flex space-x-3">
                    <button
                        className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        onClick={incrementDispatch}
                    >
                        Increment
                    </button>
                    <button
                        className="bg-red-400 text-white px-3 py-2 rounded shadow"
                        onClick={decrementDispatch}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        countState: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementDispatch: () => dispatch(actionIncrement()),
        decrementDispatch: () => dispatch(actionDecrement())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter_usingConnectAPI);