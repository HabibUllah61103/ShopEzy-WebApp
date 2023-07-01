const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

const App = () => { return (
    <ul> {list. map((item) => (
    <li key={item. id}>{item. name}</li> ))}
    </ul> );
    };