import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import profileImage from 'figma:asset/627e28723f73251d5b4ec5f57f743d323d92d735.png';
import svgPaths from "../imports/svg-it05m3k0sq";
import { useLanguage } from '../contexts/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const translations = {
    title: {
      pt: <>Conte-me um pouco sobre<br />o seu desafio</>,
      en: <>Tell me a bit about<br />your challenge</>,
      es: <>Cuéntame un poco sobre<br />tu desafío</>
    },
    nameLabel: {
      pt: 'Seu Nome',
      en: 'Your Name',
      es: 'Tu Nombre'
    },
    namePlaceholder: {
      pt: 'Nome',
      en: 'Name',
      es: 'Nombre'
    },
    emailLabel: {
      pt: 'Seu E-mail',
      en: 'Your Email',
      es: 'Tu E-mail'
    },
    emailPlaceholder: {
      pt: 'Seu melhor e-mail',
      en: 'Your best email',
      es: 'Tu mejor e-mail'
    },
    phoneLabel: {
      pt: 'Telefone com WhatsApp',
      en: 'Phone with WhatsApp',
      es: 'Teléfono con WhatsApp'
    },
    phonePlaceholder: {
      pt: 'Seu número',
      en: 'Your number',
      es: 'Tu número'
    },
    messageLabel: {
      pt: 'Como eu te ajudo?',
      en: 'How can I help you?',
      es: '¿Cómo puedo ayudarte?'
    },
    messagePlaceholder: {
      pt: 'Conte-me mais sobre seu projeto',
      en: 'Tell me more about your project',
      es: 'Cuéntame más sobre tu proyecto'
    },
    submitButton: {
      pt: 'Enviar',
      en: 'Send',
      es: 'Enviar'
    },
    submitting: {
      pt: 'Enviando...',
      en: 'Sending...',
      es: 'Enviando...'
    },
    success: {
      pt: 'Enviado com sucesso!',
      en: 'Sent successfully!',
      es: '¡Enviado con éxito!'
    },
    error: {
      pt: 'Erro ao enviar',
      en: 'Error sending',
      es: 'Error al enviar'
    },
    whatsappMessage: {
      pt: (data: typeof formData) => `Olá! Meu nome é ${data.name}.\n\nE-mail: ${data.email}\nTelefone: ${data.phone}\n\n${data.message}`,
      en: (data: typeof formData) => `Hello! My name is ${data.name}.\n\nEmail: ${data.email}\nPhone: ${data.phone}\n\n${data.message}`,
      es: (data: typeof formData) => `¡Hola! Mi nombre es ${data.name}.\n\nE-mail: ${data.email}\nTeléfono: ${data.phone}\n\n${data.message}`
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Enviar dados para Supabase
      const response = await fetch('https://reyditlbgjdgjxniqfeh.supabase.co/rest/v1/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJleWRpdGxiZ2pkZ2p4bmlxZmVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNzMyMTksImV4cCI6MjA4Mzc0OTIxOX0.Wq02px_vq778Dk0XVDEO0JaZ4hSSGRNaSI82sV3sB6o',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          created_at: new Date().toISOString()
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        
        // Formatar mensagem para WhatsApp
        const whatsappMessage = translations.whatsappMessage[language](formData);
        const whatsappUrl = `https://wa.me/5521981696869?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Fechar modal após 1 segundo
        setTimeout(() => {
          onClose();
          // Resetar formulário
          setFormData({ name: '', email: '', phone: '', message: '' });
          setSubmitStatus('idle');
        }, 1000);
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" onClick={onClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[1000px] max-h-[90vh] rounded-[24px] bg-white shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/80 hover:bg-black transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 overflow-y-auto h-full">
                {/* Left Side - Image & Social Links */}
                <div className="bg-black p-8 md:p-12 flex flex-col items-center justify-between relative overflow-hidden min-h-[300px] md:min-h-full">
                  {/* Image - ocupar todo o espaço disponível */}
                  <div className="relative z-10 flex-1 flex items-center justify-center">
                    <img
                      src={profileImage}
                      alt="Flavio Jorge"
                      className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover"
                    />
                  </div>

                  {/* Social Icons */}
                  <div className="relative z-10 flex gap-4 mt-8">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/flaviojorges/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 p-2 border border-white rounded-[10px] hover:border-[#1760ff] hover:bg-[#1760ff]/10 transition-colors flex items-center justify-center group"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p183f18f0} stroke="white" className="group-hover:stroke-[#1760ff] transition-colors" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p479e400} stroke="white" className="group-hover:stroke-[#1760ff] transition-colors" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p35cb6200} stroke="white" className="group-hover:stroke-[#1760ff] transition-colors" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>

                    {/* Medium/Blog */}
                    <a
                      href="https://www.linkedin.com/in/flaviojorges/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 p-2 border border-white rounded-[10px] hover:border-[#1760ff] hover:bg-[#1760ff]/10 transition-colors flex items-center justify-center group"
                      aria-label="Blog"
                    >
                      <svg className="w-6 h-[14px]" fill="none" viewBox="0 0 24 14">
                        <path d={svgPaths.pc959900} stroke="white" className="group-hover:stroke-[#1760ff] transition-colors" />
                      </svg>
                    </a>

                    {/* Substack */}
                    <a
                      href="https://substack.com/@flaviojorge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 p-2 border border-white rounded-[10px] hover:border-[#1760ff] hover:bg-[#1760ff]/10 transition-colors flex items-center justify-center group"
                      aria-label="Substack"
                    >
                      <svg className="w-[17px] h-5" fill="none" viewBox="0 0 17 20">
                        <g clipPath="url(#clip0_modal)">
                          <path d={svgPaths.p3ac19f00} stroke="white" className="group-hover:stroke-[#1760ff] transition-colors" strokeWidth="0.5" />
                        </g>
                        <defs>
                          <clipPath id="clip0_modal">
                            <rect fill="white" height="20" width="17" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>

                  {/* Decorative gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1760ff]/10 to-transparent pointer-events-none" />
                </div>

                {/* Right Side - Form */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h2 className="text-xl md:text-2xl lg:text-3xl mb-6">
                    {translations.title[language]}
                  </h2>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Nome */}
                    <div>
                      <label htmlFor="name" className="block text-sm text-[#515151] mb-1.5">
                        {translations.nameLabel[language]} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={translations.namePlaceholder[language]}
                        required
                        className="w-full px-4 py-3 border border-[#e5e5e5] rounded-[12px] text-[15px] focus:outline-none focus:border-[#1760ff] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm text-[#515151] mb-1.5">
                        {translations.emailLabel[language]} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={translations.emailPlaceholder[language]}
                        required
                        className="w-full px-4 py-3 border border-[#e5e5e5] rounded-[12px] text-[15px] focus:outline-none focus:border-[#1760ff] transition-colors"
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm text-[#515151] mb-1.5">
                        {translations.phoneLabel[language]} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={translations.phonePlaceholder[language]}
                        required
                        className="w-full px-4 py-3 border border-[#e5e5e5] rounded-[12px] text-[15px] focus:outline-none focus:border-[#1760ff] transition-colors"
                      />
                    </div>

                    {/* Mensagem */}
                    <div>
                      <label htmlFor="message" className="block text-sm text-[#515151] mb-1.5">
                        {translations.messageLabel[language]} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={translations.messagePlaceholder[language]}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-[#e5e5e5] rounded-[12px] text-[15px] resize-none focus:outline-none focus:border-[#1760ff] transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3.5 rounded-[12px] transition-colors text-[15px] font-medium flex items-center justify-center gap-2 mt-2 ${
                        submitStatus === 'success' 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : submitStatus === 'error'
                          ? 'bg-red-500 hover:bg-red-600'
                          : 'bg-[#1760ff] hover:bg-[#1454e6]'
                      } text-white ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {submitStatus === 'success' 
                        ? translations.success[language]
                        : submitStatus === 'error'
                        ? translations.error[language]
                        : isSubmitting 
                        ? translations.submitting[language]
                        : translations.submitButton[language]
                      }
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}