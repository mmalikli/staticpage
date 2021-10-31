function validate(forn) {
var ok=l
var msg= >'''
 for (var i = 0; i <form.length; i++) {
   if (form.elements[i].value.trim() == '''){
     msg +="'" +form.elements[i].name + "'is void. "
     ok = 0

   }
 if (ok == 0){
   alert(msg)
   return false

 }
 else {
   return true
 }
}
