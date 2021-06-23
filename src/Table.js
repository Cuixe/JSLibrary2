/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function Table(config){
    config.elementType='table';
    this.base = Element;
    this.base(config);
    this.border = 0;
    this.rows = new Array();
    if(config){
        if(config['border']){
            this.border = config['border'];
            $(this.htmlElement).attr('border',this.border);
        }
        if(config['rows']) 
            this.rows = this.castJsonToRows(config['rows']);
        for(var i=0;i<this.rows.length;i++){
            $(this.htmlElement).append(this.rows[i].htmlElement);
        }
    }
}
Table.prototype = new Element;

Table.prototype.castJsonToRows=function(json){
    var rows = new Array();
    for(var i=0;i<json.length;i++){
        if(json[i]['id'] == undefined)
            json[i]['id'] = this.id+"_row"+(i+1);
        var row = new Row(json[i]);
        rows.push(row);
    }
    return rows;
}

Table.prototype.addRow = function(Row,index){

    }

Table.prototype.removeRow = function(Row,index){
	
    }

Table.prototype.getRow = function(index){
    for(var row in this.rows){
        if(row.index == index)
            return row;
    }
    return undefined;
}

function Row(config){
    config.elementType='tr';
    this.base = Element;
    this.base(config);
    this.cels = new Array()
    if(config){
        if(config['cels'])
            this.cels = this.castJsonToCels(config['cels']);
        for(var i=0;i<this.cels.length;i++){
            $(this.htmlElement).append(this.cels[i].htmlElement);
        }
    }
}
Row.prototype = new Element;

Row.prototype.addCel=function(Cel,index){
	
    }

Row.prototype.removeCel=function(Cel,index){
	
    }

Table.prototype.getCel = function(index){
    for(var cel in this.cels){
        if(cel.index == index)
            return cel;
    }
    return undefined;
}

Row.prototype.castJsonToCels=function(json){
    var cels = new Array();
    for(var i=0;i<json.length;i++){
        if(json[i]['id'] == undefined)
            json[i]['id'] = this.id+"_cel"+(i+1);
        var cel = new Cel(json[i]);
        cels.push(cel);
    }
    return cels;
}

function Cel(config){
    config.elementType='td';
    this.base = Element;
    this.base(config);
    this.elements = new Array();
    if(config){
        if(config['elements']){
            var convert = new Convert();
            for(var i=0;i<config['elements'].length;i++){
                var jsonElement = config['elements'];
                var element = convert.jsonToElement(config['elements'][i]);
                element.index = i;
                this.elements.push(element);
                $(this.htmlElement).append(element.htmlElement);
            }
        }
    }
}
Cel.prototype = new Element;

Cel.prototype.addElement=function(element,index){
    if(!(element instanceof Element))
        element = new Convert().jsonToElement(element);
    if(index == undefined)
        this.elements.push(element);
    else
        this.elements.splice(index,0,element);
}

Cel.prototype.removeElement=function(index){
    this.elements.splice(index,1);
}

Cel.prototype.getElemet = function(index){
    for(var element in this.elements){
        if(element.index == index)
            return element;
    }
    return undefined;
}
