import React, { useState } from "react";
import Section from "../common/Section";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import { useTranslation } from "../../contexts/TranslationContext";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const { 
    spacing, 
    isMobile, 
    isTablet, 
    getTouchOptimizedSize 
  } = useSmartResponsive();
  
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@codevia.com.tr?subject=İletişim: ${formData.name}&body=${formData.message}%0D%0A%0D%0Aİletişim Bilgileri:%0D%0AE-posta: ${formData.email}`;
    window.location.href = mailtoLink;
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
        {/* Contact Form - Tek sütun, merkezi */}
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
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder-slate-400 focus:border-white/20 focus:bg-white/[0.08] transition-all duration-300"
                style={{ 
                  padding: `${spacing * 0.75}px ${spacing}px`,
                  height: `${inputHeight}px`,
                  fontSize: isMobile ? '14px' : '15px'
                }}
                required
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
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder-slate-400 focus:border-white/20 focus:bg-white/[0.08] transition-all duration-300"
                style={{ 
                  padding: `${spacing * 0.75}px ${spacing}px`,
                  height: `${inputHeight}px`,
                  fontSize: isMobile ? '14px' : '15px'
                }}
                required
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
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder-slate-400 focus:border-white/20 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                style={{ 
                  padding: `${spacing * 0.75}px ${spacing}px`,
                  fontSize: isMobile ? '14px' : '15px'
                }}
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-white text-slate-900 rounded-xl font-medium hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2"
              style={{ 
                padding: `${spacing * 0.75}px ${spacing}px`,
                height: `${getTouchOptimizedSize(48)}px`,
                fontSize: isMobile ? '15px' : '16px'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="h-4 w-4" />
              {t('sendButton')}
            </motion.button>

            {/* Form Note */}
            <p 
              className="text-slate-400 text-center"
              style={{ fontSize: isMobile ? '11px' : '12px' }}
            >
              {t('formNote')}
            </p>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}