import { StyleSheet } from "react-native";
import { Fonts } from "src/common";
import normalize from "src/common/normalize";

export default StyleSheet.create({
  container: {
    paddingHorizontal: normalize(10),
    paddingBottom: normalize(12),
    backgroundColor: "#fff",
    borderBottomWidth: normalize(1),
    borderBottomColor: "#eee",
  },
  backRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: normalize(10),
    fontSize: normalize(18),
    fontFamily: Fonts.Bold,
    color: "#0F20B5",
  },
});
