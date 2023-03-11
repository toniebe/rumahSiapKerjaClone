/* eslint-disable react/react-in-jsx-scope */
import {redWarning, whiteColor} from '@Shared/constants/colors';
import {scale} from '@Shared/helper/scaling';
import {BaseToast, ErrorToast} from 'react-native-toast-message';

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      contentContainerStyle={{
        paddingHorizontal: scale(15),
      }}
      text1Style={{
        fontSize: scale(15),
        fontWeight: '400',
      }}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
        color: whiteColor,
        fontWeight: '600',
        fontFamily: 'Inter-SemiBold',
      }}
      text2Style={{
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Inter-Regular',
        color: whiteColor,
      }}
      contentContainerStyle={{
        backgroundColor: redWarning,
      }}
    />
  ),
};
