"use client"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 py-20 w-full"
      style={{
        background: `linear-gradient(135deg, #021526 0%, #03346E 50%, #6EACDA 100%)`
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.2 }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left Side - Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: '#E2E2B6' }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              About{' '}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="bg-gradient-to-r from-[#6EACDA] to-[#E2E2B6] bg-clip-text text-transparent"
              >
                DriveElite
              </motion.span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.p 
              className="text-xl lg:text-2xl leading-relaxed"
              style={{ color: '#E2E2B6' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Experience luxury on wheels with our premium fleet of carefully selected vehicles.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed opacity-90"
              style={{ color: '#6EACDA' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              From business trips to weekend getaways, we provide exceptional vehicles 
              that match your lifestyle and elevate every journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex space-x-8 pt-6"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold"
                  style={{ color: '#E2E2B6' }}
                >
                  500+
                </motion.div>
                <div className="text-sm" style={{ color: '#6EACDA' }}>
                  Premium Cars
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold"
                  style={{ color: '#E2E2B6' }}
                >
                  24/7
                </motion.div>
                <div className="text-sm" style={{ color: '#6EACDA' }}>
                  Support
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold"
                  style={{ color: '#E2E2B6' }}
                >
                  50k+
                </motion.div>
                <div className="text-sm" style={{ color: '#6EACDA' }}>
                  Happy Clients
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [-10, 10, -10]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-10"
          >
            <motion.img
              src="https://mocha-cdn.com/01996d1e-0ee2-7401-980c-cfcca79ce425/rental-car-hero.jpg"
              alt="Luxury rental car"
              className="w-full h-auto rounded-2xl shadow-2xl"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{
                filter: 'drop-shadow(0 25px 25px rgba(3, 52, 110, 0.3))'
              }}
            />
          </motion.div>
          
          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-20"
            style={{ backgroundColor: '#E2E2B6' }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-30"
            style={{ backgroundColor: '#6EACDA' }}
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
