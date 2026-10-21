function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)}
const phone=localStorage.getItem('wb_demo_current');const users=JSON.parse(localStorage.getItem('wb_demo_users')||'{}');
if(!phone||!users[phone]){location.href='index.html';}
else{document.getElementById('welcome').textContent='Welcome to Wealth Bridge';document.getElementById('userPhone').textContent=phone;const user=users[phone];const code=user.code||'WB12345';document.getElementById('refLink').textContent=location.origin+location.pathname.replace('dashboard.html','')+'index.html?ref='+code;document.getElementById('refCount').textContent='0';}
document.getElementById('logout').addEventListener('click',()=>{localStorage.removeItem('wb_demo_current');location.href='index.html'});
document.getElementById('copyRef').addEventListener('click',async()=>{const value=document.getElementById('refLink').textContent;try{await navigator.clipboard.writeText(value);toast('Demo referral link copied.')}catch(e){toast(value)}});
document.querySelectorAll('[data-demo]').forEach(b=>b.addEventListener('click',()=>toast('Demo preview only — no real financial activity is available.')));
