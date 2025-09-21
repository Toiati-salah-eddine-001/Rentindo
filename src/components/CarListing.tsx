"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, DollarSign, Circle, Truck, Crown, Eye, Heart, 
  Star, Check, Users, Settings, Fuel, Calendar, 
  Info, Shield, Wrench, Clock, X 
} from 'lucide-react';

export default function CarListing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'all', name: 'All Vehicles', icon: Car },
    { id: 'economy', name: 'Economy', icon: DollarSign },
    { id: 'compact', name: 'Compact', icon: Circle },
    { id: 'suv', name: 'SUV', icon: Truck },
    { id: 'luxury', name: 'Luxury', icon: Crown }
  ];

  const vehicles = [
    {
      id: 1,
      name: 'Dacia Logan',
      category: 'economy',
      price: 28,
      originalPrice: 35,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      reviews: 234,
      features: ['5 Seats', 'Manual', 'AC', 'Bluetooth'],
      specs: { seats: 5, transmission: 'Manual', fuel: 'Petrol', doors: 4 },
      popular: true,
      available: 23
    },
    {
      id: 2,
      name: 'Renault Clio',
      category: 'compact',
      price: 35,
      originalPrice: 42,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviews: 189,
      features: ['5 Seats', 'Automatic', 'AC', 'GPS'],
      specs: { seats: 5, transmission: 'Automatic', fuel: 'Petrol', doors: 5 },
      available: 18
    },
    {
      id: 3,
      name: 'Toyota RAV4',
      category: 'suv',
      price: 65,
      originalPrice: 78,
      image: 'https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 156,
      features: ['7 Seats', 'Automatic', '4WD', 'Premium Audio'],
      specs: { seats: 7, transmission: 'Automatic', fuel: 'Hybrid', doors: 5 },
      popular: true,
      available: 12
    },
    {
      id: 4,
      name: 'Mercedes C-Class',
      category: 'luxury',
      price: 95,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 98,
      features: ['5 Seats', 'Automatic', 'Leather', 'Premium Sound'],
      specs: { seats: 5, transmission: 'Automatic', fuel: 'Petrol', doors: 4 },
      available: 8
    },
    {
      id: 5,
      name: 'Peugeot 208',
      category: 'economy',
      price: 32,
      originalPrice: 38,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      reviews: 167,
      features: ['5 Seats', 'Manual', 'AC', 'USB'],
      specs: { seats: 5, transmission: 'Manual', fuel: 'Petrol', doors: 5 },
      available: 19
    },
    {
      id: 6,
      name: 'Nissan X-Trail',
      category: 'suv',
      price: 58,
      originalPrice: 68,
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviews: 143,
      features: ['7 Seats', 'Automatic', 'AWD', 'Sunroof'],
      specs: { seats: 7, transmission: 'Automatic', fuel: 'Petrol', doors: 5 },
      available: 15
    }
  ];

  const filteredVehicles = selectedCategory === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  // Show only first 6 vehicles unless "Show More" is clicked
  const displayedVehicles = showAll ? filteredVehicles : filteredVehicles.slice(0, 6);
  const hasMoreVehicles = filteredVehicles.length > 6;

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleBookVehicle = (vehicle) => {
    // Handle booking logic here
    console.log('Booking vehicle:', vehicle);
  };

  const handleQuickView = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="vehicles" 
      className="py-20"
      style={{ background: 'transparent' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(110, 172, 218, 0.1)', color: '#6EACDA' }}
              whileHover={{ scale: 1.05 }}
            >
              <Car size={16} />
              <span className="text-sm font-medium">Premium Vehicle Fleet</span>
            </motion.div>
            
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: '#021526' }}
            >
              Choose Your Perfect
              <motion.span 
                className="block mt-2"
                style={{ 
                  background: 'linear-gradient(135deg, #6EACDA, #03346E)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Morocco Adventure Vehicle
              </motion.span>
            </h2>
            
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: 'rgba(2, 21, 38, 0.7)' }}
            >
              From budget-friendly city cars to luxury SUVs for desert adventures - 
              all vehicles are verified, insured, and ready for your Morocco journey.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'shadow-lg'
                      : 'hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category.id ? '#6EACDA' : 'rgba(226, 226, 182, 0.1)',
                    color: selectedCategory === category.id ? '#021526' : '#03346E',
                    borderColor: selectedCategory === category.id ? '#6EACDA' : 'rgba(110, 172, 218, 0.3)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <IconComponent size={16} />
                  <span className="font-medium">{category.name}</span>
                  {selectedCategory === category.id && (
                    <motion.span 
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(2, 21, 38, 0.2)' }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      {filteredVehicles.length}
                    </motion.span>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Vehicle Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {displayedVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  className="group rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: 'rgba(226, 226, 182, 0.05)',
                    borderColor: 'rgba(110, 172, 218, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                  variants={itemVariants}
                  whileHover={{ 
                    borderColor: '#6EACDA',
                    boxShadow: '0 25px 50px rgba(110, 172, 218, 0.2)'
                  }}
                  layout
                >
                  {/* Vehicle Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      {vehicle.popular && (
                        <motion.span 
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{ backgroundColor: '#6EACDA', color: '#021526' }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          Popular
                        </motion.span>
                      )}
                      <motion.span 
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ backgroundColor: 'rgba(46, 204, 113, 0.9)', color: 'white' }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      >
                        {vehicle.available} Available
                      </motion.span>
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        onClick={() => handleQuickView(vehicle)}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                        style={{ backgroundColor: 'rgba(226, 226, 182, 0.9)', color: '#021526' }}
                        whileHover={{ 
                          backgroundColor: '#6EACDA',
                          scale: 1.1 
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye size={16} />
                      </motion.button>
                      <motion.button 
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                        style={{ backgroundColor: 'rgba(226, 226, 182, 0.9)', color: '#021526' }}
                        whileHover={{ 
                          backgroundColor: '#6EACDA',
                          scale: 1.1 
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart size={16} />
                      </motion.button>
                    </div>

                    {/* Price Badge */}
                    <div 
                      className="absolute bottom-4 right-4 px-4 py-2 rounded-lg"
                      style={{ backgroundColor: 'rgba(6, 52, 110, 0.9)', color: '#E2E2B6' }}
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold">€{vehicle.price}</div>
                        <div className="text-xs opacity-90">per day</div>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Info */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 
                          className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors duration-300"
                          style={{ color: '#021526' }}
                        >
                          {vehicle.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <Star size={14} style={{ color: '#6EACDA' }} fill="currentColor" />
                            <span className="text-sm font-medium" style={{ color: '#021526' }}>
                              {vehicle.rating}
                            </span>
                          </div>
                          <span className="text-sm" style={{ color: 'rgba(2, 21, 38, 0.6)' }}>
                            ({vehicle.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      
                      {vehicle.originalPrice > vehicle.price && (
                        <div className="text-right">
                          <div className="text-sm line-through" style={{ color: 'rgba(2, 21, 38, 0.5)' }}>
                            €{vehicle.originalPrice}
                          </div>
                          <div className="text-xs font-medium" style={{ color: '#2ecc71' }}>
                            Save €{vehicle.originalPrice - vehicle.price}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check size={12} style={{ color: '#2ecc71' }} />
                          <span className="text-sm" style={{ color: 'rgba(2, 21, 38, 0.7)' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Specs */}
                    <div 
                      className="flex items-center justify-between text-sm mb-6"
                      style={{ color: 'rgba(2, 21, 38, 0.6)' }}
                    >
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{vehicle.specs.seats}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Settings size={14} />
                        <span>{vehicle.specs.transmission}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Fuel size={14} />
                        <span>{vehicle.specs.fuel}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Car size={14} />
                        <span>{vehicle.specs.doors}D</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <motion.button
                        className="flex-1 px-4 py-2 rounded-lg font-medium flex items-center justify-center space-x-2"
                        style={{ backgroundColor: '#6EACDA', color: '#021526' }}
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: '#E2E2B6'
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleBookVehicle(vehicle)}
                      >
                        <Calendar size={16} />
                        <span>Book Now</span>
                      </motion.button>
                      <motion.button
                        className="p-2 rounded-lg border-2"
                        style={{ 
                          borderColor: '#6EACDA',
                          color: '#6EACDA'
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: '#6EACDA',
                          color: '#021526'
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleQuickView(vehicle)}
                      >
                        <Info size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* See More Button */}
          {hasMoreVehicles && (
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-4 rounded-2xl font-bold text-lg border-2 flex items-center justify-center mx-auto space-x-3 transition-all duration-300"
                style={{ 
                  borderColor: '#6EACDA',
                  color: '#6EACDA',
                  backgroundColor: 'transparent'
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#6EACDA',
                  color: '#021526',
                  boxShadow: '0 20px 40px rgba(110, 172, 218, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                      <span>{showAll ? 'Show Less' : `See More (${filteredVehicles.length - 6} more)`}</span>
                <motion.div
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.button>
            </motion.div>
          )}

          {/* Fleet Stats */}
          <motion.div 
            className="rounded-2xl p-8 border-2"
            style={{ 
              background: 'linear-gradient(135deg, rgba(6, 52, 110, 0.05), rgba(110, 172, 218, 0.05), rgba(6, 52, 110, 0.05))',
              borderColor: 'rgba(110, 172, 218, 0.2)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#021526' }}>
                Why Choose Our Fleet?
              </h3>
              <p className="max-w-2xl mx-auto" style={{ color: 'rgba(2, 21, 38, 0.7)' }}>
                Every vehicle in our fleet is carefully selected, thoroughly inspected, 
                and maintained to the highest standards for your safety and comfort.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Shield, color: '#6EACDA', title: '100% Verified', desc: 'Every vehicle inspected and certified before rental' },
                { icon: Wrench, color: '#2ecc71', title: 'Regular Maintenance', desc: 'Professional servicing every 5,000km or monthly' },
                { icon: Star, color: '#6EACDA', title: '4.8/5 Rating', desc: 'Average customer satisfaction across all vehicles' },
                { icon: Clock, color: '#e74c3c', title: '24/7 Support', desc: 'Round-the-clock assistance for any vehicle issues' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <IconComponent size={24} style={{ color: stat.color }} />
                    </div>
                    <h4 className="font-bold mb-2" style={{ color: '#021526' }}>
                      {stat.title}
                    </h4>
                    <p className="text-sm" style={{ color: 'rgba(2, 21, 38, 0.7)' }}>
                      {stat.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedVehicle && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(2, 21, 38, 0.8)', backdropFilter: 'blur(10px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVehicle(null)}
          >
            <motion.div 
              className="rounded-2xl border-2 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              style={{ backgroundColor: '#E2E2B6', borderColor: '#6EACDA' }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedVehicle(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(226, 226, 182, 0.9)', color: '#021526' }}
                >
                  <X size={16} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#021526' }}>
                  {selectedVehicle.name}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: '#021526' }}>Features</h4>
                    <div className="space-y-2">
                      {selectedVehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check size={14} style={{ color: '#2ecc71' }} />
                          <span className="text-sm" style={{ color: 'rgba(2, 21, 38, 0.7)' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: '#021526' }}>Specifications</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm" style={{ color: 'rgba(2, 21, 38, 0.6)' }}>Seats:</span>
                        <span className="text-sm" style={{ color: '#021526' }}>{selectedVehicle.specs.seats}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm" style={{ color: 'rgba(2, 21, 38, 0.6)' }}>Transmission:</span>
                        <span className="text-sm" style={{ color: '#021526' }}>{selectedVehicle.specs.transmission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm" style={{ color: 'rgba(2, 21, 38, 0.6)' }}>Fuel Type:</span>
                        <span className="text-sm" style={{ color: '#021526' }}>{selectedVehicle.specs.fuel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm" style={{ color: 'rgba(2, 21, 38, 0.6)' }}>Doors:</span>
                        <span className="text-sm" style={{ color: '#021526' }}>{selectedVehicle.specs.doors}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t-2" style={{ borderColor: 'rgba(110, 172, 218, 0.3)' }}>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#6EACDA' }}>
                      €{selectedVehicle.price}/day
                    </div>
                    {selectedVehicle.originalPrice > selectedVehicle.price && (
                      <div className="text-sm line-through" style={{ color: 'rgba(2, 21, 38, 0.5)' }}>
                        €{selectedVehicle.originalPrice}
                      </div>
                    )}
                  </div>
                  <motion.button
                    className="px-6 py-3 rounded-lg font-medium flex items-center space-x-2"
                    style={{ backgroundColor: '#6EACDA', color: '#021526' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedVehicle(null);
                      handleBookVehicle(selectedVehicle);
                    }}
                  >
                    <Calendar size={16} />
                    <span>Book This Vehicle</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}