import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';

import App from './src/App';
import {name as appName} from './app.json';
import store from './src/redux/store';

export default function Main() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <App />
            </PaperProvider>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
