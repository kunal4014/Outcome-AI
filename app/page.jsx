'use client';

import {useMemo, useState} from 'react';

const specialists = [
  {id:'atlas', mark:'A', name:'Atlas', role:'Strategy', task:'Frames the decision, constraints and success criteria.'},
  {id:'cipher', mark:'C', name:'Cipher', role:'Research', task:'Builds an evidence plan and identifies what must be verified.'},
  {id:'nova', mark:'N', name:'Nova', role:'Creative', task:'Generates distinct directions without dressing guesses up as facts.'},
  {id:'sentinel', mark:'S', name:'Sentinel', role:'Verification', task:'Challenges assumptions, risks and unsupported claims.'},
];

const templates = [
  {label:'Launch plan', prompt:'Create a practical 30-day launch plan for '},
  {label:'Market decision', prompt:'Compare the best market options for '},
  {label:'Product brief', prompt:'Turn this idea into a build-ready product brief: '},
];

const missions = [
  {name:'Restaurant ordering pilot', meta:'Draft · 4 specialists'},
  {name:'Prospect qualification', meta:'Saved · evidence needed'},
  {name:'Product positioning', meta:'Saved · ready to refine'},
];

function buildOutcome(goal){
  const subject=goal.replace(/[.?!]+$/,'').trim();
  return {
    title:'Decision brief',
    summary:`A first-pass operating brief for “${subject}”. It is structured for review; any external facts still need live research and citations.`,
    moves:[
      'Define one measurable outcome and the decision deadline.',
      'List the three constraints that would invalidate an otherwise attractive option.',
      'Run the smallest reversible test before committing the full budget.',
    ],
    questions:[
      'Who owns the final decision?',
      'What evidence would change the recommendation?',
      'What cost, legal or operational constraints are non-negotiable?',
    ],
  };
}

export default function Home(){
  const [goal,setGoal]=useState('');
  const [mission,setMission]=useState(null);
  const [selectedAgent,setSelectedAgent]=useState('atlas');
  const outcome=useMemo(()=>mission?buildOutcome(mission):null,[mission]);

  function runMission(event){
    event?.preventDefault();
    const trimmed=goal.trim();
    if(!trimmed)return;
    setMission(trimmed);
  }

  function resetMission(){
    setGoal('');
    setMission(null);
  }

  return <main className="shell">
    <aside className="rail">
      <button className="wordmark" onClick={resetMission} aria-label="Outcome AI home">
        <span className="brand-orb">O</span>
        <span>Outcome <b>AI</b><small>Decision workspace</small></span>
      </button>

      <button className="new-mission" onClick={resetMission}><span>＋</span> New mission</button>

      <nav aria-label="Saved missions">
        <p className="nav-label">Recent work</p>
        {missions.map((item,index)=><button className={`mission-link ${index===0?'active':''}`} key={item.name}>
          <span className="mission-dot"/>
          <span><strong>{item.name}</strong><small>{item.meta}</small></span>
        </button>)}
      </nav>

      <div className="rail-footer">
        <span className="prototype-dot"/>
        <div><strong>Prototype mode</strong><small>No live model APIs connected</small></div>
      </div>
    </aside>

    <section className="workspace">
      <header className="topbar">
        <div><span className="eyebrow">Intelligence workspace</span><strong>{mission?'Mission room':'New mission'}</strong></div>
        <div className="top-status"><i/> Local prototype <span>•</span> No external actions</div>
      </header>

      {!mission?<section className="welcome">
        <div className="signal" aria-hidden="true"><span/><i/><b>O</b></div>
        <p className="kicker">One goal. Four specialist viewpoints.</p>
        <h1>Turn an open question into a <em>defensible decision.</em></h1>
        <p className="lead">Outcome breaks a mission into strategy, research, creative options and verification—then gives you one clear brief to review.</p>

        <div className="templates">
          {templates.map(item=><button key={item.label} onClick={()=>setGoal(item.prompt)}>
            <span>↗</span><strong>{item.label}</strong><small>{item.prompt}…</small>
          </button>)}
        </div>

        <form className="composer" onSubmit={runMission}>
          <label htmlFor="mission">What outcome do you need?</label>
          <div><textarea id="mission" value={goal} onChange={event=>setGoal(event.target.value)} placeholder="Example: decide how to pilot direct online ordering for three restaurants" rows="3"/>
          <button type="submit" disabled={!goal.trim()}>Run mission <span>→</span></button></div>
          <small>This prototype creates a structured local draft. Connect approved model and research providers for live evidence.</small>
        </form>
      </section>:<section className="mission-room">
        <div className="mission-heading">
          <div><p className="kicker">Mission 01 · Draft complete</p><h1>{mission}</h1></div>
          <button onClick={resetMission}>Start another</button>
        </div>

        <div className="room-grid">
          <section className="agent-panel">
            <div className="section-head"><div><span>Specialist team</span><strong>Four lenses, one synthesis</strong></div><small>LOCAL SIMULATION</small></div>
            <div className="agent-list">
              {specialists.map((agent,index)=><button key={agent.id} className={selectedAgent===agent.id?'selected':''} onClick={()=>setSelectedAgent(agent.id)}>
                <b>{agent.mark}</b><span><strong>{agent.name}<i>{agent.role}</i></strong><small>{agent.task}</small></span><em>{index===3?'VERIFIED':'COMPLETE'}</em>
              </button>)}
            </div>
            <div className="agent-note">
              <span>{specialists.find(agent=>agent.id===selectedAgent)?.name} output</span>
              <p>{selectedAgent==='sentinel'?'The draft separates proposed actions from claims that require external evidence. Payment, legal, market and operational assumptions remain explicit review items.':'This specialist contribution is a structured placeholder. Connect an approved model provider to generate live reasoning and retain provenance.'}</p>
            </div>
          </section>

          <article className="outcome-card">
            <div className="outcome-top"><div><span>Outcome</span><strong>{outcome.title}</strong></div><small>REVIEW REQUIRED</small></div>
            <p className="summary">{outcome.summary}</p>
            <div className="brief-block"><span>Recommended next moves</span><ol>{outcome.moves.map(item=><li key={item}>{item}</li>)}</ol></div>
            <div className="brief-block questions"><span>Resolve before committing</span>{outcome.questions.map(item=><p key={item}><i>?</i>{item}</p>)}</div>
            <div className="outcome-actions"><button>Copy brief</button><button className="primary">Approve direction →</button></div>
          </article>
        </div>
      </section>}
    </section>
  </main>;
}
