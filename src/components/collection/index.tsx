import Children from "@/types/types"
import { Card } from "@/components/collection/Card"
import { Grid } from "@/components/collection/Grid"
import { Heading } from "@/components/collection/Heading"
import { Image } from "@/components/collection/Image"
import { Section } from "@/components/collection/Section"
import { Title } from "@/components/collection/Title"

function Collection({ children }: Children) {
    return <>{children}</>
}

Collection.Card = Card
Collection.Grid = Grid
Collection.Heading = Heading
Collection.Image = Image
Collection.Section = Section
Collection.Title = Title

export default Collection
