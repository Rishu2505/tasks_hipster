import { Dimensions, StyleSheet } from "react-native";
import { Colors, Fonts } from "src/common";
import normalize from "src/common/normalize";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    width,
  },
  imageBackground: {
    height: "100%",
    width: width,
  },
  absoluteLayout: {
    position: "absolute",
    height: "100%",
    width: "100%",
    bottom: 0,
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(32),
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    alignSelf: "center",
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
  title: {
    fontFamily: Fonts.Bold,
    fontSize: normalize(28),
    color: "#0F20B5",
    textAlign: "left",
  },
  heading: {
    marginTop: normalize(14),
    fontFamily: Fonts.SemiBold,
    fontSize: normalize(18),
    color: "#161720",
    textAlign: "left",
    alignSelf:'flex-start'
  },
  description: {
    marginTop: normalize(5),
    marginBottom: normalize(13),
    fontFamily: Fonts.Regular,
    fontSize: normalize(16),
    fontWeight: "400",
    color: "#161720",
    textAlign: "left",
    opacity: 0.8,
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    height: normalize(8),
    width: normalize(11),
    borderRadius: normalize(30),
    backgroundColor: "rgba(15, 32, 181, 0.16)",
    marginHorizontal: normalize(2),
  },
  transparentLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: normalize(90),
    backgroundColor: "transparent",
    zIndex: 1,
  },
  animatedWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: normalize(50),
  },
});

export default styles;
