import { HomeSlider, ProductSlider, Heading } from "@components/common";
import { Loading } from "@components/feedback";
import useProducts from "@hooks/useProducts";
import { motion } from "motion/react";

const Home = () => {
  const { loading, error, productsFullInfo } = useProducts();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HomeSlider />
      <Heading title="Trending Products" />
      <Loading status={loading} error={error} type="product">
        {/* Show all products but limit/slice if needed, or pass all to slider */}
        <ProductSlider products={productsFullInfo.slice(0, 10)} />
      </Loading>

      <div className="mt-5">
        <Heading title="New Arrivals" />
        <Loading status={loading} error={error} type="product">
          <ProductSlider products={productsFullInfo.slice(5, 15)} />
        </Loading>
      </div>

    </motion.div>
  );
};

export default Home;
