
function Select(config){
    config.elementType='select';
    this.base = Element;
    this.base(config);
    this.selectedIndex=-1;
    this.selectedText=-1;
    this.selectedValue=-1;
    this.dataSet=undefined;
    this.options = new Array();
    this.columnValue='';
    this.columnText='';
	
    if(config){
        if(config['selectedIndex']) this.setSelectedOption(config['selectedIndex']);
        if(config['selectedText']) this.setSelectedText(config['selectedText']);
        if(config['selectedValue']) this.setSelectedValue(config['selectedValue']);
        if(config['columnValue']) this.columnValue=config['columnValue'];
        if(config['columnText']) this.columnText=config['columnText'];
        if(config['dataSet']) this.setDataSet(config['dataSet']);
        if(config['options']){
            for(var i=0;i<config['options'].length;i++){
                this.setAddOption(config['options'][0]);
            }
        }
    }
}
Select.prototype = new Element;

Select.prototype.setSelectedValue = function(value){
    this.selectedValue = value;
    for(var i=0;i<this.options.length;i++){
        if(this.options[i].value == value){
            this.htmlElement.options[this.options[i].index].selected = true;
            this.selectedIndex = option.index;
        }
    }
}

Select.prototype.setSelectedText = function(text){
    this.selectedText = text;
    for(var i=0;i<this.options.length;i++){
        if(this.options[i].text == text){
            this.htmlElement.options[this.options[i].index].selected = true;
            this.selectedIndex = this.options[i].index;
        }
    }
}

Select.prototype.setSelectedOption = function(index){
    this.htmlElement.options[index].selected = true;
    this.selectedIndex = index;
}

Select.prototype.addOption = function(option){
    if(!(option instanceof Option)){
        if(option.index == undefined)
            option.index = this.options.length;
        option = new Option(option);
    }
    this.options.push(option);
    $(this.htmlElement).append(option.htmlElement);
}

Select.prototype.setDataSet = function(dataSet){
    if(!(dataSet instanceof DataSet))
        dataSet = new DataSet(dataSet);
    this.dataSet = dataSet;
    for(var i=0;i<dataSet.data.length;i++){
        var configOption = {
            index:i,
            text:dataSet.data[i][this.columnText],
            value:dataSet.data[i][this.columnValue]
            };
        this.addOption(configOption);
    }
}

Select.prototype.removeOption = function(index){
    this.options.splice(index);
    this.htmlElement.remove(index);
}

Select.prototype.removeAllOptions = function(){
    for(var i=0;i<this.options.length;i++)
        this.htmlElement.remove(this.options[i].index);
    this.options = new Array();
}

Select.prototype.getSelectedValue = function(){
    return this.getSelectedOption().value;
}

Select.prototype.getSelectedText = function(){
    return this.getSelectedOption().text;
}

Select.prototype.getSelectedOption = function(){
    var index = this.htmlElement.selectedIndex;
    return this.options[index];
}

function Option(config){
    config.elementType='option';
    this.base = Element;
    this.base(config);
    this.index = -1;
    this.text = '';
    this.value = '';
    if(config){
        if(config['index'])this.index = config['index'];
        if(config['text'])this.setText(config['text']);
        if(config['value'])this.setValue(config['value']);
    }
}
Option.prototype = new Element;

Option.prototype.setText = function(text){
    this.text = text;
    $(this.htmlElement).attr('text',text);
}

Option.prototype.setValue = function(value){
    this.value = value;
    $(this.htmlElement).attr('value',value);
}
