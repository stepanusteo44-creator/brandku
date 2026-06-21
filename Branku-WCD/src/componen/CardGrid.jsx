import features from '../data/features';

function CardGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">
          Mengapa BrandKu?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="bg-white p-8 rounded-2xl shadow-[0_0px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-start"
            >
              <div className="text-2xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardGrid;
