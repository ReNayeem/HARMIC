import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Pride from '../Pride/Pride';
import Supplier from '../Supplier/Supplier';

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Items></Items>
            <Pride></Pride>
            <Supplier></Supplier>
        </>
    );
};

export default Home;