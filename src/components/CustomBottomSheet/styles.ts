import { Dimensions, StyleSheet } from "react-native";
import { Colors, Fonts } from "src/common";
import normalize from "src/common/normalize";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: normalize(16),
    borderTopRightRadius: normalize(16),
    width: "100%",
  },
  draggableArea: {
    flex: 1,
    marginBottom: normalize(40)
  },
  handleStyle: {
    display: "none",
  },
  indicator: {
    borderRadius: normalize(40),
    alignSelf: "center",
    width: normalize(40),
    height: normalize(4),
    position: "absolute",
    top: normalize(8),
    backgroundColor: "#d3d3d3",
  },
  scrollConatiner: {
    flexGrow: 1,
    paddingBottom: normalize(50),
  },
  container: {
    flexGrow: 1,
  },
  horizontal_list: {
    flex: 1,
    marginTop: normalize(20),
  },
  horizontal_list_container: {
    gap: normalize(10),
    paddingHorizontal: normalize(10),
  },
  textContent: {
    paddingHorizontal: normalize(10),
  },
  title: {
    fontSize: normalize(20),
    fontFamily: Fonts.Bold,
    marginTop: normalize(10),
  },
  description: {
    fontSize: normalize(15),
    fontFamily: Fonts.Regular,
    color: "#555",
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
});

export default styles;
