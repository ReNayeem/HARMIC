import React from 'react';
import AllItems from '../../AllItems/AllItems';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Items from '../Items/Items';

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Items></Items>
            <AllItems></AllItems>
            <Experts></Experts>
        </>
    );
};

export default Home;