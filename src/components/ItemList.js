import React, { Component } from "react";
import { connect } from "react-redux";
import * as itemActions from '../actions/simpleAction'

class ItemList extends Component {


  componentDidMount() {
    this.props.fetchData("http://5826ed963900d612000138bd.mockapi.io/items")
  }

  render() {
    return (
      <div className="items">
        {this.props.hasErrored === true && (
          <p>Sorry! There was an error loading the items</p>
        )}
        {this.props.isLoading === true && <p>Loading…</p>}
        <ul>
        {this.props.items.map(item => <li key={item.id}>{item.label}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemActions.itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
