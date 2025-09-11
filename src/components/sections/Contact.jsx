import React from "react";
import Section from "../common/Section";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="İletişim" title="Birlikte üretelim" desc="Kısa bir mesaj bırakın; 15 dakika içinde dönüş yapalım (mesai saatleri içinde).">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.currentTarget.name.value;
              const email = e.currentTarget.email.value;
              const msg = e.currentTarget.message.value;
              const subject = encodeURIComponent("Codevia Tech — Hızlı Teklif");
              const body = encodeURIComponent(`Ad: ${name}\nE-posta: ${email}\nMesaj: ${msg}`);
              window.location.href = `mailto:info@codevia.tech?subject=${subject}&body=${body}`;
            }}
            className="grid gap-4"
          >
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200">Ad Soyad</label>
              <input name="name" required placeholder="Adınız" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#3e4a54]" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200">E-posta</label>
              <input type="email" name="email" required placeholder="ornek@eposta.com" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#3e4a54]" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200">Mesaj</label>
              <textarea name="message" rows={4} required placeholder="Kısa bir özet..." className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#3e4a54]" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1f2a33] to-[#3e4a54] px-5 py-3 font-medium text-white shadow hover:opacity-90">
              Gönder <Mail className="h-4 w-4" />
            </button>
            <p className="text-xs text-slate-400">Form, e-posta istemcinizi açar. İsterseniz daha sonra gerçek bir API ile bağlarız.</p>
          </form>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88]"><Mail className="h-5 w-5" /></div>
            <div>
              <p className="text-sm text-slate-400">E-posta</p>
              <a href="mailto:info@codevia.tech" className="font-medium text-white hover:underline">info@codevia.tech</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88]"><Phone className="h-5 w-5" /></div>
            <div>
              <p className="text-sm text-slate-400">Telefon</p>
              <a href="tel:+905438707575" className="font-medium text-white hover:text-blue-300 transition-colors">+90 (543) 870 75 75</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88]"><MapPin className="h-5 w-5" /></div>
            <div>
              <p className="text-sm text-slate-400">Ofis</p>
              <div className="font-medium text-white">
                <p>Bahçelievler Mah. Doktor Cevdet Kara Cad.</p>
                <p>E Blok No: 35 E /B22</p>
                <p className="text-slate-300">Ankara Üniversitesi Teknokent</p>
                <p className="text-slate-300">Ankara, Türkiye</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
