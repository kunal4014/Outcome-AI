'use client';

import {useState} from 'react';

const models = [
  ["GPT", "Reasoning Core"],
  ["Claude", "Deep Analysis"],
  ["Gemini", "Multimodal"],
  ["Grok", "Real Time"]
];

const agents = [
  ["🧠","ATLAS","Strategy Intelligence"],
  ["⚡","NOVA","Creative Intelligence"],
  ["🔎","CIPHER","Research Intelligence"],
  ["🛡","SENTINEL","Verification Intelligence"]
];

const missions = [
  ["🚀","Startup Intelligence","5 agents ready"],
  ["✈️","Travel Architect","12 sources analysed"],
  ["💡","Idea Engine","Research complete"]
];

export default function Home(){

const [goal,setGoal]=useState("");
const [active,setActive]=useState(false);

return (

<div className="app">

<div className="background"/>

<aside>

<div className="brand">
◉ OUTCOME AI
<span>SUPER INTELLIGENCE</span>
</div>

<button className="newMission">
＋ New Mission
</button>


<h5>ACTIVE MISSIONS</h5>

{missions.map((m,i)=>

<div className="missionCard" key={i}>
<strong>{m[0]} {m[1]}</strong>
<small>{m[2]}</small>
</div>

)}


<h5>INTELLIGENCE</h5>

<div className="links">
🧠 Memory Active<br/>
📂 Knowledge Base<br/>
🔎 Research Engine<br/>
🤖 AI Teams
</div>


<div className="profile">
◉ Personal Intelligence<br/>
<span>Memory Online</span>
</div>


</aside>


<section className="main">


<header>

<span>
INTELLIGENCE OPERATING SYSTEM
</span>

<div className="online">
● AI NETWORK ONLINE
</div>

</header>


{!active ? (

<div className="hero">


<div className="reactor">

<div className="orbit one"/>
<div className="orbit two"/>

<div className="core">
◉
</div>

</div>


<div className="connections">

{models.map((m,i)=>

<div key={i}>
<strong>{m[0]}</strong>
<small>{m[1]}</small>
</div>

)}

</div>


<h1>
A new era of<br/>
<span>intelligence.</span>
</h1>


<p>
One request. Multiple expert AI systems.
One verified outcome.
</p>


<div className="status">

<div>🟢 4 Models Connected</div>
<div>🟢 5 Agents Ready</div>
<div>🟢 Memory Active</div>

</div>


<div className="team">

{agents.map((a,i)=>

<div key={i}>
<strong>{a[0]} {a[1]}</strong>
<small>{a[2]}</small>
</div>

)}

</div>


</div>


):(


<div className="execution">

<h2>
MISSION ACTIVATED
</h2>

<div className="goal">
{goal}
</div>


<h3>
Your AI Workforce
</h3>


{agents.map((a,i)=>

<div className="agent" key={i}>

<div>
{a[0]}
</div>

<section>
<strong>{a[1]}</strong>
<p>{a[2]}</p>
</section>

<span>
ACTIVE
</span>

</div>

)}


<div className="complete">
✅ Verified Outcome Ready
</div>


</div>

)}



<div className="composer">

<button>📎</button>

<input
value={goal}
onChange={(e)=>setGoal(e.target.value)}
placeholder="Tell your AI workforce your mission..."
/>

<button>🎙</button>

<button
className="send"
onClick={()=>setActive(true)}
>
↑
</button>

</div>


</section>

</div>

)

}
