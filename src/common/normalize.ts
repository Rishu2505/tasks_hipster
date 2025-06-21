import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const normalize = (size: number, based: 'height' | 'width' = 'width') => {
  const wscale = width / 375;
  const hscale = height / 812;

  const newSize = based === 'height' ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export {normalize};

export default normalize;
