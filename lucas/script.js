const ambience = [

{
name:"Seatbelts - Rush",
file:"../sounds/02. Seatbelts - Rush.mp3"
},

{
name:"Seatbelts - Too Good Too Bad",
file:"../sounds/11. Seatbelts - Too Good Too Bad.mp3"
},

{
name:"The Day Of",
file:"../sounds/7-29-04 The Day Of.mp3"
},

{
name:"Bad Dog No Biscuits",
file:"../sounds/Cowboy Bebop OST 1 - Bad Dog No Biscuits.mp3"
},

{
name:"Moliendo Cafe",
file:"../sounds/Moliendo Café 4.mp3"
},

{
name:"Swat Team Exit",
file:"../sounds/Oceans Eleven Soundtrack - Swat Team Exit 4.mp3"
},

{
name:"Museum Camera",
file:"../sounds/Ocean_s Eleven - Museum Camera.mp3"
},

{
name:"Piano Bar",
file:"../sounds/Piano Bar Ⅰ 4.mp3"
},

{
name:"Snake Eyes",
file:"../sounds/Snake Eyes.mp3"
},

{
name:"Alarm",
file:"../sounds/alarm.mp3"
},

{
name:"Brave Rainbow Rider",
file:"../sounds/brave_rainbow_rider.mp3"
},

{
name:"Four Heros",
file:"../sounds/four_heros.mp3"
},

{
name:"Our Time is Now",
file:"../sounds/cena.mp3"
}

];

const effects=[

{
name:"Eldritch Blast",
file:"../sounds/blast.mp3"
},

{
name:"Fire (Small)",
file:"../sounds/fire_small.mp3"
},

{
name:"Fire (Big)",
file:"../sounds/fire_big.mp3"
},

{
name:"Lightning",
file:"../sounds/lightning.mp3"
},

{
name:"Ice",
file:" ../sounds/ice.mp3"
},

{
name:"Charm",
file:"../sounds/charm.mp3"
},

{
name:"Magic Blast",
file:"../sounds/magic_blast.mp3"
},

{
name:"Burglar Alarm",
file:"../sounds/Burglar Break-In Bank Alarm Sound Effect 👤🏦🚨 4.mp3"
}

];

const weapons=[

{
name:"Weapon Deflect",
file:"../sounds/weapon_deflect.mp3"
},

{
name:"Whiff",
file:"../sounds/whiff.mp3"
},

{
name:"Weapon Hit",
file:"../sounds/weapon_hit.mp3"
},

{
name:"CHAIR!!!",
file:"../sounds/blunt_clang.mp3"
}

]

const bits=[

{
name:"FAH",
file:"../sounds/fah.mp3"
},

{
name:"Vine Boom",
file:"../sounds/vine_boom.mp3"
}

];

const musicDiv=document.getElementById("music");
const effectsDiv=document.getElementById("effects");
const weaponsDiv=document.getElementById("weapons");
const bitsDiv=document.getElementById("bits");
const activeTracks={};

function createMusicCard(track){

    const card=document.createElement("div");
    card.className="card";

    const button=document.createElement("button");
    button.textContent=track.name;

    const slider=document.createElement("input");
    slider.type="range";
    slider.min=0;
    slider.max=100;
    slider.value=50;

    const stop=document.createElement("button");
    stop.textContent="Stop";
    stop.className="stop";

    button.onclick = () => {

    if(activeTracks[track.name]) return;

    const audio = new Audio(track.file);

    audio.loop = true;
    audio.volume = .5;

    audio.play();

    activeTracks[track.name] = audio;

    // Turn button green while playing
    button.classList.add("playing");

};

    slider.oninput=()=>{

        if(activeTracks[track.name]){

            activeTracks[track.name].volume=slider.value/100;

        }

    };

    stop.onclick = () => {

    if(activeTracks[track.name]){

        activeTracks[track.name].pause();
        activeTracks[track.name].currentTime = 0;

        delete activeTracks[track.name];

        // Restore original color
        button.classList.remove("playing");

    }

};

    card.appendChild(button);
    card.appendChild(slider);
    card.appendChild(stop);

    musicDiv.appendChild(card);

}

function createEffect(effect){

    const button=document.createElement("button");

    button.textContent=effect.name;

    button.onclick=()=>{

        const audio=new Audio(effect.file);

        audio.play();

    };

    effectsDiv.appendChild(button);

}

function createBit(bit){

    const button=document.createElement("button");

    button.textContent=bit.name;

    button.onclick=()=>{

        const audio=new Audio(bit.file);

        audio.play();

    };

    bitsDiv.appendChild(button);

}

function createWeaponEffect(effect){

    const button=document.createElement("button");

    button.textContent=effect.name;

    button.onclick=()=>{

        const audio=new Audio(effect.file);

        audio.play();

    };

    weaponsDiv.appendChild(button);

}

ambience.forEach(createMusicCard);

effects.forEach(createEffect);
weapons.forEach(createWeaponEffect);
bits.forEach(createBit);