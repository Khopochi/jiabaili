import React, { useCallback, useState } from 'react'
import './addpage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowLeft, faCircleInfo, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Editor } from "primereact/editor";
import { useDropzone } from 'react-dropzone';
import { faCheckCircle, faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { BeatLoader } from 'react-spinners';

export const Addpage = () => {
    //desription inpur
    const [description, setDescription] = useState('');
    const [previewImages, setPreviewImages] = useState([]);

    //media upload
    const onDrop = useCallback((acceptedFiles) => {
        // Check if the total number of selected files doesn't exceed 4
        if (previewImages.length + acceptedFiles.length <= 4) {
          const newPreviewImages = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file),
          }));
          setPreviewImages(prevImages => [...prevImages, ...newPreviewImages]);
        } else {
          alert('You can only select up to 4 files.');
        }
      }, [previewImages]);


      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,accept: 'image/*'})

      //css
      const dropzoneStyles = {
        border: '2px dashed #ccc',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '13px'
      };
      
      const previewContainerStyles = {
        display: 'flex',
        marginTop: '20px',
      };
      
      const previewImageStyles = {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        margin: '0 10px',
      };

      //handle no characters on price
         //habdkle digits only
        const [value, setValue] = useState('');
        const handleInputChange = (e) => {
            setValue(e.target.value.replace(/[^0-9]/g, ''));
        };
  return (
    <div className='addpage'>
        {false && <div className="loading">
            <div className="containerr">
                {true && <><BeatLoader color="hsla(168, 45%, 2%, 1)" />
                Uploading...</>}
                {false && <>
                    <span className='icon'><FontAwesomeIcon icon={faCheckCircle} /></span>
                    <span>Product added</span>
                    <span>Redirecting...</span>
                </>}
            </div>
        </div>}
        <div className="header">
            <div className="icon"><FontAwesomeIcon icon={faArrowLeft} /></div>
            <div className='title'>Add product</div>
        </div>
        <div className="container">
            <div className="left">
                <div className="productnamedescription">
                    <div className="name">
                        <div className="title">Title</div>
                        <input placeholder='Rice cooker' type="text" />
                    </div>
                    <div className="description">
                        <div className="title">Deescription</div>
                        <Editor value={description} onTextChange={(e) => setDescription(e.htmlValue)} style={{ height: '150px' }} />
                    </div>
                </div>
                <div className="productnamedescription">
                    <div className="name">
                        <div className="title">Media</div>
                        {!(previewImages.length > 0) && <div {...getRootProps()} style={dropzoneStyles}>
                            <input {...getInputProps()} />
                            {isDragActive ? (
                            <p>Drop the files here</p>
                            ) : (
                            <p>Drag and drop some product images here, or click to select files</p>
                            )}
                        </div>}
                        <div style={previewContainerStyles}>
                            {previewImages.map((image, index) => (
                            <img
                                key={index}
                                src={image.preview}
                                alt={`Preview ${index + 1}`}
                                style={previewImageStyles}
                            />
                            ))}
                        </div>
                    </div>                  
                </div>
                <div className="productnamedescription">
                    <div className="name">
                        <div className="title">Price</div>
                        <div className="pricediv">
                            <span>MWK</span>
                            <input value={value} onChange={handleInputChange}  placeholder='100000' type="text" />
                        </div>
                        <div className="div">Discount</div>
                        <div className="discount">
                            <div className="item">
                                <div className="icon"><FontAwesomeIcon icon={faSquareCheck} /></div>
                                <div className="word">10</div>
                            </div>
                            <div className="item">
                                <div className="icon"><FontAwesomeIcon icon={faSquare} /></div>
                                <div className="word">15</div>
                            </div>
                            <div className="item">
                                <div className="icon"><FontAwesomeIcon icon={faSquare} /></div>
                                <div className="word">20</div>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        
                    </div>
                </div>
                <div className="productnamedescription">
                    <div className="name">
                        <div className="title">Inventory</div>
                        <div className="pricediv">
                            <span>Quantity</span>
                            <input value={value} onChange={handleInputChange}  placeholder='250' type="text" />
                        </div>
                        <div className="div">Discount</div>
                        <div className="discount">
                            <div className="item">
                                <div className="icon nottick"><FontAwesomeIcon icon={faSquare} /></div>
                                <div className="word continue">
                                    Continue selling when out of stock
                                    This won't affect JiaBaiLi POS. Staff will see a warning, but can complete sales 
                                    when available inventory reaches zero and below
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        
                    </div>
                </div>
                <div className="productnamedescription">
                    <div className="name">
                        <div className="title">Search words</div>
                        <div className="pricediv">
                            <span>Separate by comma</span>
                            <input placeholder='Rice cooker,rice,mpunga' type="text" />
                        </div>
                        <div className="discount">
                            <div className="item">
                                <div className="icon nottick"><FontAwesomeIcon icon={faCircleInfo} /></div>
                                <div className="word continue">
                                    Terms to be used to match user possible searches on this product
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        
                    </div>
                </div>
            </div>
            <div className="right">
            <div className="productnamedescription">
                    <div className="name">
                        <div className="title">Product category</div>
                        <div className="wordtitle">Deep category</div>
                        <div className="pricediv">
                            <span><FontAwesomeIcon icon={faAngleDown} /></span>                         
                            <input placeholder='search deep category' type="text" />
                        </div>
                    </div>
                    <div className="description">  
                    </div>
            </div>
            <div className="productnamedescription">
                    <div className="name">
                        <div className="title">Product organisation</div>
                        <div className="wordtitle">Brand</div>
                        <div className="pricediv">
                            <span><FontAwesomeIcon icon={faAngleDown} /></span>                         
                            <input placeholder='select brand' type="text" />
                        </div>

                        <div className="wordtitle">Color</div>
                        <div className="pricediv">
                            <span><FontAwesomeIcon icon={faAngleDown} /></span>                         
                            <input placeholder='select color' type="text" />
                        </div>

                        <div className="wordtitle">Material</div>
                        <div className="pricediv">
                            <span><FontAwesomeIcon icon={faAngleDown} /></span>                         
                            <input placeholder='select color' type="text" />
                        </div>

                        <div className="wordtitle">Type</div>
                        <div className="pricediv">
                            <span><FontAwesomeIcon icon={faAngleDown} /></span>                         
                            <input placeholder='select color' type="text" />
                        </div>

                        <div className="wordtitle">Appearance</div>
                        <div className="pricediv">
                            <span><FontAwesomeIcon icon={faAngleDown} /></span>                         
                            <input placeholder='select color' type="text" />
                        </div>
                        
                    </div>
                    <div className="description">
                        
                    </div>
            </div>
            <div className="productnamedescription">
                    <div className="name">
                        <div className="title">Shipping</div>
                        <div className="wordtitle">Weight</div>
                        <div className="pricediv">
                            <span>KGs</span>                         
                            <input value={value} onChange={handleInputChange} placeholder='25' type="text" />
                        </div>
                    </div>
                    <div className="description">  
                    </div>
            </div>
            <div className="productnamedescription">
                    <div className="name">
                        <div className="title">Upload</div>
                        <div className="button">
                            <span className="icon"><FontAwesomeIcon icon={faCloudArrowUp} /></span>
                            <span className="word">Add</span>
                        </div>
                    </div>
                    <div className="description">  
                    </div>
            </div>
            </div>
        </div>
    </div>
  )


  
}
