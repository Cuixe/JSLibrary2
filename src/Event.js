	
function Event(config){
    this.element = undefined;
    this.functionEvent = undefined;
    this.type = '';
    this.disabled = false;
    this.arguments = new Array();
	
    if(config){
        if(config['element']) this.element = config['element'];
        if(config['functionEvent']) this.functionEvent = config['functionEvent'];
        if(config['eventType']) this.eventType = config['eventType'];
        if(config['arguments']){
            this.arguments = config['arguments'];
        }
        if(config['disabled']) this.disabled = config['disabled'];
        if(!this.disabled)
            this.append();
    }
}

Event.prototype.setOwner = function(element){
    this.element = element;
    this.append();
}

Event.prototype.append = function(){
    if(this.element){
        $(this.element.htmlElement).bind(this.eventType,{
            arguments:this.arguments,
            element:this.element,
            functionEvent:this.functionEvent
            },
        function(parameter){
            var data = parameter.data;
            if(data.arguments.length > 0)
                data.functionEvent(data.arguments,data.element);
            else
                data.functionEvent(data.element);
        }
        );
    }
}

Event.prototype.remove = function(){
    $(this.element.htmlElement).unbind(this.eventType);
}

Event.prototype.disabled = function (disabled){
    this.disabled = disabled;
    if(disabled){
        this.removeEvent();
    }else
        this.appendEvend();
}

function Argument(config){
    this.id;
    this.value=undefined;
	
    if(config){
        if(config['id']) this.id = config['id'];
        if(config['value']) this.value = config['value'];
    }
}



