/* Color Variables */
:root {
  --txt-primary: #0a0a0a;
  --txt-secondary: #fff;
}

/* General Styles */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: var(--txt-primary);
  font-family: 'Roboto', sans-serif;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}

/* Styles related to header, logo and navbar */
header {
  margin: 0;
  box-shadow: 1px 1px 4.5px #1b91dfad;
}
.open {
  height: 100vh;
}
header .top-container {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header .top-container .logo {
  max-width: 255px;
  margin: .5rem;
}
header .top-container .hamburger {
  width: 48px;
}
header nav {
  display: none;
}
header .visible {
  height: calc(100vh - 50px);
  display: inline;
}
header nav ul {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding-left: 0;
}
header nav ul li {
  text-transform: uppercase;
  cursor: pointer;
}
header nav ul li a {
  transition: font-weight .5s;
}
header nav ul li:hover a{
  font-weight: 700;
}
header nav ul li a::after {
  content: '';
  width: 0;
  height: 2px;
  display: block;
  background-color: black;
  transition: width .5s;
}
header nav ul li a:hover::after {
  width: 100%;
}
/* Breakpoint: 800px - Web Version Adjustments */
@media (min-width: 800px) {
  header {
    display: flex;
    justify-content: space-between;
  }
  header .top-container .hamburger {
    display: none;
  }
  header nav {
    display: inline;
  }
  header nav ul {
    height: 100%;
    flex-direction: row;
    justify-content: space-around;
    width: 55vw;
  }
}

/* Styles related to the main content, displayed between header and footer  */

/* Styles related to zoo generator forms */
/* Generic containers, titles and paragraphs */
.main-container {
  min-height: calc(100vh - 50px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, .5);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: color;
  color: var(--txt-secondary);
}
.main-title {
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.55);
  font-size: clamp(2rem, 10vw, 4rem);
}
.description-text {
  font-size: clamp(1rem, 4vw, 1.5rem);
  text-shadow: 2px 2px 1.2px rgba(0, 0, 0, 0.55);
}
/* Different features: containers */
.zoo-name {
  background-image: url(./assets/zoo.jpg);
}
.zoo-animals {
  background-image: url(./assets/tiger.jpg);
}
.zoo-phrase {
  background-image: url(./assets/sunrise.jpg);
}

/* Generic forms */
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
form * {
  text-shadow: 2px 2px 1.2px rgba(0, 0, 0, 0.55);
}
/* Input tags */
form .input-field {
  padding: 0.5em;
  width: min(350px, 90%);
  border-style: none;
  border: 1.3px solid rgba(0, 0, 0, .3);
  letter-spacing: 1px;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color:rgba(255, 255, 255, 0.85);
}
form .input-field::placeholder {
  color: rgba(255, 255, 255, 0.7);
}
form .input-field:focus-visible::placeholder {
  visibility: hidden;
}
/* Error (when a required filled is not filled) */
form .error {
  background-color: #be68689f !important;
  outline: #aa2626c7 solid 2px;
  animation: shake 0.5s;
}
@keyframes shake {
  0% { transform: translateX(-2.5px); }
  12% { transform: translateX(2.5px); }
  24% { transform: translateX(-2.5px); }
  48% { transform: translateX(2.5px); }
  60% { transform: translateX(-2.5px); }
  72% { transform: translateX(2.5px); }
  84% { transform: translateX(-2.5px); }
  96% { transform: translateX(2.5px); }
}
/* Submit Buttons */
.form-button {
  padding: 0.5em 1.1em;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-style: none;
  border-radius: 4px;
  color: var(--txt-secondary);
  letter-spacing: 1.65px;
  border: 1px solid rgba(0, 0, 0, .15);
  cursor: pointer;
  transition: filter .3s;
}
.form-button:hover {
  filter: brightness(1.4);
}

/* Different features (forms) */

/* Input first form (green theme) */
form .input-green {
  background-color: #79c3799b;
}
form .input-green:focus-visible {
  outline: #22641fc5 solid 2px;
}
/* Input second form (green theme) */
form .input-orange {
  background-color: #db85348e;
}
form .input-orange:focus-visible {
  outline: #8d5a18b9 solid 2px;
}
/* Input third form (yellow theme) */
form .input-yellow {
  margin-bottom: 1rem;
  background-color: #dfc42e8e;
  width: max(30vw, 120%);
}
form .input-yellow:focus-visible {
  outline: #ffdb0cb9 solid 2px;
}
/* Select options */
form .options-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
}
form .options-container > label {
  letter-spacing: 1px;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
}
form .options-container > select > option {
  background-color: #e79a51;
}
/* Radio Buttons */
form .specie-form-container {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  display: flex;
  gap: 1.15rem;
}
form .radio-buttons-container .radio-buttons-items {
  display: flex;
  align-items: center;
} 
form .radio-buttons-container .radio-buttons-items > label {
  width: 100%;
  height: 100%;
  padding: .25rem .35rem;
  text-align: left;
}
form .radio-buttons-container .radio-buttons-items > input {
  margin: .35rem 0 .35rem .35rem;
}
form .radio-buttons-container .radio-error > label {
  color: #ff4949;
  animation: shake 0.5s;
}

/* Info card when at least one animal has been added */
.info-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}
.info-container button {
  margin: 2rem auto;
  background-color: #038ccc;
}
.info-container > div {
  display: flex;
  align-items: center;
  gap: .4rem;
  margin-top: 2rem; 
  padding: 0 .7rem;
  background-color: #afe6ff36;
  text-shadow: 1.7px 1.7px 1.5px rgba(0, 0, 0, 0.55);
  border: 2px solid #038ccc;
  border-radius: 4px;
}


/* Styles related to footer, bottom-menu and contact-info */
footer .social-net-container {
  background-color: #1b91df7e;
}
footer .social-net-container div {
  max-width: 400px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 1rem;
}
footer .footer-menu-container {
  background-color: #1b91df63;
  display: flex;
}
footer .footer-menu-container ul li ul{
  padding-left: 0;
}
footer .footer-menu-container ul li ul li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
}
footer .footer-menu-container ul li ul li p {
  margin: 0;
}
footer .footer-bottom {
  background-color: #1b91dfa8;
  display: grid;
  text-align: center;
}
/* Breakpoint: 800px - Web Version Adjustments */
@media (min-width: 800px) {
  footer .footer-menu-container .bottom-menu-items {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }   
}
