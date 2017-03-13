import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import tracks from './track';

export default combineReducers({
  tracks,
   routing: routerReducer
});
