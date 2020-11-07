import React, { Component } from 'react';
import SanPhamGioHang from './SanPhamGioHang';

export default class DanhSachSanPhamGioHang extends Component {
    renderHTML = () => {

        const { listProduct } = this.props;


        return listProduct.map((product) => {
            return (
                <SanPhamGioHang
                    key={product.maSP}
                    product={product}

                    getDetailProduct={this.props.getDetailProduct}
                    addCart={this.props.addCart}
                />
            );
        });
    }
    render() {
        return (
            //return lại html trong div 
            <div className="container">
                <div className="row">
                    <this.renderHTML />
                </div>
            </div>

        )
    }
}
