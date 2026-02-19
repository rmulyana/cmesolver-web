import { portfolios } from "@/data/portfolios";

export default function PortfolioPage() {
  // Logika untuk mengurutkan data berdasarkan tahun terbaru ke terlama
  const sortedPortfolios = [...portfolios].sort((a, b) => {
    // Mengambil tahun awal dari string (misal "2023-2024" menjadi 2023)
    const yearA = parseInt(a.year.split("-")[0]) || 0;
    const yearB = parseInt(b.year.split("-")[0]) || 0;

    // Jika tahun sama, urutkan berdasarkan nama proyek agar rapi
    if (yearB === yearA) {
      return a.project.localeCompare(b.project);
    }
    return yearB - yearA;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Our Portfolio
          </h1>
          <p className="text-slate-600">
            Daftar pengalaman teknis personil ahli CME Solver dalam berbagai
            proyek nasional & internasional.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedPortfolios.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {item.cat}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">
                  {item.project}
                </h3>
                <p className="text-blue-600 text-xs font-semibold mb-3">
                  {item.client}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
