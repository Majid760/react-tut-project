import React from 'react';
// import {Route} from 'react-router-dom';
import CollectionItem from '../../components/collection-item/Collection-Item.component'
import './collection.style.scss';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';

const CollectionPage = ({collection})=>{
    const {title,items} = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map((item)=>(
                        <CollectionItem key={item.id.toString()} item={item}/>
                    ))

                }
            </div>
        </div>

    )
}


const mapStateToProps=(state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);