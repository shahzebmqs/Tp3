var val = prompt("Sasir age");
valide_age = false;
typeval = typeof(val);

if(val>0 && val<130)
    valide_age = true;

if(valide_age)
    alert(val+" ans : age valide. C'est un "+typeval);

// Question 2

var double_age = val*2;
alert(double_age);