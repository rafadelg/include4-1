var newWnd = window.open();
newWnd.opener = null;
function convierteMd5(formulario){
    alert("El Hash MD5 es: " + md5(formulario.md5txt.value));
 }