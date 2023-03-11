import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const baseWidth = 375;
const baseHeight = 812;

export const scale = (size: number): number => {
    const scaleFactor = Math.min(width / baseWidth, height / baseHeight);
    const newSize = size * scaleFactor;
    return Math.round(newSize);
};

export const verticalScale = (size: number): number => {
    const scaleFactor = height / baseHeight;
    const newSize = size * scaleFactor;
    return Math.round(newSize);
};