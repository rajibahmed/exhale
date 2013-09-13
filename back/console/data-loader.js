var fixtures = require("pow-mongoose-fixtures");

fixtures.load({
    User:[
     {name:"rajib",email:"rajib@gmail.com",roles:["user","admin"]},
     {name:"jonathan",email:"jonathan@gmail.com",roles:["user","admin"]},
     {name:"mizbah",email:"mizbah@gmail.com",roles:["user","admin"]},
     {name:"thenerd",email:"nerd@gmail.com",roles:["user","admin"]}
    ]
});
