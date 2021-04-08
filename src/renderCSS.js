CSS = `
/* imports from adobe fonts */
@import url('https://use.typekit.net/kyq7lzo.css');
@import url('https://use.typekit.net/kyq7lzo.css');

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Muli', monospace;
  background-color: #333333;
}

header {
  width: 100%;
  padding: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #ece9e6;
  background: linear-gradient(180deg, rgba(208, 123, 179, 1) 0%, rgba(208, 123, 179, 0.5) 100%);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0.95px 8.95px 7.6px;
}

header h1 {
  font-size: 4.5em;
  font-family: 'Futura', sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
}

article {
  display: flex;
  flex-direction: column;
  width: 19rem;
  margin: 0 1rem 3rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0.95px 4.95px 7.6px;
  transition: all 0.4s ease-in-out;
}

article:hover,
article:focus,
article:active {
  transform: scale(1.1);
  box-shadow: rgba(0, 0, 0, 0.473) 0.95px 14.95px 7.6px;
}

.card-header {
  width: 100%;
  padding: 0.8rem;
  font-family: 'Futura', sans-serif;
  color: #ece9e6;
  background: linear-gradient(180deg, rgba(208, 123, 179, 1) 0%, rgba(208, 123, 179, 0.5) 100%);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-header h3 {
  display: flex;
  justify-content: space-between;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5rem;
  background-color: #ece9e6;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.card-content div {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

a {
  color: currentColor;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
}

a:hover,
a:focus,
a:active {
  color: #d07bb3;
  text-decoration: underline;
}
  `;

module.exports = CSS;
