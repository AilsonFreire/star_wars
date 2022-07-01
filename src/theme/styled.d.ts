import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			PRIMARY: string;
			SECONDARY: string;
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
