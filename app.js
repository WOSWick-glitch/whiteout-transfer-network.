import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import {
getFirestore,
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

const firebaseConfig = {

apiKey: "YOUR_KEY",
authDomain: "YOUR_DOMAIN",
projectId: "YOUR_PROJECT_ID"

}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const playersCollection = collection(db,"players")

window.addPlayer = async function(){

const name = document.getElementById("name").value
const state = document.getElementById("state").value
const power = document.getElementById("power").value
const furnace = document.getElementById("furnace").value
const role = document.getElementById("role").value

await addDoc(playersCollection,{
name,
state,
power,
furnace,
role
})

alert("Player added")

loadPlayers()

}

window.loadPlayers = async function(){

const snapshot = await getDocs(playersCollection)

const list = document.getElementById("playerList")

list.innerHTML=""

snapshot.forEach(doc=>{

const p = doc.data()

list.innerHTML += `

<div class="playerCard">

<h4>${p.name}</h4>

Power: ${p.power}<br>
Furnace: ${p.furnace}<br>
Role: ${p.role}<br>
State: ${p.state}

</div>

`

})

}

loadPlayers()
