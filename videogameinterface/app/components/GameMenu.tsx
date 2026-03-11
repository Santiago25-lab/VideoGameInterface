"use client";

import { useState, useEffect } from "react";

interface MenuButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function MenuButton({ children, onClick }: MenuButtonProps) {

const [hover,setHover] = useState(false);

return (

<button
onClick={onClick}
onMouseEnter={()=>setHover(true)}
onMouseLeave={()=>setHover(false)}

className={`
relative w-64 py-4 px-8 font-bold text-xl uppercase tracking-wider
transition-all duration-300 transform
text-cyan-400 hover:text-cyan-200
${hover ? "scale-110" : "scale-100"}
`}
>

<span
className={`absolute inset-0 rounded-lg transition-all duration-300
${hover
?"bg-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.5)]"
:"border border-cyan-500/30"}
`}
></span>

<span className="relative z-10 flex items-center justify-center gap-3">

<span className="w-2 h-2 bg-cyan-400"></span>

{children}

<span className="w-2 h-2 bg-cyan-400"></span>

</span>

</button>

);

}



export default function GameMenu() {

const [mounted,setMounted] = useState(false);


useEffect(()=>{
setMounted(true);
},[]);


// --------------------
// MENU ACTIONS
// --------------------

const handleInfoClick = (topic: string) => {
  // Por ahora, solo mostraremos un mensaje en la consola.
  // En el futuro, esto podría abrir una ventana modal con información.
  console.log(`Mostrando información sobre: ${topic}`);
};


// --------------------
// RENDER OPTIONS MENU
// --------------------

if(!mounted) return null;


// --------------------
// MAIN MENU
// --------------------

return (

<div className="game-menu">

{/* BACKGROUND */}

<div className="fixed inset-0 bg-black">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 animate-pulse"></div>

</div>


{/* MENU */}

<div className="relative z-10 flex flex-col items-center justify-center min-h-screen">

{/* TITLE */}

<div className="mb-16 text-center">

<h1
className="text-6xl md:text-8xl font-black uppercase tracking-widest text-cyan-400"
style={{
textShadow:`
0 0 10px #22d3ee,
0 0 20px #22d3ee,
0 0 40px #22d3ee
`
}}
>

Cyber <span className="text-white">Nexus</span>

</h1>

<p className="mt-4 text-cyan-300 tracking-[0.5em] uppercase">

Enter the Digital Realm

</p>

</div>


{/* BUTTONS */}

<div className="flex flex-col gap-6 pb-24 md:pb-0">

<MenuButton onClick={() => handleInfoClick("Mejorar UX")}>
  ¿Cómo Mejorar UX?
</MenuButton>

<MenuButton onClick={() => handleInfoClick("Ventajas")}>
  Ventajas Usuario
</MenuButton>

<MenuButton onClick={() => handleInfoClick("Buenas Prácticas")}>
  Buenas Prácticas
</MenuButton>

<MenuButton onClick={() => handleInfoClick("Ejemplos")}>
  Ejemplos
</MenuButton>

<MenuButton onClick={() => handleInfoClick("Herramientas")}>
  Herramientas

</MenuButton>

</div>


{/* VERSION */}

<div className="absolute bottom-8 text-cyan-600 text-sm">

v1.0.0 | © 2026 Cyber Nexus Studios

</div>

</div>

</div>

);

}

//cambios