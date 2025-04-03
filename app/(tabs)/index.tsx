import { StyleSheet } from "react-native";
import ScreenWrapper from "@/components/common/screen-wrapper/ScreenWrapper";
import HomePage from "@/components/tabs/home/HomePage";

export default function Index() {
  return (
    <ScreenWrapper>
      <HomePage />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
