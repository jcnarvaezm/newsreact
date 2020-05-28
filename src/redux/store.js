import { createStore } from 'redux';
import infoForm from './reducers/infoForm';

const store = createStore(infoForm);
export default store;
