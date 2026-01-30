import React, { useState } from 'react';
import s from './Upload.module.css'; 
import { IoSendOutline, IoDocumentTextOutline, IoTrashOutline } from 'react-icons/io5';

export default function Upload({ onAnalyze, loading, onReset }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onAnalyze(text);
    }
  };

  const handleReset = () => {
    setText("");
    onReset();

    if (onReset) onReset(); 
  };

  return (
    <div className={s.uploadContainer}>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="d-flex align-items-center">
          <div className={s.iconBadge}>
            <IoDocumentTextOutline />
          </div>
          <div>
            <h2 className={s.uploadTitle}>Entrée de données</h2>
            <p className={s.uploadSubtitle}>Analysez vos messages en un clic.</p>
          </div>
        </div>
        

      </div>

      <div className={s.inputWrapper}>
        <textarea
          className={s.customTextarea}
          placeholder="Collez ici le contenu suspect..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        ></textarea>
        
        <div className={s.textareaFooter}>
          <span>{text.length} caractères</span>
                
        {text && !loading && (
          <button 
            className={s.resetBtn} 
            onClick={handleReset}
            title="Vider le texte"
          >
            <IoTrashOutline size={20} />
          </button>
        )}
        </div>
      </div>

      <button 
        className={`${s.analyzeBtn} ${loading ? s.btnLoading : ''}`}
        onClick={handleSubmit}
        disabled={loading || !text.trim()}
      >
        {loading ? (
          <>
            <span className={s.spinner}></span>
            Analyse IA...
          </>
        ) : (
          <>
            <IoSendOutline className="me-2" />
            LANCER L'ANALYSE
          </>
        )}
      </button>
    </div>
  );
}