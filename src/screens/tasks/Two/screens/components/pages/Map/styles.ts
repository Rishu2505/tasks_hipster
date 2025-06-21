import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "src/common/helper";
import normalize from "src/common/normalize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //paddingTop: getStatusBarHeight(),
  },
  map: {
    flex: 1,
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

export default styles;
