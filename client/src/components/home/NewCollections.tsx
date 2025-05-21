import { Link } from "wouter";
import { cn } from "@/lib/utils";
import {
  dividerVariants,
  sectionContainerVariants,
} from "@/components/ui/stylesheet";
import { Collection } from "@/lib/types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface NewCollectionsProps {
  collections: Collection[];
  className?: string;
}

export default function NewCollections({
  collections,
  className,
}: NewCollectionsProps) {
  const { t } = useTranslation();
  // Stagger animation for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className={cn(sectionContainerVariants({ variant: "white" }), className)}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3">
            {t("collections")}
          </h2>
          <div className={dividerVariants()}></div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              className="group transition-luxury"
              variants={itemVariants}
            >
              <div className="overflow-hidden rounded-md shadow-md mb-4">
                <img
                  src={collection.imageUrl}
                  alt={t(collection.translationKey || collection.title)}
                  className="w-full h-96 object-cover transition-luxury group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-playfair font-medium mb-2">
                {t(collection.translationKey || collection.title)}
              </h3>
              <p className="text-gray-800 mb-4 font-lato">
                {t(collection.description)}
              </p>
              <Link
                href={`/collections`}
                className="inline-block text-burgundy font-medium border-b border-burgundy hover:border-black transition-luxury"
              >
                {t("view_all")}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
