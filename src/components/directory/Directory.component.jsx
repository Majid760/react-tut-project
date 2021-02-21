import React from 'react';
import './Directory.style.scss'
import MenuItem from '../menu-item/Menu-item.component.jsx';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector.js';
const Directory=({sections})=>{
  
        return(
            <div className="directory-menu">
                {
                    sections.map(({id, ...otherPropsData})=>{
                        return <MenuItem key={id.toString()}{...otherPropsData}/>
                    })
                }
            </div>

        )
    
}

const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);