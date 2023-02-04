import "./TrendingCarousel.css";

const TrendingCarousel = () => {
  return (
    <>
      <section className="trendingCarousel__container">
        <h2 className="trendingCarousel__heading">Trending Styles</h2>
        <div className="trendingCarousel__grid">
          <div>
            <button> left </button>
          </div>
          <div></div>
          <div>
            <button> right </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingCarousel;
