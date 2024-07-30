export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>we are the best IT Company</p>
              <h1>Welcome to kavita website</h1>
              <p>
                Are you ready to take your business to the next level width
                cutting-edge IT solution ?Look no furter other than kavita's
                website,we specialise in providing innovative IT service and
                solutions tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">Learn more</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/student.png"
                alt="coding together"
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/*@nd section*/}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
          <div className="div1">
            <h2>100,00</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well known developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>services</p>
          </div>
        </div>
      </section>

      {/*3rd section*/}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src="/images/student.png"
              alt="coding together"
              width="500"
              height="500"
            />
          </div>
          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get started today</h1>
            <p>
              Are you ready to take your business to the next level width
              cutting-edge IT solution ?Look no furter other than kavita's
              website ,we specialise in providing innovative IT service and
              solutions tailored to meet your unique needs.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">Learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
