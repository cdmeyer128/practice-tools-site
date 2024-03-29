var arr = [];

document.getElementById("byCitation").onclick = function() {
  sortByCitation();
}

document.getElementById("byName").onclick = function() {
  sortByName();
}
//linear parallel
document.getElementById("linear parallel").onclick=function() {
  if (!arr.includes("linear parallel")) {
    arr.push("linear parallel");
  }
  arr = uncheck("linear orthogonal", arr);
  arr = uncheck("linear serial", arr);
  arr = uncheck("circular parallel", arr);
  arr = uncheck("circular serial", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//linear serial
document.getElementById("linear serial").onclick=function() {
  if (!arr.includes("linear serial")) {
    arr.push("linear serial");
  }
  arr = uncheck("linear parallel", arr);
  arr = uncheck("linear orthogonal", arr);
  arr = uncheck("circular parallel", arr);
  arr = uncheck("circular serial", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//noabstraction
document.getElementById("linear orthogonal").onclick=function() {
  if (!arr.includes("linear orthogonal")) {
    arr.push("linear orthogonal");
  }
  arr = uncheck("linear parallel", arr);
  arr = uncheck("linear serial", arr);
  arr = uncheck("circular parallel", arr);
  arr = uncheck("circular serial", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//partial
document.getElementById("circular parallel").onclick=function() {
  if (!arr.includes("circular parallel")) {
    arr.push("circular parallel");
  }
  arr = uncheck("linear parallel", arr);
  arr = uncheck("linear serial", arr);
  arr = uncheck("linear orthogonal", arr);
  arr = uncheck("circular serial", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//complete
document.getElementById("circular serial").onclick=function() {
  if (!arr.includes("circular serial")) {
    arr.push("circular serial");
  }
  arr = uncheck("linear parallel", arr);
  arr = uncheck("linear serial", arr);
  arr = uncheck("linear orthogonal", arr);
  arr = uncheck("circular parallel", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//show all arrangement
document.getElementById("show-all-arrangement").onclick=function() {
  arr = uncheck("linear parallel", arr);
  arr = uncheck("linear serial", arr);
  arr = uncheck("linear orthogonal", arr);
  arr = uncheck("circular parallel", arr);
  arr = uncheck("circular serial", arr);
  filterMultSelection(arr);
}
//noabstraction
document.getElementById("noneab").onclick=function() {
  if (!arr.includes("noneab")) {
    arr.push("noneab");
  }
  arr = uncheck("partialab", arr);
  arr = uncheck("completeab", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//partial
document.getElementById("partialab").onclick=function() {
  if (!arr.includes("partialab")) {
    arr.push("partialab");
  }
  arr = uncheck("noneab", arr);
  arr = uncheck("completeab", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//complete
document.getElementById("completeab").onclick=function() {
  if (!arr.includes("completeab")) {
    arr.push("completeab");
  }
  arr = uncheck("noneab", arr);
  arr = uncheck("partialab", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//show all abstraction
document.getElementById("show-all-abstraction").onclick=function() {
  arr = uncheck("noneab", arr);
  arr = uncheck("partialab", arr);
  arr = uncheck("completeab", arr);
  filterMultSelection(arr);
}
//contiguous
document.getElementById("contiguous").onclick=function() {
  if (!arr.includes("contiguous")) {
    arr.push("contiguous");
  }
  arr = uncheck("segregated", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//segregated
document.getElementById("segregated").onclick=function() {
  if (!arr.includes("segregated")) {
    arr.push("segregated");
  }
  arr = uncheck("contiguous", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//show all partition
document.getElementById("show-all-partition").onclick=function() {
  arr = uncheck("segregated", arr);
  arr = uncheck("contiguous", arr);
  filterMultSelection(arr);
}
//point sparse
document.getElementById("point sparse").onclick=function() {
  if (!arr.includes("point sparse")) {
    arr.push("point sparse");
  }
  arr = uncheck("segment sparse", arr);
  arr = uncheck("point contiguous", arr);
  arr = uncheck("segment contiguous", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//segment sparse
document.getElementById("segment sparse").onclick=function() {
  if (!arr.includes("segment sparse")) {
    arr.push("segment sparse");
  }
  arr = uncheck("point sparse", arr);
  arr = uncheck("point contiguous", arr);
  arr = uncheck("segment contiguous", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//point contiguous
document.getElementById("point contiguous").onclick=function() {
  if (!arr.includes("point contiguous")) {
    arr.push("point contiguous");
  }
  arr = uncheck("point sparse", arr);
  arr = uncheck("segment sparse", arr);
  arr = uncheck("segment contiguous", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//segment contiguous
document.getElementById("segment contiguous").onclick=function() {
  if (!arr.includes("segment contiguous")) {
    arr.push("segment contiguous");
  }
  arr = uncheck("point sparse", arr);
  arr = uncheck("segment sparse", arr);
  arr = uncheck("point contiguous", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//show all
document.getElementById("show-all-type").onclick=function() {
  arr = uncheck("point sparse", arr);
  arr = uncheck("segment sparse", arr);
  arr = uncheck("segment sparse", arr);
  arr = uncheck("point contiguous", arr);
  filterMultSelection(arr);
}
//none
document.getElementById("none").onclick=function() {
  if (!arr.includes("none")) {
    arr.push("none");
  }
  arr = uncheck("within", arr);
  arr = uncheck("between", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}

//within
document.getElementById("within").onclick=function() {
  if (!arr.includes("within")) {
    arr.push("within");
  }
  arr = uncheck("none", arr);
  arr = uncheck("between", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}

//between
document.getElementById("between").onclick=function() {
  if (!arr.includes("between")) {
    arr.push("between");
  }
  arr = uncheck("within", arr);
  arr = uncheck("none", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}
//show all
document.getElementById("show-all-interconnection").onclick=function() {
  arr = uncheck("between", arr);
  arr = uncheck("within", arr);
  arr = uncheck("none", arr);
  filterMultSelection(arr);
}

//web browser
document.getElementById("web browser").onclick=function() {
  if (!arr.includes("web browser")) {
    arr.push("web browser");
  }
  arr = uncheck("software", arr);
  arr = uncheck("java package", arr);
  arr = uncheck("r package", arr);
  arr = uncheck("jupyter", arr);
  arr = uncheck("javascript", arr);
  arr = uncheck("show-all-usage", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}

//software
document.getElementById("software").onclick=function() {
  if (!arr.includes("software")) {
    arr.push("software");
  }
  arr = uncheck("web browser", arr);
  arr = uncheck("java package", arr);
  arr = uncheck("r package", arr);
  arr = uncheck("jupyter", arr);
  arr = uncheck("javascript", arr);
  arr = uncheck("show-all-usage", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}

//java package
document.getElementById("java package").onclick=function() {
  if (!arr.includes("java package")) {
    arr.push("java package");
  }
  arr = uncheck("web browser", arr);
  arr = uncheck("software", arr);
  arr = uncheck("r package", arr);
  arr = uncheck("jupyter", arr);
  arr = uncheck("javascript", arr);
  arr = uncheck("show-all-usage", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}

//r package
document.getElementById("r package").onclick=function() {
  if (!arr.includes("r package")) {
    arr.push("r package");
  }
  arr = uncheck("web browser", arr);
  arr = uncheck("software", arr);
  arr = uncheck("java package", arr);
  arr = uncheck("jupyter", arr);
  arr = uncheck("javascript", arr);
  arr = uncheck("show-all-usage", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}

//jupyter
document.getElementById("jupyter").onclick=function() {
  if (!arr.includes("jupyter")) {
    arr.push("jupyter");
  }
  arr = uncheck("web browser", arr);
  arr = uncheck("software", arr);
  arr = uncheck("java package", arr);
  arr = uncheck("r package", arr);
  arr = uncheck("javascript", arr);
  arr = uncheck("show-all-usage", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}

//javascript
document.getElementById("javascript").onclick=function() {
  if (!arr.includes("javascript")) {
    arr.push("javascript");
  }
  arr = uncheck("web browser", arr);
  arr = uncheck("software", arr);
  arr = uncheck("java package", arr);
  arr = uncheck("r package", arr);
  arr = uncheck("jupyter", arr);
  arr = uncheck("show-all-usage", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}

//show all
document.getElementById("show-all-usage").onclick=function() {
  arr = uncheck("web browser", arr);
  arr = uncheck("software", arr);
  arr = uncheck("java package", arr);
  arr = uncheck("r package", arr);
  arr = uncheck("jupyter", arr);
  arr = uncheck("javascript", arr);
  filterMultSelection(arr);
}

//linear
document.getElementById("linear").onclick=function() {
  if (!arr.includes("linear")) {
    arr.push("linear");
  }
  arr = uncheck("circular", arr);
  arr = uncheck("spacefilling", arr);
  arr = uncheck("spatial", arr);
  arr = uncheck("show-all-layouts", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}

//circular
document.getElementById("circular").onclick=function() {
  if (!arr.includes("circular")) {
    arr.push("circular");
  }
  arr = uncheck("linear", arr);
  arr = uncheck("spacefilling", arr);
  arr = uncheck("spatial", arr);
  arr = uncheck("show-all-layouts", arr);
  filterMultSelection(arr);
}

//spacefilling
document.getElementById("spacefilling").onclick=function() {
  if (!arr.includes("spacefilling")) {
    arr.push("spacefilling");
  }
  arr = uncheck("linear", arr);
  arr = uncheck("circular", arr);
  arr = uncheck("spatial", arr);
  arr = uncheck("show-all-layouts", arr);
  filterMultSelection(arr);
}

//spatial
document.getElementById("spatial").onclick=function() {
  if (!arr.includes("spatial")) {
    arr.push("spatial");
  }
  arr = uncheck("linear", arr);
  arr = uncheck("circular", arr);
  arr = uncheck("spacefilling", arr);
  arr = uncheck("show-all-layouts", arr);
  filterMultSelection(arr);
}

//single view
document.getElementById("single-view").onclick=function() {
  if (!arr.includes("single-view")) {
    arr.push("single-view");
  }
  arr = uncheck("multiple-view", arr);
  arr = uncheck("show-all-views", arr);
  filterMultSelection(arr);
}

//multiple view
document.getElementById("multiple-view").onclick=function() {
  if (!arr.includes("multiple-view")) {
    arr.push("multiple-view");
  }
  arr = uncheck("single-view", arr);
  arr = uncheck("show-all-views", arr);
  filterMultSelection(arr);
}

//single Scale
document.getElementById("single-scale").onclick=function() {
  if (!arr.includes("single-scale")) {
    arr.push("single-scale");
  }
  arr = uncheck("multiple-scale", arr);
  arr = uncheck("show-all-scales", arr);
  filterMultSelection(arr);
}

//multiple scale
document.getElementById("multiple-scale").onclick=function() {
  if (!arr.includes("multiple-scale")) {
    arr.push("multiple-scale");
  }
  arr = uncheck("single-scale", arr);
  arr = uncheck("show-all-scales", arr);
  filterMultSelection(arr);
}

//single focus
document.getElementById("single-focus").onclick=function() {
  if (!arr.includes("single-focus")) {
    arr.push("single-focus");
  }
  arr = uncheck("multiple-focus", arr);
  arr = uncheck("show-all-foci", arr);
  filterMultSelection(arr);
}

//multiple focus
document.getElementById("multiple-focus").onclick=function() {
  if (!arr.includes("multiple-focus")) {
    arr.push("multiple-focus");
  }
  arr = uncheck("single-focus", arr);
  arr = uncheck("show-all-foci", arr);
  filterMultSelection(arr);
}

//show all layouts
document.getElementById("show-all-layouts").onclick=function() {
  arr = uncheck("linear", arr);
  arr = uncheck("circular", arr);
  arr = uncheck("spacefilling", arr);
  arr = uncheck("spatial", arr);
  filterMultSelection(arr);
}

//show all views
document.getElementById("show-all-views").onclick=function() {
  arr = uncheck("single-view", arr);
  arr = uncheck("multiple-view", arr);
  filterMultSelection(arr);
}

//show all scales
document.getElementById("show-all-scales").onclick=function() {
  arr = uncheck("single-scale", arr);
  arr = uncheck("multiple-scale", arr);
  filterMultSelection(arr);
}

//show all foci
document.getElementById("show-all-foci").onclick=function() {
  arr = uncheck("single-focus", arr);
  arr = uncheck("multiple-focus", arr);
  filterMultSelection(arr);
}


function uncheck(other, arr) {
  for( var i = 0; i < arr.length; i++){
    if ( arr[i] === other) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
