import React from "react";
import { BsSave, BsSave2 } from "react-icons/bs";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.limit),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addDatas(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <form
        className="mt-3  px-5 sm:px-24 py-7 md:py-14"
        onSubmit={this.onSubmitEventHandler}
      >
        <div className="container">
          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 text-lg font-medium ">
              Judul :{" "}
              <span className="text-sm text-gray-500">
                {this.state.limit - this.state.title.length} sisa karakter
              </span>
            </label>
            <input
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
              type="title"
              id="title"
              className="bg-gray-50 border  text-sm rounded-lg focus:outline-none block w-full p-2.5"
              placeholder="Tuliskan judul..."
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium "
            >
              Catatan
            </label>
            <textarea
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:outline-none"
              placeholder="Tuliskan catatan..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center"
          >
            <BsSave2 /> <span>Tambahkan</span>
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
