import { getProducts } from '@/actions/products'
import ProductGrid from '@/components/ProductGrid'

export default async function Home() {
  const products = await getProducts()
  return <ProductGrid products={products} />
}
