import React from 'react'
import './addproductstaff.scss'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { faAngleDown, faPlus, faXmark, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';

export const AddproductsStaff = () => {
  return (
    <div className='addproductsStaff'>
        <div className="upper">
                <div className="title">Add your products</div>
                <div className="subtitle">Stock the store with all the products we need</div>
                <div className="buttons">
                    <div className="leftbutton">
                        <span className="icon"><AddOutlinedIcon/></span>
                        <span className="word">Add product</span>
                    </div>
                    <div className="rightbutton">
                        <span className="icon"><CloudDownloadOutlinedIcon/></span>
                        <span className="word">Import product</span>
                    </div>
                </div>
        </div>
        <div className="lower">
                <div className="title">
                    Categories
                </div>
                <div className="subtitle">
                    Edit categories, sub-categories and deep-categories. A requirement for adding products.
                </div>
                <div className="addingbuttons">
                    <div className="rightbutton">
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                        <span className="word">Add Category</span>
                    </div>
                    <div className="rightbutton">
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                        <span className="word">Add Sub-category</span>
                    </div>
                    <div className="rightbutton">
                        <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                        <span className="word">Add Deep-category</span>
                    </div>
                </div>
        </div>
        {false && <div className="addcategory">
            <div className="formcontainer">
                <div className="title">
                    <div className="left">
                        <span className="icon"><AddBoxSharpIcon/></span>
                        <span className="word">Add Category</span>
                    </div>
                    <div className="right">
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <div className="formarea">
                    <input type="text" placeholder='Enter Category' className="categoryinput" />
                    <button>Add</button>
                </div>
            </div>
        </div>}
        {false && <div className="addcategory">
            <div className="formcontainer">
                <div className="title">
                    <div className="left">
                        <span className="icon"><AddBoxSharpIcon/></span>
                        <span className="word">Add Sub-Category</span>
                    </div>
                    <div className="right">
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <div className="formarea">
                    <input type="text" placeholder='Enter sub-category' className="categoryinput" />
                    <div className="category">
                        <input readOnly placeholder='Select category' type="text" />
                        <span><FontAwesomeIcon icon={faAngleDown} /></span>
                    </div>
                    <button>Add</button>
                </div>
            </div>
        </div>}
        {false && <div className="addcategory">
            <div className="formcontainer">
                <div className="title">
                    <div className="left">
                        <span className="icon"><AddBoxSharpIcon/></span>
                        <span className="word">Add Deep-Category</span>
                    </div>
                    <div className="right">
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <div className="formarea">
                    <input type="text" placeholder='Enter deep-category' className="categoryinput" />
                    <div className="category">
                        <input readOnly placeholder='Select category' type="text" />
                        <span><FontAwesomeIcon icon={faAngleDown} /></span>
                    </div>
                    <div className="category">
                        <input readOnly placeholder='Select sub-category' type="text" />
                        <span><FontAwesomeIcon icon={faAngleDown} /></span>
                    </div>
                    <div className="category">
                        <span className='comma'><FontAwesomeIcon icon={faAngleDown} /></span>
                        <input placeholder='Brands' type="text" />
                    </div>
                    <div className="category">
                        <span className='comma'><FontAwesomeIcon icon={faAngleDown} /></span>
                        <input placeholder='Colors' type="text" />
                    </div>
                    <div className="category">
                        <span className='comma'><FontAwesomeIcon icon={faAngleDown} /></span>
                        <input placeholder='Materials' type="text" />
                    </div>
                    <div className="category">
                        <span className='comma'><FontAwesomeIcon icon={faAngleDown} /></span>
                        <input placeholder='Type' type="text" />
                    </div>
                    <div className="category">
                        <span className='comma'><FontAwesomeIcon icon={faAngleDown} /></span>
                        <input placeholder='Appearance' type="text" />
                    </div>
                    
                    <button>Add</button>
                </div>
            </div>
        </div>}
    </div>
  )
}
