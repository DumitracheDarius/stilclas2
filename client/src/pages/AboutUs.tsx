import { useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { dividerVariants, sectionContainerVariants } from "@/components/ui/stylesheet";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  
  // Set page title and description
  useEffect(() => {
    document.title = `${t('about_title')} - StilClas`;
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
            <h1 className="text-4xl md:text-5xl font-playfair text-white font-semibold mb-4">{t('our_story')}</h1>
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
                src="https://pixabay.com/get/g6c9d79db47aed644838c48ff006268b5c4c2a65e4062db8b43acaad795da1dd70eb8a5b04e8f0a69b70764c89adfc28cacd89be964045302b66febe55928c74e_1280.jpg" 
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
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">{t('our_story')}</h2>
              <div className={cn(dividerVariants({ alignment: "left" }))}></div>
              <p className="text-gray-800 mb-6 font-lato leading-relaxed">
                {t('our_story_p1')}
              </p>
              <p className="text-gray-800 mb-6 font-lato leading-relaxed">
                {t('our_story_p2')}
              </p>
              <p className="text-gray-800 mb-8 font-lato leading-relaxed">
                {t('our_story_p3')}
              </p>
              <Button 
                asChild 
                variant="default"
                size="lg"
                className="transform hover:-translate-y-1"
              >
                <Link href="/collections">
                  {t('discover_craftsmanship')}
                </Link>
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
              <h3 className="text-2xl font-playfair font-semibold mb-4">Our Mission</h3>
              <div className={cn(dividerVariants({ alignment: "left", spacing: "tight" }))}></div>
              <p className="font-lato leading-relaxed">
                At StilClas, our mission is to create exceptional menswear that embodies timeless elegance and impeccable craftsmanship. We're dedicated to providing our clients with garments that not only look exceptional but also feel extraordinary to wear, combining the finest materials with traditional tailoring techniques and modern design sensibilities.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-8 rounded-md shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-playfair font-semibold mb-4">Our Vision</h3>
              <div className={cn(dividerVariants({ alignment: "left", spacing: "tight" }))}></div>
              <p className="font-lato leading-relaxed">
                We envision a world where men approach dressing not as a daily obligation, but as an expression of personal excellence. StilClas aims to be recognized globally as the definitive destination for those who value meticulous craftsmanship, timeless design, and clothing that enhances their confidence and presence in any setting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Craftsmanship Section */}
      <section className={sectionContainerVariants({ variant: "white" })}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3">Our Craftsmanship</h2>
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
                <h3 className="text-2xl font-playfair font-semibold mb-4">The Art of Tailoring</h3>
                <p className="text-gray-800 mb-6 font-lato leading-relaxed">
                  At StilClas, we maintain the traditions of bespoke tailoring while embracing innovation. Each garment begins with premium fabrics sourced from the finest mills in Italy and the United Kingdom. Our master tailors, with decades of experience, craft each piece with meticulous attention to detail.
                </p>
                <p className="text-gray-800 mb-6 font-lato leading-relaxed">
                  What sets us apart is our commitment to construction techniques that have stood the test of time. From hand-stitched lapels to properly canvassed jackets, we refuse to compromise on quality. The result is clothing with exceptional drape, comfort, and longevity.
                </p>
                <p className="text-gray-800 font-lato leading-relaxed">
                  We believe that true luxury is found in the details that others might overlook – the perfect buttonhole, the precise roll of a lapel, the clean finishing of an interior seam. These elements combine to create garments of exceptional quality and distinction.
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
                  src="https://pixabay.com/get/g76da9c87b0c4e3c2de99ae94d5bcf60bee95264ae46a7e53d0eaf0c1e88bce499c5bb66f0e5efece27ca5aaebe8c66e8a93e0ce8fc1a0e76a28d7d50d2c0e20f_1280.jpg" 
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
