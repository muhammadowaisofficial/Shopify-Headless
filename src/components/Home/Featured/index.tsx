import { getCollectionByHandle } from "@/lib/storefront/getCollections"
import { FeaturedCollection } from "./Featured"

export async function Featured({ collectionHandle }: { collectionHandle: string }) {
    const featured = await getCollectionByHandle(collectionHandle)
    return <FeaturedCollection featured={featured} />
}
