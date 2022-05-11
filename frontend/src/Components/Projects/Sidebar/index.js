import React, { useState } from "react";
import { Nav, NavLink, Button} from "react-bootstrap"
import { MdAdd } from "react-icons/md";
import { useParams } from "react-router-dom";
import AdddetailPopup from "../../AddDetailPopup";
import SearchBox from '../../SearchBox';
import './style.css'

const Sidebar = ({ data, activeDataId, setActiveDataId}) => {
    const [show,setShow] = useState(false);
    let { tab } = useParams();

    const handleClose = () => {
        setShow(false)
    }
    return (
        <div className="p-2 sidebar-container">
            <AdddetailPopup show={show} handleClose={handleClose} />
            <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                <h4 style={{textTransform:'capitalize'}}>{tab}</h4>
                <Button variant="success" size="sm" onClick={()=>setShow(true)}>
                    <MdAdd 
                        size={16}
                    /> 
                    Add New
                </Button>
            </div>
            <SearchBox className="border-bottom mb-2" />
            <Nav variant="pills" className="flex-column my-2">
                {data.map((e) => {
                    return <Nav.Item key={e._id}>
                                <NavLink to="#" className={activeDataId===e._id?"bg-primary text-light":"text-dark "} onClick={() => setActiveDataId(e._id)}>{e.name}</NavLink>
                            </Nav.Item>
                })}
            </Nav>
        </div>
    )
}

export default Sidebar;