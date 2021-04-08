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
  background-color: #ece9e6;
}

header {
  width: 100%;
  padding: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333333;
  background-color: #c0e5e4;
  /* background: linear-gradient(180deg, rgb(189, 245, 242) 0%, rgba(69, 84, 221, 0.5) 100%); */
  /* border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px; */
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
  color: #333333;
  background-color: #c0e5e4;
  /* background: linear-gradient(180deg, rgb(69, 84, 221) 0%, rgba(69, 84, 221, 0.5) 100%); */
  border-bottom: solid 1px #333333;
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
  background-color: #fafafa;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.card-content div {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: solid 1px #333333;
}

a {
  color: currentColor;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
}

a:hover,
a:focus,
a:active {
  color: #3e8884;
  text-decoration: underline;
}
  `;

module.exports = CSS;
