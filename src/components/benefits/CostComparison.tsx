import {
  TrendingUp,
  BarChart2,
  PieChart,
  Info,
  DollarSign,
  Image,
  CalculatorIcon,
  Clock,
  Sparkles,
  ChartPieIcon,
  LineChart,
  LayoutDashboard,
  BanknoteIcon,
  Hourglass,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import React from "react";
import BenefitCard from "./BenefitCard";

interface CostItemProps {
  label: string;
  cost: string;
  value: number;
  color: string;
  info: {
    left: string;
    right: string;
  };
  illustration?: React.ReactNode;
}

const CostItem = ({
  label,
  cost,
  value,
  color,
  info,
  illustration,
}: CostItemProps) => (
  <div className="relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-4 rounded-xl">
    <div className="flex justify-between items-center mb-2">
      <div className="font-medium flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
        {label}
      </div>
      <div className={`font-bold ${value === 5 ? "text-primary" : ""}`}>
        {cost}
      </div>
    </div>
    <Progress
      value={value}
      className="h-3 w-full bg-gray-100 rounded-full overflow-hidden"
    />
    <div className="mt-1 flex justify-between">
      <span className="text-xs text-muted-foreground">{info.left}</span>
      <span className="text-xs text-muted-foreground">{info.right}</span>
    </div>
    {illustration && <div className="mt-3">{illustration}</div>}
  </div>
);

const InfoBox = ({ illustration }: { illustration?: React.ReactNode }) => (
  <div className="mt-6 lg:mt-8 p-5 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:opacity-20 transition-all duration-300">
      <PieChart className="h-32 w-32 text-primary" />
    </div>
    <div className="relative flex items-start gap-3 sm:gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Info className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="text-base font-bold text-primary mb-2">
          Économies annuelles considérables
        </h4>
        <p className="text-sm text-slate-700">
          En choisissant IWALINK, vous réduisez vos coûts opérationnels jusqu'à{" "}
          <span className="font-bold text-primary">95%</span> tout en
          bénéficiant d'une disponibilité 24/7 et de fonctionnalités avancées.
        </p>
        {illustration && (
          <div className="mt-4 rounded-lg overflow-hidden">{illustration}</div>
        )}
      </div>
    </div>
  </div>
);

const SavingsCalculator = ({
  illustration,
}: {
  illustration?: React.ReactNode;
}) => {
  return (
    <div className="relative mt-8 lg:mt-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-100/80 to-indigo-100/80 rounded-full blur-3xl opacity-50"></div>
      <div className="relative w-full max-w-sm mx-auto bg-white rounded-xl p-6 sm:p-7 lg:p-8 shadow-xl border border-indigo-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-lg sm:text-xl transform rotate-12">
          <div className="transform -rotate-12 flex flex-col items-center">
            <Sparkles className="h-4 w-4 mb-1" />
            <div>-95%</div>
          </div>
        </div>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex justify-center mb-4 sm:mb-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center">
              <BarChart2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
          </div>
          {illustration && (
            <div className="mb-4 sm:mb-5 rounded-lg overflow-hidden">
              {illustration}
            </div>
          )}
          <div className="text-center mb-6 sm:mb-8">
            <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Économies mensuelles
            </h4>
            <div className="flex items-baseline justify-center">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                3'901
              </span>
              <span className="text-lg sm:text-xl font-medium text-primary ml-1">
                CHF
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              en moyenne par mois
            </p>
          </div>

          <div className="w-full space-y-2">
            <div className="text-sm font-medium flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
              <span className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                Coût annuel IWALINK
              </span>
              <span className="font-bold text-primary">1'188 CHF</span>
            </div>
            <div className="text-sm font-medium flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
              <span className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                Coût annuel secrétaire
              </span>
              <span className="font-bold text-red-500">54'000 CHF</span>
            </div>
            <div className="pt-2 mt-2 border-t border-gray-100">
              <div className="text-sm font-bold flex justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-sm">
                <span className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <BanknoteIcon className="h-3 w-3 text-green-600" />
                  </div>
                  Économie annuelle
                </span>
                <span className="font-bold text-green-600">52'812 CHF</span>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 w-full">
            <a
              href="#contact"
              className="text-sm sm:text-base button-primary w-full flex items-center justify-center gap-2 group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              Calculer mes économies
              <CalculatorIcon className="h-4 w-4 group-hover:animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CostComparison = () => {
  const costItems: CostItemProps[] = [
    {
      label: "IWALINK",
      cost: "99 CHF / mois",
      value: 5,
      color: "bg-primary",
      info: {
        left: "Service 24/7",
        right: "Coût minimum",
      },
      illustration: (
        <div className="relative w-full h-16 sm:h-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-primary/10 to-transparent flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm flex flex-col items-center">
              <span className="text-xs font-bold text-primary">99</span>
              <span className="text-[10px] text-primary/70">CHF/mois</span>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/10 to-transparent flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm flex flex-col items-center">
              <span className="text-xs font-bold text-primary">24/7</span>
              <span className="text-[10px] text-primary/70">Disponibilité</span>
            </div>
          </div>
          <div className="absolute inset-0 border border-primary/20 rounded-xl"></div>
        </div>
      ),
    },
    {
      label: "Secrétaire temps partiel",
      cost: "2'000 - 3'000 CHF / mois",
      value: 50,
      color: "bg-amber-500",
      info: {
        left: "Disponibilité limitée",
        right: "Coût modéré",
      },
      illustration: (
        <div className="relative w-full h-16 sm:h-20 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-amber-500/10 to-transparent flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm flex flex-col items-center">
              <span className="text-xs font-bold text-amber-500">2k+</span>
              <span className="text-[10px] text-amber-500/70">CHF/mois</span>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-amber-500/10 to-transparent flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm flex flex-col items-center">
              <span className="text-xs font-bold text-amber-500">8h/j</span>
              <span className="text-[10px] text-amber-500/70">
                Disponibilité
              </span>
            </div>
          </div>
          <div className="absolute inset-0 border border-amber-500/20 rounded-xl"></div>
        </div>
      ),
    },
    {
      label: "Secrétaire temps plein",
      cost: "4'000 - 5'000 CHF / mois",
      value: 100,
      color: "bg-red-500",
      info: {
        left: "Horaires fixes",
        right: "Coût élevé",
      },
      illustration: (
        <div className="relative w-full h-16 sm:h-20 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-red-500/10 to-transparent flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm flex flex-col items-center">
              <span className="text-xs font-bold text-red-500">4k+</span>
              <span className="text-[10px] text-red-500/70">CHF/mois</span>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-red-500/10 to-transparent flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm flex flex-col items-center">
              <span className="text-xs font-bold text-red-500">40h</span>
              <span className="text-[10px] text-red-500/70">Semaine</span>
            </div>
          </div>
          <div className="absolute inset-0 border border-red-500/20 rounded-xl"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-16 sm:mt-20 glass-card p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl relative overflow-hidden">
      <div className="absolute -right-20 sm:-right-24 -top-20 sm:-top-24 w-40 h-40 sm:w-56 sm:h-56 bg-blue-50 rounded-full opacity-70"></div>
      <div className="absolute -left-16 sm:-left-20 -bottom-16 sm:-bottom-20 w-32 h-32 sm:w-40 sm:h-40 bg-primary/5 rounded-full"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-blue-400/15 text-primary text-sm font-medium mb-4 sm:mb-5">
            <TrendingUp className="h-4 w-4 mr-2" />
            <span>Économisez jusqu'à 95%</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
            Comparaison des coûts
          </h3>

          {/* Enhanced visually appealing image placeholder for cost comparison */}
          <div className="relative w-full aspect-video mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-indigo-50/80"></div>
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="grid grid-cols-2 gap-4 w-full h-full">
                <div className="relative flex flex-col items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex flex-col items-center justify-center mb-2 sm:mb-3">
                    <span className="text-lg sm:text-xl font-bold text-red-500">
                      5000
                    </span>
                    <span className="text-xs text-red-500/70">CHF</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
                    Secrétaire
                  </span>
                </div>

                <div className="relative flex flex-col items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex flex-col items-center justify-center mb-2 sm:mb-3">
                    <span className="text-lg sm:text-xl font-bold text-primary">
                      99
                    </span>
                    <span className="text-xs text-primary/70">CHF</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
                    IWALINK
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
                <span className="text-sm font-bold text-primary flex items-center">
                  <Sparkles className="h-3.5 w-3.5 mr-1 text-primary" />
                  95% d'économies
                </span>
              </div>

              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-1.5 rounded-lg shadow-sm">
                <ChartPieIcon className="h-5 w-5 text-primary/70" />
              </div>

              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-1.5 rounded-lg shadow-sm">
                <LineChart className="h-5 w-5 text-primary/70" />
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            L'utilisation d'IWALINK représente une économie significative par
            rapport à l'embauche d'un secrétaire traditionnel en Suisse romande,
            tout en offrant une disponibilité inégalée.
          </p>

          <div className="space-y-5 sm:space-y-6">
            {costItems.map((item, index) => (
              <CostItem key={index} {...item} />
            ))}
          </div>

          <InfoBox
            illustration={
              <div className="relative w-full aspect-video bg-gradient-to-br from-white/60 to-blue-50/60 rounded-lg overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 w-full h-full">
                    <div className="col-span-1 flex flex-col items-center justify-center border-r border-dashed border-blue-200/50">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-50/80 rounded-xl flex items-center justify-center">
                        <span className="text-red-500 font-bold text-xl">
                          5K
                        </span>
                      </div>
                      <span className="text-xs mt-1 text-slate-600">
                        Par mois
                      </span>
                    </div>

                    <div className="col-span-1 flex items-center justify-center">
                      <div className="p-2 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                        <span className="font-bold text-sm text-primary">
                          vs
                        </span>
                      </div>
                      <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"></div>
                    </div>

                    <div className="col-span-1 flex flex-col items-center justify-center border-l border-dashed border-blue-200/50">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <span className="text-primary font-bold text-xl">
                          99
                        </span>
                      </div>
                      <span className="text-xs mt-1 text-slate-600">
                        Par mois
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-1 rounded-full shadow-sm">
                    <BanknoteIcon className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-xs font-bold text-green-600">
                      -95%
                    </span>
                  </div>
                </div>
              </div>
            }
          />
        </div>

        <SavingsCalculator
          illustration={
            <div className="relative w-full aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                <LayoutDashboard className="h-8 w-8 text-primary/30 mb-2" />
                <div className="text-sm text-primary/70 text-center mb-3">
                  Calculateur d'économies
                </div>

                <div className="w-full flex justify-between items-center px-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-1">
                      <Hourglass className="h-5 w-5 text-red-400" />
                    </div>
                    <span className="text-xs text-slate-500">Standard</span>
                  </div>

                  <div className="h-px w-16 bg-dashed bg-slate-200"></div>

                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-1">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs text-slate-500">IWALINK</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 right-3 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <BanknoteIcon className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                <span className="text-xs font-medium text-slate-700">
                  Économies:{" "}
                  <span className="font-bold text-green-600">
                    52'812 CHF/an
                  </span>
                </span>
              </div>
            </div>
          }
        />
      </div>

      {/* New feature comparison cards with enhanced design */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <BenefitCard
          icon={DollarSign}
          title="IWALINK - 99 CHF/mois"
          description="Service disponible 24/7, notifications en temps réel, aucun frais supplémentaire."
          gradient="from-blue-50 to-indigo-50"
          illustration={
            <div className="relative w-full aspect-video bg-gradient-to-br from-white/80 to-blue-50/50 rounded-lg overflow-hidden group hover:shadow-md transition-all duration-300 border border-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-3 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <DollarSign className="h-6 w-6 text-primary/70" />
                  </div>
                  <div className="text-xs text-primary text-center">
                    <div className="font-bold">99 CHF</div>
                    <div className="text-[10px] text-primary/70">
                      tout compris
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-primary/5 to-transparent"></div>
            </div>
          }
        />

        <BenefitCard
          icon={Clock}
          title="Secrétaire temps partiel"
          description="Disponibilité limitée, 2'000 - 3'000 CHF par mois, charges sociales en sus."
          gradient="from-amber-50 to-orange-50"
          illustration={
            <div className="relative w-full aspect-video bg-gradient-to-br from-white/80 to-amber-50/50 rounded-lg overflow-hidden group hover:shadow-md transition-all duration-300 border border-amber-500/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-3 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-amber-500/70" />
                  </div>
                  <div className="text-xs text-amber-500 text-center">
                    <div className="font-bold">2'000+ CHF</div>
                    <div className="text-[10px] text-amber-500/70">
                      temps partiel
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-amber-500/5 to-transparent"></div>
            </div>
          }
        />

        <BenefitCard
          icon={BarChart2}
          title="Secrétaire temps plein"
          description="Horaires fixes, 4'000 - 5'000 CHF par mois, plus avantages sociaux."
          gradient="from-red-50 to-pink-50"
          illustration={
            <div className="relative w-full aspect-video bg-gradient-to-br from-white/80 to-red-50/50 rounded-lg overflow-hidden group hover:shadow-md transition-all duration-300 border border-red-500/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-3 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
                    <BarChart2 className="h-6 w-6 text-red-500/70" />
                  </div>
                  <div className="text-xs text-red-500 text-center">
                    <div className="font-bold">4'000+ CHF</div>
                    <div className="text-[10px] text-red-500/70">
                      temps plein
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-red-500/5 to-transparent"></div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default CostComparison;
