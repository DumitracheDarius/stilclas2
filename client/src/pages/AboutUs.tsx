import { useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  dividerVariants,
  sectionContainerVariants,
} from "@/components/ui/stylesheet";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  // Set page title and description
  useEffect(() => {
    document.title = `${t("about_title")} - StilClas`;
  }, [t]);

  return (
    <>
      {/* About Hero */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-playfair text-white font-semibold mb-4">
              {t("our_story")}
            </h1>
            <div className={dividerVariants()}></div>
          </motion.div>
        </div>
      </section>

      {/* Main About Content */}
      <section className={sectionContainerVariants({ variant: "white" })}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/collection12.jpg"
                alt="StilClas Atelier"
                className="rounded-md shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
                {t("our_story")}
              </h2>
              <div className={cn(dividerVariants({ alignment: "left" }))}></div>
              <p className="text-gray-800 mb-6 font-lato leading-relaxed">
                {t("our_story_p1")}
              </p>
              <p className="text-gray-800 mb-6 font-lato leading-relaxed">
                {t("our_story_p2")}
              </p>
              <p className="text-gray-800 mb-8 font-lato leading-relaxed">
                {t("our_story_p3")}
              </p>
              <Button
                asChild
                variant="default"
                size="lg"
                className="transform hover:-translate-y-1"
              >
                <Link href="/collections">{t("discover_craftsmanship")}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className={sectionContainerVariants({ variant: "gray" })}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="glass-card p-8 rounded-md shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-playfair font-semibold mb-4">
                {t("our_mission")}
              </h3>
              <div
                className={cn(
                  dividerVariants({ alignment: "left", spacing: "tight" }),
                )}
              ></div>
              <p className="font-lato leading-relaxed">
                {t("mission_description")}
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-8 rounded-md shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-playfair font-semibold mb-4">
                {t("our_vision")}
              </h3>
              <div
                className={cn(
                  dividerVariants({ alignment: "left", spacing: "tight" }),
                )}
              ></div>
              <p className="font-lato leading-relaxed">
                {t("vision_description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className={sectionContainerVariants({ variant: "white" })}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3">
              {t("our_craftsmanship")}
            </h2>
            <div className={dividerVariants()}></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-playfair font-semibold mb-4">
                  {t("art_of_tailoring")}
                </h3>
                <p className="text-gray-800 mb-6 font-lato leading-relaxed">
                  {t("tailoring_p1")}
                </p>
                <p className="text-gray-800 mb-6 font-lato leading-relaxed">
                  {t("tailoring_p2")}
                </p>
                <p className="text-gray-800 font-lato leading-relaxed">
                  {t("tailoring_p3")}
                </p>
              </motion.div>
            </div>
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/assets/hero-image.jpg"
                  alt="StilClas Tailoring"
                  className="rounded-md shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
