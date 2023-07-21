import React, { useEffect } from "react";

const LanguageDetector = () => {
  useEffect(() => {
    // Fonction pour détecter la langue du navigateur
    const detectLanguageAndRedirect = () => {
      const userLanguage = window.navigator.language; // Récupérer la langue du navigateur
      // Mettre en place la logique de redirection en fonction de la langue détectée
      if (userLanguage.startsWith("fr")) {
        // Redirection pour la langue française
        window.location.href = "/fr"; // Remplacez "/fr" par l'URL de votre page en français
      } else {
        // Redirection pour les autres langues (par défaut en anglais ici vous pouvez modifier pour le français ou l'espagnole)
        window.location.href = "/en"; // Remplacez "/en" par l'URL de votre page en anglais ou la langue par défaut souhaitée
      }
    };

    // Appeler la fonction de détection au montage du composant
    detectLanguageAndRedirect();
  }, []); // Le tableau vide [] assure que le useEffect sera exécuté une seule fois au montage

  return (
    <div>
      <h2>Détection de langue...</h2>
      {/* Vous pouvez afficher ici un message de chargement ou d'attente pendant la redirection */}
    </div>
  );
};

export default LanguageDetector;
