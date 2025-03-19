import { getProduct } from '@/actions/products'
import ProductAction from '@/components/product/ProductAction'
import ProductQuantity from '@/components/product/ProductQuantity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  params: { id: string }
}

const ProductPage = async ({ params: { id } }: Props) => {
  //get the info of the product
  const product = await getProduct(id)

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <Link
          href={'/'}
          className="inline-flex items-center text-lg font-medium mb-6 hover:text-gray-600"
        >
          Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {product.images[0].src && (
              <div className="aspect-auto rounded-lg overflow-hidden flex items-center justify-center h-[80vh]">
                <Image
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  width={600}
                  height={600}
                  className="max-w-full max-h-full object-contain"
                  priority
                />
              </div>
            )}

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h1 className="text-2xl font-bold">{product.name}</h1>

                <ProductQuantity product={product} />

                <div className="text-2xl font-bold">${product.price}</div>
              </div>

              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </div>
          <div className="lg:col-span-1">
            <ProductAction />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
