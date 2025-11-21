/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ArrowLeft, Shield, Database, Clock, Users, Lock, Cookie, FileText, Bell, Camera, MapPin } from 'lucide-react';

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header avec gradient */}
      <div className="bg-gradient-to-r from-[#30808E] to-[#4A9AA8] text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </a>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Politique de Confidentialité
          </h1>
          <p className="text-white/90 text-lg">Dernière mise à jour : Novembre 2024</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="space-y-8">
          
          {/* Section 1 : Responsable de traitement */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">1. Responsable de traitement</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Vide and Go est éditée par <span className="font-semibold">RENT UP</span>, dont le siège social est situé à 
                35 rue Gustave Delory 59000 Lille, immatriculée au RCS de Lille sous le numéro 878419043.
              </p>
              <p className="mt-3">
                Contact : <a href="mailto:contact@vide-and-go.com" className="text-[#30808E] hover:underline font-semibold">
                  contact@vide-and-go.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 2 : Données collectées */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">2. Données collectées</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16 space-y-3">
              <p>L'application collecte les données suivantes, selon l'usage :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Informations d'identification (nom, prénom, entreprise, fonction, email, téléphone)</li>
                <li>Informations de connexion (identifiants, logs)</li>
                <li>Coordonnées de paiement</li>
                <li>Localisation lors des collectes (via GPS, avec accord explicite)</li>
                <li>Photos des objets à recycler (prises via l'appareil photo de votre appareil)</li>
                <li>Historique des commandes et factures</li>
                <li>Éventuels échanges via messagerie interne</li>
              </ul>
            </div>
          </section>

          {/* NOUVELLE SECTION : Permissions sensibles */}
          <section className="bg-gradient-to-br from-[#30808E]/5 to-[#4A9AA8]/5 rounded-2xl p-6 md:p-8 shadow-sm border-2 border-[#30808E]/20">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Utilisation des permissions sensibles</h2>
              <p className="text-gray-600">Votre consentement explicite est requis avant toute utilisation</p>
            </div>
            
            {/* Caméra */}
            <div className="bg-white rounded-xl p-6 mb-4 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#30808E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Camera className="w-5 h-5 text-[#30808E]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Accès à la caméra</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Finalité :</strong> Prendre des photos des objets à recycler pour faciliter leur identification et leur collecte.</p>
                    <p><strong>Traitement :</strong> Les photos sont transmises de manière sécurisée à nos serveurs pour traitement de votre demande de collecte. Elles peuvent être consultées par le recycleur choisi pour préparer la collecte.</p>
                    <p><strong>Conservation :</strong> Les photos sont conservées pendant la durée de traitement de votre demande, puis archivées avec votre historique de commandes.</p>
                    <p><strong>Vos droits :</strong> Vous pouvez refuser l'accès à la caméra. Dans ce cas, vous ne pourrez pas utiliser la fonctionnalité de prise de photo dans l'application.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Localisation */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#30808E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#30808E]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Accès à la localisation</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Finalité :</strong> Déterminer l'adresse de collecte et optimiser les itinéraires pour le recycleur.</p>
                    <p><strong>Type de localisation :</strong> Nous utilisons la localisation uniquement lorsque vous créez une demande de collecte (pas de suivi en arrière-plan).</p>
                    <p><strong>Traitement :</strong> Les coordonnées GPS sont converties en adresse et stockées avec votre demande de collecte.</p>
                    <p><strong>Conservation :</strong> Les données de localisation sont conservées avec votre historique de collectes.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 : Finalités de la collecte */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">3. Finalités de la collecte</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16 space-y-3">
              <p>Les données sont utilisées pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Création et gestion des comptes utilisateurs</li>
                <li>Planification et exécution des collectes d'objets à recycler</li>
                <li>Identification et évaluation des objets via les photos</li>
                <li>Géolocalisation des points de collecte</li>
                <li>Suivi des paiements et facturation</li>
                <li>Communication avec les utilisateurs (notifications, emails, SMS)</li>
                <li>Amélioration des services (statistiques, support client)</li>
                <li>Sécurité et prévention de la fraude</li>
              </ul>
              <p className="mt-4 font-semibold">
                Base légale : Exécution du contrat de service, consentement explicite pour les données sensibles (localisation, photos), intérêt légitime pour la sécurité et l'amélioration du service.
              </p>
            </div>
          </section>

          {/* Section 4 : Durée de conservation */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">4. Durée de conservation</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16 space-y-3">
              <p>
                Les données sont conservées selon les durées suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Données de compte :</strong> Pendant toute la durée d'utilisation du service + 3 ans après la dernière activité</li>
                <li><strong>Photos et données de localisation :</strong> Pendant la durée de traitement de la collecte + archivage avec l'historique des commandes (3 ans)</li>
                <li><strong>Données de facturation :</strong> 10 ans (obligation légale comptable)</li>
                <li><strong>Logs de connexion :</strong> 12 mois maximum</li>
              </ul>
              <p className="mt-3">
                Les données peuvent être supprimées sur demande, sauf obligation légale de conservation (comptabilité, litiges).
              </p>
            </div>
          </section>

          {/* Section 5 : Destinataires */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">5. Destinataires des données</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16 space-y-3">
              <p>Vos données peuvent être partagées avec :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personnel habilité de Vide and Go :</strong> équipes opérationnelles, support client, administration</li>
                <li><strong>Prestataires techniques :</strong> hébergement (serveurs situés dans l'UE), solutions de paiement, maintenance informatique</li>
                <li><strong>Partenaires de collecte :</strong> uniquement les informations nécessaires à la réalisation de la prestation (adresse, photos des objets)</li>
                <li><strong>Autorités légales :</strong> sur réquisition judiciaire uniquement</li>
              </ul>
              <p className="mt-3 font-semibold">
                Aucune donnée n'est vendue à des tiers. Les données ne sont pas transférées hors UE sans garanties appropriées et votre consentement.
              </p>
            </div>
          </section>

          {/* Section 6 : Droits des utilisateurs */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">6. Vos droits (RGPD)</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16 space-y-3">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> supprimer vos données (sauf obligations légales)</li>
                <li><strong>Droit d'opposition :</strong> refuser certains traitements</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                <li><strong>Droit de limitation :</strong> restreindre temporairement le traitement</li>
                <li><strong>Retrait du consentement :</strong> retirer votre accord à tout moment pour la caméra et la localisation</li>
              </ul>
              <p className="mt-4">
                Pour exercer vos droits, contactez-nous à :{' '}
                <a href="mailto:contact@vide-and-go.com" className="text-[#30808E] hover:underline font-semibold">
                  contact@vide-and-go.com
                </a>
              </p>
              <p className="mt-3">
                Vous disposez également du droit d'introduire une réclamation auprès de la CNIL :{' '}
                <a 
                  href="https://www.cnil.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#30808E] hover:underline font-semibold"
                >
                  www.cnil.fr
                </a>
              </p>
            </div>
          </section>

          {/* Section 7 : Sécurité */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">7. Sécurité des données</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16 space-y-3">
              <p>
                Vide and Go met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chiffrement des données en transit (HTTPS/SSL) et au repos</li>
                <li>Contrôle d'accès strict et authentification sécurisée</li>
                <li>Sauvegardes régulières et plans de continuité</li>
                <li>Audits de sécurité périodiques</li>
                <li>Formation du personnel aux bonnes pratiques RGPD</li>
                <li>Protocoles de détection et de réponse aux incidents</li>
              </ul>
              <p className="mt-3">
                En cas de violation de données susceptible d'engendrer un risque élevé pour vos droits, vous serez informé dans les meilleurs délais.
              </p>
            </div>
          </section>

          {/* Section 8 : Cookies et traceurs */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">8. Cookies et traceurs</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16 space-y-3">
              <p>
                L'application peut utiliser des cookies et technologies similaires pour :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement (session, authentification) - pas de consentement requis</li>
                <li><strong>Cookies analytiques :</strong> statistiques d'usage anonymisées - consentement requis</li>
                <li><strong>Cookies fonctionnels :</strong> préférences utilisateur - consentement requis</li>
              </ul>
              <p className="mt-3">
                Vous pouvez gérer vos préférences de cookies dans les paramètres de l'application. Le refus de certains cookies peut limiter l'accès à certaines fonctionnalités.
              </p>
            </div>
          </section>

          {/* Section 9 : Données de mineurs */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">9. Protection des mineurs</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                L'application Vide and Go est réservée aux personnes âgées de 18 ans et plus. Nous ne collectons pas sciemment de données personnelles auprès de mineurs. Si vous pensez qu'un mineur a fourni des données, contactez-nous immédiatement.
              </p>
            </div>
          </section>

          {/* Section 10 : Modifications */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">10. Modifications de la politique</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Cette politique de confidentialité peut être mise à jour pour refléter les évolutions légales, techniques ou de nos services. En cas de modification substantielle, vous serez informé via notification dans l'application ou par email. La date de dernière mise à jour est indiquée en haut de cette page.
              </p>
              <p className="mt-3">
                Votre utilisation continue de l'application après notification vaut acceptation des modifications.
              </p>
            </div>
          </section>

          {/* Section Contact */}
          <section className="bg-gradient-to-r from-[#30808E] to-[#4A9AA8] rounded-2xl p-6 md:p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Contact - Protection des données</h2>
            <div className="space-y-2">
              <p><strong>Email :</strong> <a href="mailto:contact@vide-and-go.com" className="underline hover:no-underline">contact@vide-and-go.com</a></p>
              <p><strong>Adresse :</strong> RENT UP - 35 rue Gustave Delory, 59000 Lille, France</p>
              <p><strong>RCS Lille :</strong> 878419043</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}