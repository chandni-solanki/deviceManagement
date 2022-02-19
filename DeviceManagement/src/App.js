
import React, { useEffect, useState } from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import { DeviceEventEmitter, View} from 'react-native';
import Routes from './Routes';
import Theme from './Theme/Theme';
import { ThemeProvider } from './Theme';
import ThemeDark from './Theme/ThemeDark';
import AppContainer from './common/Components/AppContainer';

 const App = () => {
 
  const [theme, setTheme] = useState(Theme);

  function onThemeChanged(event){
    const {isDarkTheme} = event
    setTheme(isDarkTheme ? ThemeDark : Theme)
  }

  useEffect(() =>{
    let subscription = DeviceEventEmitter.addListener('onThemeChanged', onThemeChanged);

    return () => {
      subscription.remove();
    };
  },[])

return (
    <View style={{flex: 1}}>
       <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
          <View style={{position: 'absolute', width: '100%'}}>
            <AppContainer />
          </View>
        </ThemeProvider>
      </Provider>
    </View>
  );
}

export default App;