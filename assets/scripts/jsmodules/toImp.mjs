import User, {copyright} from './test.mjs';
document.getElementsByTagName('p')[1].innerHTML = User("Francis", "lucasfrank254@gmail.com", 26)._Email + " " + copyright;