import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import Store from './reducer/store'

import PageContainer from './containers/PageContainer'

const store = Store()

export default class App extends PureComponent {
    render(){
        return(
            <Provider store={store}>
                <PageContainer />
            </Provider>
        )
    }
}
