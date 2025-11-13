import { useEffect, useState } from "react";
import type { IProduct } from "../Models/ShopModels";
import { ShopService } from "../Service/ShopService";
import Loader from "../../../components/Loader";
import HeaderShop from "../../../components/HeaderShop";
import FooterShop from "../../../components/FooterShop";
import Card from "../../../components/CardShop";

const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const res = await ShopService.productList();
      setProducts(res);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <HeaderShop />
      <main>
        <section className="shop" id="shop">
          <div className="container">
            <div className="row">
              <h2 className="title">SHOP MAGAZINES</h2>
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
            </div>
          </div>
        </section>
      </main>
      <FooterShop />
    </>
  );
};

export default Shop;
