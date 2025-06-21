import { Dimensions, StyleSheet } from "react-native";
import { Colors, Fonts } from "src/common";
import { getStatusBarHeight } from "src/common/helper";
import normalize from "src/common/normalize";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: getStatusBarHeight(),
  },
  mainContent:{
    flex:1,
  },
  cardContainer: {
    height: "100%",
    width: "100%",
    paddingTop: normalize(10),
  },
  vertical_list: {
    flex: 1,
  },
  vertical_list_container: {
    gap: normalize(10),
    paddingBottom: normalize(50),
  },
  card: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  title: {
    fontSize: normalize(20),
    marginBottom: normalize(5),
    fontFamily: Fonts.Bold,
    color: "black",
    paddingHorizontal: normalize(10),
  },
  sheetTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  trendingCard: {
    width: 100,
    height: 100,
    backgroundColor: "#ddd",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  apiCard: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 6,
    marginBottom: 10,
  },
});

export default styles;
