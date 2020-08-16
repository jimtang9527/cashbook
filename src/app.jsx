import React from 'react'
import { Provider } from 'react-redux'
import dva from './lib/dva'
import models from './models'
import Cashbook from './cashbook/'
//初始化dva
const dvaApp = dva.createApp({
    initialState: {},
    models: models,
})
global.gStore = dvaApp.getStore()
class App extends React.Component {
    render() {
        return (
            <Provider store={global.gStore}>
                <Cashbook />
            </Provider>
        )
    }
}
export default App