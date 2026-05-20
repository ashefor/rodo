const FOUITA_WIDGET_URL = "https://emb.fouita.com/widget/0x47da77/fto2ercyt";

export function FouitaPortfolioEmbed() {
  return (
    <div className="relative overflow-hidden" style={{ borderRadius: "var(--radius-figure)" }}>
      <iframe
        src={FOUITA_WIDGET_URL}
        title="Rodo Lens Instagram feed"
        width="100%"
        height="980"
        loading="lazy"
        className="w-full"
        style={{
          border: 0,
          background: "var(--color-paper-2)",
          minHeight: "720px",
        }}
      />
    </div>
  );
}