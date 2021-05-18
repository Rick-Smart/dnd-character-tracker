import axios from "axios";

export default {
  // Gets all characters
  getCharacters: function () {
    return axios.get("/api/characters");
  },
  // Gets the character with the given id
  getNote: function (id) {
    return axios.get("/api/characters/" + id);
  },
  // Deletes the character with the given id
  deleteNote: function (id) {
    return axios.delete("/api/characters/" + id);
  },
  // Saves a character to the database
  saveNote: function (characterData) {
    return axios.post("/api/characters", characterData);
  },
  // Updates a character to the database with the given id
  updateNote: function (id, characterData) {
    return axios.put("/api/characters/" + id, characterData);
  },

};
