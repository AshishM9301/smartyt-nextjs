import Container from "@/components/Container";
import { getSingleProduct, getTrendingProduct } from "@/helpers";
import { Products } from "../../../type";
import ProductsData from "@/components/ProductsData";
import SingleProduct from "@/components/SingleProduct";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ProductPage = async ({ searchParams }: Props) => {
  const _id = Number(searchParams?._id);
  const product = getSingleProduct(_id);

  const data = await getTrendingProduct();

  return (
    <div>
      <Container>
        <SingleProduct product={product} />
        <div>
          <p className="text-xl py-1 font-semibold">Trending Products</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {data?.map((item: Products) => (
              <ProductsData key={item?._id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
