import { Alert, View, Text, Image, TouchableOpacity } from "react-native";
import { Product } from "../../types";
import styles from "../../styles";

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  const handleDelete = (): void => {
    Alert.alert(
      "Delete Product",
      `Are you sure you want to delete "${product.name}"?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => onDelete(product.id),
        },
      ]
    );
  };

  return (
    <View style={styles.productCard}>
      <Image source={{ uri: product.photo }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>
          ${parseFloat(product.price).toFixed(2)}
        </Text>
        <Text style={styles.productDate}>
          Added {new Date(product.createdAt).toLocaleDateString()}
        </Text>
      </View>
      <View style={styles.productActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onEdit(product)}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={handleDelete}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard