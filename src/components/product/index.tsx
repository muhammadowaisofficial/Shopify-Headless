import Children from "@/types/types"

import { Card } from "@/components/product/Card"
import { CartButton } from "@/components/product/CartButton"
import { Description } from "@/components/product/Description"
import { Image } from "@/components/product/Image"
import { Layout } from "@/components/product/Layout"
import { Link } from "@/components/product/Link"
import { Modal } from "@/components/product/Modal"
import { Price } from "@/components/product/Price"
import { Size } from "@/components/product/Size"
import { Static } from "@/components/product/Static"
import { Swatch } from "@/components/product/Swatch"
import { Title } from "@/components/product/Title"
import { Variant } from "@/components/product/Variant"

function Product({ children }: Children) {
    return <>{children}</>
}

Product.Card = Card
Product.CartButton = CartButton
Product.Description = Description
Product.Image = Image
Product.Layout = Layout
Product.Link = Link
Product.Modal = Modal
Product.Price = Price
Product.Size = Size
Product.Static = Static
Product.Swatch = Swatch
Product.Title = Title
Product.Variant = Variant

export default Product
