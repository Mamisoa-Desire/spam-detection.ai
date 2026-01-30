import React from 'react';
import s from './Result.module.css';
import { IoShieldCheckmarkOutline, IoAlertCircleOutline, IoStatsChartOutline } from 'react-icons/io5';

export default function Result({ data, loading }) {
  if (loading) {
    return (
      <div className={s.resultContainer}>
        <div className={s.loadingWrapper}>
          <div className={s.scanLine}></div>
          <p>Analyse sémantique en cours...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={s.resultContainer}>
        <div className={s.emptyState}>
          <IoStatsChartOutline className={s.emptyIcon} />
          <h3>En attente d'analyse</h3>
          <p>Les résultats s'afficheront ici après avoir lancé le scan.</p>
        </div>
      </div>
    );
  }

  const isDanger = data.isSpam;

  return (
    <div className={s.resultContainer}>
      <h2 className={s.resultTitle}>Verdict de l'IA</h2>
      
      <div className={s.scoreBox}>
        <div className={`${s.percentage} ${isDanger ? s.textDanger : s.textSuccess}`}>
          {data.score}%
        </div>
        <div className={s.progressBarContainer}>
          <div 
            className={`${s.progressBar} ${isDanger ? s.bgDanger : s.bgSuccess}`}
            style={{ width: `${data.score}%` }}
          ></div>
        </div>
        <p className={s.scoreLabel}>Indice de confiance Spam</p>
      </div>

      <div className={`${s.verdictCard} ${isDanger ? s.verdictDanger : s.verdictSuccess}`}>
        <div className={s.verdictIcon}>
          {isDanger ? <IoAlertCircleOutline /> : <IoShieldCheckmarkOutline />}
        </div>
        <div>
          <h4 className={s.verdictTitle}>{isDanger ? "Contenu Suspect" : "Contenu Sûr"}</h4>
          <p className={s.verdictDesc}>
            {isDanger 
              ? "L'IA a identifié des caractéristiques de messages indésirables." 
              : "Le message semble sain et ne présente pas de risque détecté."}
          </p>
        </div>
      </div>

      <div className={s.tagsContainer}>
        <span className={s.tag}>Type: {data.type}</span>
        <span className={s.tag}>Seuil utilisé: 0.75</span>
      </div>
    </div>
  );
}