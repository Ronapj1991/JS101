function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo());

//log "no"
// line 5 will be "no" if no paramters are passed
//since foo() returns "yes" it is compared to "no" on line 6