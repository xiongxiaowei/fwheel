import a from '../js/a'
import b from '../js/b'
import '../css/style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

var el=document.getElementById('app')
el.innerHTML="<h3>welcome to webpack2.0</h3>"+(a.a+b.b)
//angular
export default el