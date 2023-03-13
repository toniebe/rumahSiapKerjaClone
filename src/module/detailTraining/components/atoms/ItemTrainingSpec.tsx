import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Fragment} from 'react';
import ButtonCategory from '@Shared/components/atom/Button/ButtonCategory';
import {convertFormatString} from '@Shared/helper/convertFormatString';
import {scale} from '@Shared/helper/scaling';
import {bluePrimary} from '@Shared/constants/colors';
import {textStyle} from '@ModuleApp/home/assets/styles/textStyle';

interface itemTrainingSpecProps {
  iconUrl: any;
  title: string;
  type: 'button' | 'text';
  titleButton?: string;
  secondTitleButton?: string;
  doubleButton?: boolean;
  textDescription?: string;
}

const ItemTrainingSpec = ({
  iconUrl,
  title,
  type = 'text',
  titleButton,
  doubleButton = false,
  secondTitleButton,
  textDescription,
}: itemTrainingSpecProps) => {
  return (
    <View style={styles.container}>
      <Image source={iconUrl} style={styles.image} />
      <Text style={[textStyle.titleSection, styles.title]}>{title}</Text>
      {type === 'button' && doubleButton ? (
        <Fragment>
          <ButtonCategory
            title={titleButton && convertFormatString(titleButton)}
            isActive={false}
            categoryCode={'000'}
            customFontStyle={{
              fontSize: scale(13),
            }}
          />
          <ButtonCategory
            title={secondTitleButton && convertFormatString(secondTitleButton)}
            isActive={false}
            categoryCode={'000'}
            customFontStyle={{
              fontSize: scale(13),
            }}
          />
        </Fragment>
      ) : (
        <ButtonCategory
          title={titleButton && convertFormatString(titleButton)}
          isActive={false}
          categoryCode={'000'}
          customFontStyle={{
            fontSize: scale(13),
          }}
        />
      )}
      {type === 'text' ? <Text>{textDescription}</Text> : null}
    </View>
  );
};

export default ItemTrainingSpec;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: scale(15),
    height: scale(15),
    resizeMode: 'contain',
    tintColor: bluePrimary,
    marginRight: scale(8),
  },
  title: {
    fontSize: scale(14),
  },
});
