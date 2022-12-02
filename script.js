import { addtask } from "./components/addTask.js";
import { displayTask } from "./components/readTask.js";


const btn = document.querySelector("[data-form-btn]");

	

//arow functions o funciones anonimas
btn.addEventListener("click", addtask);
//listener

displayTask();