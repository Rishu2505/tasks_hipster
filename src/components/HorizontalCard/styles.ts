import { Dimensions, StyleSheet } from "react-native";
import { Fonts } from "src/common";
import normalize from "src/common/normalize";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    width: normalize(150),
    height: normalize(150),
    borderRadius: normalize(12),
    overflow: "hidden",
  },
  imageBG: {
    height: "100%",
    width: "100%",
    padding: normalize(10),
  },
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: normalize(20),
    marginBottom: normalize(0),
    fontFamily: Fonts.Bold,
    color: "white",
    textAlign:'center'
  },
});

export default styles;
