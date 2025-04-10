import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CarPage from "@/components/tabs/car/CarPage";
import ScreenWrapper from "@/components/ui/screen-wrapper/ScreenWrapper";

export default function Car() {
  return (
    <ScreenWrapper>
      <CarPage />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
