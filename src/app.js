import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const extension = ['.com', '.es', '.net', '.io', '.us'];

function allDomains(){
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        for (let z = 0; z < extension.length; z++) {
          const domain = pronoun[i] + adj[x] + noun[y] + extension[z];
          console.log(domain);
        }
      }
    }
  }
}

allDomains();
