//aptana

function Element(config){
    this.elementType='input';
    this.htmlElement = undefined;
    this.events = new Array();
	
    if(config){
        if(config['elementType']) this.elementType=config['elementType'];
        this.htmlElement = document.createElement(this.elementType);
        if(config['id']) this.setId(config['id']);
        if(config['name'])this.setName(config['name']);
        if(config['value'])this.setValue(config['value']);
        if(config['title'])this.setTitle(config['title']);
        if(config['label'])this.setLabel(config['label']);
        if(config['tabindex'])this.setTabindex(config['tabindex']);
        if(config['visible'])this.setVisible(config['visible']);
        if(config['disabled'])this.setDisabled(config['disabled']);
        if(config['events']){
            for(var i=0;i<config['events'].length;i++){
                config['events'][i]['element'] = this;
                var event = new Event(config['events'][i]);
                this.events.push(event);
            }
        }
    }
}

Element.prototype.setId = function(id){
    $(this.htmlElement).attr('id',id);
}
Element.prototype.getId= function(){
    return $(this.htmlElement).attr('id');
}

Element.prototype.setName = function(name){
    $(this.htmlElement).attr('name',name);
}
Element.prototype.getName = function(){
    return $(this.htmlElement).attr('name');
}

Element.prototype.setValue = function(value){
    $(this.htmlElement).attr('value',value);
}
Element.prototype.getValue= function(){
    return $(this.htmlElement).attr('value');
}

Element.prototype.setTitle = function(title){
    $(this.htmlElement).attr('title',title);
}
Element.prototype.getTitle= function(){
    return $(this.htmlElement).attr('title');
}

Element.prototype.setLabel = function(label){
    $(this.htmlElement).attr('label',label);
}
Element.prototype.getLabel = function(){
    return $(this.htmlElement).attr('label');
}

Element.prototype.setTabindex = function(tabindex){
    $(this.htmlElement).attr('tabindex',tabindex);
}
Element.prototype.getTabindex = function(){
    $(this.htmlElement).attr('tabindex');
}

Element.prototype.setVisible = function(visible){
    this.visible= visible;
    if(visible)
        $(this.htmlElement).css('display','block');
    else
        $(this.htmlElement).css('display','none');
}
Element.prototype.isVisible= function(){
    var visible = $(this.htmlElement).css('display');
    if(visible == 'inline' || visible == 'block')
        return true;
    return false;
}

Element.prototype.setDisabled = function(disabled){
    $(this.htmlElement).attr('disabled',disabled);
}
Element.prototype.isDisabled = function(){
    return $(this.htmlElement).attr('disabled');
}

Element.prototype.addNewEvent = function(event){
    if(!(event instanceof Event))
        event = new Event(event);
    event.setOwner(this.htmlElement);
    this.events.push(event);
}
Element.prototype.getEvents = function(){
    return this.Events;
}
Element.prototype.removeEvent = function(eventType){
    for(var event in this.events){
        if(event.type == eventType)
            event.remove();
    }
}
Element.prototype.disableEvent = function(eventType,disabled){
    for(var event in this.events){
        if(event.eventType == eventType)
            event.disabled(disabled);
    }
}

Element.prototype.render = function(contentId){
    $('#'+contentId).append(this.htmlElement);
}

function Convert(){}

Convert.prototype.jsonToElement = function(json){
    if(json['type']=='text')
        return new Text(json);
    if(json['type']=='button')
        return new Button(json);
    if(json['type']=='label')
        return new Label(json);
    return undefined;
}

