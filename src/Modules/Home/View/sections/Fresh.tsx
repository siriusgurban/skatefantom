import Card from "../../../../components/Card";

function Fresh() {
  return (
    <section id="fresh" className="fresh">
      <div className="container">
        <div className="row">
          <h2 className="title_top">Fresh Ink,</h2>

          <div className="box">
            <Card
              id="12"
              imgUrl="https://shop.skatefantom.com/cdn/shop/files/Fantom05_Cover_01_Post-min.jpg"
              title="Issue 5 - Winter 2025"
              price={9.69}
            />
            <Card
              id="12"
              imgUrl="https://shop.skatefantom.com/cdn/shop/files/Fantom05_Cover_01_Post-min.jpg"
              title="Issue 5 - Winter 2025"
              price={9.69}
            />
            <Card
              id="12"
              imgUrl="https://shop.skatefantom.com/cdn/shop/files/Fantom05_Cover_01_Post-min.jpg"
              title="Issue 5 - Winter 2025"
              price={9.69}
            />
            <Card
              id="12"
              imgUrl="https://shop.skatefantom.com/cdn/shop/files/Fantom05_Cover_01_Post-min.jpg"
              title="Issue 5 - Winter 2025"
              price={9.69}
            />
          </div>

          <h2 className="title_bottom">Fresh looks.</h2>
        </div>
      </div>
    </section>
  );
}

export default Fresh;
