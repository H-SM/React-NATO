import { trigger } from "react-native-haptic-feedback";
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';

import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DiceOne from "../assets/One.png";
import DiceTwo from "../assets/Two.png";
import DiceThree from "../assets/Three.png";
import DiceFour from "../assets/Four.png";
import DiceFive from "../assets/Five.png";
import DiceSix from "../assets/Six.png";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>//this will pass down the images, better way to do it (than props directly)
//looks over the type of url we give

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

// Trigger haptic feedback
// trigger("impactLight", options);

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image
        style={styles.diceImage}
        source={imageUrl}
      />
    </View>
  )
}
function App(): JSX.Element {
  const [diceFace, setDiceFace] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    let rand = Math.floor(Math.random() * 6) + 1;
    switch (rand) {
      case 1:
        setDiceFace(DiceOne);
        break;
      case 2:
        setDiceFace(DiceTwo);
        break;
      case 3:
        setDiceFace(DiceThree);
        break;
      case 4:
        setDiceFace(DiceFour);
        break;
      case 5:
        setDiceFace(DiceFive);
        break;
      case 6:
        setDiceFace(DiceSix);
        break;

      default:
        setDiceFace(DiceOne);
        break;
    }
    trigger("impactLight", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceFace} />
      <Pressable onPress={rollDice}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
