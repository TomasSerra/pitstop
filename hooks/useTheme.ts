import { useColorScheme } from "./useColorScheme.web";
import { Colors } from "@/constants/Colors";

export function useTheme() {
  const theme = useColorScheme();
  return theme === "dark" ? Colors.dark : Colors.light;
}
