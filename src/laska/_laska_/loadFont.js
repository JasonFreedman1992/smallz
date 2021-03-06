import iconFontFontAwesome from "react-native-vector-icons/Fonts/FontAwesome.ttf";

const iconFontStyles = `
@font-face {
  src: url(${iconFontFontAwesome});
  font-family: FontAwesome;
}
`;

// Create stylesheet
const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
