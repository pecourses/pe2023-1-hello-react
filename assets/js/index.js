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

function App() {
  return (
    <>
      <Header />
      <main title="Hello">Hello React</main>
      <UserInfo />
      <NewsItem />
      <Footer />
    </>
  );
}

function UserInfo() {
  const user = {
    name: 'Ivo',
    age: 15,
    imgSrc:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  };

  const userNameStyle = {
    color: user.age >= 18 ? 'blue' : 'green',
  };

  return (
    <article className="userCard">
      <h2 style={userNameStyle}>{user.name}</h2>
      <img src={user.imgSrc} alt={user.name} />
    </article>
  );
}

// Реалізувати компонент (розмітка  + інлайн-стилі)
const news = { title: 'Some news', body: 'Something hapenned', isGood: true };
// гарна новина - зелена, не гарна - червона

function NewsItem() {
  const news = { title: 'Some news', body: 'Something hapanned', isGood: true };

  const bodyColor = {
    backgroundColor: news.isGood ? 'green' : 'red',
  };

  return (
    <article className="newsInfo" style={bodyColor}>
      <h2>{news.title}</h2>
      <p>{news.body}</p>
    </article>
  );
}

// class => className = "class1 class2"
// атрибути іменуються в camelCase
// style - object
//         імена властивослей - в camelCase
//    backgroundColor: 'yellow',

function Header() {
  return (
    <header className="header">
      <h1>Page title</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>F&Q</p>
      <p>About Us</p>
      <p>Home</p>
    </footer>
  );
}
