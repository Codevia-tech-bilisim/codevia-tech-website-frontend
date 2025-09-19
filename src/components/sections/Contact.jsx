import React, { useState } from "react";
import Section from "../common/Section";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import { useTranslation } from "../../contexts/TranslationContext";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });
  
  const { 
    spacing, 
    isMobile, 
    isTablet, 
    getTouchOptimizedSize 
  } = useSmartResponsive();
  
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: ''
    });

    try {
      const response = await fetch('https://formspree.io/f/xdklqzjb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Codevia İletişim: ${formData.name}`,
        }),
      });

      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: t('formSuccessMessage') || 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.'
        });
        
        // Form verilerini temizle
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // 5 saniye sonra success mesajını gizle
        setTimeout(() => {
          setFormStatus(prev => ({
            ...prev,
            isSuccess: false,
            message: ''
          }));
        }, 5000);
        
      } else {
        throw new Error('Form gönderimi başarısız');
      }
    } catch (error) {
      console.error('Form gönderimi hatası:', error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: t('formErrorMessage') || 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya direkt e-posta gönderin.'
      });
      
      // 5 saniye sonra error mesajını gizle
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isError: false,
          message: ''
        }));
      }, 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const inputHeight = getTouchOptimizedSize(44);

  return (
    <Section
      id="contact"
      eyebrow={t('contactTitle')}
      title={t('contactMainTitle')}
      desc={t('contactDescription')}
    >
      <div className="max-w-2xl mx-auto">
        
        {/* Success/Error Messages */}
        {(formStatus.isSuccess || formStatus.isError) && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
              formStatus.isSuccess 
                ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}
          >
            {formStatus.isSuccess ? (
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
            )}
            <p style={{ fontSize: isMobile ? '13px' : '14px' }}>
              {formStatus.message}
            </p>
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label 
                className="block text-slate-300 mb-2"
                style={{ fontSize: isMobile ? '13px' : '14px' }}
              >
                {t('nameLabel')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t('namePlaceholder')}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder-slate-400 focus:border-white/20 focus:bg-white/[0.08] transition-all duration-300 disabled:opacity-50"
                style={{ 
                  padding: `${spacing * 0.75}px ${spacing}px`,
                  height: `${inputHeight}px`,
                  fontSize: isMobile ? '14px' : '15px'
                }}
                required
                disabled={formStatus.isSubmitting}
              />
            </div>

            {/* Email Field */}
            <div>
              <label 
                className="block text-slate-300 mb-2"
                style={{ fontSize: isMobile ? '13px' : '14px' }}
              >
                {t('emailLabel')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('emailPlaceholder')}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder-slate-400 focus:border-white/20 focus:bg-white/[0.08] transition-all duration-300 disabled:opacity-50"
                style={{ 
                  padding: `${spacing * 0.75}px ${spacing}px`,
                  height: `${inputHeight}px`,
                  fontSize: isMobile ? '14px' : '15px'
                }}
                required
                disabled={formStatus.isSubmitting}
              />
            </div>

            {/* Message Field */}
            <div>
              <label 
                className="block text-slate-300 mb-2"
                style={{ fontSize: isMobile ? '13px' : '14px' }}
              >
                {t('messageLabel')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t('messagePlaceholder')}
                rows={6}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder-slate-400 focus:border-white/20 focus:bg-white/[0.08] transition-all duration-300 resize-none disabled:opacity-50"
                style={{ 
                  padding: `${spacing * 0.75}px ${spacing}px`,
                  fontSize: isMobile ? '14px' : '15px'
                }}
                required
                disabled={formStatus.isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={formStatus.isSubmitting}
              className="w-full rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:hover:scale-100 disabled:opacity-70"
              style={{ 
                padding: `${spacing * 0.75}px ${spacing}px`,
                height: `${getTouchOptimizedSize(48)}px`,
                fontSize: isMobile ? '15px' : '16px',
                color: 'rgba(32,32,32,0.9)',
                background: `
                  radial-gradient(circle at 50% 40%, 
                    rgba(218,213,202,0.95) 0%, 
                    rgba(218,213,202,0.85) 40%, 
                    rgba(218,213,202,0.75) 70%, 
                    rgba(218,213,202,0.6) 100%
                  )
                `,
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(218,213,202,0.4)',
                boxShadow: `
                  0 4px 12px rgba(218,213,202,0.25),
                  inset 0 1px 0 rgba(255,255,255,0.4),
                  0 0 20px rgba(218,213,202,0.15)
                `
              }}
              whileHover={{ scale: formStatus.isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: formStatus.isSubmitting ? 1 : 0.98 }}
            >
              {formStatus.isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-600 border-t-transparent" />
                  {t('sendingButton') || 'Gönderiliyor...'}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {t('sendButton')}
                </>
              )}
            </motion.button>
            
            
          </form>
        </motion.div>
      </div>
    </Section>
  );
}