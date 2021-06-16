import React, { Component } from 'react';
import {
  View,
  Image,
  Button,
  CameraRoll
} from 'react-native'
import Video from 'react-native-video'
import styles from '../styles/ViroScreenStyle'
import ImagePicker from 'react-native-image-crop-picker'

export default class ViroSample extends Component {
  constructor() {
    super();
    
    this.state = {
      listImageData: [],
      photos: null
    }
  }
  
  componentDidMount() {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos'
    })
    .then(r => {
      this.setState({ listImageData: r.edges })
    })
    .catch((err) => {
      console.log(err)
    });
  }

  _handleButtonPress = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      includeExif: true
    }).then(image => {
      if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
        return this.renderVideo(image);
      }
      this.setState({ 
        photos: {
          uri: `data:${image.mime};base64,`+ image.data, width: image.width, height: image.height
        }
      })
    })
  }

  renderVideo(video) {
    return (
      <View style={{height: 300, width: 300}}>
        <Video source={{uri: video.uri, type: video.mime}}
          style={{position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
          rate={1}
          paused={false}
          volume={1}
          muted={false}
          resizeMode={'cover'}
          onError={e => console.log(e)}
          onLoad={load => console.log(load)}
          repeat={true} 
        />
      </View>
    )
  }

  render() {
    return (
      <View flex={1}>
        <View flex={1}>
          <Image
            style={{
              width: 300,
              height: 100,
            }}
            source={this.state.photos}
          />
        </View>
        <View style={styles.listView}>
          <Button title='Load Images' onPress={this._handleButtonPress} />
        </View>
      </View>
    )
  }
}

module.exports = ViroSample
