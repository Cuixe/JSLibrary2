
function Content(config){
    this.typeContent='div';
    this.id=''
	
    if(config){
        this.htmlElement = document.createElement(this.typeContent);
        if(config['id']) $(this.htmlElement).attr('id',config['id']);
    }
}