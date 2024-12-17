import React from "react";
import "./Recommended.css";
import Buttons from "../Components/Buttons";

const Recommended = ({ handleClick }) => {
    return (
        <>
            <div>
                <h2 className="recommended-title">Recommended</h2>
                <div className="recommended-flex">
                    <Buttons
                        className="btns"
                        onClickHandler={handleClick}
                        value=""
                        title="All Products"
                    >
                        All Products
                    </Buttons>
                    <Buttons
                        onClickHandler={handleClick}
                        value="Nike"
                        title="Nike"
                    />
                    <Buttons
                        onClickHandler={handleClick}
                        value="Adidas"
                        title="Adidas"
                    />
                    <Buttons
                        onClickHandler={handleClick}
                        value="Puma"
                        title="Puma"
                    />
                    <Buttons
                        onClickHandler={handleClick}
                        value="Vans"
                        title="Vans"
                    />
                </div>
            </div>
        </>
    );
};

export default Recommended;
