import 'antd/dist/antd.css'
import 'semantic-ui-css/semantic.min.css'

import { ApolloProvider } from '@apollo/react-hooks'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from './configureStore'
import Routes from './routes'
import client from './services/client'

// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { ApolloClient } from 'apollo-client'
// import { HttpLink } from 'apollo-link-http'
/* 
    Issue: <ApolloProvider client={client}>  
        Property 'setLink' is missing in type 'ApolloClient<NormalizedCacheObject>' 
            but required in type 'ApolloClient<any>'
    Fix:    
        Don't use 
            import { InMemoryCache } from 'apollo-cache-inmemory'
            import { ApolloClient } from 'apollo-client'
            import { HttpLink } from 'apollo-link-http'
*/
const history = createBrowserHistory()
const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,

  document.getElementById('root'),
)
