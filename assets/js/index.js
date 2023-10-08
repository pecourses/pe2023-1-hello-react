// el = document.createElement(type)
// el.textContent = 'content'
// el.title = ''

// React.createReactElement(type, attrs, content)

// JSX - спец. синтаксис (синт. цукор)
/* <type atrrs>content</type> */

// Babel: jsx => js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  return <div title="Hello">Hello React</div>;
}

// function App() {
//   return <Header/>;
// }
