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
  mainView: {
    flex: 1,
  },
  list: {
  },
  input: {
    padding: normalize(12),
    backgroundColor: "#fff",
    borderColor: "#eee",
    borderWidth: normalize(1),
    borderRadius: normalize(6),
    marginBottom: normalize(12),
    fontSize: normalize(15),
    fontFamily: Fonts.Regular,
    textTransform: 'capitalize'
  },
  resultItem: {
    paddingVertical: normalize(10),
    marginHorizontal: normalize(5),
    borderBottomWidth: normalize(1),
    borderBottomColor: "#d3d3d3",
  },
  resultText: {
    fontSize: normalize(14),
    fontFamily: Fonts.Regular,
    color: "#333",
    textTransform: 'capitalize'
  },
});

export default styles;
