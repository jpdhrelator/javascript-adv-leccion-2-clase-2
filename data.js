const dataEnvios= [
{"id":1,"destino":"Finland","codigo":"SEC201"},
{"id":2,"destino":"China","codigo":"SEC685"},
{"id":3,"destino":"China","codigo":"SEC815"},
{"id":4,"destino":"Croatia","codigo":"SEC485"},
{"id":5,"destino":"China","codigo":"SEC439"},
{"id":6,"destino":"Indonesia","codigo":"SEC327"},
{"id":7,"destino":"Vietnam","codigo":"SEC337"},
{"id":8,"destino":"China","codigo":"SEC085"},
{"id":9,"destino":"Latvia","codigo":"SEC680"},
{"id":10,"destino":"Vietnam","codigo":"SEC553"},
{"id":11,"destino":"Armenia","codigo":"SEC739"},
{"id":12,"destino":"United States","codigo":"SEC460"},
{"id":13,"destino":"Russia","codigo":"SEC172"},
{"id":14,"destino":"Afghanistan","codigo":"SEC495"},
{"id":15,"destino":"Pakistan","codigo":"SEC859"},
{"id":16,"destino":"Sweden","codigo":"SEC853"},
{"id":17,"destino":"Colombia","codigo":"SEC786"},
{"id":18,"destino":"China","codigo":"SEC846"},
{"id":19,"destino":"Slovenia","codigo":"SEC841"},
{"id":20,"destino":"Cameroon","codigo":"SEC693"}];

let listaPaises=[
{"pais":"Sweden"},
{"pais":"Japan"},
{"pais":"China"},
{"pais":"Portugal"},
{"pais":"Bulgaria"},
{"pais":"Greece"},
{"pais":"Croatia"},
{"pais":"Portugal"},
{"pais":"Greece"},
{"pais":"Poland"},
{"pais":"China"},
{"pais":"Indonesia"},
{"pais":"Guatemala"},
{"pais":"China"},
{"pais":"Indonesia"},
{"pais":"Peru"},
{"pais":"Russia"},
{"pais":"Indonesia"},
{"pais":"Philippines"},
{"pais":"Denmark"}
];

let mapEnviosDb = new Map();
dataEnvios.forEach(v => mapEnviosDb.set(v.id, v));

let setPaises= new Set();
listaPaises.forEach(p => setPaises.add(p));