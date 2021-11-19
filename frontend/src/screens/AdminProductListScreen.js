import React, { Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Alert from "../components/alert"
import Spinner from "../components/spinner"
import Pagination from "../components/pagination"
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../redux/actions/productActions"

import { PRODUCT_CREATE_RESET } from "../redux/constants/productConstants"

const AdminProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loaidng, error, products, page, pages } = productList

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loaidng: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loaidng: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })
    if (!userInfo.isAdmin) {
      history.push("/login")
    }
    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`)
    } else {
      dispatch(listProducts("", pageNumber))
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ])

  const deleteHandler = (id) => {
    if (window.confirm("Are you  sure")) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())
  }

  return (
    <Fragment>
      <div>
        <ul>
          <li>
            {" "}
            <h1>Products</h1>
          </li>
          <li>
            <button
              type="button"
              className="custom-btn"
              onClick={createProductHandler}>
              <i className="fas fa-plust"></i>+Create new product
            </button>
          </li>
        </ul>
      </div>

      {loadingDelete && <Spinner />}
      {errorDelete && <Alert>{errorDelete}</Alert>}
      {loadingCreate && <Spinner />}
      {errorCreate && <Alert>{errorCreate}</Alert>}
      {loaidng ? (
        <Spinner />
      ) : error ? (
        <Alert>{error}</Alert>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>¥{product.price}</td>
                <td>{product.category}</td>

                <Link to={`/admin/user/product/${product._id}/edit`}>
                  <button>
                    <i className="fas fa-edit"></i>
                  </button>
                </Link>
                <button onClick={() => deleteHandler(product._id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Pagination pages={pages} page={page} isAdmin={true} />
    </Fragment>
  )
}

export default AdminProductListScreen
