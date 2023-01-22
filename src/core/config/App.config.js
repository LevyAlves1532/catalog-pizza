const config = {
  development: {
    path: "",
    baseUrl: "/",
    host: "http://localhost:3000",
  },
  production: {
    path: "/projetos/catalog-pizzas",
    baseUrl: "/",
    host: "http://localhost",
  }
};

export default config[process.env.NODE_ENV];