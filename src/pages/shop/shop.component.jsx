import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, 
        convertCollectionsSnapshotToMap 
        } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component{
    constructor() {
        super();

        this.state = {
            loading: true
        }
    }
    unsubscribeFormSnapshot = null;
    componentDidMount(){

        /*****Get collections data from firestore */
        const collectionRef = firestore.collection('collections');
        /*
        fetch('https://firestore.googleapis.com/v1/projects/shopping-system-82277/databases/(default)/documents/collections')
        .then( response => response.json())
        .then( collections => console.log(collections))
        */
        collectionRef.get().then(
            snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap( snapshot);
                this.props.updateCollections(collectionsMap);
                this.setState({ loading : false})
            }

        )
        /*
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap( snapshot);
            this.props.updateCollections(collectionsMap);
            this.setState({ loading : false})
        })

        */
    }
    render(){
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path = {`${match.path}`} render = {(props) => <CollectionsOverviewWithSpinner isLoading={this.state.loading} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} render = {(props) => <CollectionPageWithSpinner isLoading={this.state.loading} {...props}/>} />      
            </div>
        ) 
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
    
}
export default connect(null, mapDispatchToProps)(ShopPage);