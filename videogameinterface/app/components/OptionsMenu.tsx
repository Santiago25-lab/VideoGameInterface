"use client";

import { useState, useEffect } from "react";

type Tab = "video" | "audio" | "controls" | "gameplay";

export default function OptionsMenu({ onBack }: { onBack: () => void }) {

const defaultSettings = {
  resolution: "1920x1080",
  graphics: "High",

  masterVolume: 80,
  musicVolume: 70,
  effectsVolume: 75,

  difficulty: "Normal",

  keybinds: {
    forward: "W",
    backward: "S",
    left: "A",
    right: "D",
    jump: "Space",
    shoot: "Mouse1",
    reload: "R"
  }
};

const [settings, setSettings] = useState(defaultSettings);
const [activeTab, setActiveTab] = useState<Tab>("video");
const [listeningKey, setListeningKey] = useState<string | null>(null);


// LOAD SETTINGS

useEffect(() => {

const saved = localStorage.getItem("gameSettings");

if (saved) {
setSettings(JSON.parse(saved));
}

}, []);


// SAVE SETTINGS

useEffect(() => {

localStorage.setItem("gameSettings", JSON.stringify(settings));

}, [settings]);


// ESC BACK

useEffect(() => {

const handleEsc = (e: KeyboardEvent) => {

if (e.key === "Escape") {
onBack();
}

};

window.addEventListener("keydown", handleEsc);

return () => window.removeEventListener("keydown", handleEsc);

}, [onBack]);


// UPDATE SETTINGS

const updateSetting = (key: string, value: any) => {
setSettings({ ...settings, [key]: value });
};


// KEY CAPTURE

useEffect(() => {

const handleKey = (e: KeyboardEvent) => {

if (!listeningKey) return;

setSettings((prev: any) => ({
...prev,
keybinds: {
...prev.keybinds,
[listeningKey]: e.key.toUpperCase()
}
}));

setListeningKey(null);

};

window.addEventListener("keydown", handleKey);

return () => window.removeEventListener("keydown", handleKey);

}, [listeningKey]);


// SLIDER

const CyberSlider = ({
value,
onChange
}: {
value: number;
onChange: (v: number) => void;
}) => (

<input
type="range"
min="0"
max="100"
value={value}
onChange={(e) => onChange(Number(e.target.value))}
className="w-64 accent-cyan-400 cursor-pointer"
/>

);


// KEY BIND

const KeyBind = ({
action,
keyName
}: {
action: string;
keyName: string;
}) => (

<div className="flex justify-between w-80 border border-cyan-800 p-3 rounded">

<span>{action}</span>

<button
onClick={() => setListeningKey(keyName)}
className="px-4 py-1 bg-cyan-500/10 border border-cyan-600 hover:bg-cyan-500/30"
>

{listeningKey === keyName
? "Press key..."
: settings.keybinds[keyName as keyof typeof settings.keybinds]}

</button>

</div>

);


// UI

return (

<div className="min-h-screen flex text-cyan-300 bg-black">


{/* SIDEBAR */}

<div className="w-64 border-r border-cyan-900 flex flex-col pt-24">

{["video","audio","controls","gameplay"].map((tab:any)=>(

<button
key={tab}
onClick={()=>setActiveTab(tab)}
className={`p-4 uppercase tracking-widest transition-all duration-300
${activeTab===tab
?"text-cyan-300 bg-cyan-500/10 border-l-4 border-cyan-400"
:"text-cyan-600 hover:text-cyan-300"}
`}
>

{tab}

</button>

))}

</div>


{/* CONTENT */}

<div className="flex-1 p-16 relative space-y-6">

<h2 className="text-3xl text-cyan-400 font-bold uppercase">

{activeTab}

</h2>


{activeTab==="video" && (

<div>

Resolution

<select
className="ml-4 bg-black border border-cyan-700 p-2"
value={settings.resolution}
onChange={(e)=>updateSetting("resolution",e.target.value)}
>

<option>1920x1080</option>
<option>1600x900</option>
<option>1280x720</option>

</select>

</div>

)}


{activeTab==="audio" && (

<div className="space-y-4">

Master Volume

<CyberSlider
value={settings.masterVolume}
onChange={(v)=>updateSetting("masterVolume",v)}
/>

Music Volume

<CyberSlider
value={settings.musicVolume}
onChange={(v)=>updateSetting("musicVolume",v)}
/>

Effects Volume

<CyberSlider
value={settings.effectsVolume}
onChange={(v)=>updateSetting("effectsVolume",v)}
/>

</div>

)}


{activeTab==="controls" && (

<div className="space-y-4">

<KeyBind action="Move Forward" keyName="forward"/>
<KeyBind action="Move Backward" keyName="backward"/>
<KeyBind action="Move Left" keyName="left"/>
<KeyBind action="Move Right" keyName="right"/>
<KeyBind action="Jump" keyName="jump"/>
<KeyBind action="Shoot" keyName="shoot"/>
<KeyBind action="Reload" keyName="reload"/>

</div>

)}


{activeTab==="gameplay" && (

<div>

Difficulty

<select
className="ml-4 bg-black border border-cyan-700 p-2"
value={settings.difficulty}
onChange={(e)=>updateSetting("difficulty",e.target.value)}
>

<option>Easy</option>
<option>Normal</option>
<option>Hard</option>

</select>

</div>

)}


{/* BACK BUTTON */}

<div className="absolute bottom-10 left-10">

<button
onClick={onBack}
className="px-6 py-3 border border-cyan-500 text-cyan-300
hover:bg-cyan-500/20 transition-all duration-300"
>

⬅ Back

</button>

</div>

</div>

</div>

);

}