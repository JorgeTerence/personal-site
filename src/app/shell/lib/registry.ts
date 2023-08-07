const registry = [
  { id: 1, label: "echo", call: (...args: string[]) => console.log(...args) },
  {
    id: 2,
    label: "logout",
    call: () => {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    },
  },
];

export default registry;
