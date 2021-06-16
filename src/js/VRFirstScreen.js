/**
 * Copyright (c) 2018-10-12.
 * @Zheng
 * @flow react-viro-cli
 */

'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroScene,
  ViroText,
  Viro360Image,
} from 'react-viro';

export default class VRFirstScreen extends Component {

  constructor() {
    super();

    this.state = {} // Set initial state here
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('./res/guadalupe_360.jpg')} />
        <ViroText 
          text="Hi David, I hope you are doing well!" 
          width={2} 
          height={2} 
          position={[0, 0, -2]} 
          style={styles.helloWorldTextStyle} 
        />
      </ViroScene>
    );
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = VRFirstScreen;
