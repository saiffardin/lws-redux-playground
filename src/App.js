/* eslint-disable react/jsx-pascal-case */
import {Provider} from 'react-redux';
import './App.css';
import Counter_usingConnectAPI from './components/Counter_usingConnectAPI';
import store from './redux/counter/store';

function App() {
    return (
        <Provider store={store}>
            <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">

                <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                    Simple Counter Application
                </h1>

                <div className="max-w-md mx-auto mt-10 space-y-5">
                    <Counter_usingConnectAPI />

                </div>
            </div>
        </Provider>
    );
}

export default App;
