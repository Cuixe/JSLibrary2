
function Button(config){
    this.base = Element;
    this.base(config);
    this.typeButton = 'button';
    this.disableEvent = false;
	
    if(config){
        if(config['typeButton']) $(this.htmlElement).attr('type',config['typeButton']);
        else $(this.htmlElement).attr('type','button');
    }
}
Button.prototype = new Element;
