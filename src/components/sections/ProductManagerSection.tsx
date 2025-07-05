import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  removeProduct,
} from "../../store/slices/productsSlice";
import { Product, } from "../../types";
import ProductCard from "../../components/cards/ProductCard";
import styles from "../../styles";
import ProductForm from "../../components/forms/ProductForm";
import { SafeAreaView, StatusBar, TouchableOpacity, View, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";


interface LimitReachedNotificationProps {
  visible: boolean;
  onClose: () => void;
}

const LimitReachedNotification: React.FC<LimitReachedNotificationProps> = ({
  visible,
  onClose,
}) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <View style={styles.notification}>
      <Text style={styles.notificationTitle}>Product Limit Reached!</Text>
      <Text style={styles.notificationText}>
        You can only add up to 5 products. Remove some to add more.
      </Text>
      <TouchableOpacity onPress={onClose} style={styles.notificationClose}>
        <Text style={styles.notificationCloseText}>×</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProductManagerSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: products, maxProducts } = useAppSelector(
    (state) => state.products
  );
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showLimitNotification, setShowLimitNotification] =
    useState<boolean>(false);

  const handleAddProduct = (): void => {
    if (products.length >= maxProducts) {
      setShowLimitNotification(true);
    } else {
      setEditingProduct(null);
      setShowForm(true);
    }
  };

  const handleEditProduct = (product: Product): void => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDeleteProduct = (productId: number): void => {
    dispatch(removeProduct(productId));
  };

  const handleCloseForm = (): void => {
    setShowForm(false);
    setEditingProduct(null);
  };

  const totalValue = products.reduce(
    (sum, product) => sum + parseFloat(product.price),
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2563eb" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Product Manager</Text>
          <Text style={styles.headerSubtitle}>
            {products.length}/{maxProducts} products
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.addButton,
            products.length >= maxProducts && styles.addButtonDisabled,
          ]}
          onPress={handleAddProduct}
          disabled={products.length >= maxProducts}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      {products.length > 0 && (
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{products.length}</Text>
            <Text style={styles.statLabel}>Products</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>${totalValue.toFixed(2)}</Text>
            <Text style={styles.statLabel}>Total Value</Text>
          </View>
        </View>
      )}

      {/* Products List */}
      <ScrollView style={styles.productsList}>
        {products.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateIcon}>📦</Text>
            <Text style={styles.emptyStateTitle}>No products yet</Text>
            <Text style={styles.emptyStateText}>
              Start by adding your first product
            </Text>
            <TouchableOpacity
              style={styles.emptyStateButton}
              onPress={handleAddProduct}
            >
              <Text style={styles.emptyStateButtonText}>
                Add Your First Product
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          products?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          ))
        )}
      </ScrollView>

      {/* Modals and Notifications */}
      <ProductForm
        visible={showForm}
        onClose={handleCloseForm}
        editingProduct={editingProduct}
      />

      <LimitReachedNotification
        visible={showLimitNotification}
        onClose={() => setShowLimitNotification(false)}
      />
    </SafeAreaView>
  );
};

export default ProductManagerSection;