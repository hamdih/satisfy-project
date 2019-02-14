import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class PhotoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.thumbnailSection}>
            <Image 
            style = {styles.thumbnail}
            source={{uri:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/6/30/1/FNK_Ultimate-White-Cupcake_s4x3.jpg.rend.hgtvcom.616.462.suffix/1435698944861.jpeg'}}/>
            <View style = {styles.userContainer}>
                <Text>username</Text>
            </View>
        </View>
        <View>
            <Image 
            style = {{width: null, height: 200}}
            source = {{uri: 'https://truffle-assets.imgix.net/pxqrocxwsjcc_4mlylloieeiqmyecgk0qq8_rose%CC%81-champagne-cupcakes-landscape-no-graphic.jpg'}}/>
        </View>
        <View>
           
        </View>
           
        <View style = {styles.imageMeta}>
            <Text style = {styles.username}>username</Text>
            <Text>caption</Text>

        </View>

      </View>
    );
  }
}

const styles = {
    container: {
        margin: 0
    },
    thumbnailSection: {
        flexDirection: 'row',
        padding: 5,
        borderBottomeColor: '#ddd',
        borderBottomWidth: 1,
    },
    thumbnail : {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    userContainer : {
        justifyContent: 'center',
        padding: 5,
    },
    imageMeta : {
        flexDirection: 'row',
        paddingRight: 5
    },
    username: {
        fontWeight: 'bold',
        paddingRight: 5,
    }
}