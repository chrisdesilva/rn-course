import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ListItem from './src/components/ListItem'

export default class App extends React.Component {
  
  state = {
    placeName: '',
    places: []
  }

  onHandlePlaceNameChange = (e) => {
    this.setState({
      placeName: e
    })
  }

  onHandlePlaceSubmit = () => {
    if(this.state.placeName.trim() === '') {
      return
    } else {
      this.setState(prevState => {
        return {
          places: prevState.places.concat(prevState.placeName)
        }
      })
    } 
  }
  
  render() {
    const placesOutput = this.state.places.map((place, index) => (
      <ListItem key={index} placeName={place} />
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            value={this.state.placeName} 
            onChangeText={this.onHandlePlaceNameChange}
            placeholder='An awesome place'
            style={styles.placeInput}
          />
          <Button 
            title='Add'
            style={styles.placeButton}
            onPress={this.onHandlePlaceSubmit}
          />
        </View>
        <View>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});
