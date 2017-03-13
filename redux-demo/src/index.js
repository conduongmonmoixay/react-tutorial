import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import SoundCloud from 'soundcloud';
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import TrackList from './components/TrackList';
import {configureStore} from './store/store';
import * as actions from './actions';
import {CLIENT_ID, REDIRECT_URI} from './config';
// import createRoutes from './routes';

SoundCloud.initialize({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI
})

const tracks = [
  {
    id: 1,
    title: 'angularjs'
  },
  {
    id: 2,
    title: 'Spring-data-jpa'
  }
];

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
  //  <Router history={history} routes={routes} />
    <TrackList />
  </Provider>,
  document.getElementById('app')
);
