"use client"

import type { PropsWithChildren } from "react"
import { motion } from "framer-motion"

type CardProps = PropsWithChildren<{
    carouselItem?: boolean
}>

const fadeInUp = {
    hidden: { y: -80, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

export function Card({ children, carouselItem, ...props }: CardProps) {
    if (carouselItem) {
        return (
            <motion.div
                variants={fadeInUp}
                className={`
                    relative h-full overflow-hidden rounded-3xl
                    hover:brightness-105
                `}
                {...props}
            >
                {children}
            </motion.div>
        )
    }

    return (
        <motion.li
            variants={fadeInUp}
            className={`
                relative h-full overflow-hidden rounded-3xl
                hover:brightness-105
            `}
            {...props}
        >
            {children}
        </motion.li>
    )
}
