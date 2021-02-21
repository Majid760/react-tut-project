import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './Collection-overview.style.scss';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector.js'

import CollectionPreview from '../collection-preview/Collection-Preview.component';


const CollectionOverview = ({collections}) =>{
    console.log('this is collection',collections);

    return(
            <div className="collections-overview">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id.toString()} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )


}
const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);