import { motion } from "motion/react";
import { Instagram, Globe, Clock, MapPin, CheckCircle2, Info, Shirt } from "lucide-react";

export default function App() {
  const instagramUrl = "https://www.instagram.com/omolavanderia96?igsh=MTY3cjRjcmNuMW1lbA%3D%3D";
  const websiteUrl = "https://www.omolavanderia.com.br/home";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img 
              src="https://www.omolavanderia.com.br/assets/images/logo.png" 
              alt="OMO Lavanderia Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback to the shirt icon if the logo fails to load
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = "flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200";
                  fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shirt"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.62 1.96V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5.42a2 2 0 0 0-1.62-1.96Z"/><path d="M12 2v17"/><path d="M12 7h4"/><path d="M12 11h4"/><path d="M12 15h4"/><path d="M8 7h4"/><path d="M8 11h4"/><path d="M8 15h4"/></svg>';
                  parent.appendChild(fallback);
                }
              }}
            />
            <span className="text-xl font-bold tracking-tight text-blue-900">OMO <span className="font-light">Lavanderia</span></span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#regras" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Regras</a>
            <a href="#contato" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Contato</a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95">
              Instagram
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-20 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <img 
                    src="https://www.omolavanderia.com.br/assets/images/logo.png" 
                    alt="OMO Lavanderia Logo" 
                    className="h-16 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold tracking-wide text-blue-700 uppercase">
                    Oferta Exclusiva
                  </span>
                </div>
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 lg:text-7xl">
                  Sua roupa <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">impecável</span> com economia.
                </h1>
                <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-600">
                  Cuidamos das suas peças com a qualidade que só a OMO oferece. Aproveite nosso desconto especial e tenha mais tempo para o que importa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-blue-300 active:scale-95"
                  >
                    <Instagram size={20} />
                    Ver no Instagram
                  </a>
                  <a 
                    href="#regras"
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-700 transition-all hover:bg-slate-50 active:scale-95"
                  >
                    Saber Mais
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 overflow-hidden rounded-3xl bg-white p-8 shadow-2xl shadow-slate-200">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <span className="text-4xl font-black">10%</span>
                    </div>
                    <h3 className="mb-2 text-3xl font-bold text-slate-900 uppercase tracking-tighter">Desconto Especial</h3>
                    <p className="text-slate-500">Válido para serviços selecionados na unidade.</p>
                    
                    <div className="mt-8 w-full space-y-4 text-left">
                      <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                        <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={20} />
                        <div>
                          <p className="font-semibold text-slate-800">Qualidade OMO</p>
                          <p className="text-sm text-slate-500">Tecnologia avançada de lavagem.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                        <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={20} />
                        <div>
                          <p className="font-semibold text-slate-800">Cuidado Delicado</p>
                          <p className="text-sm text-slate-500">Tratamento especial para cada tecido.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-12 -right-12 -z-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"></div>
                <div className="absolute -bottom-12 -left-12 -z-0 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section id="regras" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">Regras da Promoção</h2>
              <p className="text-slate-600">Transparência e clareza para você aproveitar melhor.</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div 
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Info size={24} />
                </div>
                <h4 className="mb-3 text-xl font-bold text-slate-900">Não Cumulativo</h4>
                <p className="leading-relaxed text-slate-600">
                  O desconto de 10% não é cumulativo. Caso a peça já possua algum desconto ativo, prevalecerá o maior benefício.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Shirt size={24} />
                </div>
                <h4 className="mb-3 text-xl font-bold text-slate-900">Pacotes</h4>
                <p className="leading-relaxed text-slate-600">
                  O desconto não é aplicável em pacotes promocionais. Consulte a relação de pacotes disponíveis em nosso Instagram.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact/Info Section */}
        <section id="contato" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-3xl bg-blue-600 px-8 py-16 text-white shadow-2xl shadow-blue-200 lg:px-20">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Onde nos encontrar?</h2>
                  <p className="mb-10 text-xl text-blue-100">
                    Confira nosso endereço completo e horários de atendimento atualizados diretamente em nossas redes sociais.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-200">Horário de Atendimento</p>
                        <p className="text-lg font-bold">Disponível no Instagram</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-200">Localização</p>
                        <p className="text-lg font-bold">Consulte nosso perfil</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <a 
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-white p-6 text-blue-600 transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    <div className="flex items-center gap-4">
                      <Instagram size={32} />
                      <div>
                        <p className="text-sm font-medium text-blue-400 uppercase tracking-wider">Siga-nos</p>
                        <p className="text-xl font-bold">@omolavanderia96</p>
                      </div>
                    </div>
                    <Globe size={24} className="opacity-20" />
                  </a>
                  <a 
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-white/10 p-6 text-white backdrop-blur-sm transition-transform hover:bg-white/20 hover:scale-[1.02] active:scale-95"
                  >
                    <div className="flex items-center gap-4">
                      <Globe size={32} />
                      <div>
                        <p className="text-sm font-medium text-blue-200 uppercase tracking-wider">Site Oficial</p>
                        <p className="text-xl font-bold">omolavanderia.com.br</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <img 
                src="https://www.omolavanderia.com.br/assets/images/logo.png" 
                alt="OMO Lavanderia Logo" 
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to the shirt icon if the logo fails to load
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = "flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white";
                    fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shirt"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.62 1.96V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5.42a2 2 0 0 0-1.62-1.96Z"/><path d="M12 2v17"/><path d="M12 7h4"/><path d="M12 11h4"/><path d="M12 15h4"/><path d="M8 7h4"/><path d="M8 11h4"/><path d="M8 15h4"/></svg>';
                    parent.appendChild(fallback);
                  }
                }}
              />
              <span className="text-lg font-bold text-blue-900">OMO Lavanderia</span>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Lavanderia OMO. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href={instagramUrl} className="text-slate-400 transition-colors hover:text-blue-600">
                <Instagram size={20} />
              </a>
              <a href={websiteUrl} className="text-slate-400 transition-colors hover:text-blue-600">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
