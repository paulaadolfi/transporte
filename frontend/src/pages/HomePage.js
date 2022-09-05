import React from "react";
import '../styles/components/Pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="Images/home/img01.jpg" alt="Avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                </div>
                <div className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span class="cita">Simplemente excelente</span>
                    <span class="autor">Juan Perez - Zapatos.com</span>
                </div>
            </div>
            </div>
            
        </main>
    );
}

export default HomePage;