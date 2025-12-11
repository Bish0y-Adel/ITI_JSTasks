function TextStyle() {

    let paragraph = document.getElementById("textParagraph");
    

    let fontFamilyRadios = document.getElementsByName("fontFamily");
    let textAlignRadios = document.getElementsByName("textAlign");
    let lineHeightRadios = document.getElementsByName("lineHeight");
    let letterSpacingRadios = document.getElementsByName("letterSpacing");
    let textIndentRadios = document.getElementsByName("textIndent");
    let textTransformRadios = document.getElementsByName("textTransform");
    let textDecorationRadios = document.getElementsByName("textDecoration");
    

    function applyFontFamily() {
        for (let i = 0; i < fontFamilyRadios.length; i++) {
            if (fontFamilyRadios[i].checked) {
                paragraph.style.fontFamily = fontFamilyRadios[i].value;
                console.log("Font Family changed to: " + fontFamilyRadios[i].value);
            }
        }
    }
    
    function applyTextAlign() {
        for (let i = 0; i < textAlignRadios.length; i++) {
            if (textAlignRadios[i].checked) {
                paragraph.style.textAlign = textAlignRadios[i].value;
                console.log("Text Align changed to: " + textAlignRadios[i].value);
            }
        }
    }
    
    function applyLineHeight() {
        for (let i = 0; i < lineHeightRadios.length; i++) {
            if (lineHeightRadios[i].checked) {
                paragraph.style.lineHeight = lineHeightRadios[i].value;
                console.log("Line Height changed to: " + lineHeightRadios[i].value);
            }
        }
    }
    
    function applyLetterSpacing() {
        for (let i = 0; i < letterSpacingRadios.length; i++) {
            if (letterSpacingRadios[i].checked) {
                paragraph.style.letterSpacing = letterSpacingRadios[i].value;
                console.log("Letter Spacing changed to: " + letterSpacingRadios[i].value);
            }
        }
    }
    
    function applyTextIndent() {
        for (let i = 0; i < textIndentRadios.length; i++) {
            if (textIndentRadios[i].checked) {
                paragraph.style.textIndent = textIndentRadios[i].value;
                console.log("Text Indent changed to: " + textIndentRadios[i].value);
            }
        }
    }
    
    function applyTextTransform() {
        for (let i = 0; i < textTransformRadios.length; i++) {
            if (textTransformRadios[i].checked) {
                paragraph.style.textTransform = textTransformRadios[i].value;
                console.log("Text Transform changed to: " + textTransformRadios[i].value);
            }
        }
    }
    
    function applyTextDecoration() {
        for (let i = 0; i < textDecorationRadios.length; i++) {
            if (textDecorationRadios[i].checked) {
                paragraph.style.textDecoration = textDecorationRadios[i].value;
                console.log("Text Decoration changed to: " + textDecorationRadios[i].value);
            }
        }
    }
    

    for (let i = 0; i < fontFamilyRadios.length; i++) {
        fontFamilyRadios[i].addEventListener("click", applyFontFamily);
    }
    
    for (let i = 0; i < textAlignRadios.length; i++) {
        textAlignRadios[i].addEventListener("click", applyTextAlign);
    }
    
    for (let i = 0; i < lineHeightRadios.length; i++) {
        lineHeightRadios[i].addEventListener("click", applyLineHeight);
    }
    
    for (let i = 0; i < letterSpacingRadios.length; i++) {
        letterSpacingRadios[i].addEventListener("click", applyLetterSpacing);
    }
    
    for (let i = 0; i < textIndentRadios.length; i++) {
        textIndentRadios[i].addEventListener("click", applyTextIndent);
    }
    
    for (let i = 0; i < textTransformRadios.length; i++) {
        textTransformRadios[i].addEventListener("click", applyTextTransform);
    }
    
    for (let i = 0; i < textDecorationRadios.length; i++) {
        textDecorationRadios[i].addEventListener("click", applyTextDecoration);
    }
}

TextStyle();
