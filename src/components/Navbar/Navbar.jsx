import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const links=['About','Skills','Projects','Education','Certificates','Contact'];
  useEffect(()=>{const f=()=>setScrolled(window.scrollY>30);window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
  const go=id=>{document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:'smooth'});setOpen(false)};
  return <header className={scrolled?'nav nav-scrolled':'nav'}>
    <a className="brand" href="#top"><span>PR</span><b>Pankaj<span>.</span></b></a>
    <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
    <nav className={open?'nav-links open':'nav-links'}>
      {links.map(x=><button key={x} onClick={()=>go(x)}>{x}</button>)}
      <a className="nav-cta" href="mailto:rauniyarpankaj6@gmail.com">Let's talk <ArrowUpRight size={15}/></a>
    </nav>
  </header>
}
