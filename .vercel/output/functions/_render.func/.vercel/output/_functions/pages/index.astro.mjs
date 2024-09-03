/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, g as addAttribute, h as renderHead } from '../chunks/astro/server_2Tny3Vrm.mjs';
import 'kleur/colors';
import $$ArrowRight from '../chunks/ArrowRight_OnwtkUFJ.mjs';
import 'clsx';
import { l as logo } from '../chunks/logo_Lyq4Fi6h.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#1f2021] text-[#E9EAE2] flex flex-col gap-12 font-krypton p-4 text-[12px] md:text-[16px]"> <div class="w-full flex flex-col gap-12  justify-between items-start"> <h1 class="w-full text-[24px] md:text-[48px] font-kryton leading-none text-center ">
bi0s Recruitment CTF
</h1> <div class="w-full text-center"> <h2 class="text-[16px] md:text-[18px] font-semibold text-center ">
India's No.1 Ranked CTF Team & Cyber Security Research Club
</h2> <p class="opacity-50 leading-tight">
We are a team of college students from Amrita university, passionate
        about cyber security, and dedicated to protect tomorrow's cyberspace.
</p> </div> </div> <div class="w-full flex gap-12 flex-col text-[#7AFFC7]"> <h1 class="w-full font-krypton opacity-75 text-[16px] md:text-[32px] text-center ">
Think you got what it takes?
</h1> <div class="w-full text-center "> <p>
All it takes is to prove yourself. Tackle the challenges, conquer them,
        and demonstrate your strength to earn your place among the elite!
</p> <!-- <span class="opacity-50 text-[10px] md:text-[14px]"
        >Note: This Recruitment drive is only for upcoming freshers and
        sophomores (Sem 3) in the Bengaluru campus ('24-'28 batch). We are not
        recruiting Third Years (Sem 5) students but you can still play the CTF
        tho.
      </span> --> </div> </div> <div class="w-full flex justify-center items-center gap-8"> <a href="/getting-started" class="w-[50%] m-auto justify-center items-center flex gap-4"> <button class="w-full flex justify-center py-4 px-2 bg-[#7AFFC7] text-[#1f2021]">
Get Started ${renderComponent($$result, "ArrowRight", $$ArrowRight, {})}</button> </a> <a href="https://forms.gle/QUJh5amE1WhccyRc9" class="w-[50%] m-auto justify-center items-center flex gap-4"> <button class="w-full flex justify-center py-4 px-2 bg-[#7AFFC7] text-[#1f2021]">
Register here ${renderComponent($$result, "ArrowRight", $$ArrowRight, {})}</button> </a> </div> <div class="w-full flex flex-col gap-12 text-[#E9EAE2]"> <h3 class="w-full font-technos text-center text-[16px] lg:text-[32px]">
What we do
</h3> <p class="text-justify opacity-75">
Team bi0s primarily participate in Capture The Flag (CTF) competitions &
      have been consistently ranked the number one team in India since 2016
      according to CTFtime. Our members have found several
      security issues in a variety of software such as Virtualization Software,
      Content Management Systems, Q&A Forums, Operating Systems, etc. Driven by the vision to make security
      education easily accessible in India, members of our team go around places
      such as Schools, Universities, and Industries to deliver security
      trainings and workshops ranging from very basic topics to cutting edge
      security research. We also host monthly cybersecurity meetups check that out <span class="text-accent underline"><a href="https://bi0smeetup.in">here</a></span> </p> </div> </section>`;
}, "E:/join.bi0sblr.in/src/components/Hero.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-[64px] flex justify-between items-center text-[12px] md:text-[16px] p-4"> <div class="w-[32px] h-[32px] rounded-sm"> <img${addAttribute(logo.src, "src")} alt=""> </div> <div class="w-auto flex gap-4"> <a class="underline" href="/getting-started">Get Started</a> <a class="underline" href="https://www.bi0s.in">About</a> <a class="underline" href="http://wiki.bi0s.in">Wiki</a> </div> </section>`;
}, "E:/join.bi0sblr.in/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full footer_inner px-4 flex flex-col gap-12 text-[#7affc7]  rounded-tl-lg rounded-tr-lg "> <div class="w-full flex flex-col md:flex-row justify-between font-extrabold items-center py-4"> <p>bi0s</p> <div class=" flex gap-8"> <a class="underline" href="https://chat.whatsapp.com/LbMnGHUPPIe3pJ4tHYjv1r"><p>Join Whatsapp</p></a> <!-- <a class="underline" href="https://discord.gg/Dn86Sy5Jks"><p>Join Discord</p></a> --> </div> </div> <svg viewBox="0 0 163 18" class="font-technos fill-accent"> <text x="0" y="15">Recruitment</text> </svg> </div>`;
}, "E:/join.bi0sblr.in/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" class="astro-j7pv25f6"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>bi0s Recruitment</title>${renderHead()}</head> <body class="astro-j7pv25f6"> <section class="w-full bg-[var(--sl-color-black)] font-krypton text-[var(--sl-color-accent)] overflow-hidden  astro-j7pv25f6"> ${renderComponent($$result, "Navbar", $$Navbar, { "class": "astro-j7pv25f6" })} ${renderComponent($$result, "Hero", $$Hero, { "class": "astro-j7pv25f6" })} ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-j7pv25f6" })} </section> </body></html>`;
}, "E:/join.bi0sblr.in/src/pages/index.astro", void 0);

const $$file = "E:/join.bi0sblr.in/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
