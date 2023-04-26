import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className ="d-flex ">
            {device.brands.map((brand) =>
            <Card 
                className ="mx-2 p-2 w-auto"
                style={{cursor: 'pointer'}}
                key={brand.id}
                onClick={() => device.setSelectedBrand(brand)}
                border = {brand.id === device.selectedBrand.id ? 'danger' : "light"}>
                {brand.name}
            </Card> )}
            
        </Row>
    );
});

export default BrandBar;