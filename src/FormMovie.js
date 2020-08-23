import React, { Component } from "react";
import axios from "axios";

class FormMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.onChange = this.onChange.bind(this);
    this.subMiteForm = this.subMiteForm.bind(this);
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  subMiteForm(event) {
    event.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`le film ajouté avec l'ID ${res.id} !`);
      })
      .catch((event) => {
        console.error(event);
        alert(`Erreur lors de l'ajout d'un film : ${event.message}`);
      });
  }
  render() {
    return (
      <div>
        <form onSubmit = {this.subMiteForm}>
          <fieldset
            style={{ width: "50%", marginLeft: "25%", marginTop: "20%" }}
          >
            <legend>Ajouter un film</legend>
            <div>
              <label htmlFor="title">Nom du Film </label>
              <input type="text" id="title" name="title" onChange = {this.onChange} value = {this.state.title}/>
            </div>
            <div>
              <label htmlFor="poster">URL du films </label>
              <input id="poster" name="poster" type="text" value = {this.state.poster} onChange = {this.onChange}/>
            </div>
            <div>
              <label htmlFor="comment"> commentaire </label>
              <textarea id="comment" name = "comment" type="text" placeholder="commentaire" value = {this.state.comment} onChange = {this.onChange}/>
            </div>
            <div>
              <input
                style={{
                  width: "20%",
                  marginLeft: "43%",
                  backgroundColor: "blue",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "large",
                  cursor: "pointer",
                }}
                type="submit"
                value="Envoyer"
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
