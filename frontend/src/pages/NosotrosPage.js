import React from "react";
import '../styles/components/Pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="https://res.cloudinary.com/dszmmnwpj/image/upload/v1662333878/nosotros1_c219kf.jpg" alt="Juan Gomez"/>
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className="persona">
                        <img src="https://res.cloudinary.com/dszmmnwpj/image/upload/v1662333878/nosotros2_ncbdnb.jpg" alt="Juan Gomez"/>
                        <h5>Maria Perez</h5>
                        <h6>Gerente Financiera</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className="persona">
                        <img src="https://res.cloudinary.com/dszmmnwpj/image/upload/v1662333878/nosotros3_gtaqto.jpg" alt="Juan Gomez"/>
                        <h5>Pedro Comercial</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className="persona">
                        <img src="https://res.cloudinary.com/dszmmnwpj/image/upload/v1662333878/nosotros4_xgctkz.jpg" alt="Juan Gomez"/>
                        <h5>Julia Acevedo</h5>
                        <h6>Gerente Operaciones</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className="persona">
                        <img src="https://res.cloudinary.com/dszmmnwpj/image/upload/v1662333878/nosotros5_mbfc02.jpg" alt="Juan Gomez"/>
                        <h5>Ignacio Pereyra</h5>
                        <h6>Gerente PostVenta</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
            </div>
        </main>
        
    );
}

export default NosotrosPage;