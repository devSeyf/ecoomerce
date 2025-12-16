import styles from "./SpecialOffers.module.css";
import { motion } from "motion/react";
import { TProduct } from "@types";
import { Link } from "react-router-dom";

type SpecialOffersProps = {
    products: TProduct[];
};

const SpecialOffers = ({ products }: SpecialOffersProps) => {
    // Take first 3 products if available, or just render what is passed
    const offers = products.slice(0, 3);

    if (offers.length === 0) return null;

    return (
        <section className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.header}
            >
                <h2 className={styles.title}>Exclusive Offers</h2>
                <p className={styles.subtitle}>Grab these limited-time deals before they're gone!</p>
            </motion.div>

            <div className={styles.grid}>
                {offers.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={styles.card}
                    >
                        <div className={styles.imageContainer}>
                            <span className={styles.badge}>-20% OFF</span>
                            <img src={product.img} alt={product.title} className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.productTitle}>{product.title}</h3>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>${(Number(product.price || 0) * 0.8).toFixed(2)}</span>
                                <span className={styles.oldPrice}>${Number(product.price || 0).toFixed(2)}</span>
                            </div>
                            <Link
                                to={`/categories/products/${product.cat_prefix}`}
                                className={styles.button}
                                style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}
                            >
                                Shop Now
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SpecialOffers;
