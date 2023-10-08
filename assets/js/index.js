// el = document.createElement(type)
// el.textContent = 'content'
// el.title = ''

// React.createReactElement(type, attrs, content)

// JSX - спец. синтаксис (синт. цукор)
/* <type atrrs>content</type> */

// Babel: jsx => js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//  <></> - react fragment (для компонування кількох елементів)
// class => className = "class1 class2"
// атрибути іменуються в camelCase
// style - object
//         імена властивослей - в camelCase
//    backgroundColor: 'yellow',

function App() {
  const isLight = false;
  const name = 'Jack';
  const user = { name: '', age: 20 };
  return (
    <>
      <ThemeButton isLightTheme={isLight} />
      <Greeting isGreeting={true} userName={name} />
      <Greeting isGreeting={false} userName="Ivo" />
    </>
  );
}

// ThemeButton({isLightTheme: isLight})
// <ThemeButton isLightTheme={isLight}/>

function ThemeButton(props) {
  const { isLightTheme } = props;

  const buttonStyle = {
    color: isLightTheme ? 'black' : 'white',
    backgroundColor: isLightTheme ? 'white' : 'black',
  };

  return (
    <button style={buttonStyle}>
      Switch to {isLightTheme ? 'dark' : 'light'}
    </button>
  );
}

// Реалізувати компонент Greating, який буде виводити рядок "Hello, ІМʼЯ",
// де ім'я задане в App
// isGreeting={true} => "Hello, ІМʼЯ"
// isGreeting={false} => "Goodbye, ІМʼЯ"

function Greeting(props) {
  const { userName, isGreeting } = props;
  return (
    <div>
      {isGreeting ? 'Hello' : 'Goodbye'} {userName}
    </div>
  );
}
