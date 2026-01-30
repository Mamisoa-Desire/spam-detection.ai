import React, { useState } from 'react';
import s from './Scan.module.css';
import Upload from './Upload';
import Result from './Result';
import axios from 'axios';

export default function Scan() {
  const [scanResult, setScanResult] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [seuil, setSeuil] = useState(0.75); 

  const handleCheckSpam = async (text) => {
    if (!text) return;
    setLoading(true);
    try {
      const response = await axios.post('https://sms-spam-detection-production.up.railway.app/predict', 
        { text: text, seuil: seuil } 
      );

      const apiData = response.data;
      setScanResult({
        score: (apiData.confiance_spam * 100).toFixed(2), 
        isSpam: apiData.is_spam,
        message: apiData.message_analyse,
        type: apiData.is_spam ? "Spam détecté" : "Message légitime"
      });
    } catch (error) {
      console.error("Erreur API:", error);
      alert("Erreur serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={s.scanPage}>
      <div className="container">
        
        <div className={s.seuilWrapper}>
           <label 
            className={s.seuilLabel} 
            style={{ color: seuil > 0.8 ? '#10b981' : seuil < 0.4 ? '#f43f5e' : '#6366f1' }}
            >
            L'IA marque comme Spam tout message dont l'indice de suspicion dépasse {seuil}, sinon il est traité comme Ham."
          </label>
          <input 
            type="range" 
            min="0.10" 
            max="1" 
            step="0.05" 
            value={seuil} 
            onChange={(e) => setSeuil(parseFloat(e.target.value))}
            className={s.rangeSlider}
          />
          <div className={s.seuilLabels}>
            <span>Sensible (0.10)</span>
            <span>Strict (1.00)</span>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className={s.glassCard}>
              <Upload onAnalyze={handleCheckSpam} loading={isLoading}  onReset={() => { setScanResult(null); setSeuil(0.75); }}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={s.glassCard}>
              <Result data={scanResult} loading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}