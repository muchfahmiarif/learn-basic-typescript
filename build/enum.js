"use strict";
// enum
// numeric enum
var Mont;
(function (Mont) {
    Mont[Mont["JAN"] = 1] = "JAN";
    Mont[Mont["FEB"] = 100] = "FEB";
    Mont[Mont["MAR"] = 101] = "MAR";
    Mont[Mont["APR"] = 102] = "APR";
    Mont[Mont["MAY"] = 103] = "MAY";
    Mont[Mont["JUN"] = 104] = "JUN";
})(Mont || (Mont = {}));
console.log(Mont.FEB); // 0
// string enum
var Color;
(function (Color) {
    Color["RED"] = "red";
    Color["GREEN"] = "green";
    Color["BLUE"] = "blue";
})(Color || (Color = {}));
console.log(Color.BLUE); // blue
