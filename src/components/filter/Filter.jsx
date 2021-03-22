import React, { useState } from "react";
import { Container } from "react-bootstrap";
const FilterComponent = (props) => {
    function handleChange(e) {
        props.callBack(e.target.value);
    }
    return (
        <Container>
            <select onChange={handleChange}>
                <option value="title">title</option>
                <option value="rate">rate</option>
            </select>
        </Container>
    );
};
export default FilterComponent;
