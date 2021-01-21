import { Dimensions, PixelRatio } from 'react-native';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const guidelineBaseWidth = 414; //350
const guidelineBaseHeight = 896

export const scale = size => WINDOW_WIDTH / guidelineBaseWidth * size;
export const verticalScale = size => WINDOW_HEIGHT / guidelineBaseHeight * size

// export const scaleFont = size => size * PixelRatio.getFontScale();
export const scaleFont = size => WINDOW_WIDTH / guidelineBaseWidth * size;
