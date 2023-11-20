import React from 'react'
import './tableview.scss'
import DataTable from '../../components/Tableforproduct'

export const TableView = () => {
  return (
    <div className='tableview'>
        <div className="upper">
            <div className="products active">Products</div>
            <div className="categories">Categories</div>
            <div className="subcategories">SubCategories</div>
            <div className="deep">DeepCategories</div>
        </div>
        <div className="lower">
            <DataTable/>
        </div>
    </div>
  )
}
