import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			PRIMARY: { DARK: string; MAIN: string; LIGHT: string };
			SECONDARY: {
				DARK: string;
				MAIN: string;
				LIGHT: string;
				LIGHTER: string;
			};
		};
		fonts: {
			PRIMARAY: string;
		};
	}
}
