import { main } from "../Constants/constants.js";
import { items } from "../../Model/model.js"

export const board = () => {
  main.innerHTML = "";
  items.forEach(key => {
    const section = document.createElement('section');
    
    section.className = 'block';
    section.id = `${key.title}`.split(" ").join("")
    main.appendChild(section);
  });
}
