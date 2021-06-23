
function Text(config){
    this.base = Element;
    this.base(config);
    this.typeText = 'text';
    this.maxLength = -1;
    this.onlyNumbers = false;
    this.onlyLetters = false;
    this.regExp = undefined;
	
    if(config){
        if(config['typeText']) this.setTypeText(config['typeText']);
        if(config['maxLength']) this.setMaxLength(config['maxLength']);
        if(config['onlyNumbers']) this.setOnlyNumbers(config['onlyNumbers']);
        if(config['onlyLetters']) this.setOnlyLetters(config['onlyLetters']);
        if(config['regExp']) this.setOnlyLetters(config['regExp']);
    }
}
Text.prototype = new Element;

Text.prototype.setTypeText = function(typeText){
    this.typeText = typeText;
    $(this.htmlElement).attr('type',typeText);
}

Text.prototype.setMaxLength = function(maxLength){
    this.maxLength = maxLength;
    $(this.htmlElement).attr('maxlength',maxLength);
}

Text.prototype.setOnlyNumbers = function(onlyNumbers){
    this.onlyNumbers = onlyNumbers;
    $(this.htmlElement).keypress({
        regExp:/[0-9]/
    },validateText);
}

Text.prototype.setOnlyLetters = function(onlyLetters){
    this.onlyLetters = onlyLetters;
    $(this.htmlElement).keypress({
        regExp:/[A-Za-z��\s]/
    },validateText);
}

Text.prototype.setRegExp = function(regExp){
    this.regExp = regExp;
    $(this.htmlElement).keypress({
        regExp:regExp
    },validateText);
}

function validateText(event){
    var regExp = event.data.regExp;
    var string = String.fromCharCode(event.which);
    if(!regExp.test(string))
        return false;
    return true;
}


