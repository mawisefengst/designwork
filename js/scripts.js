var a = require("./moduleA.js");
var b = require("./moduleB.js");
require("../dist/page1.html");
require("../dist/page3.html");
require("../dist/page4.html");
require("../dist/page5.html");
require("../dist/page6.html");
require("../dist/page7.html");
require("../dist/page8.html");
require("../dist/page9.html");
require("../dist/page10.html");


require("../styles/fonts.css");
require("../styles/style.css");

a.updateTitle();
b.updateContent();

