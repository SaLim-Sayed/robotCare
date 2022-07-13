
import { Link, useParams } from "react-router-dom";
// import Item from "./Item";

function Content({ keys, onHandleSubmit, onHandleCheckbox, predictionHandle, prediction }) {
  const param = useParams();
  return (
    <div className="container-fluid Appp">
    <div className="contents text-capitalize">
      <hr />

      <Link to="/predict">
        <div className="mainPredict">
          <button className="btnd" onClick={predictionHandle}><span>Predict</span></button>
        </div>
     </Link>
      {/* ------------------------------------------------- */}
      <div className="pre">
      <div className="container">
        <div className='row'>
          <div className="content col col-sm-12 sym form-group form-check col-6" >
            <legend style={{ color: "white", textAlign: "left", padding: "8px", textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue" }} > <h2 className="h2 text-capitalize id">{param.key}</h2></legend>
            <form onSubmit={onHandleSubmit}>
              <div className='form-row' style={{margin:"auto", width: "90%", padding: "5px"  }}>

                {keys[param.key].map((el, index) => (<div key={index}  style={{ display: "inline-block" }} className="form-group form-check  col-4">
                 
                   <div className="chh col " style={{ margin: "5px" ,textAlign: "left", width: "90%", padding: "5px" }}>

                    
                      <input
                        className="  mx-2 chh"
                        type="checkbox"
                        id={el}
                        name={el}
                        value={el}
                        
                        onChange={(e) => onHandleCheckbox(e.target)}
                      />
                    <label className=" " htmlFor={el}> {el}</label>
                   
                  </div>
                </div>
                ))}
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>
      );
}

      export default Content;
