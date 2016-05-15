var data = require("./mod");
var owners = data.owners;
var investors = data.investors;
module.exports = {
  owners: data.owners,
  investors: data.investors,
  same_city: function(name){
    var group = [], origin;
    for(var positions in data){
      for (var i = 0; i < data[positions].length; i++) {
        group.push(data[positions][i])
      }
    }
  origin = group.filter(a=>a.name == name);
  return  group.filter(a=>a.name != name && a.city == origin[0].city)[0].name
  }
}
