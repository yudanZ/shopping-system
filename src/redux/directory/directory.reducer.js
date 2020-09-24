const INITIAL_STATE = {
    sections: [
        {
            title: 'collection',
            imageUrl: '/images/collections.jpg',
            id: 1,
            linkUrl: 'shop/collections'

        },
        {
            title: 'womens',
            imageUrl: '/images/women.jpg',
            id: 2,
            linkUrl: 'shop/womens'

        },
        {
            title: 'mens',
            imageUrl: '/images/man.jpg',
            id: 3,
            linkUrl: 'shop/mens'

        },
        {
            title: 'kids',
            imageUrl: '/images/kids.jpg',
            id: 4,
            linkUrl: 'shop/kids'

        },
        {
            title: 'shoes & bags',
            imageUrl: '/images/shoes.jpg',
            id: 5,
            linkUrl: 'shop/shoes_bags'

        }

    ]
};

const directoryReducer = ( state = INITIAL_STATE, action) => {

    switch(action.type){
        default:
            return state;
    }

}

export default directoryReducer;