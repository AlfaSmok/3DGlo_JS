(()=>{"use strict";(t=>{const e=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let s=setInterval;const m=()=>{let t=(()=>{let t=(new Date("6 august 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.hours<10?e.textContent="0"+t.hours:e.textContent=t.hours,t.minutes<10?n.textContent="0"+t.minutes:n.textContent=t.minutes,t.seconds<10?o.textContent="0"+t.seconds:o.textContent=t.seconds,t.timeRemaining<0&&(e.textContent="00",n.textContent="00",o.textContent="00")};m(),"00"==e.textContent&&"00"==n.textContent&&"00"==o.textContent?clearInterval(s):s(m,1e3)})()})();