
function Input(config){
	config.elementType='input';
	this.base = Element;
	this.base(config);
}

Input.prototype = new Element;