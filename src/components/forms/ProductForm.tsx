import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { FormErrors, Product, FormData } from "../../types";
import { addProduct, updateProduct } from "../../store/slices/productsSlice";
import { Modal,Text,Image, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import styles from "../../styles";
import {
  launchImageLibraryAsync,
  MediaType,
} from "expo-image-picker";

interface ProductFormProps {
  visible: boolean;
  onClose: () => void;
  editingProduct?: Product | null;
}

const ProductForm: React.FC<ProductFormProps> = ({
  visible,
  onClose,
  editingProduct = null,
}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormData>({
    name: editingProduct?.name || "",
    price: editingProduct?.price || "",
    photo: editingProduct?.photo || null,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name || "",
        price: editingProduct.price || "",
        photo: editingProduct.photo || null,
      });
    } else {
      setFormData({ name: "", price: "", photo: null });
    }
    setErrors({});
  }, [editingProduct, visible]);

  const handleImagePicker = async () => {
    const options = {
      mediaType: "photo" as MediaType,
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

  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (
      !formData.price ||
      isNaN(Number(formData.price)) ||
      parseFloat(formData.price) <= 0
    ) {
      newErrors.price = "Valid price is required";
    }
    if (!formData.photo) newErrors.photo = "Product photo is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (): void => {
    if (validateForm()) {
      if (editingProduct) {
        dispatch(
          updateProduct({
            ...formData,
            id: editingProduct.id,
            photo: formData.photo!,
            createdAt: editingProduct.createdAt,
          })
        );
      } else {
        dispatch(
          addProduct({
            name: formData.name,
            price: formData.price,
            photo: formData.photo!,
          })
        );
      }
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <SafeAreaView style={styles.modalContainer}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>
            {editingProduct ? "Edit Product" : "Add Product"}
          </Text>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.saveButton}>
              {editingProduct ? "Update" : "Save"}
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Product Name</Text>
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              value={formData.name}
              onChangeText={(text: string) =>
                setFormData((prev) => ({ ...prev, name: text }))
              }
              placeholder="Enter product name"
              placeholderTextColor="#999"
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Price ($)</Text>
            <TextInput
              style={[styles.input, errors.price && styles.inputError]}
              value={formData.price}
              onChangeText={(text: string) =>
                setFormData((prev) => ({ ...prev, price: text }))
              }
              placeholder="0.00"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
            {errors.price && (
              <Text style={styles.errorText}>{errors.price}</Text>
            )}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Product Photo</Text>
            <TouchableOpacity
              style={[
                styles.imagePickerButton,
                errors.photo && styles.inputError,
              ]}
              onPress={handleImagePicker}
            >
              {formData.photo ? (
                <Image
                  source={{ uri: formData.photo }}
                  style={styles.imagePreview}
                />
              ) : (
                <View style={styles.imagePlaceholder}>
                  <Text style={styles.imagePlaceholderText}>📷</Text>
                  <Text style={styles.imagePlaceholderLabel}>
                    Tap to add photo
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            {errors.photo && (
              <Text style={styles.errorText}>{errors.photo}</Text>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};


export default ProductForm;