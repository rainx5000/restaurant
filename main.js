(()=>{"use strict";const e=(()=>{const e=document.createElement("img");return e.src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",{img:e,headline:"We make ze best pizza there is!",info:"Pizza, was first created by a very famous chef back in the 90s. The man's name is slim shady. He is not only the rap god, but also the pizza god. When everyone was eating spaghetti, he thought of the most delicous food creation in existence, and that is why we are called Shady Pizza"}})(),t=document.createElement("div"),n=document.createElement("h3");n.textContent=e.headline;const a=document.createElement("p");a.textContent=e.info,t.append(e.img,n,a);const o=document.querySelector("#header"),c=document.querySelector("#content"),i=document.createElement("h1");i.innerHTML="Shady Pizza";const s=document.createElement("div"),d=document.createElement("button");d.innerHTML="Home";const m=document.createElement("button");m.innerHTML="Menu";const r=document.createElement("button");r.innerHTML="About";const u=document.createElement("button");u.innerHTML="Contact",o.append(i,s),s.classList.add("nav"),s.append(d,m,r,u),d.addEventListener("click",(e=>{c.append(t),t.classList.add("home")}))})();