import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About(props) {
    return (
        <>
            <h1>Sobre</h1>

            <main className="container-fluid mb-4 py-2 pb-3">

                <h2 className="pt-2" id="historia">História</h2>

                <p>O antiquário Velho Luxo nasceu em 2021, com o intuito de facilitar o acesso a peças antigas àqueles que as amam.Surgindo assim um e-commerce, que abrange todo território nacional, e com foco na qualidade e atendimento ao cliente.</p>

                <p> Oferecemos à todos os clientes, peças antigas e exclusivas, todas em ótimo estado.No nosso catálogo é possível encontrar móveis, porcelanas, cristais, luminárias, bronzes, mármores, relógios, obras de arte, tapetes e objetos de decoração.</p>

                <p>Oferecemos atendimento personalizado com profissionais experientes e qualificado para satisfazer e dar o melhor  a cada cliente.</p>

                <p>Encontre no Antiquário Velho Luxo, peças únicas, às quais acrescentarão charme e elegância na sua decoração.</p>

                <h2 className="pt-2"id="missao">Missão</h2>
                <p>Ter o maior acervo de peças no cenário  nacional para atender os apreciadores de artes, antiguidades e afins.</p>

                <h2 className="pt-2"id="visao">Visão</h2>
                <p>Ser um antiquário de referência com reconhecimento nacional.</p>
                
            </main>

        </>
    )
}

export default About