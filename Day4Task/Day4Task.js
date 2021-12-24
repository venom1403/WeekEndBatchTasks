var request = new XMLHttpRequest(); //create an XHR Object
//Api URL/using HTTP Methods/establishing a connection
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
//establishing the path
request.send(); 
request.onload=function(){ //once the data is loaded from the server we have to convert the data and onload the function
    var data=JSON.parse(request.response);
    for(i=0;i<data.length;i++){
        console.log(data[i].flag)
    }
};