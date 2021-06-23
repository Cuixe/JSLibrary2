/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function Label(config){
    config.elementType='div';
    this.base=Element;
    this.base(config);
    this.text='';

    if(config){
        if(config['text']){this.text = config['text'];$(this.htmlElement).append(this.text);}
    }

}
