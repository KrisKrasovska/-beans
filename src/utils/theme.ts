export interface Theme {
  color: {
    primaryColor: string;
    secondaryColor: string;
    bg: string;
	 bgMain: string;
    bgBtn: string;
    accentColor: string;
	 thirdColor: string;
  };
}

export const theme: Theme = {
  color: {
    primaryColor: "#ffffff",
    secondaryColor: "#903710",
	 thirdColor: "#000000",
    bg: "#903710",
	 bgMain: "#e1cbbe",
    bgBtn: "#d5612f",
    accentColor: "#ffe85a",
  },
};
