import {createStore} from 'redux';
import rootReduce from './Reduce';

const store = createStore(rootReduce);

export default store;