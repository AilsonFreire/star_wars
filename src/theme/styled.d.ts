import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			PRIMARY: { MAIN: string; LIGHTER: string };
			SECONDARY: { MAIN: string; LIGHTER: string };
			TERTIARY: string;
		};
		fonts: {
			PRIMARAY: {
				REGULAR: string;
				BOLD: string;
			};
		};
	}
}
