google.load('visualization','1.0', {packages: ['corechart']});
google.setOnLoadCallback(diagramm);

function newloading() {
location.reload();
}
window.setTimeout("newloading()",5000);

function diagramm() {

var xtp = null;
try{
    xtp = new XMLHttpRequest();
}catch(e){
    
}

if (xtp){
    xtp.open("GET", "https://arsnova.eu/api/statistics", true);
    xtp.onreadystatechange = function () {
        if(xtp.readyState == 4 && xtp.status == 200) {
            var file = new google.visualization.DataTable();
            var stati = JSON.parse(xtp.responseText);
    file.addColumn('string', 'Topping');
    file.addColumn('number', 'Zaehler');
            for(var i in stati){
                file.addRows([
                    [i,stati[i]]
                    ]);
            }
    var design ={
        'width' : 1000,
        'heigth' : 350
    };
           var chart = new google.visualization.ColumnChart(document.getElementById('statistic'));
        chart.draw(file,design);
        }
    };
    
    xtp.send(null); 
}
}