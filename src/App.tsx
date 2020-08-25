import React from 'react';

import { StyleSheet, Dimensions, View } from 'react-native';

import Pdf from 'react-native-pdf';

const App: React.FC = () => {
  const source = {
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTExOTEyNjJmNWY1NDBlZjFkNTY4MjRhZDEwZTU4N2Q3MWUxMjI4NWRlNzAyNDA0NDEzMTU0Y2M2NDJiOWZiYzc4Mzc3NzA1MWNlNGIwNzEiLCJpYXQiOjE1OTE4MjEyODcsIm5iZiI6MTU5MTgyMTI4NywiZXhwIjoxNjIzMzU3Mjg3LCJzdWIiOiIxODE3MyIsInNjb3BlcyI6W119.D0rm58OcGQ0o8HDcRZ74Ztg7Nlt9Nho0tkI7nLEcfWotYcV7inqL2FzbYC8y9uE0eeMTWhK4BakyHDROkRWiz2YVvLBfQJq7lHfShYjYIFFLLGF-CYRvIIQIN-VNqVBqkV6_3pptQeArqIw2WA-9ZmKPQqz5RgggLmtNf3vhZQCx_wCuAGLhrEMT4VLkwZ11Ii_3fvhUHcaU7nZxxX0dPeiIehF3PeG0mT-fKQo5ww-Pk6ZlMgjf5XwqFwTyMuPAEdAw4jKQjrn7s65xemC2_pfoqHnkdVy6dcSPodnLgPV1OyTYfIueDIDzEUm9WuHfk-93l6YL2O4cOb53Hl4unrs7_P2yApPpTh_J1DqfE7cesC22kDQR4ojtGtXGhoHhZh7R3CcOUs0aWRV_vpyAcRQXCpaVva6pgdkYMRR2QpQ05rS3Qw-a0rX40B1L-uINOMdUHDEFe5Q-85KvqWpdqQCpbvNDBwvK-em7l7nhYwgEDTilfBFpci9MqtZvmd4x7GApfYfhvqfdx8QtnY-aOe7zcSpRiLsA-U4qOhhjtP8PhHahSXAbSTMiUSHpzoQGBiuECiB2YmHMfAMeemfThJYcYrFpXP02NBxUpamAwjHtL1JR5G2rjY4-ZFlRo25Il6uBp_UVmDleSD9T8e8NxhcTcgdbpSMg1S0wouZIriQ',
    },
    uri: 'https://severino.eleven.financial/api/adilson/post/87504/pdf?ip=127.0.0.1',
    cache: true,
  };

  return (

    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link presse: ${uri}`);
        }}
        style={styles.pdf} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;
