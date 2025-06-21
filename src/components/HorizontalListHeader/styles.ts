import { Dimensions, StyleSheet } from "react-native";
import { Fonts } from "src/common";
import normalize from "src/common/normalize";

const styles = StyleSheet.create({
  horizontal_list: {
    flex: 1,
  },
  horizontal_list_container: {
    gap: normalize(10),
    paddingHorizontal: normalize(10),
  },
  title: {
    fontSize: normalize(20),
    marginBottom: normalize(5),
    fontFamily: Fonts.Bold,
    color: "black",
    paddingHorizontal: normalize(10),
  },
});

export default styles;
