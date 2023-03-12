import {Image, StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React, {useState} from 'react';
import {scale} from '@Shared/helper/scaling';
import {bluePrimary, grey1, whiteColor} from '@Shared/constants/colors';

interface textinputCustomProps {
  icon?: boolean;
}

const TextInputCustom = ({
  icon,
  ...nativeProps
}: textinputCustomProps & TextInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <View
      style={[
        styles.container,
        {borderColor: isFocused ? bluePrimary : grey1},
      ]}>
      {icon ? (
        <Image
          source={require('@Shared/assets/icon/search.png')}
          style={{
            width: scale(20),
            height: scale(20),
            resizeMode: 'contain',
            tintColor: isFocused ? bluePrimary : grey1,
          }}
        />
      ) : null}

      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={styles.textinput}
        {...nativeProps}
      />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: whiteColor,
    borderRadius: 8,
    paddingHorizontal: scale(10),
  },
  textinput: {
    paddingHorizontal: scale(10),
    paddingVertical: scale(8),
  },
});
