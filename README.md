#Product Manager Mobile App - Technical Walkthrough 

Overview 

This document provides a comprehensive walkthrough of the React Native(Expo) Product Manager app built with Redux Toolkit for state management. The app allows users to manage up to 5 products with photos, names, and prices, featuring a clean UI and smooth user experience. 

Architecture & Technology Stack 

Core Technologies 

React Native: Mobile app framework 

Redux Toolkit: State management with simplified Redux logic 

React Redux: React bindings for Redux 

Expo Image Picker: Camera/gallery integration 

Key Features 

✅ Add up to 5 products with name, photo, and price 

✅ Edit existing products 

✅ Delete products with confirmation 

✅ Real-time product limit notifications 

✅ Image upload from camera/gallery 

✅ Form validation 

✅ Responsive design with smooth animations 

State Management with Redux Toolkit 

Store Configuration 

const store = configureStore({ 
  reducer: { 
    products: productsSlice.reducer, 
  }, 
}); 
  

Products Slice 

The productsSlice manages all product-related state: 

const productsSlice = createSlice({ 
  name: 'products', 
  initialState: { 
    items: [], 
    maxProducts: 5, 
  }, 
  reducers: { 
    addProduct: (state, action) => { 
      if (state.items.length < state.maxProducts) { 
        state.items.push({ 
          id: Date.now(), 
          ...action.payload, 
          createdAt: new Date().toISOString(), 
        }); 
      } 
    }, 
    removeProduct: (state, action) => { 
      state.items = state.items.filter(item => item.id !== action.payload); 
    }, 
    updateProduct: (state, action) => { 
      const index = state.items.findIndex(item => item.id === action.payload.id); 
      if (index !== -1) { 
        state.items[index] = { ...state.items[index], ...action.payload }; 
      } 
    }, 
  }, 
}); 
  

Key Benefits: 

Type-safe actions with createSlice 

Centralized state management 

Predictable state transitions 

Component Architecture 

1. Main App Component 

Purpose: Root component that provides Redux store to the app 

Features: Wraps the entire app with Redux Provider 

2. ProductManagerSection Component 

Purpose: Main container managing products list and UI state 

Key Features:  

Displays product stats (count, total value) 

Handles product limit notifications 

Manages modal visibility 

Coordinates between child components 

3. ProductForm Component 

Purpose: Modal form for adding/editing products 

Key Features:  

Form validation with error handling 

Image picker integration 

Dual mode (add/edit) with conditional rendering 

Real-time form validation 

4. ProductCard Component 

Purpose: Individual product display with actions 

Key Features:  

Product image, name, price display 

Edit/delete action buttons 

Confirmation dialog for deletion 

Responsive layout 

5. LimitReachedNotification Component 

Purpose: Toast notification for product limit 

Key Features:  

Auto-dismiss after 4 seconds 

Elegant slide-in animation 

Clear messaging about limit 

User Experience Design 

Visual Design Principles 

Clean & Modern: Minimalist design with ample white space 

Intuitive Navigation: Clear visual hierarchy and user flow 

Responsive Layout: Adapts to different screen sizes 

Consistent Styling: Unified color scheme and typography 

Color Scheme 

Primary Blue: #2563eb - Main actions and headers 

Success Green: #059669 - Price display 

Warning Red: #dc2626 - Errors and notifications 

Neutral Grays: Various shades for text and backgrounds 

Typography 

Headers: Bold, large fonts for main titles 

Body Text: Regular weight for readable content 

Actions: Semi-bold for buttons and interactive elements 

Form Validation & Error Handling 

Validation Rules 

const validateForm = () => { 
  const newErrors = {}; 
  if (!formData.name.trim()) newErrors.name = 'Product name is required'; 
  if (!formData.price || isNaN(formData.price) || parseFloat(formData.price) <= 0) { 
    newErrors.price = 'Valid price is required'; 
  } 
  if (!formData.photo) newErrors.photo = 'Product photo is required'; 
   
  setErrors(newErrors); 
  return Object.keys(newErrors).length === 0; 
}; 
  

Error Display 

Visual Feedback: Red borders on invalid fields 

Error Messages: Clear, contextual error text 

Real-time Validation: Immediate feedback on form submission 

Image Management 

Image Picker Integration 

const handleImagePicker = () => { 
  const options = { 
    mediaType: 'photo', 
    quality: 0.7, 
  }; 
 
 await launchImageLibraryAsync(options).then((response) => { 

      if (response.assets && response.assets[0]) { 

        setFormData((prev) => ({ 

          ...prev, 

          photo: response.assets![0].uri!, 

        })); 

      } 

    }); 

 
  

Features: 

Gallery selection with image quality optimization 

Image preview in form 

Fallback placeholder for missing images 

Product Limit Management 

Implementation Strategy 

Proactive Prevention: Disable add button when limit reached 

Visual Feedback: Change button appearance when disabled 

User Notification: Toast message explaining the limit 

Clear Messaging: Header shows current count vs. limit 

Notification System 

const LimitReachedNotification = ({ visible, onClose }) => { 
  useEffect(() => { 
    if (visible) { 
      const timer = setTimeout(() => { 
        onClose(); 
      }, 4000); 
      return () => clearTimeout(timer); 
    } 
  }, [visible, onClose]); 
  // ... component JSX 
}; 
  

Performance Optimizations 

1. Efficient Re-renders 

useSelector: Selective state subscriptions 

Memoization: Prevent unnecessary re-renders 

Local State: UI state kept local where appropriate 

2. Image Optimization 

Quality Settings: Compressed images (0.7 quality) 

Lazy Loading: Images loaded as needed 

Caching: React Native's built-in image caching 

3. Memory Management 

Cleanup: Proper cleanup of timers and listeners 

State Normalization: Efficient state structure 

Setup & Installation 

Dependencies 

{ 
  "dependencies": { 
    "react": "18.2.0", 
    "react-native": "0.72.0", 
    "react-redux": "^8.1.0", 
    "@reduxjs/toolkit": "^1.9.5", 
    "react-native-image-picker": "^5.6.0" 
  } 
} 
  

Installation Commands 

# Install dependencies 
npm install react-redux @reduxjs/toolkit  

npx expo install expo-image-picker 
 
 
  

Configuration 

Add to app.json: 

{ 
  "expo": { 
    "plugins": [ 
      [ 
        "expo-image-picker", 
        { 
          "photosPermission": "The app accesses your photos to let you share them with your friends." 
        } 
      ] 
    ] 
  } 
} 
  

 
