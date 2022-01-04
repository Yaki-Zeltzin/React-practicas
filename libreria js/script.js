import { createElement, render } from "./libreria.js";

const Logo = createElement("img", {
    class: "logo",
    alt: "Logo",
    src: "./images/logo.png"
})//Logo

const Nav = createElement("nav", { class: "main-nav" })//Nav

const Header = createElement("header", {
    class:"main-header"},
    [Logo,Nav, "Inicio"]
)//Header

render(Header, document.getElementById('root'));