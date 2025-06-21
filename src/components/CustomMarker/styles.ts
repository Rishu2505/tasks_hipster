import { StyleSheet } from "react-native";
import { Fonts } from "src/common";
import normalize from "src/common/normalize";

export default StyleSheet.create({
  pinContainer: {
    padding: normalize(6),
    elevation: normalize(4),
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: normalize(3),
    shadowOffset: { width: 0, height: normalize(2) },
    alignItems: "center",
    justifyContent: "center",
  },
});
