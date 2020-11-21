var a = prompt ("what is your first number");
var b = prompt ("what is your first number");
function gdc_two_numbers(a, b) {
    var R;
    while ((a % b) > 0)  {
      R = a % b;
      a = b;
      b = R;
    }
    return b;
  }
  console.log(gdc_two_numbers(a,b));