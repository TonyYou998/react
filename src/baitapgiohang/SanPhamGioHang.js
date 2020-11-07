import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {

    render() {

        const { product } = this.props;
        return (

            <div className="col-sm-4">

                <div className="card">
                    <img className="card-img-top" src={product.hinhAnh} alt="1" />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <button
                            className="btn btn-success"
                            onClick={() => {
                                this.props.getDetailProduct(product);
                            }}
                        >
                            Chi tiết
            </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                this.props.addCart(product);
                            }}
                        >
                            Thêm giỏ hàngs
            </button>
                    </div>
                </div>

            </div>
        )
    }
}
