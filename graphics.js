google.load('visualization','1.0', {packages: ['corechart']});
google.setOnLoadCallback(statics);

function newLoad() {
location.reload();
}
window.setTimeout("newLoad()",30000);

function statics() {

var xtp = null;
try{
    xtp = new XMLHttpRequest();
}catch(e){
    
}

if (xtp){
    xtp.open("GET", "https://arsnova.eu/api/statistics", true);
    xtp.onreadystatechange = function () {
        if(xtp.readyState == 4 && xtp.status == 200) {
            var data = new google.visualization.DataTable();
            var stats = JSON.parse(xtp.responseText);
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Zaehler');
            for(var i in stats){
                data.addRows([
                    [i,stats[i]]
                    ]);
            }
    var design ={
        'width' : 1000,
        'heigth' : 350
    };
           var chart = new google.visualization.ColumnChart(document.getElementById('st'));
        chart.draw(data,design);
        }
    };
    
    xtp.send(null); 
}
}