
function DataSet(config){
    this.id='';
    this.data=undefined;
    this.typeData='json';
    this.pkColumn = '';
	
    if(config){
        if(config['id']) this.id = config['id'];
        if(config['data']) this.data= config['data'];
        if(config['typeData']) this.id = config['typeData'];
    }
}
