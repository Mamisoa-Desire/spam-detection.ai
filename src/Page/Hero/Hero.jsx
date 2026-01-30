import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import s from './Hero.module.css';
import HeroImage from '../../Assets/image/Security-amico.png';

export default function Hero() {
  const navigate = useNavigate(); 

  return (
    <section className={s.heroSection}>
      <div className="container">
        <div className="row align-items-center min-vh-100 relative">
          
          {/* Info - Colonne de gauche */}
          <div className="col-md-6 z-10">
            <div className={`${s.contentWrapper} text-center text-md-start`}>
              <h1 className={s.title}>
                Détectez le <span className={s.accent}>Spam</span> <br /> 
                Grâce à l'IA <span className={s.secondary}>Avancée</span>
              </h1>
              
              <p className={s.subtitle}>
                Protégez votre contenu en temps réel. Notre algorithme analyse et bloque 
                instantanément toute tentative d'intrusion ou message malveillant.
              </p>
              
              <p className={s.description}>
                Ne laissez plus les bots polluer vos plateformes. Intégrez notre API 
                en quelques minutes et sécurisez vos échanges dès maintenant.
              </p>

              {/* Boutons avec redirections */}
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <button 
                  className={s.primaryBtn} 
                  onClick={() => navigate('/scanner')} 
                >
                  <IoShieldCheckmarkOutline size={22} className="me-2" />
                  Commencer maintenant
                </button>
                
                <HashLink 
                to="/explication#demo-video" 
                smooth 
                className={s.secondaryBtn}
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                >
                Voir la Démo
                </HashLink>
              </div>
            </div>
          </div>

          {/* Image - Colonne de droite */}
          <div className="col-md-6 d-flex justify-content-center align-items-center mt-5 mt-md-0">
            <div className={s.imageWrapper}>
                <img src={HeroImage} alt="IA Detection" className={`img-fluid ${s.heroImg}`} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}