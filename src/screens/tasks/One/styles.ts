import { StyleSheet } from 'react-native';
import normalize from 'src/common/normalize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: "absolute",
    top: normalize(50),
    left: normalize(10),
    backgroundColor: "#ffffffcc",
    padding: normalize(10),
    borderRadius: normalize(30),
    elevation: normalize(5),
  },
});