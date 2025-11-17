import React from 'react';
import { ArrowLeft, FileText, UserCheck, Smartphone, CreditCard, Copyright, Shield, AlertCircle, Scale, Mail } from 'lucide-react';

export default function CGUCGV() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header avec gradient */}
      <div className="bg-gradient-to-r from-[#30808E] to-[#30808E] text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l&apos;accueil
          </a>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Conditions Générales d&apos;Utilisation
          </h1>
          
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="space-y-8">
          
          {/* Section 1 : Objet */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">1. Objet</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Les présentes CGU définissent les modalités d&apos;utilisation de l&apos;application Vide and Go, 
                éditée par RENT UP, accessible sur iOS et Android. Elles s&apos;appliquent à toute entreprise 
                cliente, prestataire partenaire et utilisateur inscrit sur la plateforme.
              </p>
            </div>
          </section>

          {/* Section 2 : Accès et inscription */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">2. Accès et inscription</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                L&apos;accès à l&apos;application nécessite la création d&apos;un compte. L&apos;utilisateur s&apos;engage à 
                fournir des informations exactes et à les tenir à jour. L&apos;éditeur se réserve le droit de 
                suspendre ou résilier tout compte en cas de non-respect des CGU.
              </p>
            </div>
          </section>

          {/* Section 3 : Utilisation de l&apos;application */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">3. Utilisation de l&apos;application</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                L&apos;utilisateur s&apos;engage à utiliser l&apos;application dans le respect des lois et règlements en 
                vigueur, notamment en matière de protection des données, de propriété intellectuelle et de 
                lutte contre la fraude. Toute utilisation détournée ou abusive est interdite.
              </p>
            </div>
          </section>

          {/* Section 4 : Services proposés */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">4. Services proposés</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Vide and Go permet aux entreprises de planifier des collectes d&apos;encombrants, de gérer leurs 
                abonnements, de suivre les prestations et de communiquer avec les prestataires. Les prestataires 
                partenaires peuvent accepter ou refuser des missions, gérer leur planning et leur facturation.
              </p>
            </div>
          </section>

          {/* Section 5 : Paiement et abonnement */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">5. Paiement et abonnement</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Les paiements sont effectués selon les modalités indiquées lors de la souscription. L&apos;abonnement 
                est renouvelé automatiquement sauf résiliation anticipée. Les factures sont disponibles dans 
                l&apos;espace utilisateur.
              </p>
            </div>
          </section>

          {/* Section 6 : Propriété intellectuelle */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Copyright className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">6. Propriété intellectuelle</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Tous les contenus, marques, logos et logiciels de l&apos;application sont la propriété exclusive 
                de RENT UP. Toute reproduction ou utilisation non autorisée est interdite.
              </p>
            </div>
          </section>

          {/* Section 7 : Responsabilité et garantie */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">7. Responsabilité et garantie</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                L&apos;éditeur ne peut être tenu responsable des dommages indirects liés à l&apos;utilisation de 
                l&apos;application. Les prestations sont réalisées par des tiers indépendants, dont la responsabilité 
                incombe à chaque prestataire.
              </p>
            </div>
          </section>

          {/* Section 8 : Modification des CGU */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">8. Modification des CGU</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                L&apos;éditeur se réserve le droit de modifier les CGU à tout moment. Les utilisateurs seront 
                informés des modifications par notification dans l&apos;application.
              </p>
            </div>
          </section>

          {/* Section 9 : Droit applicable et litiges */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">9. Droit applicable et litiges</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Les CGU sont soumises au droit français. En cas de litige, les parties s&apos;engagent à rechercher 
                une solution amiable. À défaut, les tribunaux de Lille seront seuls compétents.
              </p>
            </div>
          </section>

          {/* Section 10 : Contact */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">10. Contact</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Pour toute question ou réclamation :{' '}
                <a href="mailto:contact@vide-and-go.com" className="text-[#30808E] hover:underline font-semibold">
                  contact@vide-and-go.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}