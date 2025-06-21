import { Dimensions, StyleSheet } from "react-native";
import { Fonts } from "src/common";
import normalize from "src/common/normalize";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    width: width - normalize(20),
    borderRadius: normalize(12),
    padding: normalize(10),
    alignSelf: "center",
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageWrapper: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(8),
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  textContentWrapper: {
    flexDirection: "column",
    marginLeft: normalize(10),
    flex: 1,
  },
  title: {
    fontSize: normalize(16),
    marginBottom: normalize(0),
    fontFamily: Fonts.Bold,
    flexShrink: 1,
    flexWrap: "wrap",
  },
  description: {
    fontSize: normalize(14),
    fontFamily: Fonts.Regular,
    flexShrink: 1,
    flexWrap: "wrap",
  },
});

export default styles;
