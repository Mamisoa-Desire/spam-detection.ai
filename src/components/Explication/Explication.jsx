import React from 'react';
import s from './Explication.module.css';
import { IoCloudUploadOutline, IoFlashOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
import video from '../../Assets/video/Spam Detection AI.mp4';

export default function Explication() {
  return (
    <section className={s.explicationPage}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className={s.mainTitle}>Le Processus d'Analyse</h1>
          <p className={s.subtitle}>De la donnée brute à la décision intelligente.</p>
        </div>

        <div className={s.flowContainer}>
          
          <div className={s.flowItem}>
            <div className={s.iconCircle}>
              <IoCloudUploadOutline />
            </div>
            <div className={s.flowContent}>
              <h3>Entrée des données</h3>
              <p>Copiez votre message suspect dans l'interface .</p>
            </div>
          </div>

          <div className={s.connector}></div>

          <div className={s.flowItem}>
            <div className={`${s.iconCircle} ${s.pulse}`}>
              <IoFlashOutline />
            </div>
            <div className={s.flowContent}>
              <h3>Traitement IA</h3>
              <p>Analyse sémantique et neuronale instantanée par nos serveurs.</p>
            </div>
          </div>

          <div className={s.connector}></div>

          <div className={s.flowItem}>
            <div className={s.iconCircle}>
              <IoShieldCheckmarkOutline />
            </div>
            <div className={s.flowContent}>
              <h3>Verdict Final</h3>
              <p>Rapport détaillé : Spam ou non spam.</p>
            </div>
          </div>

        </div>

        {/* Section Vidéo simple */}
        <div  className="mt-5 pt-5">
           <div className={s.videoSection}>
              <h3 className={s.mainTitle}>Démonstration en vidéo</h3>
              <div className={s.videoFrame} id="demo-video">
                <video 
                width="100%" 
                height="450" 
                controls      
                preload="metadata" 
                style={{ borderRadius: '15px' }}
                >
                <source src={video} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}