import "styled-components/native";
import theme from "../theme";

declare module 'styled-components/native' {
    type ThemeType = typeof Theme;

    export interface DefaultTheme extends ThemeType {}
}