import React, { Component } from "react";
import Client from "./Contentful";

const PhoneContext = React.createContext();
export default class PhoneProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      context: [],
      homeImages: [],
      newImages: [],
      itemProduct: [],
      products: [],
      chartItems: [],
      modalOpen: false,
      modelState: [],
    };
  }

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "phones",
      }).then((response) =>
        this.setState({
          items: response.items,
        })
      );
      let posts = this.organiseData(this.state.items);

      this.setState({
        context: posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  organiseData = (items) => {
    let temppost = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let post = { ...item.fields, images, id };
      return post;
    });
    return temppost;
  };

  organiseVideo = (items) => {
    let temppost = items.map((item) => {
      let id = item.sys.id;
      let videos = item.fields.videos.map((image) => image.fields.file.url);
      let post = { ...item.fields, videos, id };
      return post;
    });
    return temppost;
  };

  filterpost = (blogpost) => {
    const mycontext = [...this.state.products];
    const post = mycontext.filter(
      (item) => item.blogpost === this.state.blogpost
    );
    return post;
  };

  filterProduct = (slug) => {
    let product = [...this.state.products];
    let tempProducts = product.find((item) => item.slug === slug);
    return tempProducts;
  };

  componentDidMount() {
    this.getData();
    this.filterProduct();
  }

  handleChart = (item) => {
    const tempItem = this.state.products.find(
      (product) => item === product.title
    );
    const changeItem = [...tempItem];

    const NewItem = [...this.state.chartItems, tempItem];
    this.setState({
      chartItems: NewItem,
    });
  };

  getIdItem = (id) => {
    const post = this.state.context.find((product) => id === product.id);
    return post;
  };

  AddToCart = (id) => {
    let tempProduct = [...this.state.context];
    const index = tempProduct.indexOf(this.getIdItem(id));
    const product = tempProduct[index];
    product.incart = "true";
    this.setState({ context: tempProduct });
  };

  OpenModel = (id) => {
    this.setState({ modelState: this.getIdItem(id), modalOpen: true });
  };

  CloseModel = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const items = [...this.state.context];

    return (
      <PhoneContext.Provider
        value={{
          ...this.state,
          context: this.state.context,
          item: items,
          products: this.state.products,
          handleChart: this.handleChart,
          chartItems: this.state.chartItems,
          AddToCart: this.AddToCart,
          OpenModel: this.OpenModel,
          CloseModel: this.CloseModel,
        }}
      >
        {this.props.children}
      </PhoneContext.Provider>
    );
  }
}

const PhoneConsumer = PhoneContext.Consumer;

export { PhoneProvider, PhoneContext, PhoneConsumer };
