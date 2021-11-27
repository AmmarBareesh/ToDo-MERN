if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb+srv://astroo:wx7YG6J35SBYRzYY@ammarcluster.utrmu.mongodb.net/todo?retryWrites=true&w=majority",
  };
} else {
  module.exports = { mongoURI: "mongodb://localhost/to-do" };
}
