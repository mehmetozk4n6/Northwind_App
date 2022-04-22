import { useEffect } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productAction";

function CategoryList(props) {
  useEffect(() => {
    props.actions.getCategories();
  }, []);
  const selectCategory = (category) => {
    props.actions.changeCategory(category);
    props.actions.getProducts(category.id);
  };
  return (
    <div>
      <h3>
        {" "}
        <Badge color="warning">Categories</Badge>
      </h3>
      <ListGroup>
        {props.categories.map((category) => (
          <ListGroupItem
            action
            active={category.id === props.currentCategory.id}
            tag="button"
            onClick={() => selectCategory(category)}
            key={category.id}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

// bilgileri ilk olarak dispatch fetch ettikten sonra statele ulaşıyoruz
// state değiştirmek için önce getCategories'e ulaşmalıyız

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
