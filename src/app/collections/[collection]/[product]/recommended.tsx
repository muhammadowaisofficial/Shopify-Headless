// import Collection from "@/components/collection"
import Collection from "@/components/collection"
import { getProductsByCollection,getProductByHandle, getProductRecommendations } from "@/lib/storefront/getProducts"

export default async function RecommendedProducts({ productID }: { productID: string }) {
    const r = await getProductRecommendations(productID)

    return (
        <section>
            <h3 className="mb-4 text-lg font-bold text-info">You may also like</h3>
            <ul className="mx-auto grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
                {r.slice(0, 4).map((p) => {
                    const { id, title, featuredImage, onlineStoreUrl, handle } = p
                    return (
                        <Collection.Card
                            // href={onlineStoreUrl ?? `/collections/full-catalog/${handle}`}
                            href={`/collections/full-catalog/${handle}`}
                            key={id}
                            rounded
                        >
                            <Collection.Image
                                title={title}
                                image={featuredImage!}
                            />
                            <Collection.Title
                                className="text-sm sm:text-base md:text-sm lg:text-base"
                                title={title}
                                truncated
                                centered
                                rounded
                            />
                        </Collection.Card>
                    )
                })}
            </ul>
        </section>
    )
}
