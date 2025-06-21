import { StyleSheet } from "react-native";
import { Fonts } from "src/common";
import { getStatusBarHeight } from "src/common/helper";
import normalize from "src/common/normalize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: getStatusBarHeight(),
  },
  imageBackground: {
    flex: 1,
    paddingHorizontal: normalize(10),
    paddingTop: normalize(10),
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
  selector: {
    marginBottom: normalize(16),
    padding: normalize(12),
    backgroundColor: "#fff",
    borderColor: "#eee",
    borderWidth: normalize(1),
    borderRadius: normalize(6),
  },
  selectorText: {
    fontSize: normalize(14),
    color: "#333",
    fontFamily: Fonts.Regular,
    textTransform: 'capitalize'
  },
  button: {
    backgroundColor: "#a1f542",
    paddingVertical: normalize(12),
    borderRadius: normalize(6),
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: normalize(16),
    fontFamily: Fonts.Bold,
  },
});

export default styles;
