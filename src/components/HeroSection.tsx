"use client"
import { motion } from 'framer-motion';
import { Car, MapPin, Calendar, Users, ArrowRight, Star, Shield, Clock } from 'lucide-react';

export default function RentalCarHero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden w-full" style={{ background: 'linear-gradient(135deg, #021526 0%, #03346E 100%)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10"
          style={{ backgroundColor: '#6EACDA' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full opacity-10"
          style={{ backgroundColor: '#E2E2B6' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full opacity-10"
          style={{ backgroundColor: '#6EACDA' }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: '#6EACDA', color: '#021526' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="w-4 h-4 mr-2" />
                #1 Rated Car Rental Service
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight" style={{ color: '#E2E2B6' }}>
                Drive Your
                <motion.span
                  className="block"
                  style={{ color: '#6EACDA' }}
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(110, 172, 218, 0.3)',
                      '0 0 40px rgba(110, 172, 218, 0.6)',
                      '0 0 20px rgba(110, 172, 218, 0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Adventure
                </motion.span>
              </h1>
              
              <p className="text-xl leading-relaxed" style={{ color: '#E2E2B6', opacity: 0.9 }}>
                Discover freedom on four wheels with our premium fleet of rental cars. 
                From city cruisers to adventure-ready SUVs, we've got your journey covered.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              {[
                { icon: Shield, text: 'Fully Insured' },
                { icon: Clock, text: '24/7 Support' },
                { icon: Car, text: 'Premium Fleet' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center px-4 py-2 rounded-full border-2"
                  style={{ borderColor: '#6EACDA', color: '#6EACDA' }}
                  whileHover={{ 
                    backgroundColor: '#6EACDA', 
                    color: '#021526',
                    scale: 1.05 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <motion.button
                className="px-12 py-4 rounded-2xl font-bold text-xl flex items-center justify-center group"
                style={{ backgroundColor: '#6EACDA', color: '#021526' }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 25px 50px rgba(110, 172, 218, 0.4)',
                  backgroundColor: '#E2E2B6'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>

              <motion.button
                className="px-12 py-4 rounded-2xl font-bold text-xl border-2 flex items-center justify-center group"
                style={{ 
                  borderColor: '#6EACDA', 
                  color: '#6EACDA',
                  backgroundColor: 'transparent'
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#6EACDA',
                  color: '#021526',
                  boxShadow: '0 25px 50px rgba(110, 172, 218, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Car className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Rent Now
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-8">
              {[
                { number: '50K+', label: 'Happy Customers' },
                { number: '500+', label: 'Premium Cars' },
                { number: '100+', label: 'Locations' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    className="text-3xl font-bold"
                    style={{ color: '#6EACDA' }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm" style={{ color: '#E2E2B6', opacity: 0.8 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Car Illustration */}
          <motion.div
            className="relative"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="relative z-10"
              variants={floatAnimation}
              animate="animate"
            >
              <div
                className="w-full h-96 rounded-3xl relative overflow-hidden shadow-2xl"
                style={{ backgroundColor: 'rgba(110, 172, 218, 0.1)' }}
              >
                {/* Car SVG Illustration */}
                <svg
                  className="w-full h-full p-12"
                  viewBox="0 0 400 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Car Body */}
                  <motion.path
                    d="M50 120 L80 80 L320 80 L350 120 L350 140 L320 140 L320 160 L280 160 L280 140 L120 140 L120 160 L80 160 L80 140 L50 140 Z"
                    fill="#6EACDA"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  
                  {/* Windows */}
                  <motion.path
                    d="M90 80 L90 100 L180 100 L180 80 Z M220 80 L220 100 L310 100 L310 80 Z"
                    fill="#E2E2B6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  />
                  
                  {/* Wheels */}
                  <motion.circle
                    cx="110"
                    cy="150"
                    r="20"
                    fill="#021526"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                  />
                  <motion.circle
                    cx="290"
                    cy="150"
                    r="20"
                    fill="#021526"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
                  />
                  
                  {/* Wheel Details */}
                  <motion.circle
                    cx="110"
                    cy="150"
                    r="12"
                    fill="#E2E2B6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                  />
                  <motion.circle
                    cx="290"
                    cy="150"
                    r="12"
                    fill="#E2E2B6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.2, type: "spring" }}
                  />
                </svg>

                {/* Glowing effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(45deg, rgba(110, 172, 218, 0.1), rgba(226, 226, 182, 0.1))'
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 p-3 rounded-full"
              style={{ backgroundColor: '#6EACDA' }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Car className="w-6 h-6" style={{ color: '#021526' }} />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 p-3 rounded-full"
              style={{ backgroundColor: '#E2E2B6' }}
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MapPin className="w-6 h-6" style={{ color: '#021526' }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}